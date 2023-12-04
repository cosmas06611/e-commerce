import React from 'react'
import loginSignupImage from "../Asset/login-animation.gif"
import { BiShow, BiHide } from "react-icons/bi";
import { useState } from 'react';


const Signup = () => {
const [showPassword, setShowPassword] = useState(false)
const [showConfirmPassword, setShowConfirmPassword] = useState(false)


        const handleShowPassword = () =>{
            setShowPassword(preve => !preve)
        }

        const handleConfirmPassword = () =>{
            setShowConfirmPassword(preve => !preve)
        }
  return (
    <div className='p-3 md:p-4'>
      <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-4'>
        {/* <h1 className='text-center text-2xl font-bold'>Sign Up</h1> */}
        <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md'>
            <img src={loginSignupImage} alt="signupimage" className='w-full'/>
        </div>

        <form className='w-full py-3 flex flex-col'>
            <label htmlFor='firstName' >First Name</label>
            <input type={"text"} id="firstName" name='firstName' className='mb-2 mt-1 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300'/>

            <label htmlFor='lastName' >Last Name</label>
            <input type={"text"} id="lastName" name='lastName' className=' mb-2 mt-1 w-full bg-slate-200 px-2 py-1 rounded  focus-within:outline-blue-300'/>

            <label htmlFor='email' >Email</label>
            <input type={"email"} id="email" name='email' className=' mb-2 mt-1 w-full bg-slate-200 px-2 py-1 rounded  focus-within:outline-blue-300'/>

            <label htmlFor='password' >Password</label>
            <div className='flex px-2 py-1 bg-slate-200 rounded mb-2 mt-1 focus-within:outline focus-within:outline-blue-300'>
            <input type={showPassword ? "text" : "password"} id="password" name='password' className='  w-full bg-slate-200 border-none outline-none '/>
            <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}>{showPassword ? <BiShow /> : <BiHide />}</span>
            </div>

            <label htmlFor='confirmpassword' >Confirm Password</label>
            <div className='flex px-2 py-1 bg-slate-200 rounded mb-2 mt-1 focus-within:outline focus-within:outline-blue-300'>
            <input type={showConfirmPassword ? "text" : "password"} id="confirmpassword" name='confirmpassword' className='  w-full bg-slate-200 border-none outline-none '/>
            <span className='flex text-xl cursor-pointer' onClick={handleConfirmPassword}>{showConfirmPassword ? <BiShow /> : <BiHide />}</span>
            </div>

            <button className='w-full max-w-[150px] m-auto  bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4'>Sign up</button>
        </form>
      </div>
    </div>
  )
}

export default Signup
