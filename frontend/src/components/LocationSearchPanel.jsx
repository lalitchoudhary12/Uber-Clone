import React from 'react'

const LocationSearchPanel = (props) => {
    // sample array of location 
    const locations = [ 
        "Vishal Nagar Pune-27 Maharashtra",
        "Chinchwad Pune Maharashtra",
        "Pimple Saudagar Pune Maharashtra",
        "kondhwa Pune Maharashtra",
    ]
    return (
        <div>
            { 
                locations.map(function(element , idx){
                    return(
                        <div key={idx} onClick={()=>{
                            props.setVehiclePanel(true)
                            props.setPanelOpen(false)
                            }} 
                        className='flex items-center gap-4 mb-2 -ml-1 -mt-2 justify-start p-2  border-2 border-white active:border-black rounded-xl'
                        >
                          <h2 className="bg-[#eee] h-9 w-9 flex items-center justify-center rounded-full"><i className="ri-map-pin-fill"></i></h2>
                          <h4 className="font-medium">{element}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default LocationSearchPanel