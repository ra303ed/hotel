import React from 'react'

const InThePress = () => {
  return (
    <div className='w-screen h-screen bg-b-footer bg-cover flex justify-center py-10 '>
        <div className='flex flex-col items-center justify-center laptop:gap-40 mobile:gap-10 px-10 text-white'>
        <h1 className='font-bold tablet:text-6xl mobile:text-4xl'>In the Press</h1>
        <div className='grid laptop:grid-cols-3 laptop:gap-40 mobile:gap-10'>

            <div  className='flex flex-col laptop:gap-10 gap-3'>
            <span className='text-5xl font-bold'>;;</span>
            <p className='mobile:text-sm laptop:text-base'>Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.</p>
            <h3>-<br/>Santa Solana Post</h3>
            </div>

            <div  className='flex flex-col laptop:gap-10 gap-3'>
            <span  className='text-5xl font-bold'>;;</span>
            <p  className='mobile:text-sm laptop:text-base'>Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.</p>
            <h3>-<br/>Mariana's Luxe Travels</h3>
            </div>

            <div  className='flex flex-col laptop:gap-10 gap-3'>
            <span  className='text-5xl font-bold'>;;</span>
            <p  className='mobile:text-sm laptop:text-base'>Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.</p>
            <h3>-<br/>Fairhill Journal</h3>
            </div>
        </div>
        </div>
  </div>

  )
}

export default InThePress
