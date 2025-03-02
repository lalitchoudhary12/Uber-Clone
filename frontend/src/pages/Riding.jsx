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
            <div className='flex justify-end'>
                <Link to="/home" className='fixed h-10 w-10 bg-white flex items-center justify-center rounded-full m-2'>
                     <i className='text-2xl font-medium ri-home-5-line'></i>
                </Link>
            </div>
            <img src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png" alt="logo" className='w-16 absolute left-3 top-2'/>
            <div className='h-1/2'>
                <LiveTracking/>
            </div>
            <div className='h-1/2 p-4'>
                <div className='flex items-center justify-between'>
                    <img className="h-12 ml-2" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="" />
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
                                <h3 className='text-lg font-medium'>pickup</h3>
                                <p className='text-sm text-gray-600'>{ride?.destination}</p>
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
                <button  
                    className='w-full mt-5  bg-green-600 text-xl text-white p-2 rounded-lg font-semibold'>
                        Done Payment
                </button>
            </div>  
        </div>
    )
}

export default Riding