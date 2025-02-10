import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide'
import LookingForDriver from '../components/LookingForDriver'

const Home = () => {

  const [pickUp , setPickUp] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const vehiclePanelRef = useRef(null)
  const confirmRidePanelref = useRef(null)
  const vehicleFoundRef = useRef(null)
  const panelRef = useRef(null)
  const closePanelRef = useRef(null)
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vehicleFound, setvehicleFound] = useState(false)

  const submitHandler = (e)=>{
    e.preventDefault()
  }

  useGSAP(function(){
   if(panelOpen){
    gsap.to(panelRef.current,{
      height:'70%',
      padding:20
    })
    gsap.to(closePanelRef.current,{
      opacity:1
    })
   }else{
    gsap.to(panelRef.current,{
      height:'0%',
      padding:0
    })
    gsap.to(closePanelRef.current,{
      opacity:0
    })
   }
  },[panelOpen])

  useGSAP(function(){
    if(vehiclePanelOpen){
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[vehiclePanelOpen])

  useGSAP(function(){
    if(confirmRidePanel){
      gsap.to(confirmRidePanelref.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(confirmRidePanelref.current,{
        transform:'translateY(100%)'
      })
    }
  },[confirmRidePanel])

  useGSAP(function(){
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(vehicleFoundRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[vehicleFound])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" alt="" />

      <div className='h-screen w-screen '>
        <img className='h-full w-full object-cover' src="https://kenh14cdn.com/thumb_w/660/2019/11/20/img0107-15742433645641030281314-15742433836991153843682-15742445447481853654987.png" alt="" />
      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
         <div className='h-[30%] p-5 bg-white relative'>
          <h5
          ref={closePanelRef}
          onClick={()=>{
            setPanelOpen(false)
          }}
           className='absolute opacity-0 right-6 top-6 text-2xl'>
             <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-3xl font-semibold '>Find a Trip</h4>
            <form onSubmit={(e) =>{
              submitHandler(e);
            }}>
              <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
              <input 
              onClick={() =>{
                setPanelOpen(true)
              }}
              value={pickUp}
              onChange={(e) =>{
                setPickUp(e.target.value)
              }}
              className='w-full bg-[#eee] text-lg w-full px-8 py-2 rounded-lg mt-5'
               type="text"
                placeholder='Add a Pick-up Location' />
              <input 
              onClick={() =>{
                setPanelOpen(true)
              }}
               value={destination}
               onChange={(e) =>{
                 setDestination(e.target.value)
               }}
              className='w-full bg-[#eee] text-lg w-full px-8 py-2 rounded-lg mt-3'
               type="text"
                placeholder='Enter your destination' />
            </form>
         </div>
         <div ref={panelRef} className='bg-white h-[0]'>
               <LocationSearchPanel  setPanelOpen={setPanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} />
         </div>
      </div>
      <div ref={vehiclePanelRef} className='fixed z-10 translate-y-full bottom-0 px-3  py-6 w-full bg-white'>
       <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanelOpen={setVehiclePanelOpen}/>
        
      </div>
      <div ref={confirmRidePanelref} className='fixed z-10 translate-y-full bottom-0 px-3  py-6 w-full bg-white'>
       <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setvehicleFound={setvehicleFound} />
        
      </div>
      <div ref={vehicleFoundRef} className='fixed z-10 translate-y-full bottom-0 px-3  py-6 w-full bg-white'>
       <LookingForDriver  />
        
      </div>
    </div>
  )
}

export default Home
