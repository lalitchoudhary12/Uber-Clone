import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CaptainLogin = () => {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [captainData , setCaptainData] = useState({})
    const submithandler = (event) => {  
        event.preventDefault()
        setCaptainData({
            email: email,
            password : password
        })
        setEmail("")
        setPassword("")
    }
    return (
        <div className='p-7 flex h-screen flex-col justify-between'>
            <div>
            <img src="https://pngimg.com/d/uber_PNG24.png" alt="logo" className='w-16 m-auto mb-4'/>
            <form onSubmit={(e)=>{submithandler(e)}}>
                <h3 className='text-lg mb-3 font-medium'>What's your email</h3>
                <input 
                  required
                  type="email" 
                  value= {email}
                  onChange={(e)=>{
                    setEmail(e.target.value)
                  }}
                  placeholder='email@example.com'
                  className='bg-[#eeeeee] mb-5 border rounded border-gray-300 px-4 py-2 w-full' 
                />
                <h3 className='text-lg mb-3 font-medium'>Enter password</h3>
                <input 
                  required 
                  type="password" 
                  placeholder='password'
                  value= {password}
                  onChange={(e)=>{
                    setPassword(e.target.value)
                  }} 
                  className='bg-[#eeeeee] mb-5 border rounded border-gray-300 px-4 py-2 w-full'
                />
                <button className='w-full font-semibold rounded bg-black text-white h-10 mb-3'>Login</button>
                <p className='text-center'>New to Uber? <Link to="/captain-signup" className='text-blue-600'>Register as a Captain</Link></p>
            </form>
            </div>
            <div>
                <Link to="/login" className='w-full flex items-center justify-center font-semibold rounded bg-[gray] text-white h-10 mt-5 '>Sign in as User</Link>
            </div>
        </div>
    );
};

export default CaptainLogin;