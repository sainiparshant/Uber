import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';


const CaptainLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const navigate = useNavigate()
  const {captain, setCaptain} = useContext(CaptainDataContext)


  const submitHandler = async (e) =>{
    e.preventDefault();
    const captainData = {
      email:email,
      password:password
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainData)
    if(response.status === 200){
      const data = response.data
      setCaptain(data)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }
   
    setEmail('');
    setPassword('');
  }
  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
      <img src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" className='w-14 mb-5'/>
      <form onSubmit= {(e) =>{
        submitHandler(e);
      }}>
        <h3 className='text-xl font-medium mb-2'> What's your Email</h3>
        <input 
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full  text-lg '
        required
        value={email}
        onChange={ (e) =>{
          setEmail(e.target.value);
        }}
        type="email"
         placeholder='Example@gmail.com' />

        <h3 className='text-xl font-medium mb-2'>Enter Password</h3>

        <input 
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full  text-lg '
        value={password}
        onChange={ (e) =>{
          setPassword(e.target.value);
        }}
        type="password"
        placeholder='Password' />

        <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg '>
          Login
        </button>
      </form>
      <p className='text-center'> Join the fleet?
        <Link to='/captain-signup' className='text-blue-600 cursor-pointer'> Register as Captain</Link>
        </p>
      </div>
      <div>
      <Link to='/login' className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-b rounded px-4 py-2 w-full text-lg '>
          Sign In as User
        </Link>
      </div>
    </div>
  )
}

export default CaptainLogin
