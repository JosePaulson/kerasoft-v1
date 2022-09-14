import React from 'react'
import { FaTwitter, FaFacebook, FaGithub, FaCodepen, FaDribbble, FaLinkedin } from 'react-icons/fa'
import CEO from '../images/ceo.png'
import CTO from '../images/cto.png'
import BDE from '../images/bde.png'

function Team() {
  return (
    <div className="relative pb-[2vw] pt-[2vw] opacity-100">
      <div className="opacity-[.075] z-[-1] absolute inset-0 rounded-lg bg-[url('/src/images/teambg.png')] bg-no-repeat bg-center bg-cover blur-sm"></div>
      {/* <div className="text-center relative border-b-[2px] lg:border-b-[transparent] border-secondary mb-12 mt-10 md:mt-4">
        <h2 className='absolute top-[-.9rem] bg-base-100 inline-block text-2xl uppercase font-normal px-2 text-secondary tracking-wider'>key people</h2>
      </div> */}
      <div className='max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:pt-30 md:pt-20 pb-6'>
        <div className='flex flex-col items-center mt-4 '>
        <img className="w-[16rem] pt-3 mask mask-circle mb-4" src={CEO} alt="" />
        <h2 className='font-medium'>Chethan Padnekar</h2>
        <p className='font-thin'>The Boss</p>
        <div className='flex gap-x-2 pt-2'><FaTwitter size={24} fill={"#c3b"}/><FaFacebook size={24} fill={"#c3b"}/><FaLinkedin size={24} fill={"#c3b"}/></div>
        </div>
        <div className='flex flex-col items-center mt-4'>
          <img className="w-[16rem] pr-3 mask mask-circle mb-4" src={CTO} alt="" />
          <h2 className='font-medium'>Paulson Jose</h2>
          <p className='font-thin'>The Nerd</p>
          <div className='flex gap-x-2 pt-2'>
            <a href="/" target='_blank'>
              <FaGithub size={24} fill={"#c3b"}/>
            </a>
            <a href="/" target='_blank'>
              <FaDribbble size={24} fill={"#c3b"}/>
            </a>
            <a href="/" target='_blank'>
              <FaCodepen size={24} fill={"#c3b"}/>
            </a>
            <a href="/" target='_blank'>
              <FaLinkedin size={24} fill={"#c3b"}/>
            </a>
          </div>
        </div>
        <div className='flex flex-col items-center mt-4'>
          <img className="w-[16rem] mask mask-circle mb-4" src={BDE} alt="" />
          <h2 className='font-medium'>Ravikiran Teja</h2>
          <p className='font-thin'>The Book Keeper</p>
          <div className='flex gap-x-2 pt-2'><FaTwitter size={24} fill={"#c3b"}/><FaFacebook size={24} fill={"#c3b"}/><FaLinkedin size={24} fill={"#c3b"}/></div>
        </div>
      </div>
    </div>
  )
}

export default Team