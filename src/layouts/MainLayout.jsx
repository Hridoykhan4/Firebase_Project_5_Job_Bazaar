import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import SplashCursor from "../../ReactBits/SplashCursor/SplashCursor";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.includes("allJobs") || pathname.includes("job")) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return (
    <>
      <header className="shadow-sm">
        <Navbar></Navbar>
      </header>
      {/* <SplashCursor /> */}
      <main className="min-h-[calc(100vh-418px)] w-11/12 mx-auto">
        <Outlet></Outlet>
      </main>

      <>
        <Footer></Footer>
      </>
    </>
  );
};

export default MainLayout;
