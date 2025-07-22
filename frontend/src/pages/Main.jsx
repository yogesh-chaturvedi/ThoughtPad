import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Home from './Home'
import { context } from '../contexts/context'
import NotePad from './NotePad'
import Setting from './Setting'

const Main = () => {

    const { activated, setActivated } = useContext(context)
    return (
        <div className='bg-blue-100 px-1'>
            <Navbar />
            <div className='flex'>
                <Sidebar />
                {activated === 'Home' ? <Home /> : ""}
                {activated === 'Notepad' ? <NotePad /> : ""}
                {activated === 'Setting' ? <Setting /> : ""}
            </div>
        </div>
    )
}

export default Main
