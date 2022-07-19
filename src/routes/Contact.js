import React from 'react'
import { Link } from 'react-router-dom'
import ContactFooter from '../components/ContactFooter'

function Contact() {
    return (
        <div>
            <div className='max-w-6xl mx-auto px-[10vw] sm:px-[6vw] pt-12'>
                <h2 className='text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-center text-slate-900 mt-[2vw] md:[4vw] lg:mt-[5vw] 2xl:mt-[6vw]'>Let's make something great together.</h2>
                <p className='text-xl md:text-2xl lg:text-3xl text-center mt-[5vw] font-thin text-slate-700'>Contact us or start a project, we'll get back to you soon ✌</p>
            </div>
            <div className='text-center mt-12 md:mt-16'>
                <Link className='' to='/'>
                    <button className='btn px-8 btn-primary btn-lg rounded-full bg-black hover:bg-slate-800 text-warning tracking-wider hover:bg-primary hover:text-primary-content border-0 outline-0 transition hover-border-0 ease-in-out duration-300 shadow-lg shadow-slate-100 hover:shadow-slate-300'>Start a Project</button>
                </Link>

            </div>
            <div className='mb-[2vw] md:mb-[4vw] lg:mb-[5vw] xl:mb-[6vw]'/>
            <ContactFooter/>
        </div>
    )
}

export default Contact