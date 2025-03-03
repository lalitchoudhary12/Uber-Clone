import React from 'react'

const LookingForDriver = (props) => {
    return(
        <div>
            <h5 className="w-[93%] text-center absolute mt-2 top-0" onClick={()=>{props.setVehicleFound(false)}}><i className="text-4xl text-gray-200 ri-arrow-right-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-3 pt-8'>Looking for a Driver</h3>
            <div className='flex gap-3 justify-between flex-col items-center'>
                {props.vehicleType === 'car' && (
                    <img className="h-20" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="" />
                )}
                {props.vehicleType === 'auto' && (
                    <img className="h-20 mt-4" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
                )}
                {props.vehicleType === 'moto' && (
                    <img className="h-20 mt-4" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
                )}
                <div className='w-full mt-3'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className='text-lg ri-map-pin-user-fill'></i>
                        <div>
                            <h3 className='text-md font-semibold'>{props.pickup}</h3>
                            <p className='text-sm text-gray-600'>Pickup</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className='text-lg ri-map-pin-2-fill'></i>
                        <div>
                            <h3 className='text-md font-semibold'>{props.destination}</h3>
                            <p className='text-sm text-gray-600'>Destination</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className='text-lg ri-currency-line'></i>
                        <div>
                            <h3 className='text-md font-semibold'>₹{props.fare[props.vehicleType]}</h3>
                            <p className='text-sm text-gray-600'>Payment : Cash</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LookingForDriver