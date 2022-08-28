import React from 'react'
import { FaEnvelope, FaWhatsappSquare, FaPhoneAlt, FaAddressCard } from 'react-icons/fa'
import { Link } from 'react-router-dom';

function ContactFooter() {
    const weather = 23
    return (
        <div className='mx-10 md:mx-auto mt-10 tracking-wide flex flex-col md:justify-around md:flex-row'>
            <div className=''>
                <p className='mb-3 lg:mb-4 text-secondary lg:text-[1.2rem]'>Let's work together</p>
                <Link to='/' className='text-lg lg:text-[1.2rem] mb-[.2rem] rounded-full text-primary-content w-[11.2rem] lg:w-[12.1rem] pt-[.4rem] py-1 px-2 pl-4 shadow flex bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-gradient-to-l'>Start a Project <span className='ml-2 text-xl lg:text-2xl items-center '>→</span></Link>
                <p className='text-[1.2rem] lg:text-[1.3rem] lg:mt-1 font-thin flex items-center'><FaEnvelope className='mt-[-.05rem] mr-3'/><a href="mailto:hey@kerasoft.in">hey@kerasoft.in</a></p>
            </div>
            <div>
                <p className='lg:text-[1.2rem] mb-3 lg:mb-4 mt-8 md:mt-0 text-secondary'>Speak to us</p>
                <p className='text-xl lg:text-[1.4rem] mb-1 flex items-center'><FaPhoneAlt size={22} className='mr-3'/><a href='tel:+916363483718'>{`(91) 6363 483 718`}</a></p>
                <p className='text-[1.2rem] lg:mt-1 font-thin flex items-center'><FaWhatsappSquare size={26} className='mt-[-.05rem] mr-3'/><a href="https://api.whatsapp.com/send?phone=13653640333">(01) 365 364 0333</a></p>
            </div>
            <div>
                <p className='lg:text-[1.2rem] mb-3 lg:mb-4 mt-8 md:mt-0 text-secondary'>Headquarters</p>
                <Link to='/' className='text-xl lg:text-[1.4rem] mb-1 flex items-center'><FaAddressCard size={23} className='mr-3'/>311 Kappa Square</Link>
                <p className='text-[1.2rem] lg:mt-1 font-thin flex flex-col mb-6'>
                    <span>Bengaluru, KA</span>
                    <span>India, 570086 | ⛅ {weather}°</span>
                </p>
            </div>
            <div>
                <p className='lg:text-[1.2rem] mb-3 lg:mb-4 mt-2 md:mt-0 text-secondary'>Heartquarters</p>
                <Link to='/' className='text-xl lg:text-[1.4rem] mb-1 flex items-center'><FaAddressCard size={23} className='mr-3'/>53 Fiesto Building</Link>
                <p className='text-[1.2rem] lg:mt-1 font-thin flex flex-col mb-6'>
                    <span>Cannanore, KL</span>
                    <span>India, 670047 | ⛅ {weather + 6}°</span>
                </p>
            </div>
        </div>
    )
}

export default ContactFooter