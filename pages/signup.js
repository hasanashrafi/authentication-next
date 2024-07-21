import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'

import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";

import animationData from "../public/user.json"
import Lottie from 'lottie-react';



function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
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
        const res = await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" }
        })
        const data = await res.json()
        setUser(data);
        if (data.status === 'successfully') {
            router.push("/signin")
        }
    }

    return (
        <div className='min-w-screen flex  min-h-screen p-2 '>

            <div className=" flex flex-col justify-center mx-auto bg-[#f4f7f6] rounded-lg shadow-xl  p-3  content-center mt-10 w-full lg:w-[1200px] lg:items-center">
                <Lottie animationData={animationData} className='w-full  h-96 mb-5' play loop={true} />
                <h3 className="flex justify-center gap-2 mb-4 text-center text-3xl font-semibold font-mono text-indigo-500">
                    <FaRegUser />  SignUp
                </h3>
                <div >{user.status && <h3 className={`my-4 text-center text-xl font-semibold p-2 rounded text-white ${user.status === "successfully" ? "bg-green-400" : "bg-red-400"}`}>{user.message}</h3>}</div>

                <div className='flex justify-center items-center'>
                    <MdOutlineAlternateEmail className='text-indigo-600 text-3xl' />
                    <input
                        value={email}
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}

                        placeholder="Enter Email"
                        className={`m-5 p-2 rounded text-gray-900 outline-none  w-96 text-xl shadow-xl ${email.length >= 12 ? "focus:border-b-4 focus:border-green-400" : "focus:border-b-4 focus:border-orange-600"}`}
                    />
                </div>

                <div className='flex justify-center items-center'>
                    <RiLockPasswordLine className='text-indigo-600 text-3xl ' />
                    <input
                        value={password}
                        type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                        className={`m-5 p-2 rounded text-gray-900 outline-none  w-96 text-xl shadow-xl ${password.length >= 8 ? "focus:border-b-4 focus:border-green-400" : "focus:border-b-4 focus:border-orange-600"}`} />

                </div>

                <button
                    onClick={addHandler}
                    className='w-full lg:w-[450px] self-center border p-3 bg-blue-600 text-white rounded-lg text-md lg:text-xl m-4 my-5 hover:border hover:border-blue-600 hover:text-blue-700 hover:bg-white transition-all ease-in-out'>
                    <Link href='/signup'>
                        Create Account
                    </Link>
                </button>
                <button className="flex w-full lg:w-[450px] items-center justify-center p-3  border bg-indigo-600 rounded-lg text-white  text-xl border-none shadow-xl">
                    <FaSignInAlt className="text-2xl mr-2" /> <Link href='/signin'> SignIn</Link>
                </button>
            </div>

        </div>
    )
}

export default SignUp