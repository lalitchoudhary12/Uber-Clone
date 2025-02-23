import React, { useState , useRef } from 'react';
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide'
import WaitingForDriver from '../components/WaitingForDriver';
import LookingForDriver from '../components/LookingForDriver';

const Home = () => {
    const [pickup , setPickup] = useState('')
    const [destination , setDestination] = useState('')
    const [panelOpen , setPanelOpen] = useState(false)
    const panelRef = useRef(null)
    const panelCloseRef = useRef(null)
    const vehiclePanelRef = useRef(null)
    const [vehiclePanel, setVehiclePanel] = useState(false)
    const [confirmRidePanel , setConfirmRidePanel] = useState(false)
    const confirmRidePanelRef = useRef(null)
    const [vehicleFound , setVehicleFound] = useState(false)
    const vehicleFoundRef = useRef(null)
    const waitingForDriverRef = useRef(null)
    const [waitingForDriver , setWaitingForDriver] = useState(false)


    const submithandler = (e) => {
        e.preventDefault()
    }
    useGSAP(function(){
        if(panelOpen){
            gsap.to(panelRef.current , {
                height: '71%',
                duration: 0.5,
                padding: '1rem'
            })
            gsap.to(panelCloseRef.current , {
                opacity: 1
            })
        }else {
            gsap.to(panelRef.current , {
                height: '0%',
                duration: 0.5,
                padding: '0rem'
            })
            gsap.to(panelCloseRef.current , {
                opacity: 0
            })
        }
    },[panelOpen])

    useGSAP(function(){
        if(vehiclePanel){
            gsap.to(vehiclePanelRef.current , {
                transform: 'translateY(0)'
            })
        } else{
            gsap.to(vehiclePanelRef.current , {
                transform: 'translateY(100%)'
            })
        }
    },[vehiclePanel])
    
    useGSAP(function(){
        if(confirmRidePanel){
            gsap.to(confirmRidePanelRef.current , {
                transform: 'translateY(0)'
            })
        } else{
            gsap.to(confirmRidePanelRef.current , {
                transform: 'translateY(100%)'
            })
        }
    },[confirmRidePanel])

    useGSAP(function(){
        if(vehicleFound){
            gsap.to(vehicleFoundRef.current , {
                transform: 'translateY(0)'
            })
        } else{
            gsap.to(vehicleFoundRef.current , {
                transform: 'translateY(100%)'
            })
        }
    },[vehicleFound])
    
    useGSAP(function(){
        if(waitingForDriver ){
            gsap.to(waitingForDriverRef.current , {
                transform: 'translateY(0)'
            })
        } else{
            gsap.to(waitingForDriverRef.current , {
                transform: 'translateY(100%)'
            })
        }
    },[waitingForDriver])

    return (
        <div className='h-screen relative overflow-hidden' >
            <img src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png" alt="logo" className='w-16 absolute left-3 top-2'/>
            <div className='bg-cover bg-center h-screen'>
                <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>
            <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
                <div className='bg-white h-[29%] p-4 relative'> 
                    <h5 
                      ref={panelCloseRef}
                      className="absolute opacity-0 right-5 top-3 text-3xl"
                      onClick={()=> {
                        setPanelOpen(false)
                      }}
                    >
                        <i className="ri-arrow-down-wide-line"></i>
                    </h5>
                    <h4 className='text-2xl font-semibold'>Find a trip</h4>
                    <form onSubmit={(e)=>{
                        submithandler(e)
                    }}>
                        <div className='line absolute h-16 w-0.5 top-[43%] left-10 bg-black rounded-full'></div>
                        <input 
                          onClick={()=> {setPanelOpen(true)}}
                          value={pickup}
                          onChange={(e)=> {
                            setPickup(e.target.value)
                          }} 
                          className='bg-[#eeeeee] px-12 py-2 text-lg w-full rounded-lg mt-4' 
                          type="text" 
                          placeholder='Add a pick-up location' 
                        />
                        <input 
                          onClick={()=> {setPanelOpen(true)}}
                          value={destination}
                          onChange={(e)=> {
                            setDestination(e.target.value)
                          }}
                          className='bg-[#eeeeee] px-12 py-2 text-lg w-full rounded-lg mt-4' 
                          type="text" 
                          placeholder='Enter your destination' 
                        />
                    </form>
                </div>
                <div ref={panelRef} className='bg-white h-[0%]'>
                    <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
                </div>
            </div>
            <div ref={vehiclePanelRef} className='fixed w-full z-10 bg-white bottom-0 px-3 py-5 translate-y-full'>
                <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
            </div>
            <div ref={confirmRidePanelRef} className='fixed w-full z-10 bg-white bottom-0 px-3 py-5 translate-y-full'>
                <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} setVehiclePanel={setVehiclePanel}/>
            </div>
            <div ref={vehicleFoundRef} className='fixed w-full z-10 bg-white bottom-0 px-3 py-5 translate-y-full'>
                <LookingForDriver setVehicleFound={setVehicleFound} setWaitingForDriver={setWaitingForDriver}/>
            </div>
            <div ref={waitingForDriverRef} className='fixed w-full z-10 bg-white bottom-0 px-3 py-5  translate-y-full'>
                <WaitingForDriver setWaitingForDriver={setWaitingForDriver}/>
            </div>
        </div>
    );
}

export default Home; 