import React from "react";

const Home = () => {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="h-1/2 w-1/2 text-3xl font-bold">
            <h1 id="home-heading">Welcome to Online Unit Converter!</h1>
            <div id="spacer"></div>
            <h3>  Please select converter type from the Navbar above</h3>
        </div>
      </div>
    </>
  );
};

export default Home;
