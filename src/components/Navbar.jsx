function Navbar() {

    return ( 
        <div className="navbar bg-base-100 shadow sticky top-0 z-10 opacity-80 ">

                <div className="flex-none pr-1">
                    <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                </div>
                <div className="flex-1">
                    <a href="/" className="px-1 rounded kerasoftLogo text-primary-content text-2xl bg-primary-focus">{`ker^s<>ft`}</a>
                    <ul className="ml-10 marginForChildren md:flex hidden font-medium">
                        <li className="cursor-pointer">Web</li>
                        <li className="cursor-pointer">iOT</li>
                        <li className="cursor-pointer">OpenCV</li>
                    </ul>
                </div>
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                    </button>
                </div>
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>

        </div>
    )
}

export default Navbar;