import React from 'react'
import logo from '../assets/download.png'
import { Link } from 'react-router-dom'
const LoginPage = () => {
  return (
    <div className="flex flex-col gap-5 m-auto justify-center items-center border border-black w-[300px] h-[400px] rounded">
        <img className="w-52" src={logo} alt='logo'/>
        <div className='flex flex-col gap-2'>
            <input className='border border-x-black border-t-black h-[30px] w-[250px]' type='text' placeholder='Phone number, username, or email'/>
            <input className='border border-black w-[250px] h-[30px]' type='password' placeholder='password'/>
        </div>
        <div>
            <button className='h-[30px] rounded text-white w-[250px] bg-[#4CB5F9]'>Sign in</button>
        </div>
        <div className='flex flex-row gap-1'>
            <p>Don't have account?</p>
            <Link to="/SignUp" className=' text-[#4CB5F9] font-bold'>Sign Up</Link>
        </div>
    </div>
  )
}

export default LoginPage