import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
       <h5 onClick={()=>{
          props.setVehiclePanelOpen(false)
        }} className='p-1 absolute text-center top-0 w-[90%] '><i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a vehicle</h3>
        <div onClick={()=>{
            props.setConfirmRidePanel(true)
        }} className='flex items-center p-3 mb-2 justify-between w-full active:border-2 active:border-black bg-gray-100 rounded-xl'>
          <img className='h-12' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
        
            <div className='w-1/2'>
                  <h4 className='font-bold text-md'>UberGo  <span><i className="ri-user-3-fill">4</i></span></h4>
                  <h5 className='text-sm font-semibold'>2 min away</h5>
                  <p className='text-xs text-gray-600'>Affordable, compact rides</p>
            </div>
            <h5 className='text-xl font-medium'>₹193.20</h5>
            

        </div>
        <div onClick={()=>{
            props.setConfirmRidePanel(true)
        }} className='flex items-center p-3 mb-2 justify-between w-full active:border-2 active:border-black bg-gray-100 rounded-xl'>
          <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
        
            <div className='w-1/2'>
                  <h4 className='font-bold text-md'>Moto  <span><i className="ri-user-3-fill">1</i></span></h4>
                  <h5 className='text-sm font-semibold'>7 min away</h5>
                  <p className='text-xs text-gray-600'>Affordable, motorcycle rides</p>
            </div>
            <h5 className='text-xl font-medium'>₹65.12</h5>
            

        </div>
        <div onClick={()=>{
            props.setConfirmRidePanel(true)
        }} className='flex items-center p-3 mb-2 justify-between w-full  active:border-2 active:border-black bg-gray-100 rounded-xl'>
          <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
        
            <div className='w-1/2'>
                  <h4 className='font-bold text-md'>UberAuto  <span><i className="ri-user-3-fill">2</i></span></h4>
                  <h5 className='text-sm font-semibold'>4 min away</h5>
                  <p className='text-xs text-gray-600'>Affordable, auto rides</p>
            </div>
            <h5 className='text-xl font-medium'>₹112.80</h5>
            

        </div>
    </div>
  )
}

export default VehiclePanel
