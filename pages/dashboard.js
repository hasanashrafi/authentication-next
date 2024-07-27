import { verifyToken } from '@/utils/auth'
import { redirect } from 'next/dist/server/api-utils'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function Dashboard({ result }) {
   
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [hasName, setHasName] = useState(false)


    useEffect(() => {
        fetch("/api/user")
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.name) setHasName(true)
          })
      }, [])

    const updateHandler = async () => {
        const res = await fetch("/api/auth/update-info", {
            method: "POST",
            body: JSON.stringify({ name, lastName, password }),
            headers: { "Content-Type": "application/json" }
        })
        const data = await res.json()
        console.log(data);
    }


    return (
        <div className='min-h-screen p-5 '>
            <div className='w-full mx-auto  p-5'>
                <Link href="/" className='bg-blue-600 p-2 rounded text-white my-2'>Home</Link>
                <div className='my-3'>
                    <h3>Dashboard</h3>
                    <p>Your Email: {result.email}</p>
                    <p>Your Email: {result.name}</p>
                    <p>Your Name: {name}</p>
                    <p>Your LastName: {lastName}</p>
                </div>
                {
                    hasName ? (
                        <div className='flex flex-col  gap-3  items-center p-3 m-3 mx-auto '>

                            <div className='flex justify-center gap-2 w-96 p-3 '>
                                <label
                                    className='w-[20%] text-center p-1 rounded text-white bg-slate-600'>Name</label>
                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    type='text'
                                    placeholder='Enter Name'
                                    className='w-[75%] p-1.5 rounded outline-none' />

                            </div>
                            <div className='flex justify-center gap-2 w-96 p-3'>
                                <label
                                    htmlFor='name'
                                    className='w-[20%] text-center p-1 rounded text-white bg-slate-600'>lastName</label>
                                <input
                                    onChange={(e) => setLastName(e.target.value)}
                                    value={lastName}
                                    type='text'
                                    placeholder='Enter LastName'
                                    className='w-[75%] p-1.5 rounded outline-none' />
                            </div>

                            <div className='flex justify-center gap-2 w-96 p-3'>
                                <label
                                    className=' w-[20%] text-center p-1 rounded text-white bg-slate-600'>Password</label>
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    type='password'
                                    placeholder='Enter Password'
                                    className='w-[75%] p-1.5 rounded outline-none' />

                            </div>
                            <button
                                onClick={updateHandler}
                                className='w-[70%] mx-auto  m-3 p-2 border bg-sky-400 text-white  rounded'>Update</button>
                        </div>
                    ) : null
                }

            </div>
        </div>
    )
}

export default Dashboard


export async function getServerSideProps(context) {
    const { token } = context.req.cookies
    const secretKey = process.env.SECRET_KEY
    const result = verifyToken(token, secretKey)
    console.log(result);

    if (!result)
        return {
            redirect: { destination: "/signin", permanent: false },
        }
    return {
        props: { result: JSON.parse(JSON.stringify(result)) }
    }
}