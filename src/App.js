import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
function App() {
    return ( 
        <div className="drawer"> {/*daisyUI*/}
            <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
            <div className="drawer-content">  
                <Navbar />
                <Hero />
                <Footer />
            </div>
            {/* sidebar component within daisyUI-drawer component */}
            <Sidebar />
        </div>
     );
}

export default App;