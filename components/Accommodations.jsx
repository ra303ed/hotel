import React from 'react'
import { a1, a2, a3 } from '@/public';
import Image from 'next/image';

const Accommodations = () => {
  return (
    <div className='bg-body-brown p-10 '>
        <h1 className='tablet:text-7xl text-color-brown flex justify-center mb-20 mobile:text-5xl font-bold'>Accommodations</h1>
        <div className='grid laptop:grid-cols-3 gap-5  '>
            <div className='flex  items-center flex-col gap-y-5  '>
                <Image
                src={a3}
                width={525}
                height={150}
                alt='pp'
                className='w-cover flex items-center'
                />
                <div className='flex flex-col items-start border-[1px] border-color w-full py-5 px-5 gap-3'>
                    <div>
                        <p className='text-base mb-7'>2 adults | 1 child below 7</p>
                    </div>
                    <div className='mobile:flex  desktop:flex gap-3 justify-between items-center w-full'>
                        <div>
                        <h3 className='text-xl font-semibold'>De Luxe Room</h3>
                        <span  className='text-lg'>from $189 a night</span>
                        </div>
                        <div className='flex justify-end'>
                            <button className='px-5 py-2 border hover:bg-color-brown hover:border-color-brown  hover:text-white ease-in-out duration-100'>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className='flex  items-center flex-col gap-y-5  '>
                <Image
                src={a2}
                width={525}
                height={150}
                alt='pp'
                className='w-cover flex items-center'
                />
                <div className='flex flex-col items-start border-[1px] border-color w-full py-5 px-5 gap-3'>
                    <div>
                        <p className='text-base mb-7'>2 adults | 1 child below 7</p>
                    </div>
                    <div className='mobile:flex  desktop:flex gap-3 justify-between items-center w-full'>
                        <div>
                        <h3 className='text-xl font-semibold'>De Luxe Room</h3>
                        <span  className='text-lg'>from $189 a night</span>
                        </div>
                        <div className='flex justify-end'>
                            <button className='px-5 py-2 border hover:bg-color-brown hover:border-color-brown  hover:text-white ease-in-out duration-100'>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className='flex  items-center flex-col gap-y-5  '>
                <Image
                src={a1}
                width={525}
                height={150}
                alt='pp'
                className='w-cover flex items-center'
                />
                <div className='flex flex-col items-start border-[1px] border-color w-full py-5 px-5 gap-3'>
                    <div>
                        <p className='text-base mb-7'>2 adults | 1 child below 7</p>
                    </div>
                    <div className='mobile:flex  desktop:flex gap-3 justify-between items-center w-full'>
                        <div>
                        <h3 className='text-xl font-semibold'>De Luxe Room</h3>
                        <span  className='text-lg'>from $189 a night</span>
                        </div>
                        <div className='flex justify-end'>
                            <button className='px-5 py-2 border hover:bg-color-brown  hover:border-color-brown hover:text-white ease-in-out duration-100'>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

  </div>
  )
}

export default Accommodations
