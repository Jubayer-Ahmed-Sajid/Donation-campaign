import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex justify-center h-[80vh] items-center">
            <h2 className="text-3xl text-red-600 text-center">Sorry the path was not Found, <br />
             please go back to home <span className="p-4">
                <Link to={'/'}>
                <button className="btn-secondary rounded-lg py-2 px-4">Home</button>

                </Link>
                
                </span></h2>
            
        </div>
    );
};

export default Error;