import { useState } from 'react'
import WebBg from '../images/webBg.svg'
import WhyWeb from '../images/whywebimg.svg'
import Ecommerce from '../images/ecommerce.png'
import Jamstack from '../images/jamstack.png'
import PWA from '../images/pwa.png'
import WebDes from '../images/webdes.png'
import Meet from '../images/meeting.svg'
import ABP from '../images/adblockplus.png'
import BlockSite from '../images/blockweb.webp'
import { Link, useNavigate } from 'react-router-dom'
function Web() {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        contact: '',
    })

    const handleChange = (e) => {
        setFormData(prev => {
            return {
                ...prev,
                [e.target.id]: e.target.value
            }
        })
    }

    const handleClick = () => {
        if(name && email && contact) {
            navigate('/contact-form', {state:{...formData, button:"send in request"}})
        }
    }


    const {name, company, email, contact} = formData
    return ( 
        <div className="">
            <div className='flex flex-col lg:flex-row lg:items-center lg:container mx-auto px-6 md:px-10 mt-5 lg:h-[90vh]'>
                <div className="text-center pt-12 bg-[url('/src/images/webherobg.svg')] bg-cover lg:text-left lg:w-5/12 lg:mx-auto">
                    <h1 className="inline text-transparent text-3xl bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-primary drop-shadow-lg lg:text-4xl 2xl:text-[3.5rem] 2xl:leading-[4rem]">Web Applications <br /> Built To Go Fast</h1>
                    <p className="mt-4 text-xl font-thin lg:text-[1.45rem] 2xl:text-2xl 2xl:mt-6">We design and develop top-notch, high-performance stactic and dynamic webapps built with technologies like Jamstack, MERN, LAMP, Wordpress etc... </p>
                    <button className="btn bg-gradient-to-l from-violet-500 to-fuchsia-500 hover:bg-gradient-to-r text-base-200 px-6 rounded-full shadow-lg border-0 mt-8 tracking-wider 2xl:btn-lg 2xl:mt-12">Let's get in Touch</button>
                </div>
                <img className='mt-8 lg:w-5/12 md:w-8/12 mx-auto' src={WebBg} alt="" />
            </div>
            <div className="bg-base-200 py-2 pb-6 flex flex-col lg:flex-row-reverse lg:h-[80vh] xl:h-[60vh] lg:px-[5vw]">
                <div className='mt-4 mx-auto px-6 md:px-10 lg:container lg:self-center'>
                    <div className='relative border-b-2 lg:border-b-[transparent] border-[#6B0C56ca] mb-6 mt-10 md:mt-4'>
                        <p className='absolute pr-2 text-[#6B0C56ca] text-xl lg:text-2xl top-[-.9rem] font-medium bg-base-200'>WHY WEBSITE ?</p>
                    </div>
                    <p className='text-lg lg:text-xl 2xl:text-[1.35rem] font-thin mb-1 lg:mb-2 2xl:mb-3 px-1'> Did you know your business-website is often the first point of customer engagement. This is your opportunity to win over a client with just a few seconds to establish a positive first impression. </p>
                    <p className='text-lg lg:text-xl 2xl:text-[1.35rem] font-thin mb-1 lg:mb-2 2xl:mb-3 px-1'> We believe that a professionally designed website is crucial for the longevity and success of a business in today’s market.</p>
                    <p className='text-lg lg:text-xl 2xl:text-[1.35rem] font-thin px-1 mb-5'> And it's not just about businesses, let it be porfolio or a service website; your reach to the intended audience will certainly go up exponentialy.</p>
                </div>
                <img src={WhyWeb} alt="" className='lg:container px-6 mt-[7vw] md:w-9/12 mx-auto lg:w-5/12 lg:mr-8' />
            </div>
            <div className="py-2">
                <div className='mt-11 mx-auto px-6 md:px-10 lg:container grid lg:grid-cols-2 gap-8 lg:gap-12'>
                    <div className='lg:col-span-2'>
                        <div className='relative border-b-2 lg:border-b-[transparent] border-[#6B0C56ca] mb-6 mt-2 lg:mt-20'>
                            <p className='absolute pr-2 text-[#6B0C56ca] text-xl top-[-.9rem] bg-base-100 font-medium lg:text-2xl'>WEB SERVICES</p>
                        </div>
                        <p className='text-lg mb-1 px-1'> We identify and create affordable solutions that help brands stand out in
                        an over-crowded digital space. </p>
                    </div>
                    <div className='flex flex-col lg:gap-2 px-4'>
                        <img src={Jamstack} width={64} alt="" />
                        <p className='text-xl'>Web design, UI and UX</p>
                        <p className='text-lg text-[#6B0C56ca]'>Build fast and reliable websites with keen focus on SEO.</p>
                        <p className='text-lg font-thin'>Solving user's problems through good digital product design is the quickest way of turning them into customers. A frictionless interface and a well planned experience breeds loyal users because their problems are being solved without any hassle. We help you design digital products that tear apart customer's problems and put them back together into elegant software solutions.</p>
                        <ul className='mt-2'>
                            <li className='text-[1rem] mb-1'>👉 Designed to encourage new user sign ups</li>
                            <li className='text-[1rem] mb-1'>👉 Iterative cycles for continuous improvement</li>
                            <li className='text-[1rem] mb-1'>👉 Unique designs that stand out in a crowded space</li>
                        </ul>
                    </div>
                    <div className='flex flex-col mt-2 px-4 lg:gap-2'>
                        <img src={WebDes} width={64} alt="" />
                        <p className='text-xl'>Jamstack Developement</p>
                        <p className='text-lg text-[#6B0C56ca]'>Build fast and reliable websites with keen focus on SEO.</p>
                        <p className='text-lg font-thin'>A fast Jamstack website improves your chances of turning a visitor into customer. There's less time for getting distracted. And they can quickly find what they're looking for which keeps them browsing.</p>
                        <ul className='mt-2'>
                            <li className='text-[1rem] mb-1'>👉 Elite SEO scoring</li>
                            <li className='text-[1rem] mb-1'>👉 Blazing fast, Never leave a customer waiting</li>
                            <li className='text-[1rem] mb-1'>👉 Continue using platforms you're familiar with like Shopify and WordPress</li>
                        </ul>
                    </div>
                    <div className='flex flex-col mt-2 px-4 lg:gap-2'>
                        <img src={Ecommerce} width={64} alt="" />
                        <p className='text-xl'>Headless Ecommerce</p>
                        <p className='text-lg text-[#6B0C56ca]'>Unlock endless ways to customise your store</p>
                        <p className='text-lg font-thin'>Moving to a headless setup is the inflection point that lets you quickly run interface A/B tests, create unique interactive features, and build a native app like mobile experience.</p>
                        <ul className='mt-2'>
                            <li className='text-[1rem] mb-1'>👉 Evolve your brand beyond typical themes and templates</li>
                            <li className='text-[1rem] mb-1'>👉 Sub 1-second page load times</li>
                            <li className='text-[1rem] mb-1'>👉 Make writing content easy, flexible and efficient</li>
                        </ul>
                    </div>
                    <div className='flex flex-col mt-2 px-4 lg:gap-2'>
                        <img src={PWA} width={64} alt="" />
                        <p className='text-xl'>Progressive Web Applications</p>
                        <p className='text-lg text-[#6B0C56ca]'>Apps that reach users you would have ignored</p>
                        <p className='text-lg font-thin'>Progressive Web Applications (PWAs) reach users even where native apps can't. Architected for performance and designed for seamless user experience, they achieve unparalleled user engagement and retention.</p>
                        <ul className='mt-2 mb-4'>
                            <li className='text-[1rem] mb-1'>👉 Keep users coming back with an fast and seamless experience</li>
                            <li className='text-[1rem] mb-1'>👉 Reduced ongoing costs because there's only one codebase to maintain</li>
                            <li className='text-[1rem] mb-1'>👉 Affordable scaling to handle your viral growth</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='text-[1.3rem] text-center py-4 px-6 md:px-10 lg:py-8 lg:pt-16 bg-[url("/src/images/extension.svg")] bg-contain bg-no-repeat bg-center'>
                <p className='inline text-transparent text-3xl lg:text-4xl bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-primary'>Custom Built <br /> Browser Extensions</p>
                <p className='text-lg font-thin mt-2'>Let it be ads or pop-ups that's ruining your browsing experience, Or you'd like a custom feature added to your browser for better productivity? Reach out to us, we've got you covered.
                </p>
                <p className='mt-2 text-[1.175rem]'>checkout some of the extensions which you can try for free</p>

                <div className='mt-8 px-4 flex justify-center gap-6'>
                    <a className='bg-slate-700 rounded-lg p-2' href="https://chrome.google.com/webstore/detail/adblock-plus-free-ad-bloc/cfhdojbkjhnklbpkdaibdccddilifddb" target="_blank" rel="noopener noreferrer">
                        <div>
                            <img width='64' src={ABP} alt="" />
                            <p className='text-sm text-base-100 pt-1'>Ad Block</p>
                        </div>
                    </a>
                    <a className='bg-slate-700 rounded-lg p-2' href="https://chrome.google.com/webstore/detail/blocksite-block-websites/eiimnmioipafcokbfikbljfdeojpcgbh" target="_blank" rel="noopener noreferrer">
                        <div>
                            <img width='64' src={BlockSite} alt="" />
                            <p className='text-sm text-base-100 pt-1'>pageBlock</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="mt-5">
                <img className='w-8/12 mx-auto lg:mt-24 lg:container md:w-4/12 lg:w-3/12' src={Meet} alt="" />
                <div className='text-center pt-2 mb-2 px-6 lg:container mx-auto'>
                    <p className='text-lg font-thin text-cyan-700 mb-2'>Book Your Free Digital Strategy Call</p>
                    <p className='text-2xl font-medium text-slate-700'>Let's Talk About Your Business</p>
                    <div>
                        <p className=''>Meet A Kerasoft Developer</p>
                        <form className='text-[#6B0C56ca] mt-4'>
                            Hello, My name is &nbsp;
                            <input 
                                required 
                                className='text-black border-b-2 mt-2 border-b-[#6B0C562a] focus:outline-0 px-2 w-40 placeholder-gray-300' 
                                placeholder='Tony Stark'
                                id='name'
                                name='name'
                                type='text'
                                value={name}
                                onChange={handleChange}
                            />
                             &nbsp; and I am with &nbsp;
                            <input 
                                className='text-black border-b-2 mt-2 border-b-[#6B0C562a] focus:outline-0 px-2 w-40 placeholder-gray-300' 
                                placeholder='Stark Industries'
                                type='text'
                                name='company'
                                id='company'
                                value={company}
                                onChange={handleChange}
                            />
                             &nbsp;You can email me to &nbsp;
                            <br className='hidden md:block'/>
                            <input 
                                required 
                                className='text-black border-b-2 mt-2 border-b-[#6B0C562a] focus:outline-0 px-2 w-40 placeholder-gray-300' 
                                placeholder='tony@mcu.com'
                                id='email'
                                name='email'
                                type='email'
                                value={email}
                                onChange={handleChange}
                            />
                             &nbsp; Or buzz me @ &nbsp;
                            <input 
                                required 
                                className='text-black border-b-2 mt-2 border-b-[#6B0C562a] focus:outline-0 px-2 w-40 placeholder-gray-300' 
                                placeholder='(+91) 01234 56789'
                                type='number'
                                name='contact'
                                id='contact'
                                value={contact}
                                onChange={handleChange}
                            />
                            <br className='block md:hidden'/>
                            <button 
                                className='btn bg-gradient-to-l from-violet-500 to-fuchsia-500 hover:bg-gradient-to-r text-base-200 px-6 rounded-full shadow-lg border-0 my-8 tracking-wider md:ml-6' 
                                onClick={handleClick}
                                // type='submit'
                            >
                                Request Meeting
                            </button>
                        </form>
                    </div>

                    <p className='mb-5 lg:mb-12 lg:mt-6 italic'>Feel free to <Link className='text-secondary' to='/contact'>contact</Link> us <br /> OR <br /> Get a rough <Link className='text-secondary' to='/forms'>quote</Link></p>
                </div>
            </div>
        </div>
     );
}

export default Web;