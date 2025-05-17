import SplitText from "../../ReactBits/SplitText/SplitText";
import BannerImage from "../assets/job1.jpg";
import FeaturedJobs from "./FeaturedJobs";

const Banner = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-between items-center flex-col lg:flex-row-reverse gap-10 px-6 md:px-10">
          
          <div className="flex-1  w-full min-h-32 text-center lg:text-right">
            <img
              src={BannerImage}
              alt="Job Banner"
              className="rounded-2xl shadow-xl h-full w-full mx-auto lg:mx-0"
            />
          </div>

          <div className="flex-1 space-y-6 text-center lg:text-left">
            <SplitText
              text="One Step Closer To Your Dream Job"
              className="text-3xl md:text-4xl font-bold "
              delay={100}
              animationFrom={{ opacity: 0, transform: "translateY(50px)" }}
              animationTo={{ opacity: 1, transform: "translateY(0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
            />

            <p className="pt-5 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Explore thousands of job opportunities with all the information you need.
              It’s your future — come find it. Manage all your job applications from
              start to finish.
            </p>

            <div>
              <button className="relative overflow-hidden px-6 py-2.5 border-2 border-primary text-primary rounded-md font-semibold transition-all duration-300 group hover:text-white">
                <span className="absolute w-60 h-0 bg-primary rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 group-hover:h-60 group-hover:-translate-y-1/2 transition-all duration-300 ease-in-out"></span>
                <span className="relative z-10">Get Started</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <FeaturedJobs />
    </>
  );
};

export default Banner;
