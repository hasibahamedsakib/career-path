import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../../utilities/fakedb";
import ShowJobs from "../AppliedJobs/ShowJobs";

const AppliedJobs = () => {
  const [totalJobs, setTotalJobs] = useState([]);

  const storeJobs = getShoppingCart();

  useEffect(() => {
    fetch("/featuredJobs.json")
      .then((res) => res.json())
      .then((jobs) => setTotalJobs(jobs));
  }, []);

  let allJobs = [];
  for (const id in storeJobs) {
    const jobs = totalJobs.find((pd) => pd.id === +id);
    if (jobs) {
      allJobs.push(jobs);
    }
  }

  //set filter onsite or Remote step-1
  const [selectedFilter, setSelectedFilter] = useState("");
  function handleFilterChange(event) {
    setSelectedFilter(event.target.value);
  }

  const filteredJobs = selectedFilter
    ? allJobs.filter((job) => job.remote_or_onsite === selectedFilter)
    : allJobs;

  return (
    <div>
      <h1 className="text-center text-4xl bg-[#f9f9ff] p-14  font-bold ">
        Applied Jobs
      </h1>
      <div className="container">
        <div className="text-right">
          {allJobs.length > 0 ? (
            <div className="flex justify-end">
              <select
                className="select select-primary  max-w-xs bg-slate-100 outline-none py-3 px-5 rounded-md"
                onChange={handleFilterChange}
                value={selectedFilter}
              >
                <option disabled value="">
                  Filter
                </option>
                <option value="Onsite">Onsite</option>
                <option value="Remote">Remote</option>
              </select>
            </div>
          ) : (
            ""
          )}
        </div>
        {filteredJobs.map((job) => (
          <ShowJobs key={job.id} jobs={job} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
