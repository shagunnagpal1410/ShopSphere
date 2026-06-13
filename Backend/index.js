require('dotenv').config();
const port=process.env.PORT;
const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const multer=require('multer');
const path=require('path');
const app=express();
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
app.use(cors());
app.use(express.json());
const dns = require("node:dns");
dns.setServers(["1.1.1.1"]);
//Database connection with MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log("MongoDB Error:", err);
});
//API Creation
app.get("/", (req,res)=> {
    res.send("Express app is running successfully");
})

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "shopsphere",
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
  },
});

const upload = multer({ storage });

//creating upload endpoint for images
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: req.file.path, // Cloudinary URL
  });
});
//schema for products
const Product=mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    }
})
app.post('/addproduct', async (req,res)=> {
    let products=await Product.find({});
    let id;
    if (products.length>0) {
        let last_product_array=products.slice(-1);
        let last_product=last_product_array[0];
        id=last_product.id+1;
    }
    else {
        id=1;
    }
    const product=new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,   
    })
    await product.save();
    res.json({
        success:true,
        name:req.body.name,
    })
})
//creating api for deleting product
app.post('/removeproduct', async (req,res)=> {
    await Product.findOneAndDelete({id:req.body.id});
    res.json({success:1,
        name:req.body.name,
    })
})
//creating api for getting all product
app.get('/allproducts', async (req,res)=> {
    let products=await Product.find({});
    res.send(products);
})
//schema for user model
const Users = mongoose.model("Users_copy", {
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid Email']
    },
    password: {
        type: String,
        required: true,
    },
    cartdata: {
        type: Array,
        default: [],
    },
    purchaseddata: {
        type: Array,
        default: [],
    },
    date: {
        type: Date,
        default: Date.now,
    }
})
//creating endpoint for registering user
app.post('/signup', async (req, res) => {
    let check = await Users.findOne({ email: req.body.email });
    if (check) {
        return res.status(400).json({ success: false, errors: "User already exists" });
    }
    let cart = [];
    let purchased = [];
    try {
        const user = new Users({
            name: req.body.username,
            email: req.body.email,
            password: req.body.password,
            cartdata: cart,
            purchaseddata: purchased,
        })
        await user.save();
        const data = {
            user: {
                id: user.id,
            }
        }
        const token = jwt.sign(data, process.env.JWT_SECRET)
        res.json({ success: true, token: token })
    }
    catch {
        res.status(400).json({success:false, errors: "Invalid Email"});
    }
   
})
//creating endpoint for login user
app.post('/login', async (req, res) => {
    let user = await Users.findOne({ email: req.body.email });
    if (user) {
        const passcompare = req.body.password === user.password;
        if (passcompare) {
            const data = {
                user: {
                    id: user.id
                }
            }
            const token = jwt.sign(data, process.env.JWT_SECRET);
            res.json({ success: true, token });
        }
        else {
            res.json({ success: false, errors: "Wrong Password" });
        }
    }
    else {
        res.json({ success: false, errors: "This User Exists" });
    }
})
//creating endpoint for newcollection
app.get('/newcollection',async (req,res)=> {
    let products=await Product.find({});
    let newcollection=products.slice(1).slice(-8);
    res.send(newcollection);
})
//creating endpoint for related products
app.get('/relatedproducts',async (req,res)=> {
    let products=await Product.find({});
    let relatedproducts=products.slice(1).slice(-4);
    res.send(relatedproducts);
})
//creating endpoint for popular
app.get('/popular', async (req,res)=> {
    let products=await Product.find({});
    let popular=products.slice(0,4);
    res.send(popular);
})
//creating middleware to fetch user
const fetchuser=async(req,res,next)=>{
    const token=req.header('auth-token');
    if (!token) {
        res.status(401).send({errors:"Please authenticate using valid token"});
    }
    else {
        try{
            const data=jwt.verify(token, process.env.JWT_SECRET);
            req.user=data.user;
            next();
        } catch(error) {
            res.status(401).send({errors:"Please authenticate using a valid token"});
        }
    }
}
//creating endpoint for adding products in cartdata
app.post('/addtocart', fetchuser, async (req, res) => {
    let userdata = await Users.findOne({ _id: req.user.id });
    let currcart = userdata.cartdata;
    let check = currcart.find(item => item.itemid === req.body.itemId && item.size === req.body.size)
    if (check) {
        check.quantity += 1;
    }
    else {
        currcart.push({
            itemid: req.body.itemId,
            quantity: 1,
            size: req.body.size
        });
    }
    userdata.cartdata = currcart;
    userdata.markModified('cartdata');
    await userdata.save();
    res.send("Added");
})
//creating endpoint to remove product from cart
app.post('/removefromcart', fetchuser, async (req, res) => {
    let userdata = await Users.findOne({ _id: req.user.id });
    let currcart = userdata.cartdata;
    let check = currcart.find(item => item.itemid === req.body.itemId && item.size === req.body.size)
    if (check) {
        check.quantity -= 1;
    }
    if (check && check.quantity === 0) {
        currcart = currcart.filter(item => item.itemid !== req.body.itemId || item.size !== req.body.size)
    }
    userdata.cartdata = currcart;
    userdata.markModified('cartdata');
    await userdata.save();
    res.send("Removed");
})
//creating endpoint to get cartdata
app.post('/getcart',fetchuser, async (req,res)=> {
    let userdata=await Users.findOne({_id:req.user.id});
    res.json(userdata.cartdata);
})
app.listen(port, (error)=> {
    if (!error) {
        console.log("Server Running Successfully on port "+port);
    }
    else {
        console.log("error: "+error);
    }
})
