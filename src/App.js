import { useContext, useEffect } from "react";
import { FaWhatsapp } from 'react-icons/fa'
import Footer from "./components/Footer";
import About from "./routes/About";
import Hero from "./components/Hero";
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
function App() {

    const {pathname} = useLocation()
    const {revertToLightMode} = useContext(StateManager)

    useEffect(() => {
        htmlClassList.contains('dark') && (pathname !== '/blogspot' && revertToLightMode())
    }, [pathname]) //eslint-disable-line
    
    return ( 
        <>
                <ScrollToTop />
                <div className="drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
                    <div className="drawer-content relative">
                        <a href="https://api.whatsapp.com/send?phone=13653640333" className={`md:hidden fixed top-[5rem] right-2 sm:right-7 z-20 rounded-full p-2 bg-white ${pathname==='/blogspot' || pathname==='/careers' ? 'hidden' : 'block'}`}>
                            <FaWhatsapp size={32} fill={'#128C7E'}/>
                        </a>
                        <Navbar />
                        <div className="">
                            <Routes>
                                <Route path="/" element={<Hero />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/web" element={<Web />} />
                                <Route path="/internetofthings" element={<InternetOfThings />} />
                                <Route path="/opencv" element={<OpenCV />} />
                                <Route path="/blogspot" element={<Blogspot />} />
                                <Route path="/products" element={<Products />} />
                                <Route path="/products/:id" element={<ProductDetail />} /> 
                                <Route path="/careers" element={<Careers />} />
                                <Route path="*" element={<Error />} />
                            </Routes>
                        </div>
                        <Footer />
                    </div>
                    <Sidebar />
                </div>
        </>
     );
}

export default App;