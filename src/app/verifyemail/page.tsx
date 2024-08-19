'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { useRouter } from 'next/router'
import Link from 'next/link'

const verifyEmailPage = () => {

//   const router = useRouter()

  const [token, setToken] = useState("")
  const [verified, setVerified] = useState(false)
  const [error, setEroor] = useState(false)

  const verifyUserEmail = async () => {
   try {
     await axios.post("/api/users/verifyemail", {token})
     setVerified(true)
     setEroor(false)
   } catch (error:any) {
    setEroor(true)
    console.log(error.response.data);
   }
  }

  useEffect(() => {
    setEroor(false)
  const urlToken = window.location.search.split("=")[1]   /// window.location se hmm url search kr skte hain ur access bhi kr skte hain
  setToken(urlToken || "")  

//   const {query} = router;
//   const urlTokenTwo  = query.token
                  
}, [])

useEffect(() => {
    setEroor(false)
    if (token.length>0) {
        verifyUserEmail()
    }
}, [token])

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
       <h1 className='text-4xl' >Verify Email</h1>
       <h2 className='p-2 bg-orange-500 text-black'>
        {token? `${token}`: "no token"}
       </h2>
       {verified && (
        <div>
            <h2>Verified</h2>
            <Link href="/login">Login</Link>
        </div>
       )}
       {error && (
        <div>
            <h2>Error</h2>
            
        </div>
       )}
    </div>
  )
}

export default verifyEmailPage
