import React from "react";

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
  } = detail;

  return (
    <div className="container">
      <div>
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
      <div></div>
    </div>
  );
};

export default ShowDetail;
