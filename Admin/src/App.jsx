import { useState } from 'react'
import reactLogo from './Assets/react.svg'
import viteLogo from './Assets/vite.svg'
import heroImg from './Assets/hero.png'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Admin from './pages/Admin'
function App() {
  return (
    <>
    <Navbar/>
    <Admin/>
    </>
  )
}

export default App
