import {FaHome, FaBloggerB, FaChessRook, FaFacebook, FaGithub, FaTwitter, FaCodepen, FaArrowLeft, FaGlobe} from 'react-icons/fa'
import {ImBriefcase} from 'react-icons/im'
import {Link} from 'react-router-dom'
function Sidebar() {

    //for auto hiding the sidebar by initiating click() method on toggle button
    const autoToggle = () => {
        document.querySelector('.drawer-toggle').click() // .drawer-toggle present on navbar component
    }

    return ( 
        <div className='drawer-side'>
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <div className="menu p-4 overflow-y-auto w-[19rem] 2xl:w-96 md:w-[20.5rem] bg-base-100 text-base-content opacity-95">
                <div className='relative sideBarContainer'>
                    <div className='flex justify-between'>
                        <h2 className="kerasoftLogo mt-2 mb-8 text-2xl font-normal text-primary">{`ker^s<>ft*in`}</h2>
                        <button onClick={autoToggle} className='btn btn-ghost '>
                            <FaArrowLeft size={'20px'}/>
                        </button>
                    </div>
                    <Link onClick={autoToggle} className='flex hover:text-gray-400 pt-1' to={'/'}><FaHome size={23} className='inline-block mb-3 mr-2 mt-[-3px]'/> HOME</Link>
                    <Link onClick={autoToggle} className='flex hover:text-gray-400 pt-1' to={'/about'}><FaGlobe size={22} className='inline-block mb-3 mr-2 mt-[-2px]'/> ABOUT</Link>
                    <Link onClick={autoToggle} className='flex hover:text-gray-400 pt-1' to={'/products'}><FaChessRook size={23} className='inline-block mb-3 mr-2 mt-[-2px]'/> PRODUCTS<div className=' badge-md badge-neutral text-error'>New</div></Link>
                    <Link className='flex hover:text-gray-400 pt-1' to={'/blogspot'} onClick={autoToggle}><FaBloggerB size={23} className='inline-block mb-3 mr-2 mt-[-2px]'/> BLOGSPOT <div className=' badge-md badge-neutral text-error'>New</div><div className='badge badge-md badge-warning ml-auto text-primary'>+5</div></Link>
                    <Link onClick={autoToggle} className='flex hover:text-gray-400 pt-1' to={'/careers'}><ImBriefcase size={22} className='inline-block mb-3 mr-2 mt-[-2px]'/>CAREERS</Link>
                    <ul className="mt-8 font-medium">
                        <li className='menuListItem'><a className='active:bg-transparent' href='/'>Who We Are?</a></li>
                        <li className='menuListItem'><a className='active:bg-transparent' href='/' >What We Do?</a></li>
                        <li className='menuListItem'><a className='active:bg-transparent' href='/' >Kerasoft.org</a></li>
                    </ul>
                    <div className=' mt-10 pl-1 text-md mb-8'>
                        <Link className='bg-primary text-primary-content py-2 px-3 rounded-l' onClick={autoToggle} to={"/web"}>Web</Link>
                        <Link className='bg-warning text-slate-900 font-medium py-3 px-4 rounded' onClick={autoToggle} to={"/internetofthings"}>iOT</Link>
                        <Link className='bg-slate-800 text-primary-content py-2 px-3 rounded-r' onClick={autoToggle} to={"/opencv"}>OpenCV</Link>
                    </div>
                    <div className='flex flex-col ml-auto absolute bottom-2 right-0'>
                        <FaFacebook className='mb-2 hover:fill-[#3c0053]' size={24} fill='#4267B2'/>
                        <FaTwitter className='mb-2 hover:fill-[#3c0053]' size={24} fill='#1DA1F2'/>
                        <FaCodepen className='mb-2 hover:fill-[#3c0053]' size={24} fill='#212121'/>
                        <FaGithub className='mb-2 hover:fill-[#3c0053]' size={24} fill='#171515'/>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Sidebar;