import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import axios from 'axios'

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  

  const [user, setUser] = useContext(UserDataContext)
  const navigate = useNavigate()

  const submitHandler = async (e) =>{
    e.preventDefault();
    const userData = {
      email:email,
      password:password
    };
    
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);

    if(response.status === 200){
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }


    setEmail('');
    setPassword('');
  }
  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" alt="" className='w-14 mb-10'/>
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
      <p className='text-center'>New here?
        <Link to='/signUp' className='text-blue-600 cursor-pointer font-medium'> Create New Account</Link>
        </p>
      </div>
      <div>
      <Link to='/captain-login' className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-b rounded px-4 py-2 w-full text-lg '>
          Captain Login
        </Link>
      </div>
    </div>
  )
}

export default UserLogin
