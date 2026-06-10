import React from 'react'
import './output.css'
import Sidebar from '../components/Sidebar/Sidebar'
import {Routes, Route} from 'react-router-dom'
import Addproduct from '../components/Addproduct/Addproduct'
import Listproduct from '../components/Listproduct/Listproduct'
const Admin = () => {
  return (
    <div className='flex flex-col sm:flex-row bg-[#4BB8FA] min-h-screen'>
      <Sidebar/>
      <Routes>
        <Route path='/addproduct' element={<Addproduct/>}></Route>
        <Route path='/listproduct' element={<Listproduct/>}></Route>
      </Routes>
    </div>
  )
}

export default Admin
