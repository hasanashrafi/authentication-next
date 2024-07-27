import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

import { FaRegUser } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";


import animationData from "../public/login.json"
import Lottie from 'lottie-react';
import Link from 'next/link';


function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [user, setUser] = useState({})

  const router = useRouter()

  useEffect(() => {
    fetch("/api/user")
      .then((res) => (res).json())
      .then((data) => {
        if (data.status === "success") window.location.href = "/dashboard"


      })
  }, [])

  const addHandler = async () => {
    const res = await fetch("/api/auth/signin", {
      method: "POST",
      body: JSON.stringify({ email, password, name, lastName }),
      headers: { "Content-Type": "application/json" }
    })
    const data = await res.json()
    console.log(data);
    setUser(data);

    if (data.status === 'success') {
      router.push("/dashboard")
    }
  }
  return (
    <div className='min-w-screen min-h-screen p-3 bg-sky-300 sm:flex sm:items-center'>

      <div className='w-full flex items-center sm:h-96 sm:w-1/2 '>
        <Lottie animationData={animationData} className='w-full  h-full mb-5' loop />
      </div>

      <div className=" flex flex-col items-center justify-center p-3 sm:w-fit">

        <h3 className="flex justify-center gap-2 mb-4 text-center text-3xl font-semibold font- text-indigo-900">
          <FaRegUser />  SignIn
        </h3>
        <div >{user.status && <h3 className={`w-full my-1 text-center text-sm p-2 rounded text-white ${user.status === "success" ? "bg-green-400" : "bg-red-400"}`}>{user.message}</h3>}</div>

        <div className='w-full flex justify-center items-center mx-auto'>
          <MdOutlineAlternateEmail className='text-indigo-900 text-4xl' />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="Enter Email"
            className={`m-2 p-2 rounded text-gray-900 outline-none w-full text-lg shadow-xl`}
          />
        </div>

        <div className='flex w-full  justify-center items-center mx-auto'>
          <RiLockPasswordLine className='text-indigo-900 text-4xl ' />
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter Password"
            className={`m-2 p-2 rounded text-gray-900 outline-none  w-full text-lg shadow-xl `} />
        </div>

        <button
          onClick={addHandler}
          className='mx-auto w-full sm:w-full p-2 bg-blue-600 text-white rounded-md text-md sm:text-xl m-2 mt-5  hover:text-blue-700 hover:bg-white transition-all ease-in-out'>
          <Link href='/signin'>
            LogIn
          </Link>
        </button>

        <button
          className='mx-auto w-full sm:w-full p-2 bg-indigo-600 text-white rounded-md text-md sm:text-xl m-2  hover:text-blue-700 hover:bg-white transition-all ease-in-out'>
          <Link href='/signup'>
            SignUp
          </Link>
        </button>
      </div>


    </div>
  )
}

export default SignIn