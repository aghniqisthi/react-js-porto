import React from "react";

const Button = ({ username, link, logo }) => (
  <button
    type="button"
    className={`py-4 px-8 font-poppins font-medium text-[16px] text-primary white rounded-[16px] outline-none mx-3`}
  >
    <a href={link}>
    <div className="flex justify-center py-6">
    <img
      src={logo}
      alt="logo"
      className="flex items-center w-[100px] h-[100px] object-contain"
    />
    </div>
    {username}
    </a>
  </button>


  
);

export default Button;
