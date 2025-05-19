import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import Categories from "./Categories";
import { Link, Outlet, useLocation, useNavigation } from "react-router-dom";
const FeaturedJobs = () => {
  const [categories, setCategories] = useState([]);

  const { pathname } = useLocation();
  const navigation = useNavigation();
  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="py-7">
      <div className="text-center pb-5">
        <h2 className="md:text-4xl text-2xl  mb-2">Featured Jobs</h2>
        <p className="">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-1 md:col-span-1 ">
          {categories.map((category) => (
            <Categories category={category} key={category.id}></Categories>
          ))}
        </div>

        <div className="col-span-1  md:col-span-3">
          {navigation.state === "loading" ? (
            <div className="relative flex justify-center items-center">
              <div className="absolute animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-purple-500"></div>
              <img
                src="https://plus.unsplash.com/premium_photo-1678917827802-721b5f5b4bf0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8am9iJTIwc2VhcmNofGVufDB8fDB8fHww"
                className="rounded-full h-16 w-16"
              />
            </div>
          ) : (
            <Outlet></Outlet>
          )}
        </div>
      </div>

      {pathname.endsWith("All") || (
        <div className="pt-6 flex justify-center">
          <Link
            to="/allJobs"
            className="relative overflow-hidden px-6 py-2.5 border-2 border-primary text-primary rounded-md font-semibold transition-all duration-300 group hover:text-white"
          >
            <span className="absolute w-60 h-0 bg-primary rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 group-hover:h-60 group-hover:-translate-y-1/2 transition-all duration-300 ease-in-out"></span>
            <span className="relative z-10">See All</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default FeaturedJobs;
