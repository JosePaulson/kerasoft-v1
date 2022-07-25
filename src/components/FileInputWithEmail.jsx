import React from 'react'
import { FaEnvelope, FaArrowUp } from 'react-icons/fa'

function FileInputWithEmail() {
    const onSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <form className='relative mt-20  mb-4 pb-1 border-b-[1px] border-[#f50057] flex' onSubmit={onSubmit}>
        <div className='flex flex-initial w-full'>
          <FaEnvelope size={24} fill='#f50057' />
          <input type="email" placeholder='Enter your email' className='w-full pl-2 focus:outline-none' required />
        </div>
        <label className='mb-1 flex uppercase items-center' htmlFor="file"><FaArrowUp fill='#f50057' className='mb-1 mr-1'/>Resume</label>
        <input id='file' name='fileInput' className='hidden flex flex-i' type="file" accept='application/pdf'/>
        <button type='submit' className='absolute btn btn-ghost bottom-[-3.4rem] text-slate-700 tracking font-medium'>Dispatch</button>
    </form>
  )
}

export default FileInputWithEmail