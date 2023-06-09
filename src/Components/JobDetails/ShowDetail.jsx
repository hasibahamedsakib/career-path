import {
  CreditCardIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import Swal from "sweetalert2";
import { addToDb } from "../../utilities/fakedb";
const ShowDetail = ({ detail }) => {
  const {
    company,
    description,
    educationalRequirements,
    experiences,
    email,
    location,
    phone,
    responsibility,
    position,
    salary,
    id,
  } = detail;

  const handleClick = () => {
    Swal.fire("Good job!", "The Job is Applied", "success");
    addToDb(id);
  };
  return (
    <div className="container grid grid-cols-3 gap-4">
      <div className="col-span-2">
        <p className=" text-slate-600 font-semibold  my-3">
          <span
            className="text-black 
        font-bold"
          >
            Job Description
          </span>{" "}
          : {description}
        </p>
        <p className=" text-slate-600 font-semibold my-3">
          <span
            className="text-black 
        font-bold"
          >
            Job Responsibility
          </span>{" "}
          : {responsibility}
        </p>
        <p className=" text-slate-600 font-semibold my-3">
          <span
            className="text-black 
        font-bold"
          >
            Educational Requirements:
          </span>{" "}
          {educationalRequirements}
        </p>
        <p className=" text-slate-600 font-semibold my-3">
          <span
            className="text-black 
        font-bold"
          >
            Experiences:
          </span>{" "}
          : {experiences}
        </p>
      </div>
      <div>
        <div className="bg-[#f4f2ff] py-10 px-8 mx-auto rounded-md">
          <h1 className="text-xl font-semibold py-3">Job Details</h1>
          <hr />
          <h4 className="text-slate-600 font-semibold pt-2 flex gap-2 items-center">
            <CurrencyDollarIcon className="h-5 w-5 text-blue-500" />{" "}
            <span className="text-black">Job Salary </span>: {salary}
          </h4>
          <h3 className="text-slate-600 font-semibold py-2 flex gap-1 items-center">
            <CreditCardIcon className="h-5 w-5 text-blue-500" />
            <span className="text-black"> Job Title : </span>
            {position}
          </h3>
          <hr />
          <h1 className="text-xl font-semibold py-3">Contact Information</h1>
          <h3 className="text-slate-600 font-semibold flex gap-2 items-center">
            <PhoneIcon className="h-5 w-5 text-blue-500" />
            <span className="text-black"> Phone : </span>
            {phone}
          </h3>
          <h3 className="text-slate-600 font-semibold pt-2 flex gap-2 items-center">
            <EnvelopeIcon className="h-5 w-5 text-blue-500" />
            <span className="text-black"> Email : </span>
            {email}
          </h3>
          <h3 className="text-slate-600 font-semibold py-2 flex gap-2 items-center">
            <MapPinIcon className="h-5 w-5 text-blue-500" />
            <span className="text-black"> Address : </span>
            {location}
          </h3>
        </div>

        <button onClick={handleClick} className="btn-purple w-full mt-5">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default ShowDetail;
