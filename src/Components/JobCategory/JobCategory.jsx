import React, { useEffect, useState } from "react";
import SingleCategory from "../singleCategory/singleCategory";

const JobCategory = () => {
  const [jobCategory, setJobCategory] = useState([]);
  useEffect(() => {
    fetch("jobcategory.json")
      .then((res) => res.json())
      .then((data) => setJobCategory(data));
  }, []);

  return (
    <div className="container  my-16">
      <div className="text-center">
        <h1 className="text-5xl font-semibold">Job Category List</h1>
        <p className="text-slate-700 my-8 mb-20 text-base font-semibold">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="flex justify-around items-center">
        {jobCategory.map((job) => (
          <SingleCategory key={job.jobs} jobs={job} />
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
