import {FaHome, FaBloggerB, FaChessRook, FaFacebook, FaGithub, FaTwitter, FaCodepen} from 'react-icons/fa'
import {ImBriefcase} from 'react-icons/im'

function Sidebar() {
    return ( 
        <div className='drawer-side'>
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <div className="menu p-4 overflow-y-auto w-80 md:w-96 bg-base-100 text-base-content opacity-95">
                <h2 className="kerasoftLogo mt-2 mb-8 text-2xl font-normal text-primary">{`ker^s<>ft*in`}</h2>
                <a className='flex hover:text-gray-600' href="/"><FaHome size={23} className='inline-block mb-3 mr-2'/> HOME</a>
                <a className='flex hover:text-gray-600' href="/"><FaChessRook size={23} className='inline-block mb-3 mr-2'/> PRODUCTS<div className=' badge-md badge-neutral text-error'>New</div></a>
                <a className='flex hover:text-gray-600' href="/"><FaBloggerB size={23} className='inline-block mb-3 mr-2'/> BLOGSPOT <div className=' badge-md badge-neutral text-error'>New</div><div className='badge badge-md badge-warning ml-auto text-primary'>+5</div></a>
                <a className='flex hover:text-gray-600' href="/"><ImBriefcase size={23} className='inline-block mb-3 mr-2'/>CAREERS</a>
                <ul className="mt-8 font-medium">
                    <li><a href='/' >Who We Are?</a></li>
                    <li><a href='/' >What We Do?</a></li>
                    <li><a href='/' >Kerasoft.org</a></li>
                </ul>
                <div className='flex marginForChildren mx-auto mt-auto mb-2'>
                    <FaFacebook size={30} fill='#4267B2'/>
                    <FaTwitter size={30} fill='#1DA1F2'/>
                    <FaCodepen size={30} fill='#212121'/>
                    <FaGithub size={30} fill='#171515'/>
                </div>
            </div>
        </div>
     );
}

export default Sidebar;