import React from 'react'

const ConfirmRide = (props)=>{
    return (
        <div>
            <h5 className="w-[93%] text-center absolute top-0" 
                onClick={()=>{
                   props.setConfirmRidePanel(false) 
                }}>
                <i className="text-4xl text-gray-200 ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className='text-2xl font-semibold mb-3 pt-4'>Confirm your Ride</h3>
            <div className='flex gap-3 justify-between flex-col items-center'>
                <img className="h-20" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="" />
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
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm text-gray-600'>Kankariya Talab, Bhopal</p>
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
                <button onClick={()=>{
                    props.setVehicleFound(true) 
                    props.setConfirmRidePanel(false)
                    props.setVehiclePanel(false)}} 
                    className='w-full mt-1 bg-green-600 text-xl text-white p-2 rounded-lg font-semibold'>
                        Confirm
                </button>
            </div>
        </div>
    )
}

export default ConfirmRide