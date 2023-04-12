import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../../utilities/fakedb";
import ShowJobs from "../AppliedJobs/ShowJobs";

const AppliedJobs = () => {
  const [totalJobs, setTotalJobs] = useState([]);
  const [getJob, setGetJob] = useState([]);
  const [select, setSelect] = useState("");
  const [filterJob, setFilterJobs] = useState([]);
  const storeJobs = getShoppingCart();

  // let myJob = [];
  // const filteredJobs = (mapJobs) => {
  //   const { jobType } = mapJobs;

  //   if (jobType[0] == select) {
  //     let newJob = allJobs.filter((job) => job.jobType[0] === jobType[0]);

  //     if (newJob) {

  //       // myJob.push(newJob);
  //     }
  //   }
  // };

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

  let fJob = getJob.filter((job) => job.jobType[0] === select);
  useEffect(() => {
    if (allJobs) {
      setGetJob(allJobs);
    }
    if (fJob) {
      setFilterJobs([...filterJob, fJob]);
    }
  }, [totalJobs, select]);
  console.log(filterJob);

  return (
    <div>
      <h1 className="text-center text-4xl bg-[#f9f9ff] p-14  font-bold ">
        Applied Jobs
      </h1>
      <div className="container">
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
        {getJob &&
          getJob?.map((job, indx) => <ShowJobs key={indx} jobs={job} />)}
      </div>
    </div>
  );
};

export default AppliedJobs;
