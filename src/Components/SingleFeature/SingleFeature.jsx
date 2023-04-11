import React from "react";

const SingleFeature = ({ featureJob }) => {
  return (
    <div className="border rounded">
      <h1 className="text-4xl">{featureJob.position}</h1>
    </div>
  );
};

export default SingleFeature;
