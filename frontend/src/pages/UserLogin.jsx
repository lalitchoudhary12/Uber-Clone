import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserLogin = () => {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [userData , setUserData] = useState({})
    const submithandler = (event) => {  
        event.preventDefault()
        setUserData({
            email: email,
            password : password
        })
        setEmail("")
        setPassword("")
    }
    return (
        <div className='p-7 flex h-screen flex-col justify-between'>
            <div>
            <img src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png" alt="logo" className='w-16 m-auto mb-4'/>
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
                <p className='text-center'>New to Uber? <Link to="/signup" className='text-blue-600'>Create new Account</Link></p>
            </form>
            </div>
            <div>
                <Link to="/captain-login" className='w-full flex items-center justify-center font-semibold rounded bg-[#10b461] text-white h-10 mt-5 '>Sign in as Captain</Link>
            </div>
        </div>
    );
};

export default UserLogin;