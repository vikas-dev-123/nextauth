'use client'

import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const ProfilePage = () => {
  const router = useRouter()
 const [data, setData] = useState("nothing")


 const getUserDetails = async () => {
try {
   const res = await axios.post("/api/users/me")
   console.log(res.data.data._id)
   setData(res.data.data._id)
} catch (error:any) {
  console.log(error.message)
  toast.error(error.message)
}

 }


 const logout = async () => {
     try {
       await axios.get('/api/users/logout')
        toast.success("logout success")
        router.push("/login")
     } catch (error:any) {
      console.log(error.message)
      toast.error(error.message)
      
     }
 }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>Profile Page</h1>
      <h2>{data === "nothing" ? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
      <button className='py-2 border border-gray-300 px-5 bg-blue-500 hover:bg-blue-800 rounded mb-4 focus:outline-none focus:border-gray-600'
      onClick={logout}
      >logout</button>
       <button className='py-2 border border-gray-300 px-5 bg-green-500 rounded hover:bg-green-800 mb-4 focus:outline-none focus:border-gray-600'
      onClick={getUserDetails}
      >Get User Details</button>
    </div>
  )
}



export default ProfilePage
