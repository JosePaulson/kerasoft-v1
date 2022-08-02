import OpeningsBg from '../images/undraw_working_re_ddwy.svg'
import FileInputWithEmail from '../components/FileInputWithEmail';
function Careers() {
    return ( 
        <div className="flex flex-col container mx-auto p-4 lg:pt-20">
            <div className='flex flex-col lg:flex-row items-end'>
                <img className='mt-1 lg:w-1/2' src={OpeningsBg} alt="" />
                <div className='hidden lg:flex lg:flex-col text-center mx-auto mt-8]'>
                    <p className=' lg:text-[4.8em] xl:text-[6em] 2xl:text-[7em] uppercase text-slate-700 lg:w-full font-bold lg:leading-[3.4rem] xl:leading-[4.3rem] 2xl:leading-[5rem]'><span className='text-slate-600'>Join</span> <br/> <span>Our</span> <br/> <span className='text-slate-800'>Team!</span></p>
                    <p className='uppercase mt-4 text-2xl text-[#f50057] font-medium leading-wider pl-7'>hiring now 🤞</p>
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
                <p className='text-primary'>HTML, CSS, JS with <strong>THREE YEARS</strong> of minimum experience preffered.</p>
                    <ul className='pl-2'>
                        <li>✅ React or Svelte</li>
                        <li>✅ Bootstrap V5, Material UI, Tailwind or just toooo good with plain CSS</li>
                        <li>✅ Basic understanding on Http and WebSockets</li>
                        <li>✅ Atleast 5 projects to showcase your expertise</li>
                        <li>✅ Should be good with VCSs like GIT or Mercurial</li>
                        <li>✅ Basics of Photoshop, AI or Figma </li>
                    </ul>
                </div>
            </div>
            <div tabIndex="0" className="collapse collapse-arrow border-b-2">
                <div className="collapse-title text-xl text-[1.15rem]">
                    Front-end Designer
                </div>
                <div className="collapse-content"> 
                <p className='text-primary'>Figma, Photoshop, AI or any design tool of your choice but be magician with it.</p>
                <ul className='pl-2'>
                    <li>✅ Basic understanding on HTML, CSS</li>
                    <li>✅ Atleast 10 projects to showcase your expertise</li>
                    <li>✅ Good with fonts, shades and shapes </li>
                </ul>
                </div>
            </div>
            <div tabIndex="0" className="collapse collapse-arrow border-b-2">
                <div className="collapse-title text-xl text-[1.15rem]">
                    Python/NodeJs Developer
                </div>
                <div className="collapse-content"> 
                    <p className='text-primary'>Django, Flask or ExpressJs developer with <strong>TWO YEARS</strong> of minimum experience preffered.</p>
                    <ul className='pl-2'>
                        <li>✅ Basic understanding on front-end technologies</li>
                        <li>✅ Atleast 3 projects to showcase your expertise</li>
                        <li>✅ Should be good with VCSs like GIT or Mercurial</li>
                        <li>✅ Databases</li>
                    </ul>
                </div>
            </div>
            <div tabIndex="0" className="collapse collapse-arrow border-b-2">
                <div className="collapse-title text-xl text-[1.15rem]">
                    Business Development Exec
                </div>
                <div className="collapse-content"> 
                <p className='text-primary'>It's a gift to be able to pitch sales with just What we have to offer and no gimmicks. Looking for someone special.</p>
                    <ul className='pl-2'>
                        <li>✅ Best communication skills</li>
                        <li>✅ English, Malayalam, Kannada, Hindi (Atleast two)</li>
                    </ul>
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