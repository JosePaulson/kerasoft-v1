import React, { useState } from 'react'
import { useLocation } from 'react-router'
// import { FaTelegram } from 'react-icons/fa'
function Form() {
    const location = useLocation()
    const formDetails = location?.state || {name:"", email:"", company:"", contact:"", button: "request meeting"}
    const [formData, setFormData] = useState({
        ...formDetails,
        date: "",
    })
    const [blur, setBlur] = useState({name:false, email:false, contact:false})

    const {name, email, contact, company, date, button} = formData
    console.log(formData)

    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value})
    }

    const handleBlur = (e) => {
        setBlur({...blur, [e.target.id]:true})
    }

    const handleFocus = (e) => {
        setBlur({...blur, [e.target.id]:false})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='flex flex-col items-center md:flex-row md:justify-center'>
            {/* <img src={Hey} alt="" className='w-3/5 md:w-1/4' /> */}
            <form className='w-[80vw] py-[4vw] grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8' onSubmit={handleSubmit}>
                <div className='relative'>
                    <label className='text-[.95rem] text-black absolute bg-white px-1 top-[-8px] left-4'>NAME</label>
                    <input
                        className='peer block w-full mt-1 border-[1px] rounded-md p-3 pb-2 border-gray-800 placeholder-gray-300 invalid:border-[#9b1003] invalid:border-2'
                        type="text" 
                        placeholder='Gustavo Fring'
                        id='name'
                        value={name}
                        pattern="^[A-Za-z ]{3,16}$"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                    />
                    <span className={`text-sm text-[#9b1003] hidden mt-1 ${blur.name && 'peer-invalid:block'}`}>Name should be of minimum 3 chars.</span>
                </div>
                <div className='relative'>
                    <label className='text-[.95rem] text-black absolute bg-white px-1 top-[-8px] left-4'>COMPANY</label>
                    <input
                        className='block w-full mt-1 border-[1px] rounded-md p-3 pb-2 border-gray-800 placeholder-gray-300'
                        type="text"
                        placeholder='Los Pollos Hermanos'
                        id='company'
                        value={company}
                        onChange={handleChange}
                    />
                </div>
                <div className='relative'>
                    <label className='text-[.95rem] text-black absolute bg-white px-1 top-[-8px] left-4'>EMAIL</label>
                    <input
                    className='peer block w-full mt-1 border-[1px] rounded-md p-3 pb-2 border-gray-800 placeholder-gray-300 invalid:border-[#9b1003] invalid:border-2'
                        type="email"
                        placeholder='chickenman@hermanos.com'
                        id='email'
                        value={email}
                        onChange={handleChange}
                        pattern='[a-z0-9]+@[a-z]+\.[a-z]{2,3}'
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                    />
                    <span className={`text-sm text-[#9b1003] hidden mt-1 ${blur.email && 'peer-invalid:block'}`}>Enter a valid email.</span>
                </div>
                <div className='relative'>
                    <label className='text-[.95rem] text-black absolute bg-white px-1 top-[-8px] left-4'>CONTACT</label>
                    <input
                        className='peer block w-full mt-1 border-[1px] rounded-md p-3 pb-2 border-gray-800 placeholder-gray-300 invalid:border-[#9b1003] invalid:border-2'
                        type='text'
                        placeholder='0123456789'
                        id='contact'
                        value={contact}
                        pattern="^[0-9]{10,12}$"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                    />
                    <span className={`text-sm text-[#9b1003] hidden mt-1 ${blur.contact && 'peer-invalid:block'}`}>Enter a valid phone number.</span>
                </div>
                <div className='relative'>
                    <label className='text-[.95rem] text-black absolute bg-white px-1 top-[-8px] left-4'>MESSAGE</label>
                    <textarea name="" id="" cols="5" rows="4" className='bg-white block w-full mt-1 border-[1px] rounded-md p-3 pb-2 border-gray-800 placeholder-gray-300' placeholder="Tell us about your project"></textarea>
                </div>
                <div className='relative'>
                    <label className='text-[.95rem] text-black absolute bg-white px-1 top-[-8px] left-4'>D-O-C</label>
                    <input
                        className='bg-white block w-full mt-1 border-[1px] rounded-md p-3 pb-2 border-gray-800 placeholder-gray-300'
                        type='text'
                        id='date'
                        value={date}
                        onFocus={(e)=>{e.target.type='date'}}
                        placeholder="Select a date"
                        onChange={handleChange}
                    />
                </div>
                <button type='submit' className='btn btn-primary 2xl:btn-lg mt-2'>
                    {button}
                    {/* <svg aria-hidden="true" class="w-6 h-6 rotate-90" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg> */}
                </button>
            </form>
        </div>
    )
}

export default Form