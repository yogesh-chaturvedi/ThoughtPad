import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className='flex justify-between px-4 py-5 bg-blue-100'>
                {/* logo */}
                <div className="logo font-bold text-2xl">ThoughtPad</div>
                {/* search */}
                <div className='w-[40vw] bg-white text-center rounded-md px-1 border-2 border-black items-center justify-center flex'>
                    <span><i className="fa-solid fa-magnifying-glass"></i></span>
                    <input className='rounded-xl px-1 w-full outline-none' type="text" placeholder='Search' />
                </div>
                {/* buttons */}
                <div className='buttons flex gap-5 items-center mr-2'>
                    <button className='font-semibold bg-blue-500 rounded-lg px-2'><i className="fa-solid fa-pencil"></i> New Note</button>
                    <span><i className="fa-solid fa-user text-xl"></i></span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
