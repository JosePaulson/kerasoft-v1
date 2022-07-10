import {useContext} from 'react'
import { useLocation, Link } from 'react-router-dom'
import StateManager from '../context/StateManager';
function Footer() {
    const {pathname} = useLocation()
    const {dark} = useContext(StateManager)

    return ( 
        <footer data-theme={(pathname==='/blogspot' && dark) && 'night'} className="footer p-5 xs:p-10 bg-base-200 text-base-content">
            <div>
                <span className="footer-title">Services</span>
                <Link className='link link-hover' to={'/web'}>Web Apps</Link>
                <Link className='link link-hover' to={'/'}>Mobile Apps</Link>
                <Link className='link link-hover' to={'/internetofthings'}>Home Automation</Link>
                <Link className='link link-hover' to={'/'}>Computer Vision</Link>
            </div> 
            <div>
                <span className="footer-title">Company</span>
                <a href="/" className="link link-hover">About us</a> 
                <a href="/" className="link link-hover">Contact</a> 
                <a href="/" className="link link-hover">Careers</a> 
                <a href="/" className="link link-hover">Locate</a>
            </div> 
            <div>
                <span className="footer-title">Legal</span> 
                <a href="/" className="link link-hover">Terms of use</a> 
                <a href="/" className="link link-hover">Privacy policy</a> 
                <a href="/" className="link link-hover">Cookie policy</a>
            </div> 
            <div className=''>
                <span className="footer-title">Newsletter</span> 
            <div className="form-control xs:w-[19.4rem] w-[17.5rem]">
                <label className="label">
                    <span className="label-text">Enter your email address</span>
                </label> 
                <div className="relative w-full">
                    <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-8"/> 
                    <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                </div>
                </div>
            </div>
        </footer>
     );
}

export default Footer;