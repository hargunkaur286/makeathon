"use client";
import { useState } from "react";
import Navbar from "./navbar/index"
import Sidebar from "./sidebar/Sidebar";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <button
        type="button"
        className="inline-flex items-center md:hidden"
        onClick={toggle}
      >
        {/* Menu icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path
            fill="#fff"
            d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
          />
        </svg>
      </button>
    
    
      
    </>
  );
};

export default Navigation;
