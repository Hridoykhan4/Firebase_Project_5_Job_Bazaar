import { useContext, useEffect, useState } from "react";
import { getStoredLocalApplies, removeFromLs } from "../utils/localDB";
import AppliedJob from "../components/AppliedJob";
import ApplyCountContext from "../Context/ApplyCountContext";

const AppliedJobs = () => {
  const [applies, setApplies] = useState([]);
  const { setApplyCount } = useContext(ApplyCountContext);
  const [tempApplies, setTempApplies] = useState([]);

  useEffect(() => {
    const appliedJobs = getStoredLocalApplies();
    setApplies(appliedJobs);
    setTempApplies(appliedJobs);
  }, []);

  const handleRemoveAppliedJob = (jobId) => {
    const remaining = applies.filter((apply) => apply.id !== jobId);
    setApplies(remaining);
    removeFromLs(jobId);
    setApplyCount((prev) => {
      const reducedPrev = prev - 1;
      localStorage.setItem("apply-count", reducedPrev);
      return reducedPrev;
    });
  };

  if (!applies.length) {
    return (
      <div className="flex flex-col items-center justify-center h-80 text-center text-gray-600 space-y-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
          alt="No Applications"
          className="w-24 h-24 opacity-60"
        />
        <h2 className="text-xl font-semibold">No Applications Found</h2>
        <p className="text-sm text-gray-500">
          Looks like no apply has formed yet. Please check back later!
        </p>
      </div>
    );
  }

  const handleFilter = (e) => {
    if (e.target.value === "all") {
      setApplies(tempApplies);
    } else if (e.target.value === "onsite") {
      const onSiteOnly = tempApplies.filter(
        (apply) => apply?.remote_or_onsite === "Onsite"
      );
      setApplies(onSiteOnly);
    } else if (e.target.value === "remote") {
      const onRemoteOnly = tempApplies.filter(
        (apply) => apply?.remote_or_onsite === "Remote"
      );
      setApplies(onRemoteOnly);
    }
  };

  return (
    <>
      <div className="text-right pt-6">
        <span className="mr-2">Filter By :</span>{" "}
        <select onChange={handleFilter} className="select border-1">
          <option value="all">All</option>
          <option value="remote">Remote</option>
          <option value="onsite">Onsite</option>
        </select>
      </div>

      <div className="grid grid-cols-1 py-7 md:grid-cols-2 gap-4">
        {applies?.map((apply, i) => (
          <AppliedJob
            handleRemoveAppliedJob={handleRemoveAppliedJob}
            key={i}
            apply={apply}
            index={i}
          ></AppliedJob>
        ))}
      </div>
    </>
  );
};

export default AppliedJobs;
