import React from 'react'
import { bb, cc } from '@/public';
import Image from 'next/image';

const TwoPictures = () => {
  return (
    <div className='desktop:flex  bg-body-brown w-screen   px-10 py-32 gap-5 desktop:items-start items-center '>
    <div className='flex flex-col  gap-5 flex-1 tablet:items-center '>
        <Image 
          src={bb}
          width={600}
          height={1000}
          alt='aa'
          className='w-cover desktop:h-[700px]  '
        />
        <p className='text-xs py-5 px-5 text-center border-[1px] border-color-brown desktop:w-[600px] mobile:mb-10 '>An intriguing caption that describes the room goes here. Use a flattering photo, then describe away!</p>
      </div>
      <div className='flex flex-col items-start justify-start gap-5 flex-2 tablet:items-center '>
        <Image 
          src={cc}
          width={950}
          height={1000}
          alt='aa'
          className='w-cover desktop:h-[700px]  '
        />
        <p className='text-xs py-5  border-[1px] border-color-brown w-full px-10 text-center'>An intriguing caption that describes the room goes here. Use a flattering photo, then describe away!</p>
      </div>
    </div>
  )
}

export default TwoPictures
