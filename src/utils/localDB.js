const getStoredLocalApplies = () => {
  const stored = localStorage.getItem("applied-jobs");
  return stored ? JSON.parse(stored) : [];
};

const addToLS = (info) => {
  const stored = getStoredLocalApplies();
  if (stored.find((storeApply) => storeApply.id === info.id)) {
    return alert("ALready Applied");
  }
  localStorage.setItem("applied-jobs", JSON.stringify([...stored, info]));
};

const removeFromLs = (jobId) => {
  const stored = getStoredLocalApplies();
  const remaining = stored.filter((apply) => apply.id !== jobId);
  localStorage.setItem("applied-jobs", JSON.stringify(remaining));
};

export { addToLS, getStoredLocalApplies, removeFromLs };
