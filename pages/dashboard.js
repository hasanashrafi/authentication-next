import { verifyToken } from '@/utils/auth'
import { redirect } from 'next/dist/server/api-utils'
import React from 'react'

function Dashboard() {
    return (
        <div className='min-h-screen p-5 '>
            Dashboard
        </div>
    )
}

export default Dashboard


export async function getServerSideProps(context) {
    const { token } = context.req.cookies
    const secretKey = process.env.SECRET_KEY

    const result = verifyToken(token, secretKey)
    if (!result)
        return {
            redirect: { destination: "/signin", permanent: false },
        }
    return {
        props: { result }
    }
}