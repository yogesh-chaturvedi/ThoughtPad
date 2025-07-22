import React from 'react'

const NotePad = () => {
    return (
        <div className='border-l-2 relative bg-white w-full flex flex-col gap-4 justify-center items-center rounded-tr-2xl'>
            {/* top */}
            <div className="bg-gradient-to-r from-blue-200 via-blue-300 to-pink-200 text-blue-900 font-extrabold text-5xl px-6 py-4 rounded-xl shadow-md">
                Start Writing Your Thoughts...
            </div>

            {/* text box */}
            <div className="border border-gray-300 bg-gray-100 absolute bottom-5 rounded-xl w-[60%] h-[70px] shadow-sm">
                <textarea className="bg-gray-100 px-3 py-2 rounded-xl outline-none w-full h-full resize-none text-gray-800 placeholder-gray-500" placeholder="Write your note here..." name="textarea"></textarea>
            </div>

        </div>
    )
}

export default NotePad
