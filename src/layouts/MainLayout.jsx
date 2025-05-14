import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>

            <main className="min-h-[calc(100vh-418px)]">
                    <Outlet></Outlet>
            </main>


            
            <>
                <Footer></Footer>
            </>

        </>
    );
};

export default MainLayout;