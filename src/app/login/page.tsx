'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Link from 'next/link';



const LoginPage = () => {
  const router = useRouter()// hook hai navigation ke liye
  const [user, setUser] = useState({
    email: "",
    password:"",
     
  })

 const [buttonDisabled, setButtonDisabled] = useState(false)
 
 const [loading, setLoading] = useState(false)

 const onLogin = async () => {
  try {
  setLoading(true)
  const response = await axios.post("/api/users/login", user) /// Yahan pr axios use kiye hain . yahan se api me reponse ko bheja 
  console.log("Login success", response.data);
  router.push('/profile')

  } catch (error:any) {
    console.log("Signup failed");
    toast.error(error.message)
  }
 }

 useEffect(() => {
  if (user.email.length > 0 && user.password.length > 0  ) {
    setButtonDisabled(false)
  }else{
    setButtonDisabled(true)
  }
 }, [user])

  return (
     <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>{loading ? "processing" : "Login"}</h1>
      <hr />
      <label htmlFor="email">email</label>
      <input className='rounded-md p-2 text-black border-zinc-600 focus:outline-none focus:border-gray-900 mb-4   '
      id='email'
      value={user.email}
      onChange={(e) => setUser({...user, email: e.target.value})}
      placeholder = 'email'
      type="email" />
      <label htmlFor="username">password</label>
      <input className='rounded-md p-2 text-black border-zinc-600 focus:outline-none focus:border-gray-900 mb-4   '
      id='username'
      value={user.password}
      onChange={(e) => setUser({...user, password: e.target.value})}
      placeholder = 'password'
      type="password" />
      <button onClick={onLogin}
      className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'>
        {buttonDisabled ? "No Login" : "Login"}
      </button>
      <Link href='/signup'>Visit Signup Page</Link>
     </div>
  )
}



export default LoginPage 