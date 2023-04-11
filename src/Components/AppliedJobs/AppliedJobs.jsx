import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../../utilities/fakedb";
import ShowJobs from "./ShowJobs";

const AppliedJobs = () => {
  const [totalJobs, setTotalJobs] = useState([]);

  useEffect(() => {
    fetch("featuredJobs.json")
      .then((res) => res.json())
      .then((jobs) => setTotalJobs(jobs));
  }, []);
  const storeJobs = getShoppingCart();
  let allJobs = [];
  for (const id in storeJobs) {
    const jobs = totalJobs.find((pd) => pd.id === +id);
    allJobs.push(jobs);
  }
  // console.log(allJobs);
  return (
    <div>
      <h1 className="text-center text-4xl bg-[#f9f9ff] p-14  font-bold">
        Applied Jobs
      </h1>
      <div className="container">
        {allJobs?.map((job, indx) => (
          <ShowJobs key={indx} jobs={job} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
