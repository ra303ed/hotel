import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='absolute top-0 bottom-0 right-0 left-0 bg-black/40 z-0'/>
        <div className='w-screen h-screen bg-home-bg bg-cover bg-center bg-fixed flex items-center justify-center sm:px-10 z-10'>
            <div className='flex items-center flex-col  justify-center z-10'>
                <h5 className='text-white text-2xl  font-semibold '>Welcome to</h5>
                <h1 className='text-white font-extrabold tablet:text-8xl laptop:text-9xl mobile:text-6xl sm:text-red2 py-5 '>The Wellhall</h1>
                <h3 className='text-white tablet:text-4xl text-3xl'>Resort & Spa Hotel</h3>
                <button className='px-10 py-2 bg-white text-base mt-10 hover:bg-white/30  hover:text-white ease-in-out duration-100 hover:underline hover:text-offset-1'>LEARN MORE</button>
            </div>
        </div>
    </>
  )
}

export default Hero
