import { useLoaderData, useParams } from "react-router-dom";
import JobCard from "./JobCard";
import { useEffect, useState } from "react";
import { MdWorkOff } from "react-icons/md";

const FilteredCategories = () => {
  const jobsData = useLoaderData();
  const [jobs, setJobs] = useState([])   
   const {catName} = useParams();
    useEffect(() => {
        if(catName === "All"){
          setJobs(jobsData);
          return;
        }
       const filteredCard = [...jobsData]?.filter((job) => job.category_name === catName);
        setJobs(filteredCard);
    }, [catName, jobsData])

if (!jobs.length) return (
  <div className="flex items-center justify-center w-full">
    <div className="text-center p-8 rounded-xl bg-white shadow-lg ">
      <div className="text-red-500 text-6xl mb-4 flex justify-center">
        <MdWorkOff />
      </div>
      <h2 className="text-2xl font-bold mb-2 text-gray-800">No Jobs Available</h2>
      <p className="text-gray-600 mb-4">Currently, there are no job listings available. Please check back later!</p>
      <button className="btn btn-outline btn-primary">
        Refresh
      </button>
    </div>
  </div>
);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
      {jobs?.map((job) => (
        <JobCard key={job.id} job={job}></JobCard>
      ))}
    </div>
  );
};

export default FilteredCategories;
