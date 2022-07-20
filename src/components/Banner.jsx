import React from 'react'
import { Link } from 'react-router-dom'
import Balloon from '../images/balloon1.svg'
import Bg from '../images/balloonBg.svg'

function Banner() {
  return (
    <div className=''>
      <div className='flex flex-col mx-auto md:items-center lg:flex-row-reverse lg:justify-around lg:max-w-[1300px] '>
        <div className='relative w-[100vw] h-[96vw] md:w-[70vw] md:h-[66vw] lg:w-[44vw] lg:h-[40vw] 2xl:w-[47vw] 2xl:h-[43vw]'>
          <img src={Bg} alt="" className='absolute top-[50%] -translate-y-1/2 lg:top-[60%] 2xl:top-[50%] ' />
          <img src={Balloon} className='balloon absolute top-[50%] -translate-y-1/2 w-[96vw] h-[93vw] lg:top-[60%] lg:w-[47vw] lg:h-[43vw] 2xl:top-[50%] 2xl:w-[47vw] 2xl:h-[43vw]' alt="" />
        </div>
        <div className='pr-10 pl-6 pt-4 lg:place-self-end 2xl:w-[50vw]'>
          <h1 className='text-[1.3rem] text-[#f5d142] uppercase tracking-wide md:text-[2rem] lg:text-4xl 2xl:text-5xl 2xl:leading-[3.2rem] 2xl:mb-5'> 
            Take your business <br/> 
            around-the-world <br/> 
            in 80 hours** 
          </h1>
          <p className="text-md text-primary-content mt-2 mb-5 md:text-2xl lg:text-[1.35rem] 2xl:text-[1.5rem] 2xl:mb-10">
            Get a website and scale your <br/> 
            business today.
          </p>
          <Link to={'/web'} className='text-primary-content text-md md:text-[1.3rem] lg:text-xl'>
            <button className='bg-black text-[1rem] text-warning tracking-wider shadow-xl border-0 rounded-full px-5 mt-5 mb-6 mr-4 btn md:btn-lg lg:text-[1.05rem] lg:btn-md 2xl:btn-lg lg:px-6 2xl:px-8 2xl:mb-[12rem] 2xl:text-[1.2rem]'>
              Get started
            </button> 
            ₹499 onwards 
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Banner