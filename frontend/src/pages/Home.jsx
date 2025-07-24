import React, { useContext } from 'react'
import { context } from '../contexts/context'

const Home = () => {

    const { notesData, setNotesData, refetchNotes } = useContext(context)
    const currentDate = new Date()

    return (
        <div className='border-l-2 bg-white w-full flex flex-col gap-4 justify-center items-center rounded-tr-2xl'>
            {/* comming up */}
            <div className='border-2 border-balck px-1 bg-blue-100 rounded-2xl w-[50vw] flex flex-col gap-1 py-3'>
                <h1 className="heading font-bold ml-2 mb-2">Pevious</h1>

                {/* note */}
                {notesData.map((items, index) => {
                    return <div key={index} className='bg-white rounded-2xl flex items-center gap-2 py-2 px-2'>
                        <span className='flex items-center justify-center rounded-lg px-2 h-10 bg-slate-200'><i className="fa-solid fa-book text-xl"></i></span>
                        <span className='flex flex-col'>
                            <span className='font-semibold'>{items.title}</span>
                            <span>{new Date(items.date).toLocaleString()}</span>
                        </span>
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
                    return <div key={index} className='bg-white rounded-2xl flex items-center gap-2 py-2 px-2'>
                        <span className='flex items-center justify-center rounded-lg px-2 h-10 bg-slate-200'><i className="fa-solid fa-book text-xl"></i></span>
                        <span className='flex flex-col'>
                            <span className='font-semibold'>{items.title}</span>
                            <span>{new Date(items.date).toLocaleString()}</span>
                        </span>
                    </div>
                })}

            </div>
        </div>
    )

}

export default Home
