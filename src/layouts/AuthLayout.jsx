import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
    return (
        <>

            <header>
                <Navbar></Navbar>
            </header>

            <main>
                <Outlet></Outlet>
            </main>




        </>
    );
};

export default AuthLayout;