import CareerImg from '../images/career.svg'
import OpeningsBg from '../images/undraw_working_re_ddwy.svg'
import FileInputWithEmail from '../components/FileInputWithEmail';
function Careers() {
    return ( 
        <div className="flex flex-col container mx-auto p-4">
            {/* <div className='hidden lg:flex flex-col-reverse mt-4 lg:flex-row-reverse lg:mt-8 max-w-[1200px] lg:mx-auto'>
                <div className='md:mx-auto md:my-auto text-center mb-10 mt-16 2xl:pt-24 2xl:ml-auto 2xl:mx-0 2xl:pr-20'>
                    <h2 className='text-3xl uppercase md:text-3xl lg:text-4xl 2xl:text-[3.4rem] text-slate-700 mb-4 lg:mb-8 2xl:mb-10 font-medium'>Join Our Team</h2>
                    <p className='text-[1.05rem] text-base-100 lg:text-2xl 2xl:text-3xl bg-slate-800 py-3 pl-6 rounded-lg inline px-4 uppercase text-center'>We are hiring 🤞</p>
                    <p className='mt-4 lg:text-xl'>Bengaluru 📌 </p>
                    <p className='lg:text-xl'>Remote 📌 </p>
                </div>
                <img className='careerImg w-10/12 mx-auto md:w-1/2 md:mx-0 lg:w-5/12' src={CareerImg} alt="" />
            </div> */}
            <div className='flex flex-col lg:flex-row items-end'>
                <img className='mt-1 lg:w-1/2' src={OpeningsBg} alt="" />
                <div  className='lg:flex flex-col text-center mx-auto mt-8 hidden drop-shadow-[0_35px_35px_rgba(245,0,87,0.15)]'>
                    <p className=' lg:text-[6.5em] xl:text-[7.5em] 2xl:text-[10em] uppercase text-slate-700 lg:w-full font-bold lg:leading-[4.7rem] xl:leading-[5.4rem] 2xl:leading-[7.2rem]'><span className='text-slate-600'>Join</span> <br/> <span>Our</span> <br/> <span className='text-slate-800'>Team!</span></p>
                    <p className='uppercase mt-4 text-2xl text-[#f50057] font-medium leading-wider'>hiring now 🤞</p>
                </div>
            </div>
            <div className='relative border-b-2 border-violet-500 mb-6 mt-10 lg:mt-24 opacity-70'>
                <p className='absolute pr-1 text-primary text-xl top-[-.9rem] bg-base-100'>Careers @ Kerasoft</p>
            </div>
            <div tabIndex="0" className="collapse collapse-arrow border-b-2">
                <div className="collapse-title text-xl text-[1.15rem]">
                    Front-end Developer
                </div>
                <div className="collapse-content"> 
                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabIndex="0" className="collapse collapse-arrow border-b-2">
                <div className="collapse-title text-xl text-[1.15rem]">
                    Front-end Designer
                </div>
                <div className="collapse-content"> 
                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabIndex="0" className="collapse collapse-arrow border-b-2">
                <div className="collapse-title text-xl text-[1.15rem]">
                    Php/NodeJs Developer
                </div>
                <div className="collapse-content"> 
                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabIndex="0" className="collapse collapse-arrow border-b-2">
                <div className="collapse-title text-xl text-[1.15rem]">
                    Business Development Exe
                </div>
                <div className="collapse-content"> 
                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <FileInputWithEmail />
            <h2 className="text-primary-focus 2xl:text-3xl lg:text-[1.7rem] text-2xl mt-20 px-4 underline">Hiring Policy</h2>
            <ul className="my-5 text-slate-600 pl-4">
                <li className="mb-1 text-lg md:text-xl">✅ No college degree or any sort of certifications required.</li>
                <li className="mb-1 text-lg md:text-xl">✅ Your age, religion or gender doesn't matter to us.</li>
                <li className="mb-1 text-lg md:text-xl">✅ We don't interview you, we can have a casual talk over coffee about what you can do for us.</li>
                <li className="mb-1 text-lg md:text-xl">✅ Optable monthly/weekly payment cycle.</li>
            </ul>
        </div>
     );
}

export default Careers;