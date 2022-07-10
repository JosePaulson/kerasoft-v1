import React from 'react'
import Spin from '../components/../images/spinner.svg'

function Spinner() {
  return (
    <div className='flex h-[85vh] justify-center'>
      <img width={75} src={Spin} alt="" />
    </div>
  )
}

export default Spinner