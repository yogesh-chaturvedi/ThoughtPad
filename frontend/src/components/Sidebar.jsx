import React, { useContext, useEffect, useState } from 'react'
import { context } from '../contexts/context';
import { Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const Sidebar = () => {
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(null)
  let sidebarTab = [
    { tab: 'Home', icon: <i className="fa-solid fa-house"></i> },
    { tab: 'Notepad', icon: <i className="fa-solid fa-book"></i> },
    { tab: 'Setting', icon: <i className="fa-solid fa-gear"></i> }
  ]

  const { activated, setActivated, notesData, setNotesData, refetchNotes, titleToEdit, setTitleToEdit, idToEdit, setIdToEdit, NoteState, setNoteState } = useContext(context);

  useEffect(() => {
    console.log('data')
  }, [notesData])

  //  to set activated tab 
  function handleTabs(clickedTab) {
    setActivated(clickedTab)
  }
  // logout
  function handleLogout() {

    localStorage.removeItem("userName")
    localStorage.removeItem("userEmail")
    localStorage.removeItem("userId")
    localStorage.removeItem("NoteToken")

    toast("logout successfully", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setTimeout(() => {
      navigate('/login')
    }, 2000);

  }

  // to toggle options index
  function openOption(indexToOpen) {
    if (activeIndex !== indexToOpen) {
      setActiveIndex(indexToOpen)
    }
    else {
      setActiveIndex(null)
    }
  }

  // to delete note
  async function handleDelete(titleToDelete) {
    try {
      const token = localStorage.getItem('NoteToken')
      const response = await axios({
        method: 'delete',
        url: 'http://localhost:3000/notes/remove',
        headers: {
          Authorization: token
        },
        data: { titleToDelete }
      })
      const { message, error, success, Notes } = response.data;
      if (success) {
        console.log(message)
        refetchNotes()
      }
    }
    catch (error) {
      console.log("there is an error", error)
    }
  }


  function handleEdit(indexToEdit, titleId) {
    // to open notepad
    if (activated !== 'Notepad') {
      setActivated('Notepad')
    }
    setTitleToEdit(indexToEdit)
    setIdToEdit(titleId)

  }
  // console.log('titleToEdit', titleToEdit)


  function handleClick(NotesId) {
    if (activated !== 'Home') {
      setActivated('Home')
    }
    setNoteState(NotesId)
  }

  return (
    <div className="sidebar bg-white relative border-r-2 rounded-tl-2xl w-[210px] h-[90.2vh] px-2 text-lg">
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
      <div className='flex gap-3 flex-col py-3'>

        {/* tabs */}
        {sidebarTab.map((tabs, index) => {
          return <div key={index} onClick={() => handleTabs(tabs.tab)} className={`flex py-1 gap-1 items-center hover:bg-blue-200 rounded-md cursor-pointer ${activated === tabs.tab ? 'bg-blue-100' : ''}`}>
            <span className='w-7 text-center'>{tabs.icon}</span>
            <span className='font-bold'>{tabs.tab}</span>
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
          {notesData.map((items, index) => {
            return (
              <div key={index} className='relative flex items-center gap-2 mr-3 px-2 py-1 hover:bg-gray-100 rounded-md'>
                <span><i className="fa-solid fa-folder"></i></span>
                <span onClick={() => { handleClick(items._id) }} className='w-[80%] truncate cursor-pointer'>{items.title}</span>

                {/* Three dots */}
                <span onClick={() => { openOption(index) }} className='relative z-10 hover:bg-slate-300 px-1 rounded-md cursor-pointer'>
                  <i className="fa-solid fa-ellipsis-vertical"></i>

                  {/* Options menu */}
                  {activeIndex === index && (
                    <div className='absolute bottom-full right-0 mb-1 bg-blue-300  rounded-lg flex flex-col gap-1 w-[70px] text-sm z-50'>
                      <button onClick={() => handleDelete(items._id)} className='hover:bg-blue-400 px-2 py-1 text-left'>Delete</button>
                      <div className="bg-black w-full h-0.5"></div>
                      <button onClick={() => { handleEdit(index, items._id) }} className='hover:bg-blue-400 px-2 py-1 text-left'>Edit</button>
                    </div>
                  )}
                </span>
              </div>
            );
          })}
        </div>


        {/* logout */}
        <div className='text-center absolute bottom-5 left-14'>
          <button onClick={handleLogout} className='font-semibold bg-red-600 hover:bg-red-700 rounded-lg px-2'>LogOut</button>
        </div>

      </div>
    </div>
  )
}

export default Sidebar
