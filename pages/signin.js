import React from 'react'

import { FaRegUser } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";


import animationData from "../public/user.json"
import Lottie from 'lottie-react';
import Link from 'next/link';


function SignIn() {
  return (
    <div className='min-w-screen min-h-screen '>

      <div className='flex rounded-xl min-h-screen justify-center items-center bg-blue-400'>
       
        <div className='flex mt-2 w-full  items-center '>
          <Lottie animationData={animationData} className='w-full  h-full mb-5' play loop={true} />
        </div>

        <div className="w-full h-screen flex flex-col justify-center  p-3  mt-2">

          <h3 className="flex justify-center gap-2 mb-4 text-center text-3xl font-semibold font-mono text-indigo-900">
            <FaRegUser />  SignIn
          </h3>

          <div className=' flex justify-center items-center mx-auto'>
            <MdOutlineAlternateEmail className='text-indigo-900 text-3xl' />
            <input

              type="text"
              onChange={""}

              placeholder="Enter Email"
              className={`m-5 p-2 rounded text-gray-900 outline-none  w-96 text-xl shadow-xl`}
            />
          </div>

          <div className='flex justify-center items-center mx-auto'>
            <RiLockPasswordLine className='text-indigo-900 text-3xl ' />
            <input
              type="password"
              name="password"
              onChange={""}
              placeholder="Enter Password"
              className={`m-5 p-2 rounded text-gray-900 outline-none  w-96 text-xl shadow-xl `} />
          </div>

          <button
            className='mx-auto w-full h-fit lg:w-fit   p-3 bg-blue-600 text-white rounded-md text-md lg:text-2xl m-4 my-5 hover:border hover:border-blue-600 hover:text-blue-700 hover:bg-white transition-all ease-in-out'>
            <Link href='/signup'>
              Create Account
            </Link>
          </button>
        </div>

      </div>
    </div>
  )
}

export default SignIn