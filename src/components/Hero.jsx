import {FaArrowRight} from 'react-icons/fa'
import heroImg from '../images/heroImg.png'
import {useRef} from 'react'
function Hero() {
    const whoWeAreRef = useRef(null)
    return ( 
        <div>
            <div className="hero">
                <div className="flex justify-around lg:flex-row hero-content mt-7 md:mt-0 flex-col lg:mx-24">
                    <div className='lg:w-5/12 lg:ml-5 xl:ml-0 text-center lg:text-left mt-10'>
                        <h1 className="gradient-text 2xl:text-7xl text-5xl md:text-6xl font-bold">Welcome <br /> to Kerasoft </h1>
                        <p className='2xl:text-2xl md:text-xl text-lg px-5 md:px-0 font-thin mt-2'>Our goal is to provide the best and custom <em className='text-purple-800'>Embedded-Sys</em> solutions, ergo make your life simple!!</p>
                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start px-8 lg:px-0 mt-5 sm:mt-0">
                            <button className="btn-outline bg-slate-800 text-primary-content btn rounded-lg sm:mt-7 sm:mr-2 tracking-wider">
                                Invest in our !deas&nbsp;
                                <FaArrowRight />
                            </button>
                            <button className="btn-outline text-primary btn rounded-lg mt-4 sm:mt-7 hover:bg-primary tracking-wider">
                                Request Quote&nbsp;
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                    <div className='lg:w-7/12 w-10/12'>
                        <img src={heroImg} alt="hero" />
                    </div>
                </div>
            </div>
            <div id='WhoWeAre' ref={whoWeAreRef} className='flex justify-center items-center h-[60vh] mt-20 bg-zinc-100 w-full'>
                <p className='p-5'>We are kerasoft.in, a technical institution for the enhancement of digital aid in day-to-day life.</p>
            </div>
        </div>
     );
}

export default Hero;