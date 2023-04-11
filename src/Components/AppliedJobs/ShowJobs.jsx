import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useNavigate } from "react-router-dom";
const ShowJobs = ({ jobs }) => {
  const { position, company, location, jobType, logo, id, salary } = jobs;
  const navigate = useNavigate();
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
          <div className="flex gap-6">
            <h4 className="text-xl text-slate-500 py-2 flex gap-1 items-center">
              {" "}
              <MapPinIcon className="h-6 w-6" />
              {location}
            </h4>
            <h4 className="text-xl text-slate-500 py-2 flex gap-1 items-center">
              {" "}
              <CurrencyDollarIcon className="h-6 w-6" />
              {salary}
            </h4>
          </div>
        </div>
        <button
          className="btn-purple "
          onClick={() => navigate(`/details/${id}`)}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ShowJobs;
