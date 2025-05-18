import { useLoaderData } from "react-router-dom";
import JobCard from "../components/JobCard";

const AllJobs = () => {
    const jobs = useLoaderData()
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 py-10">
              {jobs?.map((job) => (
                <JobCard key={job.id} job={job}></JobCard>
              ))}
            </div>
    );
};

export default AllJobs;