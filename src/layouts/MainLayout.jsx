import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SplashCursor from "../../ReactBits/SplashCursor/SplashCursor";

const MainLayout = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
    <SplashCursor />
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
