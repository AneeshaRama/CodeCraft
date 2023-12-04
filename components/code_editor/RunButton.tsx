import React from "react";

const RunButton = () => {
  return (
    <div className="cursor-pointer transition ease-in-out transform hover:scale-125 delay-75 h-14 w-14 md:h-20 md:w-20 rounded-full bg-green-500 flex justify-center items-center absolute md:bottom-20 md:right-[42vw] z-10 text-white bottom-[45vh] right-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default RunButton;