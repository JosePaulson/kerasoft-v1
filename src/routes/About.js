import React from 'react'
import Team from '../components/Team'
import BgImg from '../images/robotic-pet.webp'
import DeepLearning from '../images/icons/deep-learning.png'
import Developer from '../images/icons/developer.png'
import Security from '../images/icons/security.png'
import Code from '../images/icons/code.png'
import Chip from '../images/icons/electronics.png'
import Opensource from '../images/icons/opensource.png'


import {FiGithub} from 'react-icons/fi'
function About() {
  return (
    <div>
      <div className='container mx-auto px-6 mb-8'>
        <div className='mt-8 flex items-center flex-col'>
          <img src={BgImg} alt='robotic pet' />
          <h1 className='text-3xl text-center font-[700] text-slate-black mb-4 tracking-wider'>An Initiative <br/> To Normalize Digitalization <br/> In The Rural</h1>
          {/* <p className='mt-6 italic text-[1.15rem] text-slate-700 text-center mb-4'>&nbsp;&nbsp;If you represent a company or an institution, we would like to work strickly on compliance with our policies(you can refer to our B2B policies within terms and conditions). If you are an individual, we have liberal policies(refer to general consumer policy within in terms and conditions).</p> */}
        </div>
        <div className='flex justify-between sm:justify-around py-6'>
          <img className='w-12 h-12 sm:w-16 sm:h-16' src={Security} alt=''/>
          <img className='w-12 h-12 sm:w-16 sm:h-16' src={Chip} alt=''/>
          <img className='w-12 h-12 sm:w-16 sm:h-16' src={DeepLearning} alt=''/>
          <img className='w-12 h-12 sm:w-16 sm:h-16' src={Developer} alt=''/>
          <img className='w-12 h-12 sm:w-16 sm:h-16' src={Code} alt=''/>
        </div>
        <p className='mt-3 italic text-[1.15rem] text-slate-700 text-center mb-1'>&nbsp;&nbsp;<span className='text-[1.75rem] leading-3'>A</span>t Kerasoft we as a team aim to build digital products and services which in-turn make lives easier, for example; <span className='text-purple-600'>online education & shopping, tools built on AI, smart homes & farms, tools to automate day-to-day tasks</span>, and a lot more. We are a start-up and at early stages of growth, but we want to serve our best in quality and performance.</p>
        <p className='mt-4 italic text-[1.15rem] text-slate-700 text-center mb-1'>Currently we are only providing fewer services than the catalogue(for fast delivery products/services), WHY? because we don't want to skip any steps neccessary in developement. We tend to be as original as possible, and that's our signature.</p>
        <div className='text-center mt-12'>
          <h2 className='text-3xl text-gray-700 font-bold'>Have an !dea, but don't know the <br /><span className='font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>HOW TO ?</span> </h2>
          <p className='mt-2 text-lg'>We have a great team for assistance, OR, come work with us hand-in-hand.</p>
          <p className='font-thin text-black'><button className='border-purple-600 text-purple-600 border-[1px] p-1 rounded-md'>know more</button> &nbsp;about our partner program</p>
          <button className='btn mt-7 bg-slate-800 px-6'>Start&nbsp; a &nbsp;project</button> <br />
          <button className='border-purple-600 text-purple-600 border-[2px] p-2 px-6 rounded-md mt-4 tracking-wide text-lg'>Request Callback</button>
        </div>
        <div className='flex justify-center flex-col items-center mt-12'>
          <img className='w-24' src={Opensource} alt='opensource logo' />
          <p className='mt-1 text-center text-lg text-slate-700'>Code for most of our projects are availabe on our github and are licensed as opensourceware</p>
          <button className='btn btn-outline normal-case tracking-wide rounded-md mt-4 text-slate-800 font-medium px-6 text-lg border-[2px] border-slate-800'><FiGithub size={24}/> &nbsp; Github</button> <br />
        </div>
      </div>
      <Team />
    </div>
  )
}

export default About