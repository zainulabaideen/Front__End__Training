import React from 'react'
import Button from './Button'
import TailwindNavbar from './TailwindNavbar'

const Main = () => {
  return (
    <div>
      <section className='h-screen bg-gray-600 font-[Inter,serif] bg-cover md:bg-top bg-center'>
<TailwindNavbar />
<div className='flex flex-col justify-center text-center items-center '>
<h2 className='text-white text-2xl font-medium '>Fashion Tips 
</h2>
<h1 className='md:text-5xl text-3xl text-white font-semibold py-5'>
    Items Every Woman should have
</h1>
<div className='text-xl'>
    <Button />
</div>
</div>
      </section>
    </div>
  )
}

export default Main
