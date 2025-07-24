import React, { useContext, useState } from 'react'
import axios from 'axios'
import { context } from '../contexts/context'

const NotePad = () => {

    const { refetchNotes } = useContext(context)

    const [title, setTitle] = useState({
        title: '',
        content: ''
    })

    function handleChange(e) {
        setTitle((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const token = localStorage.getItem('NoteToken')
            const response = await axios({
                method: "post",
                url: 'http://localhost:3000/notes/add',
                headers: {
                    Authorization: token
                },
                data: title
            })
            const { message, success, error } = response.data
            if (success) {
                refetchNotes()
            }
            console.log(message);
        }
        catch (error) {
            console.log("there is an error", error)
        }
    }



    return (
        <div className='border-l-2 relative bg-white w-full flex flex-col gap-4 justify-center items-center rounded-tr-2xl'>

            {/* top */}
            <div className="bg-gradient-to-r from-blue-200 via-blue-300 to-pink-200 text-blue-900 font-extrabold text-5xl px-6 py-4 rounded-xl shadow-md">
                Start Writing Your Thoughts...
            </div>

            <form className='flex flex-col gap-1 absolute bottom-14 w-[60%] h-[120px]' onSubmit={handleSubmit}>
                {/* title */}
                <div className='flex gap-2'>
                    <input value={title.title} onChange={handleChange} className='bg-gray-300 px-3 py-2 rounded-xl outline-none w-[30%]' placeholder='enter title' name='title' type="text" />
                    <button type='submit' className='px-2 py-1 bg-blue-500 rounded-xl '>Add</button>
                </div>

                {/* text box */}
                <div className="bg-gray-200 rounded-xl w-full h-full">
                    <textarea value={title.content} onChange={handleChange} className="bg-gray-300 px-3 py-2 rounded-xl outline-none w-full h-full resize-none text-gray-800 placeholder-gray-500" placeholder="Write your note here..." name="content"></textarea>
                </div>
            </form>

        </div>
    )
}

export default NotePad
