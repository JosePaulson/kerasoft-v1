import { useContext } from 'react'
import StateManager from '../context/StateManager'
import {Link, useLocation} from 'react-router-dom'
import {MdBrightness2, MdBrightness4} from 'react-icons/md'
function Navbar() {
    const {pathname} = useLocation()

    const {dark, handleDarkMode} = useContext(StateManager)

    return ( 
        <div data-theme={(pathname==='/blogspot' && dark) && 'night'} className= "navbar bg-base-100 shadow sticky top-0 z-10 opacity-[.90] dark:opacity-[.98] px-0 xs:px-2">
                <div className="flex-none pr-1">
                    <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                </div>
                <div className="flex-1">
                    <Link className="px-1 rounded kerasoftLogo text-primary text-2xl dark:bg-[#fefefe] dark:text-[#570df8]" to={"/home"}>{`ker^s<>ft`}</Link>
                    <ul className="ml-10 marginForChildren md:flex hidden font-medium">
                        <li className={dark ? null : 'menuListItem'}>
                            <Link    to={"/web"}>Web</Link>
                        </li>
                        <li className={dark ? null : 'menuListItem'}>
                            <Link to={"/internetofthings"}>iOT</Link>
                        </li>
                        <li className={dark ? null : 'menuListItem'}>
                            <Link to={"/opencv"}>OpenCV</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
                <div className="flex-none">
                    {/* hide dark-mode option except for blogs-page */}
                    <button onClick={handleDarkMode} className={`btn-ghost btn-md rounded-md p-3 ${pathname !== '/blogspot' && 'hidden'}`}>
                        {dark ? <MdBrightness2 size={'22px'} className='rotate-20' /> : <MdBrightness4 size={'22px'} />}
                    </button>
                </div>
        </div>
    )
}

export default Navbar;