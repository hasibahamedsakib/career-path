import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="  container grid grid-cols-1 md:grid-cols-5 gap-4 space-y-5 ">
        <div className="w-44">
          <h1 className="text-3xl  pb-4">CareerHub</h1>
          <p>
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
        </div>
        <div>
          <h1 className="text-xl pb-4">Company</h1>
          <li>About Us</li>
          <li>Work</li>

          <li>Latest News</li>
          <li>Careers</li>
        </div>
        <div>
          <h1 className="text-xl pb-4">Product</h1>
          <li>Prototype</li>
          <li>Plans & Pricing</li>
          <li>Customers</li>
          <li>Latest News</li>
          <li>Integrations</li>
        </div>
        <div>
          <h1 className="text-xl pb-4">Support</h1>
          <li>Help Desk</li>
          <li>Sales</li>
          <li>Become a Partner</li>
          <li>Developers</li>
        </div>
        <div>
          <h1 className="text-xl pb-4">Contact</h1>
          <li>524 Broadway , NYC</li>
          <li>+1 777 - 978 - 5570</li>
        </div>
      </div>
      <hr />
      <div className="container flex flex-col md:flex-row md:justify-between md:items-center">
        <p>@2023 CareerPath. All Rights Reserved by</p>
        <p>Powered by Hasib Ahamed</p>
      </div>
    </div>
  );
};

export default Footer;
