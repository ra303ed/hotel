'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(()=> {
        const changeColor = () => {
            if(window.scrollY >= 90) {
                setColor('#fff')
                setTextColor('#000')
            }else{
                setColor('transparent')
                setTextColor('#fff')
            }
            
        }

        window.addEventListener('scroll', changeColor)
    }, [])


  return (
    <div style={{backgroundColor: `${color}`}} className='font-playfair fixed left-0 top-0 z-20 ease-in duration-300 w-screen tablet:px-20 px-5 '>
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white '>
        <Link href='/' style={{color: `${textColor}`}} className='text-3xl font-bold'>The Wellhall</Link>
        <ul  style={{color: `${textColor}`}} className='hidden laptop:flex'>
            <li className='p-4'>
                <Link href='/hotels'>Our Hotels</Link>
            </li>
            <li className='p-4'>
                <Link href='/about-us'>About us</Link>
            </li>
            <li className='p-4'>
                <Link href='/contact'>Contact</Link>
            </li>
        </ul>
        {/* =========[ Mobile Button ========= */}
        <div style={{color: `${textColor}`}} onClick={handleNav} className='block laptop:hidden cursor-pointer  z-30'>
            {nav ? <AiOutlineClose className='text-white' size={20} /> : <AiOutlineMenu  size={20} />}
        </div>
        {/* ========= Mobile Menu ========= */}
        <div className= {
            nav
            ? 'absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center  w-full h-screen bg-black text-center ease-in duration-300' 
            : 'absolute top-0 left-[-100%] right-0 bottom-0 flex items-center justify-center  w-full h-screen bg-black text-center ease-in duration-300' } >
            <ul>
                <li className='p-4 text-4xl hover:text-white/80'>
                    <Link href='/hotels'>Our Hotels</Link>
                </li>
                <li className='p-4 text-4xl hover:text-white/80'>
                    <Link href='/about-us'>About us</Link>
                </li>
                <li className='p-4 text-4xl hover:text-white/80'>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
        </div>

      </div>
    </div>
  )
}

export default Navbar
