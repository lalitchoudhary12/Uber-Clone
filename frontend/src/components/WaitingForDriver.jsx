import React from 'react'

const WaitingForDriver = (props) => {
    return(
      <div>
        <h5 className="w-[93%] text-center absolute top-0" onClick={()=>{props.setWaitingForDriver(false)}}><i className="text-4xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
        <div className='flex items-center justify-between mt-3'>
                    {props.ride?.captain.vehicle.vehicleType === 'car' && (
                        <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="" />
                    )}
                    {props.ride?.captain.vehicle.vehicleType === 'auto' && (
                        <img className="h-12 ml-4" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
                    )}
                    {props.ride?.captain.vehicle.vehicleType === 'moto' && (
                        <img className="h-12 ml-4" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
                    )}            <div className='text-right'>
                <h2 className='text-lg font-medium -mb-1 capitalize'>{props.ride?.captain.fullname.firstname} {props.ride?.captain.fullname.lastname}</h2>
                <h4 className='text-lg font-semibold uppercase'>{props.ride?.captain.vehicle.plate}</h4>
                <p className='text-xs text-gray-600'>Maruti Suzuki Alto</p>            
            </div>
        </div>
        
        <div className='flex gap-3 justify-between flex-col items-center'>
            <div className='w-full mt-3'>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className='text-lg ri-map-pin-user-fill'></i>
                    <div>
                        <h3 className='text-md font-semibold'>{props.ride?.pickup}</h3>
                        <p className='text-sm text-gray-600'>Pickup</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className='text-lg ri-map-pin-2-fill'></i>
                    <div>
                        <h3 className='text-md font-semibold'>{props.ride?.destination}</h3>
                        <p className='text-sm text-gray-600'>Destination</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className='text-lg ri-currency-line'></i>
                    <div>
                        <h3 className='text-md font-semibold'>₹{props.ride?.fare}</h3>
                        <p className='text-sm text-gray-600'>Payment : Cash</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className="text-lg ri-hashtag"></i>
                    <div>
                        <h3 className='text-md font-semibold'>{props.ride?.otp}</h3>
                        <p className='text-sm text-gray-600'>OTP for ride</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3'>
                    <i className='text-lg ri-phone-line'></i>
                    <div>
                        <h3 className='text-md font-semibold'>1234560789</h3>
                        <p className='text-sm text-gray-600'>Phone No.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}

export default WaitingForDriver