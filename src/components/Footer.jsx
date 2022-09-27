import {useContext} from 'react'
import { useLocation, Link } from 'react-router-dom'
import StateManager from '../context/StateManager';
function Footer() {
    const {pathname} = useLocation()
    const {dark} = useContext(StateManager)

    return ( 
        <>
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
                    <Link to="/" className="link link-hover">About</Link> 
                    {/* <a href="https://merchant.razorpay.com/policy/KHjXWVO1JSWtKT/contact_us" className="link link-hover">Contact us</a>  */}
                    <Link to="/contact" className="link link-hover">Contact</Link> 
                    <Link to="/careers" className="link link-hover">Careers</Link> 
                    <Link to="/" className="link link-hover">Locate</Link>
                </div> 
                <div>
                    <span className="footer-title">Legal</span> 
                    {/* <a href='https://merchant.razorpay.com/policy/KHjXWVO1JSWtKT/terms' className="link link-hover">Terms</a> 
                    <a href='https://merchant.razorpay.com/policy/KHjXWVO1JSWtKT/refund' className="link link-hover">Cancellation and refund</a> 
                    <a href='https://merchant.razorpay.com/policy/KHjXWVO1JSWtKT/privacy' className="link link-hover">Privacy policy</a> 
                    <a href='https://merchant.razorpay.com/policy/KHjXWVO1JSWtKT/shipping' className="link link-hover">Shipping and Delivery</a>  */}
                    <Link to='/terms' className="link link-hover">Terms and conditions</Link> 
                    <Link to='/privacy' className="link link-hover">Privacy policy</Link> 
                    <Link to='/cookie' className="link link-hover">Cookie policy</Link>
                </div> 
                <div className=''>
                    <span className="footer-title">Newsletter</span> 
                    <div className="form-control w-[17.5rem]">
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
            <small className='mx-auto block text-center bg-base-200 py-4'>Kerasoft <span className='inline-flex  text-[1rem]'>&copy;</span> 2020 - 2022 | All rights reserved</small>
        </>
     );
}

export default Footer;