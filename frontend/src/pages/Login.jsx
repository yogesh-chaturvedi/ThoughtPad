import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

    const [loginData, setloginData] = useState({
        email: '',
        password: ''
    })

    function handleChange(e) {
        setloginData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    console.log(loginData)

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            let response = await axios({
                method: "post",
                url: 'http://localhost:3000/auth/login',
                data: loginData
            })
            const { userName, userEmail, userId, message, success ,key} = response.data
            console.log(userName, userEmail, userId, message, success, key)
        }
        catch (error) {
            console.log("there is an error", error)
        }
    }

    return (

        <div className="min-h-screen flex justify-center bg-slate-200  items-center ">

            <div className="login border-2 border-slate-300 shadow-xl bg-slate-100  rounded-xl w-[90vw] sm:w-[65vw] md:w-[55vw] lg:w-[45vw] flex flex-col gap-5 py-5 justify-center items-center">
                <h1 className='font-bold text-2xl underline'>LogIn</h1>
                {/* onSubmit={handleSubmit} */}
                <form className='flex gap-3 flex-col w-[80%]' onSubmit={handleSubmit} >

                    <div className='w-full '>
                        <label className='font-bold text-2xl' htmlFor="email">Email</label>
                        <input value={loginData.email} onChange={handleChange} className='border-2 border-black w-full rounded-3xl pl-2' name='email' type="text" placeholder='Enter your email' />
                    </div>

                    <div className='w-full'>
                        <label className='font-bold text-2xl' htmlFor="password">Password</label>
                        <input value={loginData.password} onChange={handleChange} className='border-2 border-black w-full rounded-3xl pl-2' name='password' type="password" placeholder='Enter your password' />

                        <p className='text-blue-800 text-sm cursor-pointer' >
                            <Link to='/passwordReset'>Foget Password?</Link>
                        </p>
                    </div>

                    <div className='text-center '>
                        <button type='submit' className='px-4 text-lg  font-bold bg-blue-600 text-white rounded-2xl cursor-pointer'>LogIn</button>
                        <div className='mt-2'>If You are new, Then you can
                            <Link to='/signup' className='text-blue-800'> SignUp</Link>
                        </div>
                    </div>

                </form>
            </div>
        </div>

    )
}

export default Login
