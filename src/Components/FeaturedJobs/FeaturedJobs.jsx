import React, { useEffect, useState } from "react";
import SingleFeature from "../SingleFeature/SingleFeature";

const FeaturedJobs = () => {
  const [featuredJob, setFeaturedJob] = useState([]);
  useEffect(() => {
    fetch("featuredJobs.json")
      .then((res) => res.json())
      .then((data) => setFeaturedJob(data));
  }, []);
  console.log(featuredJob);
  return (
    <div className="container">
      <div className="text-center">
        <h1 className="text-5xl font-semibold">Featured Jobs</h1>
        <p className="text-slate-700 my-8 mb-20 text-base font-semibold">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6">
        {featuredJob.map((featureJob) => (
          <SingleFeature key={featureJob.id} featureJob={featureJob} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
