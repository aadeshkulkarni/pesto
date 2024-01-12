import React from "react";

const Hero = () => {
  const d = new Date();
  const today = `${d.getDate() + 1}, ${d.toLocaleString("default", { month: "long" })} ${d.getFullYear()}`;

  return (
    <>
      <div className="w-full md:w-auto p-8 flex flex-col md:flex-row items-center text-lg md:text-6xl leading-8">
        {/* <div className="font-semibold">Hello, Aadesh, </div> */}
        <div className="text-gray-700 tracking-wide font-markScript"> Start planning your day</div>
      </div>
      <div className="py-2 md:pb-8 text-center flex items-center">
        <div className="text-pink-500 text-xl mx-2">{d.toLocaleString("default", { weekday: "long" })}</div>
        <div className="">{today}</div>
      </div>
    </>
  );
};

export default Hero;
