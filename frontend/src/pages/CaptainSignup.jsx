import React, { useState, useContext} from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainSignup = () => {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [firstName , setFirstName] = useState("")
    const [lastName , setLastName] = useState("")
    const [vehicleType , setVehicleType] = useState("")
    const [vehiclePlate , setVehiclePlate] = useState("")
    const [vehicleColor , setVehicleColor] = useState("")
    const [vehicleCapacity , setVehicleCapacity] = useState("")
    const navigate = useNavigate()
    const {captain , setCaptain} = useContext(CaptainDataContext)
    
    const submithandler = async (event) => {  
        event.preventDefault()
        const newCaptain = {
            fullname: {
              firstname:firstName,
              lastname:lastName,
            },
            email:email,
            password:password,
            vehicle : {
              color:vehicleColor,
              vehicleType:vehicleType,
              plate:vehiclePlate,
              capacity:vehicleCapacity  
            }
        }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,newCaptain)
        if(response.status === 201){
            const data = response.data
            setCaptain(data.captain)
            localStorage.setItem('token',data.token)
            navigate('/captain-home')
        }
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setVehicleType("")
        setVehiclePlate("")
        setVehicleColor("")
        setVehicleCapacity("")
    }
    return (
        <div className='pl-7 pr-7 pt-4 pb-4 flex h-screen flex-col justify-between'>
            <div>
            <img src="https://pngimg.com/d/uber_PNG24.png" alt="logo" className='w-16 m-auto mb-2'/>
            <form onSubmit={(e)=>{submithandler(e)}}>
                <h3 className='text-lg mb-2 font-medium'>What's your name</h3>
                <div className='flex gap-4 mb-3'>
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
                <h3 className='text-lg mb-2 font-medium'>Enter email</h3>
                <input 
                  required
                  type="email" 
                  placeholder='email@example.com'
                  value= {email}
                  onChange={(e)=>{
                    setEmail(e.target.value)
                  }}
                  className='bg-[#eeeeee] mb-3 border rounded border-gray-300 px-4 py-2 w-full' 
                />
                <h3 className='text-lg mb-2 font-medium'>Enter password</h3>
                <input 
                  required 
                  type="password" 
                  placeholder='password'
                  value= {password}
                  onChange={(e)=>{
                    setPassword(e.target.value)
                  }} 
                  className='bg-[#eeeeee] mb-3 border rounded border-gray-300 px-4 py-2 w-full'
                />
                <div>
                  <h3 className='text-lg mb-2 font-medium'>Vehicle Details</h3>
                  <div className='flex gap-4 mb-4'>
                  <select 
                        required 
                        className='bg-[#eeeeee] w-1/2 border rounded border-gray-300 px-4 py-2 w-full' 
                        value={vehicleType}
                        onChange={(e)=>{
                          setVehicleType(e.target.value)
                        }}
                      >
                        <option value="" disabled>select vehicle type</option>
                        <option value="Moto">Moto</option>
                        <option value="auto">Auto</option>
                        <option value="car">Car</option>  
                      </select>
                      <input 
                        required
                        type="text" 
                        placeholder='vehicle plate'
                        value={vehiclePlate}
                        onChange={(e)=>{setVehiclePlate(e.target.value)}}
                        className='bg-[#eeeeee] w-1/2 border rounded border-gray-300 px-4 py-2 w-full' 
                      />
                  </div>
                  <div className='flex gap-4 mb-4'>
                      <input 
                        required
                        type="text" 
                        placeholder='vehicle color'
                        value={vehicleColor}
                        onChange={(e)=>{setVehicleColor(e.target.value)}}
                        className='bg-[#eeeeee] w-1/2 border rounded border-gray-300 px-4 py-2 w-full' 
                      />
                      <input 
                        required
                        type="number" 
                        placeholder='vehicle capacity'
                        value={vehicleCapacity}
                        onChange={(e)=>{setVehicleCapacity(e.target.value)}}
                        className='bg-[#eeeeee] w-1/2 border rounded border-gray-300 px-4 py-2 w-full' 
                      />
                  </div>
                </div>
                <button className='w-full font-semibold rounded bg-black text-white h-10 mb-2'>Create Captain Account</button>
                <p className='text-center'>Already have a account? <Link to="/captain-login" className='text-blue-600'>Login here</Link></p>
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

export default CaptainSignup;