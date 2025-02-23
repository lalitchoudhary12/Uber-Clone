import React, { useState , useRef } from 'react';
import { Link } from 'react-router-dom';
import CaptainDetails from '../components/CaptainDetails';
import RidePopUp from '../components/RidePopUp';
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'


const CaptainHome = () => {
    const [ridePopUpPanel , setRidePopUpPanel] = useState(false)
    const ridePopUpPanelRef = useRef(null)
    const confirmRidePopUpPanelRef = useRef(null)
    const [confirmRidePopUpPanel , setConfirmRidePopUpPanel] = useState(false)


    useGSAP(function(){
        if(ridePopUpPanel ){
            gsap.to(ridePopUpPanelRef.current , {
                transform: 'translateY(0)'
            })
        } else{
            gsap.to(ridePopUpPanelRef.current , {
                transform: 'translateY(100%)'
            })
        }
    },[ridePopUpPanel])

    useGSAP(function(){
        if(confirmRidePopUpPanel ){
            gsap.to(confirmRidePopUpPanelRef.current , {
                transform: 'translateY(0)'
            })
        } else{
            gsap.to(confirmRidePopUpPanelRef.current , {
                transform: 'translateY(100%)'
            })
        }
    },[confirmRidePopUpPanel])

    return (
        <div className='h-screen'>
            <div className='fixed top-0 p-2  flex items-center justify-between w-screen'>
                <img src="https://pngimg.com/d/uber_PNG24.png" alt="logo" className='w-16'/>
                <Link to="/captain-login" className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                    <i className='text-2xl font-medium ri-logout-box-r-line'></i>
                </Link>
            </div>
            <div className='h-3/5'>
                <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>
            <div className='h-2/5 p-4'> 
               <CaptainDetails setRidePopUpPanel={setRidePopUpPanel} />
            </div>
            <div ref={ridePopUpPanelRef} className='fixed w-full z-10 bg-white bottom-0 px-3 py-5 translate-y-full '>
                <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} />
            </div>
            <div ref={confirmRidePopUpPanelRef} className='fixed w-full h-screen z-10 bg-white bottom-0 px-3 py-5 translate-y-full '>
                <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel}/>
            </div>  
        </div>
    );
}

export default CaptainHome;