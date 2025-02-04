import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const UserSignUp = () => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})


  const submitHandler = (e) =>{
    e.preventDefault();
    setUserData({
      fullName:{
        firstname:firstname,
        lastname:lastname
      },
      email:email,
      password:password
    });


    setEmail('');
    setFirstname('');
    setLastname('');
    setPassword('');
    
  }
  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" alt="" className='w-14 mb-10'/>
      <form onSubmit= {(e) =>{
        submitHandler(e);
      }}>
        <h3 className='text-lg font-medium mb-2'> What's your Name</h3>
        <div className='flex gap-2 mb-5'>
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
        

        <h3 className='text-lg font-medium mb-2'> What's your Email</h3>
        <input 
        className='bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full border-none text-lg '
        required
        value={email}
        onChange={ (e) =>{
          setEmail(e.target.value);
        }}
        type="email"
         placeholder='Example@gmail.com' />

        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

        <input 
        className='bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full border-none text-lg '
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
      <p className='text-center'>Already register?
        <Link to='/login' className='text-blue-600 cursor-pointer'> Login here</Link>
        </p>
      </div>
      <div>
     <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Policy
      </span> and <span className='underline'>Terms of Services Apply.</span></p>
      </div>
    </div>
  )
}

export default UserSignUp
