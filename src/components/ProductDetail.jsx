import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from './Spinner'
import { db } from '../firebase.config'
import { collection, getDocs } from 'firebase/firestore'

function ProductDetail() {
    const params = useParams()
    const [index, setIndex] = useState(0)
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(()=>{
        const fetchData = async () => {
            try {
                const snapshot = await getDocs(collection(db, 'product-list'))
                const list = []
                snapshot.forEach(doc=>list.push(doc.data()))
                setProduct(list.filter(e=>e.model===params.id)[0])
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    },[params.id])

    function handleClick(e) {
        setIndex((e.target.id))
        console.log(index)
    }

    const {image, title, details} = product

  return (
    loading ? <Spinner/> : <div className='flex flex-col md:flex-row mx-auto md:w-11/12 md:my-8 my-6 gap-10'>
        <div className='md:w-1/2 p-4'>
            <img className='md:h-[35vw] lg:h-[27vw] 2xl:h-[24vw] h-[80vw] sm:h-[70vw] block mx-auto rounded-lg shadow-lg mb-2 p-2' src={image[index]} alt="" />
            <div className='h-[4rem] sm:h-[6rem] flex gap-1 justify-center'>
                {(image.map((img, i)=>{
                    return <img onClick={handleClick} id={i} className='shadow-lg' key={i} src={img} alt={img}/>
                }))}
            </div>
        </div>
        <div className='md:w-1/2 p-5'>
            <h1 className='text-4xl mb-4 gradient-text'>{title}</h1>
            <div>
                {details.keywords && details.keywords.map((keyword, i)=>{
                    return <div key={i} className='badge p-[1rem] mr-2 mb-6'>{keyword}</div>
                })}
            </div>
            <p className='mb-5'>{details.productDesc}</p>
            <p className='mt-2 text-[#372e5c] text-[1.2rem]'>Mode of install: {details.installation}</p>
            <p className='mt-2 text-[#372e5c] text-[1.2rem]'>Free service: {details.service} months**</p>
            <p className='mt-2 text-[#372e5c] text-[1.2rem]'>Return period: {details.return} {isNaN(details.return) ? '' : 'days'}</p>

            <div className='mt-8 text-rose-500 text-xl'>
                <p>We are not collecting payments on this website yet, Please call us @ <a href="tel:00916363483718" className='text-[1.2rem] text-rose-700 font-medium'>6363483718</a> for any product related queries or if you wish to buy</p>
            </div>
        
        </div>
    </div>
  )
}

export default ProductDetail