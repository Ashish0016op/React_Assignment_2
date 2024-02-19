import React from 'react';
import logo from '../assets/download.png';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center border border-black rounded w-[300px] h-[400px] m-auto">
      <img className="w-52 mt-16" src={logo} alt='logo'/>
      <div className='flex flex-col gap-2'>
        <input className='border border-x-black border-t-black h-[30px] w-[250px]' type='text' placeholder='Mobile Number, or Email'/>
        <input className='border border-x-black border-t-black h-[30px] w-[250px]' type='text' placeholder='Full Name'/>
        <input className='border border-x-black border-t-black h-[30px] w-[250px]' type='text' placeholder='Phone number, username, or email'/>
        <input className='border border-black w-[250px] h-[30px]' type='password' placeholder='password'/>
      </div>
      <div>
        <button className='h-[30px] rounded text-white w-[250px] bg-[#4CB5F9]'>Sign Up</button>
      </div>
      <div className='flex flex-row gap-1'>
        <p>Already have an account?</p>
        <Link to="/login" className='text-[#4CB5F9] font-bold'>Log in</Link>
      </div>
    </div>
  );
}

export default SignupPage;
