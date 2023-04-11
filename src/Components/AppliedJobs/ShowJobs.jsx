import React from "react";

const ShowJobs = ({ jobs }) => {
  const { position, company, location, jobType, logo } = jobs;

  return (
    <div className="border p-6 rounded-md my-4 flex  items-center">
      <div className="bg-gray-100 rounded-md p-8">
        <img className="w-36 h-24" src={logo} alt="" />
      </div>
      <div className="flex justify-between w-full items-center">
        <div className="ml-8">
          <h3 className="text-xl font-semibold py-2 text-gray-700">
            {position}
          </h3>
          <h4 className="text-xl  text-slate-500 pb-2">{company}</h4>
          <div className="flex gap-x-3 py-1 text-blue-400 font-semibold">
            <p className="border py-3 px-5 rounded-md">{jobType[0]}</p>
            <p className="border py-3 px-5 rounded-md">{jobType[1]}</p>
          </div>
          <h4 className="text-xl text-slate-500 py-2">{location}</h4>
        </div>
        <button className="btn-purple ">View Details</button>
      </div>
    </div>
  );
};

export default ShowJobs;
