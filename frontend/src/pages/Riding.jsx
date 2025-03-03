import React from 'react'
import { Link , useLocation  , useNavigate} from 'react-router-dom'
import {useEffect , useContext} from 'react'
import { SocketContext } from '../context/SocketContext'
import LiveTracking from '../components/LiveTracking'

const Riding =()=>{
    const location = useLocation()
    const {ride} = location.state || {}
    const {socket} = useContext(SocketContext)
    const navigate = useNavigate()
    socket.on('ride-ended',()=>{
        navigate('/home')
    })
    return(
        <div className='h-screen'>
            <div className='h-[45%]'>
                <LiveTracking />
                <div className='fixed top-0 flex items-center justify-between w-screen'>
                    <img src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png" alt="logo" className='w-16 absolute left-3 top-2' />
                </div>
            </div>
            <div className='h-[55%] p-4'>
                <div className='flex items-center justify-between'>
                    {ride?.captain.vehicle.vehicleType === 'car' && (
                        <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="" />
                    )}
                    {ride?.captain.vehicle.vehicleType === 'auto' && (
                        <img className="h-12 ml-4" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
                    )}
                    {ride?.captain.vehicle.vehicleType === 'moto' && (
                        <img className="h-12 ml-4" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
                    )}
                    <div className='text-right mr-3'>
                        <h2 className='text-lg font-medium -mb-1'>{ride?.captain.fullname.firstname} {ride?.captain.fullname.lastname}</h2>
                        <h4 className='text-lg font-semibold'>{ride?.captain.vehicle.plate}</h4>
                        <p className='text-xs text-gray-600'>Maruti Suzuki Alto</p>
                    </div>
                </div>
                
                <div className='flex gap-3 justify-between flex-col items-center'>
                    <div className='w-full mt-3'>
                        <div className='flex items-center gap-5 p-3 border-b-2'>
                            <i className='text-lg ri-map-pin-2-fill'></i>
                            <div>
                                <h3 className='text-md font-semibold'>{ride?.destination}</h3>
                                <p className='text-sm text-gray-600'>Destination</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 p-3'>
                            <i className='text-lg ri-currency-line'></i>
                            <div>
                                <h3 className='text-lg font-medium'>₹{ride?.fare}</h3>
                                <p className='text-sm text-gray-600'>Payment : Cash</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to="/home" className='w-full flex items-center justify-center font-semibold rounded-lg bg-green-600 text-white h-11 mt-5 text-xl '>Done Payment</Link>
                </div>
            </div>  
        </div>
    )
}

export default Riding