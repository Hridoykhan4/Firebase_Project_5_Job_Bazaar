import Aos from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: false,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="py-7">
      <div className="text-center">
        <h2
          data-aos="fade-up"
          data-aos-offset="150"
          data-aos-delay="100"
          data-aos-easing="ease-in-out"
          data-aos-duration="1200"
          className="md:text-4xl text-2xl  mb-2"
        >
          Featured Jobs
        </h2>
        <p className="">
          Explore thousands of job opportunities with all the information you
          need. Its your future 
        </p>
      </div>
    </div>
  );
};

export default FeaturedJobs;
