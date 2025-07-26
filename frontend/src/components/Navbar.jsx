import React, { useContext, useEffect, useState } from 'react'
import { context } from '../contexts/context'
import axios from 'axios'


const Navbar = () => {

    const { activated, setActivated, notesData, setNotesData, refetchNotes } = useContext(context)
    const [searchedText, setSearchedText] = useState("")

    function handleNewNote() {
        setActivated('Notepad')
    }

    function handleChange(e) {
        setSearchedText(e.target.value)
    }
    console.log(searchedText)

    useEffect(() => {
        async function searchNote() {
            const token = localStorage.getItem('NoteToken')
            try {

                if (searchedText.trim() === '') {
                    await refetchNotes();
                    return;
                }


                const response = await axios({
                    method: 'get',
                    url: `http://localhost:3000/search/searching?query=${searchedText}`,
                    headers: {
                        Authorization: token
                    }
                })
                const { message, success, error, searchedTitle } = response.data;
                if (success) {
                    console.log(message);
                    setNotesData(searchedTitle)

                }
            }
            catch (error) {
                console.log("there is an error", error)
            }
        }
        searchNote()
    }, [searchedText])

    return (
        <div>
            <div className='flex justify-between px-4 py-5 bg-blue-100'>
                {/* logo */}
                <div className="logo font-bold text-2xl">ThoughtPad</div>
                {/* search */}
                <div className='w-[40vw] bg-white text-center rounded-md px-1 border-2 border-black items-center justify-center flex'>
                    <span><i className="fa-solid fa-magnifying-glass"></i></span>
                    <input value={searchedText} onChange={handleChange} className='rounded-xl px-1 w-full outline-none' type="text" placeholder='Search' />
                </div>
                {/* buttons */}
                <div className='buttons flex gap-5 items-center mr-2'>
                    <button onClick={handleNewNote} className='font-semibold bg-blue-500 rounded-lg px-2'><i className="fa-solid fa-pencil"></i> New Note</button>
                    <span><i className="fa-solid fa-user text-xl"></i></span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
