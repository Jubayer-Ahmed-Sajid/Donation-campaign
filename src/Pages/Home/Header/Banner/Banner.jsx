
const Banner = () => {
    return (
        <div className="mb-24">
            <div className="hero h-[80vh]" style={{ backgroundImage: 'url(https://i.ibb.co/dJZsR7H/Rectangle-4288.png)' }}>
                <div className="hero-overlay bg-white opacity-90"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-10 text-4xl w-[800px] font-bold text-black">I Grow By Helping People In Need</h1>
                       
                       <input type="search" placeholder="Search here..." className="p-3 mx-0" />
                       <button className="btn p-5 bg-[#FF444A] text-white rounded-md">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;