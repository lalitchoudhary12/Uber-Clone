import React, { useState , useRef , useEffect , useContext } from 'react';
import { Link} from 'react-router-dom';
import CaptainDetails from '../components/CaptainDetails';
import RidePopUp from '../components/RidePopUp';
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'
import { SocketContext } from '../context/SocketContext';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';
import LiveTracking from '../components/LiveTracking';

const CaptainHome = () => {
    const [ridePopUpPanel , setRidePopUpPanel] = useState(false)
    const ridePopUpPanelRef = useRef(null)
    const confirmRidePopUpPanelRef = useRef(null)
    const [confirmRidePopUpPanel , setConfirmRidePopUpPanel] = useState(false)
    const [ride, setRide] = useState(null)

    const { socket} = useContext(SocketContext)
    const {captain} = useContext(CaptainDataContext)
    useEffect(()=>{
        socket.emit("join",{
            userId : captain._id,
            userType:'captain'
        })
        const updateLocation = () =>{
            if(navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    socket.emit('update-location-captain',{
                        userId : captain._id,
                        location : {
                            ltd: position.coords.latitude,
                            lng : position.coords.longitude
                        }
                    })
                })
            }
        }
        const locationInterval = setInterval(updateLocation,10000)
        updateLocation()
    })

    socket.on('new-ride',(data)=>{
        setRide(data)
        setRidePopUpPanel(true)
    })

    async function confirmRide(){
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/confirm`,{
            rideId : ride._id,
            captain: captain._id,
        },{
            headers : {
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
        setRidePopUpPanel(false)
        setConfirmRidePopUpPanel(true)
    }

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
            <div className='h-[70%]'>
                <LiveTracking/>
                <div className='fixed top-0 flex items-center justify-between w-screen'>
                    <img src="https://pngimg.com/d/uber_PNG24.png" alt="logo" className='w-16 ml-2'/>
                    <Link to="/captain/logout" className='h-10 w-10 mr-2 bg-white flex items-center justify-center rounded-full'>
                        <i className='text-2xl font-medium ri-logout-box-r-line'></i>
                    </Link>
                </div>
            </div>
            <div className='h-[30%] p-4'> 
               <CaptainDetails setRidePopUpPanel={setRidePopUpPanel} />
            </div>
            <div ref={ridePopUpPanelRef} className='fixed w-full z-10 bg-white bottom-0 px-3 py-5 translate-y-full '>
                <RidePopUp confirmRide={confirmRide} ride={ride}  setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} />
            </div>
            <div ref={confirmRidePopUpPanelRef} className='fixed w-full h-screen z-10 bg-white bottom-0 px-3 py-5 translate-y-full '>
                <ConfirmRidePopUp ride={ride} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel}/>
            </div>  
        </div>
    );
}

export default CaptainHome;