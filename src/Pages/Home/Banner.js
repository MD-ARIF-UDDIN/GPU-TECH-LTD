import React from "react";
import './Banner.css';
const Banner = () => {
  return (
    <div
      style={{ "font-family": "'Poppins',sans-serif" }}
      className="hero min-h-screen bg-base-200"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          className="w-3/4"
          alt="alternative pic"
          src="https://th.bing.com/th/id/R.8093e692e3c1db1cf5b79da996d41d3a?rik=3bgiNVTP3tkY7A&pid=ImgRaw&r=0"
        />
        <div>
          <h1 className="text-5xl font-bold">
            <span className="text-primary"> GPU</span> TECH LTD
          </h1>
          <p className="py-6">
            GPU online shoping, MI, serves the tools sell,
            manufacture. They offer standard and custom parts and tools, with
            custom manufacturing services including machining, additive
            manufacturing, molding, cutting, extrusions, stamping, bending, and
            welding.
          </p>
          <button className="btn btn-primary">Order now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
