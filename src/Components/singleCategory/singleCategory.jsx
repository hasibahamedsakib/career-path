import React from "react";

const SingleCategory = ({ jobs }) => {
  console.log(jobs);
  return (
    <div className="bg-[#f9f9ff] rounded-md py-8 px-10">
      <img className="w-20 h-16" src={jobs.icon} alt="" />
      <h2 className="text-2xl font-semibold py-4">{jobs.title}</h2>
      <p className="text-slate-600 font-semibold">{jobs.jobs} Jobs Available</p>
    </div>
  );
};

export default SingleCategory;
