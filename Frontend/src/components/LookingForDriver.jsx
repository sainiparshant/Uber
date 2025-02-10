import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
    <h5 onClick={()=>{
        props.setVehiclePanelOpen(false)
      }} className='p-1 absolute text-center top-0 w-[90%] '><i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i></h5>
      <h3 className='text-2xl font-semibold mb-5'>Looking For Ride</h3>

      <div className='flex gap-3 flex-col justify-between items-center'>
          <img className='h-20' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
     
          <div className='w-full mt-5'>
              <div className='flex gap-5 items-center  p-3 border-b-1 '>
                  <i className="text-lg ri-map-pin-2-fill"></i>
                  <div>
                      <h3 className='text-xl font-semibold'>526/11-A</h3>
                      <p className='text-gray-500'>Kankariya Talab, Ahemdabad</p>
                  </div>
              </div>
              <div className='flex gap-5 items-center  p-3 border-b-1'>
              <i className="text-lg ri-square-fill"></i>
                  <div>
                      <h3 className='text-xl font-semibold'>Third Wave Coffee</h3>
                      <p className='text-gray-500'>17th Cross Rd, PWD Quarters, sector 11, karnataka</p>
                  </div>
              </div>
              <div className='flex gap-5 items-center  p-3 '>
              <i className="text-lg ri-bank-card-fill"></i>
                  <div>
                      <h3 className='text-xl font-semibold'>₹234.90</h3>
                      <p className='text-gray-500'>Cash</p>
                  </div>
              </div>
          </div>
         
      </div>
  </div>
  )
}

export default LookingForDriver
