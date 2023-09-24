import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Home/Header/NavBar/NavBar";

const Root = () => {
    return (
        <div>
           <div className="max-w-7xl mx-auto">
           <NavBar></NavBar>
            <Outlet></Outlet>
           </div>

        </div>
    );
};

export default Root;