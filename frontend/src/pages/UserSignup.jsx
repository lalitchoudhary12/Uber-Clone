import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const UserSignup = () => {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [firstName , setFirstName] = useState("")
    const [lastName , setLastName] = useState("")
    const [userData , setUserData] = useState({})
    const submithandler = (event) => {  
        event.preventDefault()
        setUserData({
            fullName: {
                firstName:firstName,
                lastName:lastName,
            },
            email:email,
            password:password,
        })
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        
    }
    return (
        <div className='p-7 flex h-screen flex-col justify-between'>
            <div>
            <img src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png" alt="logo" className='w-16 m-auto mb-4'/>
            <form onSubmit={(e)=>{submithandler(e)}}>
                <h3 className='text-lg mb-3 font-medium'>What's your name</h3>
                <div className='flex gap-4 mb-5'>
                    <input 
                      required
                      type="text" 
                      placeholder='Firstname'
                      value={firstName}
                      onChange={(e)=>{setFirstName(e.target.value)}}
                      className='bg-[#eeeeee] w-1/2 border rounded border-gray-300 px-4 py-2 w-full' 
                    />
                    <input 
                      required
                      type="text" 
                      placeholder='Lastname'
                      value={lastName}
                      onChange={(e)=>{setLastName(e.target.value)}}
                      className='bg-[#eeeeee] w-1/2 border rounded border-gray-300 px-4 py-2 w-full' 
                    />
                </div>
                <h3 className='text-lg mb-3 font-medium'>Enter email</h3>
                <input 
                  required
                  type="email" 
                  placeholder='email@example.com'
                  value= {email}
                  onChange={(e)=>{
                    setEmail(e.target.value)
                  }}
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
                <button className='w-full font-semibold rounded bg-black text-white h-10 mb-3'>Signup</button>
                <p className='text-center'>Already have a account? <Link to="/login" className='text-blue-600'>Login here</Link></p>
            </form>
            </div>
            <div>
                <p className='text-xs'>This site is protected by reCAPTCHA and the&nbsp;
                    <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service Apply</span>
                </p>
            </div>
        </div>
    );
};

export default UserSignup;