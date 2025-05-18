import { useState } from "react";
import ApplyCountContext from "../Context/ApplyCountContext";

const AppliedJobsProvider = ({ children }) => {
  const [applyCount, setApplyCount] = useState(
    parseInt(localStorage.getItem("apply-count")) || 0
  );

  const applyInfo = { applyCount, setApplyCount };

  return <ApplyCountContext value={applyInfo}>{children}</ApplyCountContext>;
};

export default AppliedJobsProvider;
