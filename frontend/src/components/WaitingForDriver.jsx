import React from 'react'

const WaitingForDriver = (props) => {
    return(
      <div>
        <h5 className="w-[93%] text-center absolute top-0" onClick={()=>{props.setWaitingForDriver(false)}}><i className="text-4xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
        <div className='flex items-center justify-between'>
            <img className="h-12 ml-4" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="" />
            <div className='text-right'>
                <h2 className='text-lg font-medium -mb-1'>Sarthak</h2>
                <h4 className='text-lg font-semibold'>MP04 AB 1234</h4>
                <p className='text-xs text-gray-600'>Maruti Suzuki Alto</p>
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
        </div>
      </div>
    )
}

export default WaitingForDriver