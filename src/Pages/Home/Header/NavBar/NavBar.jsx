import { NavLink } from "react-router-dom";
const NavBar = () => {

    const link =
        (
            <>
                <li className="mr-12">
                    <NavLink
                        to="/"
                        style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: !isActive ? "black" : "red",

                            };
                        }}
                    >
                        <h2 className="text-xl font-bold">Home</h2>
                    </NavLink>
                </li>

                <li className="mr-12">
                    <NavLink
                        to="/donation"
                        style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: !isActive ? "black" : "red",

                            };
                        }}
                    >
                        <h2 className="text-xl font-bold">Donation</h2>
                    </NavLink>
                </li>
                <li className="mr-12">
                    <NavLink
                        to="/statistics"
                        style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: !isActive ? "black" : "red",

                            };
                        }}
                    >
                        <h2 className="text-xl font-bold">Statistics</h2>
                    </NavLink>
                </li>
            </>

        );

    return (

        <div className="navbar bg-base-100 p-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {link}
                    </ul>
                </div>
                <img src="https://i.ibb.co/82SQL8x/Logo.png" className=" h-6 md:h-12" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
        </div>

    );
};

export default NavBar;