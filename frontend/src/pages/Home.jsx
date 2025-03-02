import React, { useState, useRef, useEffect, useContext } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import axios from 'axios';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import WaitingForDriver from '../components/WaitingForDriver';
import LookingForDriver from '../components/LookingForDriver';
import { SocketContext } from '../context/SocketContext';
import { UserDataContext } from '../context/UserContext';
import { useNavigate} from 'react-router-dom'
import LiveTracking from '../components/LiveTracking';

const Home = () => {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');
    const [panelOpen, setPanelOpen] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const [inputType, setInputType] = useState(''); // To track which input is being updated
    const panelRef = useRef(null);
    const panelCloseRef = useRef(null);
    const vehiclePanelRef = useRef(null);
    const [vehiclePanel, setVehiclePanel] = useState(false);
    const [confirmRidePanel, setConfirmRidePanel] = useState(false);
    const confirmRidePanelRef = useRef(null);
    const [vehicleFound, setVehicleFound] = useState(false);
    const vehicleFoundRef = useRef(null);
    const waitingForDriverRef = useRef(null);
    const [waitingForDriver, setWaitingForDriver] = useState(false);
    const [fare,setFare] = useState({})
    const [vehicleType , setvehicleType] = useState(null)
    const [ride ,setRide] = useState(null)

    const navigate = useNavigate()
    
    const {socket} = useContext(SocketContext)
    const {user}= useContext(UserDataContext)
    useEffect(()=>{
       socket.emit('join',{userType:"user",userId:user._id})
    },[user])
    
    socket.on('ride-confirmed',ride =>{
        setVehicleFound(false)
        setWaitingForDriver(true)
        setRide(ride)
    })

    socket.on('ride-started',ride =>{
        setWaitingForDriver(false)
        navigate('/riding',{state : {ride}})
    })

    const fetchSuggestions = async (query) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions?input=${query}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setSuggestions(response.data);
        } catch (error) {
            console.error('Error fetching suggestions:', error);
        }
    };

    const handleInputChange = (e, type) => {
        const value = e.target.value;
        if (type === 'pickup') {
            setPickup(value);
        } else {
            setDestination(value);
        }
        setInputType(type);
        if (value.length >= 3) {
            fetchSuggestions(value);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        if (inputType === 'pickup') {
            setPickup(suggestion.description);
        } else {
            setDestination(suggestion.description);
        }
        setSuggestions([]); // Clear suggestions but keep the panel open
    };

    useGSAP(() => {
        if (panelOpen) {
            gsap.to(panelRef.current, {
                height: '73%',
                duration: 0.5,
            });
            gsap.to(panelCloseRef.current, {
                opacity: 1
            });
        } else {
            gsap.to(panelRef.current, {
                height: '0%',
                duration: 0.5,
            });
            gsap.to(panelCloseRef.current, {
                opacity: 0
            });
        }
    }, [panelOpen]);

    useGSAP(() => {
        if (vehiclePanel) {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(0)'
            });
        } else {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(100%)'
            });
        }
    }, [vehiclePanel]);

    useGSAP(() => {
        if (confirmRidePanel) {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(0)'
            });
        } else {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(100%)'
            });
        }
    }, [confirmRidePanel]);

    useEffect(() => {
        if (vehicleFound) {
            gsap.to(vehicleFoundRef.current, {
                y: 0,
                onStart: () => {
                    vehicleFoundRef.current.classList.remove('hidden');
                }
            });
        } else {
            gsap.to(vehicleFoundRef.current, {
                y: '100%',
                onComplete: () => {
                    vehicleFoundRef.current.classList.add('hidden');
                }
            });
        }
    }, [vehicleFound]);

    useGSAP(() => {
        if (waitingForDriver) {
            gsap.to(waitingForDriverRef.current, {
                transform: 'translateY(0)'
            });
        } else {
            gsap.to(waitingForDriverRef.current, {
                transform: 'translateY(100%)'
            });
        }
    }, [waitingForDriver]);

    const submithandler = async (e) => {
        e.preventDefault();
        setPanelOpen(false); // Close search panel on form submit
        setVehiclePanel(true); // Open vehicle panel on form submit
    
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
                params: { pickup, destination },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setFare(response.data)
        } catch (error) {
            console.error('Error fetching fare:', error);
        }
    };

    async function createRide() {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`,{
            pickup,destination,vehicleType
        },{
            headers : {
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
    }

    return (
        <div className='h-screen relative overflow-hidden'>
            <img src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png" alt="logo" className='w-16 absolute left-3 top-2' />
            <div className='h-[73%]'>
                <LiveTracking/>
            </div>
            <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
                <div className='bg-white h-[27%] p-4 relative'>
                    <h5
                        ref={panelCloseRef}
                        className="absolute opacity-0 right-5 top-3 text-3xl"
                        onClick={() => {
                            setPanelOpen(false);
                        }}
                    >
                        <i className="ri-arrow-down-wide-line"></i>
                    </h5>
                    <h4 className='text-2xl font-semibold -mt-1'>Find a trip</h4>
                    <form onSubmit={(e) => {
                        submithandler(e);
                    }}>
                        <div className='line absolute h-16 w-0.5 top-[43%] left-10 bg-black rounded-full'></div>
                        <input
                            onClick={() => { setPanelOpen(true); setInputType('pickup'); }}
                            value={pickup}
                            onChange={(e) => handleInputChange(e, 'pickup')}
                            className='bg-[#eeeeee] px-12 py-2 text-lg w-full focus:outline-black rounded-lg mt-4'
                            type="text"
                            placeholder='Add a pick-up location'
                        />
                        <input
                            onClick={() => { setPanelOpen(true); setInputType('destination'); }}
                            value={destination}
                            onChange={(e) => handleInputChange(e, 'destination')}
                            className='bg-[#eeeeee] px-12 py-2 text-lg w-full rounded-lg mt-4 focus:outline-black '
                            type="text"
                            placeholder='Enter your destination'
                        />
                        <button className='bg-black text-medium font-semibold text-white px-4 py-2 rounded-lg mt-4 w-full'>Find Trip</button>
                    </form>
                </div>
                <div ref={panelRef} className='bg-white h-[0%]'>
                    <LocationSearchPanel
                        setPanelOpen={setPanelOpen}
                        setVehiclePanel={setVehiclePanel}
                        suggestions={suggestions}
                        handleSuggestionClick={handleSuggestionClick}
                    />
                </div>
            </div>
            <div ref={vehiclePanelRef} className='fixed w-full z-10 bg-white bottom-0 px-3 py-5 translate-y-full'>
                <VehiclePanel selectVehicle={setvehicleType} fare={fare} setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
            </div>
            <div ref={confirmRidePanelRef} className='fixed w-full z-30 bg-white bottom-0 px-3 py-5 translate-y-full'>
                <ConfirmRide pickup={pickup} fare={fare} vehicleType={vehicleType} destination={destination} createRide={createRide} setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} setVehiclePanel={setVehiclePanel} />
            </div>
            <div ref={vehicleFoundRef} className='fixed w-full z-30 bg-white bottom-0 px-3 py-5 translate-y-full hidden'>
                <LookingForDriver pickup={pickup} fare={fare} vehicleType={vehicleType} destination={destination} createRide={createRide}  setVehicleFound={setVehicleFound} />
            </div>
            <div ref={waitingForDriverRef} className='fixed z-30 w-full bg-white bottom-0 px-3 py-5  translate-y-full '>
                <WaitingForDriver ride={ride} setWaitingForDriver={setWaitingForDriver} />
            </div>
        </div>
    );
}

export default Home;