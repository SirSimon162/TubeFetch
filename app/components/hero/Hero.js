import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="w-full flex justify-center items-center">
      <Image
        src="/bg.png"
        alt="Background"
        width="800"
        height="800"
        className="-z-10 absolute blur-md"
      />
      <div className="w-full overlay bg-black text-white z-10 bg-opacity-60 flex flex-col items-center py-20">
      <Image
        src="/yt1.png"
        alt="Background"
        width="50"
        height="50"
        className="absolute top-[300px] left-[130px] hidden md:block"
      />
      <Image
        src="/yt2.png"
        alt="Background"
        width="50"
        height="50"
        className="absolute top-[500px] right-[130px] hidden md:block"
      />
      <Image
        src="/yt3.png"
        alt="Background"
        width="50"
        height="50"
        className="absolute top-[200px] right-[50px] hidden md:block"
      />
        <div className="flex items-center justify-end">
          <p className="inline font-extrabold text-[40px] sm:text-[70px] custom-gradient-text">
            <span className="border-b-4 border-white px-1">YouTube</span> Video
          </p>
          <Image
            src="/arrow.png"
            alt="arrow"
            width="60"
            height="60"
            className="absolute translate-x-10 sm:translate-x-14 -translate-y-3 w-[55px] hidden sm:block"
          />
        </div>
        <div className="flex justify-start items-center font-extrabold text-[40px] sm:text-[70px] custom-gradient-text">
          <Image
            src="/arrow2.png"
            alt="arrow"
            width="60"
            height="60"
            className="absolute -translate-x-11 sm:-translate-x-24 w-[80px] hidden sm:block"
          />
          <p>Player</p>
        </div>
        <div className="flex items-center justify-end bg-black bg-opacity-20 p-1 sm:p-2 min-w-[310px] sm:min-w-[500px] w-[60%] sm:w-[45%] border-gradient overflow-hidden">
          <input
            type="text"
            className="w-full focus:outline-none focus:border-opacity-0 bg-transparent"
            placeholder="Search..."
          />
          <button
            type="button"
            className="bg-gradient-to-r from-purple-600 to-yellow-600 text-white font-bold px-4 sm:px-6 py-1"
          >
            Search
          </button>
          <Image
            src="/arrow3.png"
            alt="arrow"
            width="60"
            height="60"
            className="absolute w-[50px] translate-x-5 translate-y-14 hidden sm:block"
          />
        </div>
        <div className="flex justify-center items-center mt-5 sm:mt-10">
          <p className="font-semibold text-[13px] sm:text-[15px] max-w-[400px] sm:max-w-full w-[90%] sm:w-[60%] text-center">
            Embrace TubeFetch today and rediscover the joy of watching your
            favorite videos without any distractions!
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 mt-5 sm:mt-10">
          <div className="flex justify-center items-center gap-2">
            <Image
              src="/arrow4.png"
              alt="arrow"
              width="60"
              height="60"
              className="w-[20px] sm:w-[30px]"
            />
            <p className="font-regular text-[12px] sm:text-[15px] text-center">
              Clean and Distraction Free Environment
            </p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Image
              src="/arrow4.png"
              alt="arrow"
              width="60"
              height="60"
              className="w-[20px] sm:w-[30px]"
            />
            <p className="font-regular text-[12px] sm:text-[15px] text-center">
              Free to Use Forever
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
