import PropTypes from 'prop-types'

const Banner = ({handleValue,handleSearch}) => {
    
    return (
        <div className="mb-24">
            <div className="hero h-[40vh] md:h-[80vh]" style={{ backgroundImage: 'url(https://i.ibb.co/dJZsR7H/Rectangle-4288.png)' }}>
                <div className="hero-overlay bg-white opacity-90"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-10 text-2xl md:text-4xl md:w-[800px] font-bold text-black">I Grow By Helping People In Need</h1>

                        <input type="search" onChange={handleSearch} name="search" placeholder="Search here..." className="py-3 md:w-[300px]  lg:w-[470px] md:pl-6 lg:pl-12 rounded-sm mx-0 text-black" />
                        <button onClick={handleValue} className=" py-3 px-4 md:px-6 bg-[#FF444A] text-white rounded-r-md">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
Banner.propTypes = {
    handleValue: PropTypes.func,
    handleSearch: PropTypes.func
}
export default Banner;