import { useContext, useEffect } from "react";
import { FaWhatsapp } from 'react-icons/fa'
import Footer from "./components/Footer";
import About from "./routes/About";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import {Routes, Route, useLocation} from 'react-router-dom'
import Web from "./routes/Web";
import InternetOfThings from "./routes/InternetOfThings";
import OpenCV from "./routes/OpenCV";
import ScrollToTop from "./components/ScrollToTop";
import Blogspot from "./routes/Blogspot";
import StateManager, {htmlClassList} from "./context/StateManager";
import Products from "./routes/Products";
import Careers from "./routes/Careers";
import Error from "./routes/Error";
import ProductDetail from "./components/ProductDetail";
import Contact from "./routes/Contact";
import LandingPage from "./routes/LandingPage";
import Home from "./routes/Home";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Privacy from "./routes/Privacy";
function App() {

    const {pathname} = useLocation()
    const {revertToLightMode} = useContext(StateManager)

    useEffect(() => {
        htmlClassList.contains('dark') && (pathname !== '/blogspot' && revertToLightMode())
    }, [pathname]) //eslint-disable-line

    return ( 
        <>  
            <ScrollToTopButton />
            <ScrollToTop />
            <div className="drawer">
                {/* <div className="absolute inset-0 bg-[#fffd] z-30 px-6 py-3 flex items-center">
                    <div className="w-full h-80 bg-[#000c] shadow-2xl rounded-lg">
                        Hello
                    </div>
                </div> */}
                <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
                <div className={`drawer-content relative ${(pathname === '/') && 'bg-gradient-to-br from-orange-500 to-primary'}`}>
                    {pathname!=='/' && 
                        <a href="https://api.whatsapp.com/send?phone=13653640333" className={`md:hidden fixed top-[5rem] right-2 sm:right-7 z-20 rounded-full p-[.3rem] bg-white ${pathname==='/blogspot' || pathname==='/careers' ? 'hidden' : 'block'}`}>
                            <FaWhatsapp size={32} fill={'#128C7E'}/>
                        </a>
                    }
                    {pathname!=='/' && <Navbar />}
                    <div className="">
                        <Routes>
                            <Route path="/" element={<LandingPage />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/web" element={<Web />} />
                            <Route path="/internetofthings" element={<InternetOfThings />} />
                            <Route path="/opencv" element={<OpenCV />} />
                            <Route path="/blogspot" element={<Blogspot />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/products/:id" element={<ProductDetail />} /> 
                            <Route path="/careers" element={<Careers />} />
                            <Route path="/contact" element={<Contact/>} />
                            <Route path="/privacy" element={<Privacy/>} />
                            <Route path={'/*'} element={<Error />} />
                        </Routes>
                    </div>
                    {pathname!=='/' && <Footer />}
                </div>
                <Sidebar />
            </div>
        </>
     );
}

export default App;