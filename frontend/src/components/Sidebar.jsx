import React, { useContext, useState } from 'react'
import { context } from '../contexts/context';

const Sidebar = () => {

  let sidebarTab = ['Home', 'Notepad', 'My Library', 'Setting'];
  const { activated, setActivated } = useContext(context);
  

  //  to set activated tab 
  function handleTabs(clickedTab) {
    setActivated(clickedTab)
  }

  return (
    <div className="sidebar bg-white relative border-r-2 rounded-tl-2xl w-[210px] h-[90.2vh] px-2 text-lg">
      <div className='flex gap-3 flex-col py-3'>
        {/* tabs */}
        {sidebarTab.map((tab, index) => {
          return <div key={index} onClick={() => handleTabs(tab)} className={`flex py-1 gap-1 items-center hover:bg-blue-200 rounded-md cursor-pointer ${activated === tab ? 'bg-blue-100' : ''}`}>
            <span className='w-7 text-center'><i className="fa-solid fa-house"></i></span>
            <span className='font-bold'>{tab}</span>
          </div>
        })}
      </div>

      {/* line */}
      <div className="line h-0.5 w-[98%] bg-black mx-auto rounded-2xl"></div>

      {/* my notes */}
      <div className='mt-3 flex flex-col gap-2'>
        {/* heading */}
        <div className='title flex justify-between items-center'>
          <span>My Notes</span>
          <span className='text-2xl font-semibold'>+</span>
        </div>

        {/* notes titles  */}
        <div className='flex flex-col gap-2'>
          <div className='title flex gap-2 items-center mr-3'>
            <span><i className="fa-solid fa-folder"></i></span>
            <span className='truncate'>this is my first note</span>
          </div>

          <div className='title flex gap-2 items-center mr-3'>
            <span><i className="fa-solid fa-folder"></i></span>
            <span className='truncate'>this is my first note</span>
          </div>

          <div className='title flex gap-2 items-center mr-3'>
            <span><i className="fa-solid fa-folder"></i></span>
            <span className='truncate'>this is my first note</span>
          </div>

          <div className='title flex gap-2 items-center mr-3'>
            <span><i className="fa-solid fa-folder"></i></span>
            <span className='truncate'>this is my first note</span>
          </div>
        </div>

      </div>

      {/* logout */}
      <div className='text-center absolute bottom-5 left-14'>
        <button className='font-semibold bg-red-600 hover:bg-red-700 rounded-lg px-2'>LogOut</button>
      </div>

    </div>
  )
}

export default Sidebar
