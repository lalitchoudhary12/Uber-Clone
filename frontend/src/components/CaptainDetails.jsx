import React from 'react'

const CaptainDetails = (props)=>{
    return (
        <div>
             <div className='flex items-center justify-between mt-3 p-1'>
                    <div className='flex items-center justify-start gap-4'>
                        <img className='h-12 w-12 rounded-full object-cover' src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" alt="" />
                        <div>
                            <h4 className='text-2xl font-medium -mb-1'>Harsh Patel</h4>
                            <p className='text-m text-gray-600 font-medium'>4.5 stars</p>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl font-medium'>₹295.20</h4>
                        <p className='text-sm font-medium bg-gray-200'>Earned</p>
                    </div>
                </div>
                <div className='flex p-4 bg-gray-100 rounded-xl mt-7 items-center justify-between gap-5 items-start'>
                    <div className='text-center'>
                        <i className='font-thin text-3xl mb-2 ri-timer-2-line'></i>
                        <h5 className='text-lg font-medium'>12.2</h5>
                        <p className='text-sm text-gray-600'>Hours Online</p>
                    </div>
                    <div className='text-center mr-3'>
                        <i className='font-thin text-3xl mb-2 ri-speed-up-line'></i>
                        <h5 className='text-lg font-medium'>30km/hr</h5>
                        <p  className='text-sm text-gray-600'>Speed Meter</p>
                    </div>
                    <div onClick={()=>{props.setRidePopUpPanel(true)}} className='text-center mr-3'>
                        <i className='font-thin text-3xl mb-2 ri-notification-badge-line'></i>
                        <h5 className='text-lg font-medium'>1</h5>
                        <p  className='text-sm text-gray-600'>Rides</p>
                    </div>
                </div>
        </div>  
    )
}

export default CaptainDetails