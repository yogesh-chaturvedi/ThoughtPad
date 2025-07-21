import { useContext, useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import { context } from './contexts/context'
import NotePad from './pages/NotePad'
import Setting from './pages/Setting'
import Library from './pages/Library'

function App() {
  const { activated, setActivated } = useContext(context)
  return (
    <div className='bg-blue-100 px-1'>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        {activated === 'Home' ? <Home /> : ""}
        {activated === 'Notepad' ? <NotePad /> : ""}
        {activated === 'Setting' ? <Setting /> : ""}
        {activated === 'My Library' ? <Library /> : ""}
      </div>
    </div>
  )
}

export default App
