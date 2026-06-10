import React from 'react'
import './output.css'
import { useState } from 'react'
const Login = () => {
  const [state, setstate] = useState("Login");
  const [formdata, setformdata] = useState({
    username:"",
    password:"",
    email:""
  })
  const login=async ()=> {
    let responsedata;
    await fetch(`${import.meta.env.VITE_API_URL}/login`, {
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formdata)
    }).then((res)=>res.json()).then((data)=>responsedata=data);
    if (responsedata.success) {
      localStorage.setItem('auth-token',responsedata.token);
      window.location.replace("/");
    }
    else {
      alert(responsedata.errors);
    }
  }
  const signup=async ()=> {
     let responsedata;
    await fetch(`${import.meta.env.VITE_API_URL}/signup`, {
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formdata)
    }).then((res)=>res.json()).then((data)=>responsedata=data);
    if (responsedata.success) {
      localStorage.setItem('auth-token',responsedata.token);
      window.location.replace("/");
    }
    else {
      alert(responsedata.errors);
    }
  }
  const changehandler=(e)=> {
    setformdata({...formdata, [e.target.name]:e.target.value})
  }
  return (
    <div className='w-full pt-25 bg-linear-to-t from-[#C4E2F5] to-[#2C5EAD] '>
      <div className="loginsignup-container bg-white w-[90vw] sm:w-[580.1px] m-auto py-[40.1px] px-[60.1px]">
        <h1 className='my-[20.1px] text-4xl font-bold'>{state}</h1>
        <div className="loginsignup-fields flex flex-col gap-[29.1px] mt-[30.1px]">
          {state==="Sign Up"?<input name='username' value={formdata.username} onChange={changehandler} className='sm:h-[72.1px] w-full  pl-[20.1px] border border-[#c9c9c9]  text-[12px] sm:text-[18px] outline-0' type="text" placeholder='Enter Your Name'/>:""}
          <input name="email" value={formdata.email} onChange={changehandler} className='sm:h-[72.1px] w-full  pl-[20.1px] border border-[#c9c9c9]  text-[12px] sm:text-[18px] outline-0'  type="email" placeholder='Enter Your gmail'/>
          <input name="password" value={formdata.password} onChange={changehandler} className='sm:h-[72.1px] w-full  pl-[20.1px] border border-[#c9c9c9]  text-[12px] sm:text-[18px] outline-0'  type="password" placeholder='Enter Your Password' />
        </div>
        <button onClick={()=> {
          state==="Login"?login():signup()
        }} className='w-full sm:h-[72.1px] bg-red-500 mt-[30.1px] text-[15px] sm:text-[24.1px] font-medium font-white cursor-pointer'>Continue</button>
        {state==="Sign Up"?<p className='loginsignup-login font-medium text-[#5c5c5c]  text-[12px] sm:text-[18px] mt-[20.1px] '>Already Have an Account? <span onClick={()=>{setstate("Login")}} className='text-[#ff4141] font-semibold cursor-pointer'>Login Here</span> </p>:""}
        {state==="Login"?<p className='loginsignup-login font-medium text-[#5c5c5c]  text-[12px] sm:text-[18px] mt-[20.1px]'>Create an account? <span onClick={()=>{setstate("Sign Up")}} className='text-[#ff4141] font-semibold cursor-pointer'>Sign Up Here</span> </p>:""}
        <div className="loginsignup-agree flex items-center mt-6.25 gap-5 text-[#5c5c5c]  text-[12px] sm:text-[18px] font-medium">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to terms of use & privacy policy </p>
        </div>
      </div>
    </div>
  )
}

export default Login
