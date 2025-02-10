import React from 'react'

const LocationSearchPanel = (props) => {

    const locations = [
        "24B, Near Kapoor's cafe , Sheriyans Coding School , Bhopal",
        "22C, Near Sharma's cafe , ABC Coding School , Meerut",
        "21A, Near Singh's cafe , Python Coding School , Bhopal",
        "19D, Near Saini's cafe , Tech Coding School , Lucknow"
    ]

  return (
    <div>

        {
            locations.map(function (ele,idx){
                // eslint-disable-next-line react/jsx-key
                return <div key={idx} onClick={()=>{
                    props.setVehiclePanelOpen(true)
                    props.setPanelOpen(false)
                }} className='flex gap-3 my-4 border-2 border-gray-100 active:border-black p-2 rounded-xl  items-center justify-start'>
                <h2 className='bg-[#eee] h-8 flex items-center justify-center w-10 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                <h4 className='font-medium'>{ele}</h4>
              </div>
            })
        }

    
      
    </div>
  )
}

export default LocationSearchPanel
