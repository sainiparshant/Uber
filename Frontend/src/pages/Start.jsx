import React from 'react'
import { Link } from 'react-router-dom'
const Start = () => {
  return (
    <div>
        <div className=' bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 w-full flex flex-col justify-between '>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" alt="" className='w-14 ml-8'/>
            <div className='bg-white py-4 px-4'>
                <h2 className='text-2xl font-bold'>Get Started with Uber</h2>
                <Link to='/login' className=' flex items-center justify-center w-full bg-black py-3 text-white rounded mt-5 font-semibold'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start
