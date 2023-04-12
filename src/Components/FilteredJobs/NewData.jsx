import React from "react";

const NewData = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div>
        <h1 className="text-center text-4xl bg-[#f9f9ff] p-14  font-bold ">
          Applied Jobs
        </h1>
        <div className="container">
          {/* {data?.map((job, indx) => (
            <ShowJobs key={indx} jobs={job} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default NewData;
