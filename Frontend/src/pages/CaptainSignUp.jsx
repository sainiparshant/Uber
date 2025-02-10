import React, { useState , useContext } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios, { Axios } from 'axios'
import { useNavigate } from 'react-router-dom'




const CaptainSignUp = () => {

  const navigate = useNavigate();
  
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')


  const { captain, setCaptain } = useContext(CaptainDataContext);
  


  const submitHandler = async (e) =>{
    e.preventDefault();
    const newCaptain = {
      fullname:{
        firstname:firstname,
        lastname:lastname
      },
      email:email,
      password:password,
      vehicle:{
        capacity: vehicleCapacity,
        color:vehicleColor,
        plate:vehiclePlate,
        vehicleType:vehicleType
      }
    };
    
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, newCaptain);
      
      if (response.status === 200) {
        const data = response.data;
        setCaptain(data); 
        
        localStorage.setItem("token", data.token);
        navigate('/captain-home');
      }
    } catch (error) {
      console.error("Error:", error);
    }


    setEmail('');
    setFirstname('');
    setLastname('');
    setPassword('');
    setVehicleCapacity('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleType('');
    
  }
  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
      <img src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" className='w-14 mb-2'/>
      <form onSubmit= {(e) =>{
        submitHandler(e);
      }}>
        <h3 className='text-lg font-medium mb-2'> Captain's Name</h3>
        <div className='flex gap-2 mb-2'>
        <input 
        className='bg-[#eeeeee]  rounded px-4 py-2 w-1/2 border-none text-lg '
        required
       value={firstname}
       onChange={ (e) =>{
        setFirstname(e.target.value);
      }}
        type="text"
         placeholder='Firstname' />
         <input 
        className='bg-[#eeeeee]  rounded px-4 py-2 w-1/2 border-none text-lg '
        required
        value={lastname}
        onChange={ (e) =>{
          setLastname(e.target.value);
        }}
        type="text"
         placeholder='Lastname' />
        </div>
        

        <h3 className='text-lg font-medium mb-2'> Captain's Email</h3>
        <input 
        className='bg-[#eeeeee] mb-2 rounded px-4 py-2 w-full border-none text-lg '
        required
        value={email}
        onChange={ (e) =>{
          setEmail(e.target.value);
        }}
        type="email"
         placeholder='Example@gmail.com' />

        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

        <input 
        className='bg-[#eeeeee] mb-2 rounded px-4 py-2 w-full border-none text-lg '
        value={password}
        onChange={ (e) =>{
          setPassword(e.target.value);
        }}
        type="password"
        placeholder='Password' />

        <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>

        <div className='flex gap-4 mb-2'>
          <input 
          className='bg-[#eeeeee] mb-2 rounded px-4 py-2 w-1/2 border-none text-lg '
          value={vehicleColor}
          onChange={ (e) =>{
            setVehicleColor(e.target.value);
          }}
          type="text"
          placeholder='Color' />
           
          <input 
          className='bg-[#eeeeee] mb-2 rounded px-4 py-2 w-1/2 border-none text-lg '
          value={vehicleCapacity}
          onChange={ (e) =>{
            setVehicleCapacity(e.target.value);
          }}
          type="number"
          placeholder='Capacity' />

        </div>

        <div className='flex gap-4 mb-2'>
          <input 
          className='bg-[#eeeeee] mb-5 rounded px-4 py-2 w-1/2 border-none text-lg '
          value={vehiclePlate}
          onChange={ (e) =>{
            setVehiclePlate(e.target.value);
          }}
          type="text"
          placeholder='Plate number' />
           
          <select
          className='bg-[#eeeeee] mb-5 rounded px-4 py-2 w-1/2 border-none text-lg '
          value={vehicleType}
          onChange={ (e) =>{
            setVehicleType(e.target.value);
          }}
          type="text"
          placeholder='vehicleType'>
            <option value=""disabled>Select Vehicle Type</option>
            <option value="Car">Car</option>
            <option value="Auto">Auto</option>
            <option value="Bike">Moto</option>

          </select>

        </div>

        <button className='bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 w-full text-lg '>
          Create Captain account
        </button>
      </form>
      <p className='text-center'>Already register?
        <Link to='/captain-login' className='text-blue-600 cursor-pointer'> Login here</Link>
        </p>
      </div>
      <div>
     <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Policy
      </span> and <span className='underline'>Terms of Services Apply.</span></p>
      </div>
    </div>
  )
}

export default CaptainSignUp

