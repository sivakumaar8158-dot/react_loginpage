import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './component/Register'
import Login from './component/Login'
import Dashboard from './component/Dashboard'


const App = () => {
  return (
    <>
    <header className="bg-linear-to-r from-blue-600 to-purple-700 shadow-2xl">
  <div className="container mx-auto px-6 py-6">
    <h1 className="text-4xl font-bold text-white text-center drop-shadow-lg ">
      Register
    </h1>
    <div className="w-24 h-1 bg-linear-to-r from-yellow-400 to-pink-400 mx-auto mt-4 rounded-full"></div>
  </div>
</header>

    <main>
     <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
     </Routes>
    </main>

   <footer className="bg-linear-to-r from-gray-900 to-black py-6 shadow-2xl">
  <div className="container mx-auto px-6">
    <h1 className="text-3xl font-bold text-white text-center drop-shadow-lg">
      &copy;2025 All Rights Reserved 
    </h1>
    <div className="w-50 h-1 bg-linear-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full"></div>
  </div>
</footer>
    
    
    </>
  )
}

export default App