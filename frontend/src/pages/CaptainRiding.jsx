import React, { useState,useRef } from 'react'
import { Link , useLocation} from 'react-router-dom';
import FinishRide from '../components/FinishRide'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import LiveTracking from '../components/LiveTracking';

const CaptainRiding = () =>{
    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)
    const location = useLocation()
    const rideData = location.state?.ride

    useGSAP(function(){
        if(finishRidePanel){
            gsap.to(finishRidePanelRef.current , {
                transform: 'translateY(0)'
            })
        } else{
            gsap.to(finishRidePanelRef.current , {
                transform: 'translateY(100%)'
            })
        }
    },[finishRidePanel])

    return (
        <div className='h-screen'>
            <div className='h-[83%]'>
                <LiveTracking/>
                <div className='fixed top-0 flex items-center justify-between w-screen'>
                    <img src="https://pngimg.com/d/uber_PNG24.png" alt="logo" className='w-16 ml-2'/>
                </div>
            </div>
            <div className='h-[17%] p-6 flex items-center justify-between relative bg-white'> 
                <h5 className="w-[90%] -ml-2 text-center absolute top-0">
                    <i className="text-4xl text-black ri-arrow-up-wide-line"></i>
                </h5>
                <h4 className='text-xl font-semibold mt-3'>10 km left</h4>
                <button onClick={()=>{setFinishRidePanel(true)}} className='mt-5 bg-green-600 text-xl text-white px-8 py-2 rounded-lg font-semibold'>
                    Complete Ride
                </button>
            </div>
            <div ref={finishRidePanelRef} className='fixed w-full z-10 bg-white bottom-0 px-3 py-5 translate-y-full '>
                <FinishRide rideData={rideData} setFinishRidePanel={setFinishRidePanel}/>
            </div> 
        </div>
    )
}

export default CaptainRiding