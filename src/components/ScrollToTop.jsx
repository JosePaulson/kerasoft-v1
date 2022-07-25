import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'

function ScrollToTop({smooth = false}) {
    const {pathname} = useLocation()

    useEffect(() => {
        document.querySelector('.drawer-content').scrollTo({
            top: 0,
            behavior: smooth ? 'smooth' : 'auto'
        })
    }, [pathname]) //eslint-disable-line

    return null
}

export default ScrollToTop;