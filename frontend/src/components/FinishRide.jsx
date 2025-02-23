import React from 'react'
import { Link } from 'react-router-dom';


const FinishRide =(props)=>{
    return (
        <div>
        <h3 className='text-2xl font-semibold mb-3'>Finish this Ride</h3>
        <div className='flex items-center justify-between mt-4 p-2'>
            <div className='flex items-center gap-3'>
                <img className='h-12 rounded-full object-cover w-12' src="https://static.vecteezy.com/system/resources/thumbnails/040/222/100/small/ai-generated-a-smiling-man-in-a-casual-peach-tee-poses-with-ease-his-friendly-demeanor-and-stylish-look-convey-approachability-and-modern-fashion-sense-photo.jpeg" alt="" />
                <h2 className='text-xl font-medium'>Nitin Shah</h2>
            </div>
        </div>
        <div className='flex gap-3 justify-between flex-col items-center'>
            <div className='w-full mt-3'>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className='text-lg ri-map-pin-user-fill'></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm text-gray-600'>Kankariya Talab, Bhopal</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className='text-lg ri-map-pin-2-fill'></i>
                    <div>
                        <h3 className='text-lg font-medium'>402/2-B</h3>
                        <p className='text-sm text-gray-600'>Nehru Nagar, Bhopal</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className="text-lg ri-route-line"></i>
                    <div>
                        <h3 className='text-lg font-medium'>12 km</h3>
                        <p className='text-sm text-gray-600'>Total Distance Covered</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3'>
                    <i className='text-lg ri-currency-line'></i>
                    <div>
                        <h3 className='text-lg font-medium'>₹193.20</h3>
                        <p className='text-sm text-gray-600'>Payment : Cash</p>
                    </div>
                </div>
            </div>
            <div className='w-[90%]'>
                <Link to="/captain-home"
                    className='w-full flex justify-center mt-1 bg-green-600 text-xl text-white p-2 rounded-lg font-semibold'>
                        Finish Ride
                </Link>
            </div>
        </div>
        </div>
    )
}

export default FinishRide