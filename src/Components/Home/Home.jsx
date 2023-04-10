import React from "react";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import Header from "../Header/Header";
import JobCategory from "../JobCategory/JobCategory";

const Home = () => {
  return (
    <div>
      <Header />
      <JobCategory />
      <FeaturedJobs />
    </div>
  );
};

export default Home;
