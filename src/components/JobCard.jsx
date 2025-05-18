import Aos from "aos";
import { useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    job_type,
    remote_or_onsite,
    category_name,
    salary,
    location,
    id,
  } = job;

  const animations = ["fade-up", "zoom-in", "flip-left", "fade-right"];
  const randomAnime = animations[Math.floor(Math.random() * animations.length)];

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      data-aos={randomAnime}
      data-aos-offset="150"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
      data-aos-duration="1200"
      className="card shadow-2xl border border-gray-200 rounded-2xl hover:shadow-indigo-200 transition-all duration-300 ease-in-out"
    >
      <figure className="px-6 pt-6">
        <img src={logo} alt="Company Logo" className="h-20 object-contain" />
      </figure>

      <div className="card-body space-y-3">
        <h2 className="card-title text-xl font-bold text-gray-800">
          {job_title}
        </h2>
        <div className="badge badge-secondary text-white">{category_name}</div>
        <p className="text-gray-600 font-medium">{company_name}</p>

        <div className="flex flex-wrap justify-between items-center text-sm text-gray-700 gap-2">
          <div className="flex items-center gap-1">
            <CiLocationOn className="text-xl text-indigo-500" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <MdAttachMoney className="text-xl text-green-600" />
            <span>Salary: {salary}</span>
          </div>
        </div>

        <div className="card-actions flex-wrap justify-start mt-3 gap-2">
          <div className="badge badge-outline badge-info px-3 py-1 text-sm">
            {job_type}
          </div>
          <div className="badge badge-outline badge-info px-3 py-1 text-sm">
            {remote_or_onsite}
          </div>
        </div>

        <div className="mt-5">
          <Link
            to={`/job/${id}`}
            className="btn w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-purple-600 hover:to-indigo-600 font-semibold tracking-wide"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
