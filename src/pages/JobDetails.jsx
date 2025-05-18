import { useLoaderData } from "react-router-dom";
import {
  MdOutlineAttachMoney,
  MdLocationOn,
  MdPhone,
  MdEmail,
  MdWork,
} from "react-icons/md";
import bgImg from "../assets/bg-details.jpg";
import { useContext, useEffect, useState } from "react";
import useAuthValue from "../hooks/useAuthValue";
import { addToLS, getStoredLocalApplies } from "../utils/localDB";
import ApplyCountContext from "../Context/ApplyCountContext";

const JobDetails = () => {
  const { user } = useAuthValue();
  const { setApplyCount } = useContext(ApplyCountContext);
  const [tabbed, setIsTabbed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const job = useLoaderData();
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    id,
    company_name,
    job_type,
    remote_or_onsite,
    category_name,
    location,
    contact_information,
    logo,
  } = job || {};

  useEffect(() => {
    const storedItem = getStoredLocalApplies();
    const isExist = storedItem.find((pro) => pro.id === id);
    if (isExist) {
      setIsTabbed(true);
    }
  }, [id]);

  const handleApplySubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;

    const number = e.target.number.value;

    const info = {
      name,
      id,
      email: user?.email,
      number,
      job_title,
      logo,
      company_name,
      job_type,
      remote_or_onsite,
      category_name,
      salary,
      location,
    };
    if (!name || !number) {
      return alert(`Fill all the input`);
    }
    const stored = getStoredLocalApplies();
    const isExist = stored.find((storeApply) => storeApply.id === info.id);
    if (!isExist) {
      setApplyCount((prev) => {
        const newCount = parseInt(prev + 1);
        localStorage.setItem("apply-count", newCount);
        return newCount;
      });
    }

    addToLS(info);
    setIsTabbed(true);
    e.target.reset();
    setShowModal(false)

  };

  return (
    <div className=" mb-4 text-white bg-gray-900">
      {/* Hero Section */}
      <div
        className="min-h-[300px] bg-cover rounded-xl bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      >
        <h3 className="text-4xl font-bold text-white">Job Details</h3>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div className="md:col-span-2 space-y-6">
          <div>
            <h2 className="font-bold text-xl mb-2">Job Description:</h2>
            <p className="text-gray-300">{job_description}</p>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-2">Job Responsibility:</h2>
            <p className="text-gray-300">{job_responsibility}</p>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-2">
              Educational Requirements:
            </h2>
            <p className="text-gray-300">{educational_requirements}</p>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-2">Experiences:</h2>
            <p className="text-gray-300">{experiences}</p>
          </div>
        </div>

        <div className="bg-[#1e293b] p-6 rounded-xl shadow-xl space-y-6">
          <div>
            <h3 className="text-lg font-bold border-b border-gray-600 pb-2 mb-4">
              Job Details
            </h3>
            <p className="flex items-center gap-2 mb-2">
              <MdOutlineAttachMoney className="text-xl" />
              <span>Salary: {salary}</span>
            </p>
            <p className="flex items-center gap-2">
              <MdWork className="text-xl" />
              <span>Job Title: {job_title}</span>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold border-b border-gray-600 pb-2 mb-4">
              Contact Information
            </h3>
            <p className="flex items-center gap-2 mb-2">
              <MdPhone className="text-xl" />
              <span>Phone: {contact_information?.phone}</span>
            </p>
            <p className="flex items-center gap-2 mb-2">
              <MdEmail className="text-xl" />
              <span>Email: {contact_information?.email}</span>
            </p>
            <p className="flex items-center gap-2">
              <MdLocationOn className="text-xl" />
              <span>Address: {contact_information?.address}</span>
            </p>
          </div>

          {showModal && (
            <dialog className="modal modal-open modal-bottom sm:modal-middle">
              <div className="modal-box">
                <div className="card  w-full shrink-0 shadow-2xl">
                  <form onSubmit={handleApplySubmit} className="card-body">
                    <fieldset className="fieldset">
                      <label className="label">Name</label>
                      <input
                        name="name"
                        type="text"
                        className="input w-full text-black"
                        placeholder="Name"
                      />
                      <label className="label">Email</label>
                      <input
                        value={user.email}
                        name="email"
                        type="email"
                        className="input w-full text-black"
                        placeholder="Email"
                        readOnly
                      />
                      <label className="label">Phone Number</label>
                      <input
                        name="number"
                        type="number"
                        className="input w-full text-black"
                        placeholder="Number"
                      />

                      <button className="btn btn-neutral mt-4">
                        Send Apply
                      </button>
                    </fieldset>
                  </form>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    <button onClick={() => setShowModal(false)} className="btn">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          )}

          <button
            disabled={tabbed}
            onClick={() => setShowModal(true)}
            className="btn btn-secondary w-full mt-4"
          >
            {tabbed ? "Applied" : "Apply Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
