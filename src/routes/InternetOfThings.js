import IotHeroImg from '../images/iotheroimg.png'
function InternetOfThings() {
    return ( 
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row mt-[-4rem] min-h-[85vh]">
                <img src={IotHeroImg} alt='electronic test tools' className="sm:max-w-lg md:max-w-xl lg:max-w-xl lg:mr-5" />
                <div className='text-center lg:text-left px-7 md:px-10 lg:px-0'>
                <h1 className="gradient-text text-4xl md:text-5xl font-bold">Make your home smart!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary tracking-wider mr-2  ">Request quote</button>
                <button className="btn btn-warning tracking-wider ">Call us</button>
                </div>
            </div>
        </div>
     );
}

export default InternetOfThings;