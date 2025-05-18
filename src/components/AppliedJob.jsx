import Aos from "aos";
import { useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaEnvelope, FaPhone, FaUserTie } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";

const AppliedJob = ({ apply, index, handleRemoveAppliedJob }) => {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div
      data-aos={`${index % 2 === 0 ? "fade-down" : "fade-up"}`}
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      className="shadow-lg rounded-xl p-4 space-y-4 border border-base-200 mt-4"
    >
      <figure className="">
        <img
          src={apply?.logo}
          alt="Company Logo"
          className="h-20 object-contain"
        />
      </figure>
      <div className="flex items-center gap-4 p-4">
        <div className="bg-secondary text-white p-3 rounded-full text-xl">
          <FaUserTie />
        </div>
        <div>
          <h2 className="text-xl font-bold">{apply?.name}</h2>
          <p className="text-sm text-gray-500">{apply?.job_title}</p>
        </div>
      </div>
      <div className="card-body p-0 space-y-3">
       
        <div className="badge badge-secondary text-white">
          {apply?.category_name}
        </div>
        <p className="text-gray-600 font-medium">{apply?.company_name}</p>

        <div className="flex flex-wrap justify-between items-center text-sm text-gray-700 gap-2">
          <div className="flex items-center gap-1">
            <CiLocationOn className="text-xl text-indigo-500" />
            <span>{apply?.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <MdAttachMoney className="text-xl text-green-600" />
            <span>Salary: {apply?.salary}</span>
          </div>
        </div>

        <div className="card-actions flex-wrap justify-start mt-3 gap-2">
          <div className="badge badge-outline badge-info px-3 py-1 text-sm">
            {apply?.job_type}
          </div>
          <div className="badge badge-outline badge-info px-3 py-1 text-sm">
            {apply?.remote_or_onsite}
          </div>
        </div>
      </div>
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-primary" />
          <span>{apply?.email}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaPhone className="text-primary" />
          <span>{apply?.number}</span>
        </div>
      </div>

      <div className="text-right">
        <button
          onClick={() => handleRemoveAppliedJob(apply?.id)}
          className="btn btn-sm btn-outline btn-primary"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default AppliedJob;
