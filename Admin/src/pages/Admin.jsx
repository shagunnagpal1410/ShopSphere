import React from 'react'
import './output.css'
import Sidebar from '../components/Sidebar/Sidebar'
import { Routes, Route, Navigate } from "react-router-dom";
import Addproduct from '../components/Addproduct/Addproduct'
import Listproduct from '../components/Listproduct/Listproduct'
const Admin = () => {
  return (
    <div className='flex flex-col sm:flex-row bg-[#4BB8FA] min-h-screen'>
      <Sidebar/>
     

<Routes>
  <Route path="/" element={<Navigate to="/addproduct" />} />
  <Route path="/addproduct" element={<Addproduct />} />
  <Route path="/listproduct" element={<Listproduct />} />
</Routes>
    </div>
  )
}

export default Admin
