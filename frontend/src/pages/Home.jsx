import React, { useContext } from 'react'
import { context } from '../contexts/context'

const Home = () => {

    const { notesData, setNotesData, refetchNotes, NoteState, setNoteState } = useContext(context)
    const currentDate = new Date()

    //  function to toggle notestate with the helop of '_id'
    function toggleNote(itemsId) {
        if (NoteState === itemsId) {
            setNoteState(null)
        }
        else {
            setNoteState(itemsId)
        }
    }


    return (
        <div className='border-l-2 bg-white w-full flex flex-col gap-4 justify-center items-center rounded-tr-2xl'>
            {/* previous */}
            <div className='border-2 border-balck px-1 bg-blue-100 rounded-2xl w-[50vw] flex flex-col gap-1 py-3'>
                <h1 className="heading font-bold ml-2 mb-2">Pevious</h1>

                {/* note */}
                {notesData.filter((items, index) => {
                    const NoteDate = new Date(items.date)
                    return (
                        NoteDate.getDate() !== currentDate.getDate() ||
                        NoteDate.getMonth() !== currentDate.getMonth() ||
                        NoteDate.getFullYear() !== currentDate.getFullYear()
                    )
                }).map((items, index) => {
                    return <div key={index} className='bg-white rounded-2xl flex items-start justify-between gap-2 py-2 px-2'>
                        <div className='flex gap-2 flex-col'>
                            <div className='flex items-center gap-2'>
                                <span className='flex items-center justify-center rounded-lg px-2 h-10 bg-slate-200'><i className="fa-solid fa-book text-xl"></i></span>
                                <span className='flex flex-col'>
                                    <span className='font-semibold'>{items.title}</span>
                                    <span>{new Date(items.date).toLocaleString()}</span>
                                </span>
                            </div>

                            {/* content */}
                            {NoteState === items._id && <div className='content'>
                                <h2 className='font-semibold text-lg'>Note</h2>
                                <p className='break-all'>{items.content}</p>
                            </div>}
                        </div>

                        {/* border-2 border-black */}
                        <span onClick={() => { toggleNote(items._id) }} className='hover:bg-slate-400 px-1 cursor-pointer rounded-full flex items-center justify-center'>{NoteState === null ? <i className="fa-solid fa-angle-down text-xl"></i> : <i className="fa-solid fa-angle-up text-xl"></i>}</span>
                    </div>
                })}
            </div>

            {/* todays task */}
            <div className='border-2 border-balck px-1 bg-blue-100 rounded-2xl w-[50vw] flex flex-col gap-1 py-3'>
                <h1 className="heading font-bold ml-2 mb-2">Today</h1>
                {/* todays note */}
                {notesData.filter((items, index) => {
                    const NoteDate = new Date(items.date)
                    return (
                        NoteDate.getDate() === currentDate.getDate() &&
                        NoteDate.getMonth() === currentDate.getMonth() &&
                        NoteDate.getFullYear() === currentDate.getFullYear()
                    )
                }).map((items, index) => {
                    return <div key={index} className='bg-white rounded-2xl flex items-start justify-between gap-2 py-2 px-2'>
                        <div className='flex gap-2 flex-col'>
                            <div className='flex items-center gap-2'>
                                <span className='flex items-center justify-center rounded-lg px-2 h-10 bg-slate-200'><i className="fa-solid fa-book text-xl"></i></span>
                                <span className='flex flex-col'>
                                    <span className='font-semibold'>{items.title}</span>
                                    <span>{new Date(items.date).toLocaleString()}</span>
                                </span>
                            </div>

                            {/* content */}
                            {NoteState === items._id && <div className='content'>
                                <h2 className='font-semibold text-lg'>Note</h2>
                                <p className='break-all'>{items.content}</p>
                            </div>}
                        </div>

                        {/* border-2 border-black */}
                        <span onClick={() => { toggleNote(items._id) }} className='hover:bg-slate-400 px-1 cursor-pointer rounded-full flex items-center justify-center'>{NoteState === null ? <i className="fa-solid fa-angle-down text-xl"></i> : <i className="fa-solid fa-angle-up text-xl"></i>}</span>
                    </div>
                })}

            </div>
        </div>
    )

}

export default Home
