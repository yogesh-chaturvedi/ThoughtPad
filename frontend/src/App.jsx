import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Main from './pages/Main'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  const token = localStorage.getItem('NoteToken')
  const PrivateRoutes = ({ children }) => {
    return token ? children : <Navigate to='/login' />
  }

  return (
    <Routes>
      <Route path='/' element={<PrivateRoutes><Main /></PrivateRoutes>} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  )
}

export default App
