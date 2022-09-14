import {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import { FaArrowUp } from 'react-icons/fa'
const ScrollToTopButton = () => {

    const pathname = useLocation()
    const [visible, setVisible] = useState(false)


    const onClick = () => {
        document.querySelector('.drawer-content').scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        const toggleVisibility = (e) => {
            (e.currentTarget.scrollTop > 800) ? setVisible(true) : setVisible(false)
        }

        document.querySelector('.drawer-content').addEventListener('scroll', toggleVisibility)

        return () => {
            document.querySelector('.drawer-content').removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    return (
        <div>
            {(pathname!=='/') && 
                <div onClick={onClick} className={`arrowUp md:right-16 fixed bottom-[1rem] right-4 sm:right-7 z-20 rounded-md p-[.4rem] bg-white ${!visible && 'hidden'}`}>
                    <FaArrowUp className="" size={20} fill={'#000'}/>
                </div>
            }
        </div>
    )

}

export default ScrollToTopButton