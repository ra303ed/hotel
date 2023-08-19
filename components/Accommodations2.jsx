import React from 'react'
import { b1, b2, b3 } from '@/public';
import Image from 'next/image';

const Accommodations2 = () => {
  return (
    <div className='bg-body-white p-10 '>
    <h1 className='tablet:text-7xl text-color-brown flex justify-center mb-20 mobile:text-5xl font-bold'>Accommodations</h1>
    <div className='grid laptop:grid-cols-3 laptop:gap-5 mobile:gap-10   '>

      <div className='flex  items-center flex-col gap-y-5  '>
        <Image
        src={b1}
        width={525}
        height={150}
        alt='pp'
        className='w-cover flex items-center'
        />
        <div className='flex flex-col items-start border-[1px] border-color w-full py-5 px-5 gap-3'>
          <h3 className='text-xl font-semibold'>Early Bird Discount </h3>
          <p className='text-base mb-7'>List your offers, promos, or special membership privileges and perks here to entice people to book your property.</p>
          <button className='px-5 py-2 border hover:bg-color-brown hover:border-color-brown hover:text-white ease-in-out duration-100'>More Details</button>
        </div>
      </div>


      <div className='flex  items-center flex-col gap-y-5  '>
        <Image
        src={b2}
        width={525}
        height={150}
        alt='pp'
        className='w-cover flex items-center'
        />
        <div className='flex flex-col items-start border-[1px] border-color w-full py-5 px-5 gap-3'>
          <h3 className='text-xl font-semibold'>Wellhall Members Club</h3>
          <p className='text-base mb-7'>List your offers, promos, or special membership privileges and perks here to entice people to book your property.</p>
          <button className='px-5 py-2 border hover:bg-color-brown hover:border-color-brown hover:text-white ease-in-out duration-100'>More Details</button>
        </div>
      </div>
      <div className='flex  items-center flex-col gap-y-5  '>
        <Image
        src={b3}
        width={525}
        height={150}
        alt='pp'
        className='w-cover flex items-center'
        />
        <div className='flex flex-col items-start border-[1px] border-color w-full py-5 px-5 gap-3'>
          <h3 className='text-xl font-semibold'>Book 3 Nights, 
Get 1 Night Free</h3>
          <p className='text-base mb-7'>List your offers, promos, or special membership privileges and perks here to entice people to book your property.</p>
          <button className='px-5 py-2 border hover:bg-color-brown hover:border-color-brown hover:text-white ease-in-out duration-100'>More Details</button>
        </div>
      </div>
    </div>

  </div>
  )
}

export default Accommodations2
