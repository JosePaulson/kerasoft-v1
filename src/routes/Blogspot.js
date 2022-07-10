import { useContext } from 'react'
import StateManager from '../context/StateManager';
function Blogspot() {
    const {dark} = useContext(StateManager) //eslint-disable-line

    return ( 
    <div className="h-screen dark:bg-[#0f1729] dark:text-[#b3c5ef]">
            <div className="container mx-auto pt-20 pl-9">
                <h2 className=" text-3xl lg:text-5xl">Blogspot  </h2>
                <br/>
                <h4 className='mt-[-.65rem] text-sm md:text-[1rem] dark:text-[#fefefe]'>All about Electronics and CS.</h4>
            </div>

        </div>
     );
}

export default Blogspot;