import React from 'react'
import { aa } from '@/public';
import Image from 'next/image';

const Welcome = () => {
  return (
    <div className='flex flex-col laptop:flex-row gap-10  bg-body-white w-screen  px-10 py-20'>
        <div  className='flex flex-col items-start gap-16 justify-center px-10 mobile:gap-5 '>
          <h1 className='laptop:text-7xl  text-color-brown mobile:text-4xl'>Welcome to your luxurious home away from home </h1>
          <p  className='text-lg text-color-brown mobile:text-base'>Write a paragraph that talks about your brand or property here. Convince your prospective clients to choose you and your offerings by highlighting the qualities that set you apart from the competition. Your audience is already on your website, so push a little bit harder to seal the deal!</p>
        </div>
        <div className='flex items-center justify-center '>
          <Image 
            src={aa}
            width={400}
            height={350}
            alt='aa'
            className='w-cover  laptop:w-[1200px] '
          />
        </div>
    </div>
  )
}

export default Welcome
