
const Banner = () => {
    const style = {
        color: '#a78bfa'
    }
    return (
        <div className="flex bg-blue-50  static	">
            <div className="h-2/4 w-2/4 m-10">
                <h1 className="text-6xl font-extrabold	mb-5">One Step <br />Closer To Your <br /> <span style={style}>Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn btn-outline btn-primary mt-5">Get Started</button>

            </div>
            <div className="">
                <img className="h-2/4 absolute mb-0" src="/src/assets/images/user.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;