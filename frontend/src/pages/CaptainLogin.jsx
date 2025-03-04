import React, { useState , useContext} from 'react';
import { Link , useNavigate } from 'react-router-dom';
import {CaptainDataContext} from '../context/CaptainContext';
import axios from 'axios';

const CaptainLogin = () => {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
   
    
    const {captain , setCaptain} = useContext(CaptainDataContext)
    const navigate = useNavigate()
    const submithandler = async (event) => {  
        event.preventDefault()
        const captain ={
            email: email,
            password : password
        }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,captain)
        if(response.status === 200){
            const data = response.data
            localStorage.setItem('token', data.token)
            setCaptain(data.captain)
            navigate('/captain-home')
        }
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
                <button className='w-full font-semibold rounded bg-black text-white h-10 mb-3'>Captain Login</button>
                <p className='text-center'>New to Uber? <Link to="/captain-signup" className='text-blue-600'>Register as a Captain</Link></p>
                <p className='text-center mt-1'><Link to="/contact-us" className='text-blue-600'>Contact Us</Link></p>
            </form>
            </div>
            <div>
                <Link to="/login" className='w-full flex items-center justify-center font-semibold rounded bg-[gray] text-white h-10 mt-5 '>Sign in as User</Link>
            </div>
        </div>
    );
};

export default CaptainLogin;