import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";
const SingleFeature = ({ featureJob }) => {
  const { position, logo, company, jobType, location, salary, id } = featureJob;
  return (
    <div className="border rounded-lg px-10 py-6">
      <img className="w-36 h-12 my-6" src={logo} alt="" />
      <h3 className="text-2xl font-semibold py-3 text-gray-700">{position}</h3>
      <h4 className="text-xl text-slate-600 ">{company}</h4>
      <div className="flex gap-x-3 py-4 text-blue-400 font-semibold">
        <p className="border py-3 px-5 rounded-md">{jobType[0]}</p>
        <p className="border py-3 px-5 rounded-md">{jobType[1]}</p>
      </div>
      <div className="flex gap-x-4">
        <h4 className="text-xl text-slate-600 my-2 flex items-center gap-1">
          <MapPinIcon className="h-5 w-5" /> {location}
        </h4>
        <h4 className="text-xl text-slate-600 my-2 flex items-center gap-1">
          <CurrencyDollarIcon className="h-5 w-5" /> Salary : {salary}
        </h4>
      </div>
      <Link to={`/details/${id}`}>
        <button className="btn-purple my-5">View Details</button>
      </Link>
    </div>
  );
};

export default SingleFeature;
