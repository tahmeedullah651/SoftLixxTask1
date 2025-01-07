import React from "react";

const AddBtn = ({ title, onClick, className }) => {
  return (
    <div
      className={`text-white bg-[#0A3D62] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 me-2 flex items-center  focus:outline-none cursor-pointer ${className}`}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default AddBtn;
