import { Link } from 'react-router-dom'
function Error() {
    return ( 
        <div className="hero">
            <div className="hero-content min-h-[85vh] flex-col">
                <p className="text-8xl font-bold text-slate-600">404</p>
                <p className="2xl:text-2xl text-xl"><em className="text-2xl 2xl:text-3xl">Oops!  </em> Page Not Found</p>
                <Link to={'/'}><button className="btn 2xl:btn-lg btn-primary">back to home</button></Link>
            </div>
        </div>
     );
}

export default Error;