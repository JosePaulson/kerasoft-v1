// import {FaArrowLeft} from 'react-icons/fa'
import bgImg from '../images/opencvbgImg.png'
import {Link} from 'react-router-dom'
function OpenCV() {
    return ( 
        <div className="openCV flex flex-col min-h-[60vh] sm:min-h-[90vh] w-full text-center justify-center items-center pb-28 pt-20 md:pt-4">
            <img className='lg:w-4/12 md:w-5/12 h-8/12 w-8/12 md:ml-12 ml-4' src={bgImg} alt='abstract indicating openCV'/>
            <h2 className="xl:text-4xl md:text-3xl text-2xl px-24 sm:px-8 md:px-0 text-gray-900"><em className="font-bold">Oops!</em>, <span className="text-gray-700">Currently not available in your location.</span></h2>
            <Link to={"/"} >
                <button className='btn btn-primary lg:btn-md mt-4 font-medium lg:text-lg'>
                    back to home
                </button>
            </Link>
        </div>
     );
}

export default OpenCV;