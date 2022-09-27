import {FaArrowRight} from 'react-icons/fa'
import HeroImg from '../images/heroImg.png'
import { useNavigate } from 'react-router-dom'
// import { useEffect, useRef } from 'react'
// import { gsap } from 'gsap'
function Hero() {
    const navigate = useNavigate()
    // const textRef1 = useRef()
    // const textRef2 = useRef()
    // const imgRef = useRef()

    // useEffect(()=>{
    //     gsap.from(textRef1.current, { scale: .85, opacity: .2, duration: 1 });
    //     gsap.from(textRef2.current, { x: -100, opacity: 0, duration: .8, stagger: 1 });
    //     gsap.from(imgRef.current, { y: -100, opacity: 0, duration: .6, delay:.3, stagger: 1 });
        

    // },[])

    const handleClick = (e) => {
        let text = e.target.name === "quote" ? "request quote" : "request call back"
        navigate('/contact-form', {state:{button:text}})
    }

    return (
        <div className="hero min-h-[85vh]">
            <div className="flex justify-around lg:flex-row hero-content mt-7 md:mt-0 flex-col lg:mx-12">
                <div className="lg:w-5/12 lg:ml-5 xl:ml-0 text-center lg:text-left mt-10 bg-[url('/src/images/herobg.svg')] bg-cover bg-[top_2rem]" >
                    <h1 className="scale-1 inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-violet-800 drop-shadow-lg 2xl:text-7xl text-5xl md:text-6xl font-bold">Welcome <br /> to Kerasoft </h1>
                    <p className='2xl:text-2xl md:text-xl text-lg px-5 md:px-0 font-thin mt-2 sm:mx-6 md:mx-20 lg:mx-0'>Our goal is to provide the best and custom <em className='text-purple-800'>Embedded-Sys</em> solutions, ergo make your life simple!!</p>
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start px-8 lg:px-0 mt-8 sm:mt-0">
                        <button name="invest" onClick={handleClick} className="btn-outline bg-black border-black text-primary-content btn rounded-lg sm:mt-7 sm:mr-2 tracking-wider">
                            Invest in our !deas&nbsp;
                            <FaArrowRight />
                        </button>
                        <button name="quote" onClick={handleClick} className="btn-outline text-primary btn rounded-lg mt-4 sm:mt-7 hover:bg-primary tracking-wider">
                            Request Quote&nbsp;
                            <FaArrowRight size={12} />
                        </button>
                    </div>
                </div>
                <div className='2xl:w-1/2 w-10/12 md:w-8/12 lg:w-5/12 max-h-screen'>
                    <img src={HeroImg} alt="hero" />
                </div>
            </div>
        </div>
     );
}

export default Hero;