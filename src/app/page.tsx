import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='flex gap-5 items-center justify-center min-h-screen py-2'>
      <button className='p-2 border hover:bg-white hover:text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'>
        <Link href='/signup'>Sign Up</Link>
      </button>
      <button className='py-2 px-4 border hover:bg-white hover:text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'>
        <Link href='/login'>Login</Link>
      </button>
    </div>
  )
}

export default page
