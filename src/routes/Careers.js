import OpeningsBg from '../images/undraw_working_re_ddwy.svg'
import FileInputWithEmail from '../components/FileInputWithEmail';
function Careers() {
    return ( 
        <div className="flex flex-col container mx-auto p-4">
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