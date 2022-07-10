import React from 'react'
import { Link } from 'react-router-dom'


function ProductItem({
  image,
  title,
  desc,
  model,
  unitPrice,
  units
}) {

  return (
    <Link to={`/products/${model}`}>
      <div className="card w-[19rem] h-[28rem] bg-base-200 shadow-xl my-3">
        <figure><img onMouseOver={e=>{e.currentTarget.src = image[1]}} onMouseOut={e=>{e.currentTarget.src = image[0]}} className='h-[17.8rem]' src={image[0]} alt={title} /></figure>
        <div className="card-body bg-gray-800 text-primary-content relative p-6">
          <h2 className="text-slate-900 absolute top-[-1rem] card-title bg-base-100 rounded-md p-1 px-4 ">{title}</h2>
          <p className='text-[.95rem] text-base- mt-2'>{desc}</p>
          <div className="card-actions justify-end mt-1">
            <span className='mr-1 font-bold text-warning tracking-wide text-xl mt-1'>₹{unitPrice}</span>
            <button className="btn btn-sm btn-primary tracking-wide font-bold">
              { units ? 'Buy Now': 'Waitlist' }
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductItem