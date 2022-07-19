import React from 'react'
import HeroBgImg from '../images/heroBgImg (2).svg'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <div className=''>
      <div className='flex flex-col md:flex-row-reverse max-w-[1300px] mx-auto'>
        <div className=''>
          <img src={HeroBgImg} className='w-[100vw] 2xl:w-[47vw] h-[96vw] 2xl:h-[43vw]' alt="" />
        </div>
        <div className='pr-10 pl-6 2xl:w-[50vw] 2xl:place-self-end 2xl:pb-10'>
          <h1 className='text-2xl 2xl:text-5xl uppercase text-warning tracking-wide 2xl:mb-5'>Take your business <br/> around the world <br/> in 80 hours**</h1>
          <p className="text-md 2xl:text-3xl text-primary-content mt-2 mb-5 2xl:mb-10">Get a website and scale your <br/> business today.</p>
          <Link className='text-primary-content text-md 2xl:text-xl' to={'/web'}><button className=' bg-black btn 2xl:btn-lg border-0 mt-5 mb-6 2xl:mb-[12rem] px-6 2xl:px-8 rounded-full text-[1rem] 2xl:text-[1.2rem] text-warning tracking-wider shadow-md mr-4'>Get started</button> ₹499 onwards </Link>
        </div>
      </div>
    </div>
  )
}

export default Banner