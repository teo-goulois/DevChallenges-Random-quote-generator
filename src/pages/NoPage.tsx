import React from "react";
import { Link } from "react-router-dom";
const NoPage = () => {
  return (
    <div className="relative h-screen">
      <div
        style={{ transform: "translate(-50%, -50%)" }}
        className="absolute left-[50%] top-[50%] max-w-[520px] w-full text-center "
      >
        <div className="relative h-[200px] mr-auto mb-5 ml-auto ">
          <h1
            style={{ transform: "translate(-50%, -50%)" }}
            className="text-[148px] md:text-[236px] font-extralight text-[#211b19] uppercase absolute left-2/4 top-2/4"
          >
            OOPS!
          </h1>
          <h2 className="text-3xl font-normal uppercase text-[#211b19] py-[10px] px-1 m-auto absolute -bottom-1 left-0 right-0 bg-white">
            404 - the page can't be found
          </h2>
        </div>
        <Link className="z-10 cursor-pointer relative" to="/">
          <span className="font-bold py-[13px] px-[23px] bg-[#ff6300] text-lg text-white">
            go to homepage
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NoPage;
