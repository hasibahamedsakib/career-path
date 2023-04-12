import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../../utilities/fakedb";
import ShowJobs from "./ShowJobs";

const AppliedJobs = () => {
  const [totalJobs, setTotalJobs] = useState([]);
  const [select, setSelect] = useState("");
  const [filterJob, setFilterJobs] = useState([]);
  const [newFilter, setNewFilter] = useState([]);

  useEffect(() => {
    fetch("featuredJobs.json")
      .then((res) => res.json())
      .then((jobs) => {
        let allJobs = [];
        const storeJobs = getShoppingCart();
        for (const id in storeJobs) {
          const job = jobs.find((pd) => pd.id === +id);
          if (job) {
            allJobs.push(job);
          }
          setTotalJobs(allJobs);
          setFilterJobs(allJobs);
        }
      });

    // const filteredJobs = (mapJobs) => {
    //   const { jobType } = mapJobs;
    //   let myJob = [];
    //   if (jobType[0] == select) {
    //     let newJob = totalJobs.filter((job) => job.id == mapJobs.id);
    //     // myJob.push(newJob[0]);
    //     console.log(newJob);
    //   }
    // };
  }, []);

  const filteredJobs = (mapJobs) => {
    // console.log(mapJobs);
    const { jobType } = mapJobs;

    if (jobType[0] == select) {
      let newJob = totalJobs.filter((job) => job.jobType == jobType);
      const newObj = newJob[0];
      // ary.push(newJob);
      useEffect(() => {
        setNewFilter(Array(newObj));
      }, []);
    }
  };
  console.log(newFilter);

  return (
    <div>
      <h1 className="text-center text-4xl bg-[#f9f9ff] p-14  font-bold ">
        Applied Jobs
      </h1>
      <div className="container">
        <span className="bg-[url('./src/assets/All Images/Vector-1.png')]">
          hfgyufyuhgj
        </span>
        <div className="text-right">
          <select
            onChange={(e) => setSelect(e.target.value)}
            className="border px-5 py-2 bg-slate-100 outline-none"
          >
            <option>Filter By </option>
            <option value="Remote">Remote</option>
            <option value="Onsite">Onsite</option>
          </select>
        </div>
        {filterJob &&
          filterJob?.map((job, indx) => <ShowJobs key={indx} jobs={job} />)}
        {filterJob && filterJob?.map((job, indx) => filteredJobs(job))}
      </div>
    </div>
  );
};

export default AppliedJobs;
