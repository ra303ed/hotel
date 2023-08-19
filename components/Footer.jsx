import React from 'react';
import { BiLogoInstagramAlt, BiMap } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsFillTelephoneFill, BsFacebook, BsTwitter,  } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className=' h-screen bg-color-brown-b px-20 py-[40px] text-white flex flex-col justify-between gap-10 '>
        <h1 className='laptop:text-6xl mobile:text-5xl font-bold mobile:text-center laptop:text-start'>The Wellhall</h1>

        <div className='grid laptop:grid-cols-3 laptop:gap-20 gap-5 '>

            <div className='border-[1px] border-white text-white laptop:p-10 mobile:p-5 flex flex-col laptop:gap-5 gap-2'>
                <h3 className='font-bold mobile:text-2xl laptop:text-3xl laptop:mb-5 mb:3 '>Reservations Office</h3>
                <p className='mobile:text-xs laptop:text-base flex items-center gap-1'>
                    <FaMapMarkerAlt size={17}/> 123 Anywhere St.,
        Any City ST 12345</p>
                <p className='mobile:text-xs laptop:text-base flex items-center gap-1'>
                    <BsFillTelephoneFill size={17} className='' />1123-456-7890</p>
                <p className='mobile:text-xs laptop:text-base flex items-center gap-1' >
                    <MdEmail size={17} className=''/> hello@reallygreatsite.com</p>
            </div>

            <div className='border-[1px] border-white text-white laptop:p-10 mobile:p-5 flex flex-col laptop:gap-5 gap-2 '>
                <h3 className='font-bold mobile:text-2xl laptop:text-3xl laptop:mb-5 mb:3 '>Office Hours</h3>
                <p className='mobile:text-xs desktop:text-base'>Monday to Friday 
                9:00 am to 6:00 pm</p>
                <p className='mobile:text-xs desktop:text-base'>Saturday
                9:00 am to 12:00 noon</p>
            </div>

            <div className='border-[1px] border-white text-white laptop:p-10 mobile:p-5 flex flex-col laptop:gap-5 gap-2 '>
                <h3 className='font-bold mobile:text-2xl laptop:text-3xl laptop:mb-5 mb:3 '>Get Social</h3>
                <p className='flex flex-row gap-5  mobile:text-xs laptop:text-base'>
                <BsFacebook size={20}/> 
                <BsTwitter size={20}/> 
                <BiLogoInstagramAlt size={20}/> 
                </p>
                <div className='flex items-center justify-center'>
                <button className='py-4 px-5 w-60 bg-white rounded-full text-black text-sm font-semibold '>Tag us in your photos!
                </button> 
                </div>
            </div>
        </div>

        <div className='gap-3 flex flex-col '>

        <p className='mobile:text-sm laptop:text-base font-semibold '>The Wellhall Hotel</p>
        <p className='mobile:text-sm laptop:text-base font-semibold '>&copy; 2023 The Wellhall Hotel. All rights reserved</p>
        
        </div>

    </div>
  )
}

export default Footer
