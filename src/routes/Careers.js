import CareerImg from '../images/careerPeopleImg.png'
function Careers() {
    return ( 
        <div className="flex flex-col container mx-auto p-4">
            <div className="alert alert-warning shadow-lg opacity-[.85] mb-2 md:mb-0">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span className="text-md">Currently we are not hiring, please check again later!</span>
                </div>
            </div>
            <img className='w-fit md:w-10/12 mx-auto' src={CareerImg} alt="" />
            <h2 className="text-primary-focus 2xl:text-4xl lg:text-3xl text-2xl mt-20 px-4 underline">Our Hiring Policy</h2>
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