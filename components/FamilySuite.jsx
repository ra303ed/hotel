import React from 'react'
import { a1 } from '@/public';
import Image from 'next/image';

const FamilySuite = () => {
  return (
    <div className='flex mobile:flex-col mobile:justify-center laptop:flex-row  laptop:justify-between bg-body-white w-screen  gap-5 px-10 py-10 '>
    <div  className='flex flex-col mobile:justify-center tablet:items-start laptop:justify-between gap-8 justify-between'>
      <h1 className='text-7xl text-color-brown w-[500px] mobile:text-5xl font-bold'>The Family Suite</h1>
      <p  className='text-lg text-color-brown desktop:w-[600px] mobile:text-base tablet:mb-5 '>Showcase the best your property has to offer by highlighting one of your accommodations. Add a flattering photo, then describe the room's best feature.</p>
    </div>
    <div className='flex flex-col items-center justify-center gap-5 '>
      <Image 
        src={a1}
        width={500}
        height={350}
        alt='aa'
        className='w-cover  laptop:w-[700px] '
      />
      <p className='text-xs border py-2 tablet:px-10 mobile:px-5 tablet:border mobile:flex border-color-brown '>An intriguing caption that describes the room goes here.
Use a flattering photo, then describe away!</p>
    </div>
  </div>
  )
}

export default FamilySuite
