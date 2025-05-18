import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import SplashCursor from "../../ReactBits/SplashCursor/SplashCursor";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const MainLayout = () => {
  const { pathname } = useLocation();

  const navigation = useNavigation();

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
        {navigation.state === "loading" ? (
          <>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-xl"></span>
          </>
        ) : (
          <Outlet></Outlet>
        )}
      </main>

      <>
        <Footer></Footer>
      </>
    </>
  );
};

export default MainLayout;
