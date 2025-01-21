import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home'
function App() {

  return (
    <div className='bg-primary'>
     <BrowserRouter>
      <Routes path="/*">          
        <Route path="/*" element={<HomePage/>}/>      
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App

