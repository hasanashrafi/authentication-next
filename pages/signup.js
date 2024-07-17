import Link from 'next/link'
import { useState } from 'react'

function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const addHandler = async () => {
        const res = await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" }
        })
        const data = await res.json()
        console.log(data);
    }
    
    return (
        <div className='min-h-screen'>

            <div className="flex flex-col bg-white rounded-lg shadow-xl mx-auto justify-center p-5  content-center mt-10 w-fit">
                <h3 className="mb-4 text-center text-3xl font-semibold font-mono text-indigo-500">
                    Register
                </h3>

                <input
                    value={email}
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}

                    placeholder="Enter email"
                    className="m-5 p-2 rounded text-gray-900 outline-none focus:border-b-4 focus:border-indigo-800 w-96 text-xl shadow-xl" />
                <input
                    value={password}
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="m-5 p-2 rounded text-gray-900 outline-none focus:border-b-4 focus:border-indigo-800 w-96 text-xl shadow-xl" />
                <button
                    onClick={addHandler}
                    className='border p-3 bg-blue-600 text-white rounded text-2xl m-4 my-5 hover:border hover:border-blue-600 hover:text-blue-700 hover:bg-white transition-all ease-in-out'>
                    <Link href='/signup'>
                        create account
                    </Link>
                </button>
            </div>

        </div>
    )
}

export default SignUp