import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ShowDetail from "./ShowDetail";

const JobDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const myData = data.filter((data) => data.id === +id);

  return (
    <div className="">
      <h1 className="text-center text-4xl bg-[#f9f9ff] p-10 font-bold">
        Job Details
      </h1>
      {myData.map((data) => (
        <ShowDetail key={data.id} detail={data} />
      ))}
    </div>
  );
};

export default JobDetails;
