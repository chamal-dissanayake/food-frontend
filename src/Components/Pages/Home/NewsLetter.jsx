import React from "react";

const NewsLetter = () => {
  return (
    <div className=" w-full md:w-2/3 mx-auto flex flex-col items-center p-10">
      <h3 className=" text-secondry font-semibold text-4xl text-center ">
        Sign up for my weekly newsletter!
      </h3>
      <p className=" mt-6 text-gray-600 text-lg text-center leading-normal font-light ">
        Weekly emails with my latest recipes, cooking tips and tricks and
        product recommendations! <br />
        You'll be set up in minutes.
      </p>
      <div className=" mt-6 flex flex-col md:flex-row items-center justify-center w-full md:px-8 gap-4 mb-20">
        <input
          className=" flex flex-grow px-8 py-4 rounded text-gray-400 outline-none placeholder:text-[#1b2629] bg-gray-50"
          type="text"
          placeholder="Name"
        />
        <input
          className=" flex flex-grow px-4 py-4 rounded text-gray-400 outline-none placeholder:text-[#1b2629]  bg-gray-50"
          type="text"
          placeholder="Email Address"
        />

        <button
          type="submit"
          className="rounded-lg py-4 px-8 hover:bg-btnColor text-secondry hover:text-white w-60 transition ease-in duration-200 text-center text-base font-semibold border boder-[#9c702a] focus:outline-none  "
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
