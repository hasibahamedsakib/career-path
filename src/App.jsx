import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="outlet">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default App;
