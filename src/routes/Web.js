function Web() {
    return ( 
        <div className="relative container mx-auto p-6">
            <div className="text-center pt-12 bg-[url('/src/images/webherobg.svg')] bg-cover">
                <h1 className="inline text-transparent text-3xl bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-primary drop-shadow-lg">Web Applications <br /> Built To Go Fast</h1>
                <p className="mt-4 text-xl font-thin ">We design and develop top-notch, high-performance stactic and dynamic webapps with Jamstack, MERN, LAMP, Wordpress etc... </p>
                <button className="btn bg-gradient-to-l from-violet-500 to-fuchsia-500 hover:bg-gradient-to-r text-base-200 px-6 rounded-full shadow-lg border-0 mt-8 tracking-wider">Let's get in Touch</button>
            </div>
        </div>
     );
}

export default Web;