import React from "react";

const IconBtn = ({ Icons, onClick, className }) => {
  return (
    <div
      className={`px-2 py-1 bg-[#0A3D62] text-white rounded ${className}`}
      onClick={onClick}
    >
      {Icons}
    </div>
  );
};

export default IconBtn;
