"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faBars,
  faChevronDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const [scrolledToTop, setScrolledToTop] = useState(0);
  const [toggle, setToggle] = useState(false); // Add state for the dropdown
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);


  return (
    <div className="mb-10"> 
    <div className={`fixed top-0 left-0 right-0 z-50 `}>
      <div
        className={`transition-all duration-300 ease-in-out px-4 py-4 text-white flex items-center justify-between h-16 md:h-20 ${
          scrolledToTop ? "bg-transparent" : "bg-[#0f2a45] bg-opacity-90"
        }`}
      >
        <div className="h-full ">
          <Link href="/">
            <img src="/assets/logowhite.png" alt="Logo" className="h-full object-contain" />
          </Link>
        </div>
        <button type="button" onClick={() => setSidebarIsOpen(true)}>
          <FontAwesomeIcon
            icon={faBars}
            className="hover:text-[#3b5eda] transition-colors text-xl md:hidden"
          />
        </button>
        <div className="gap-8 hidden md:flex">
          <Link
            href="/"
            className="hover:text-secondry hover:text-[#3b5eda] font-semibold text-[1.2rem]"
          >
            Home
          </Link>
          <Link
            href="/components/About.tsx"
            className="hover:text-secondry hover:text-[#3b5eda] font-semibold text-[1.2rem]"
          >
            About us
          </Link>

          <Link
            href="/components/Features.tsx"
            className="hover:text-secondry hover:text-[#3b5eda] font-semibold text-[1.2rem]"
          >
            Features
          </Link>
          <Link
            href="/faq"
            className="hover:text-secondry hover:text-[#3b5eda] font-semibold text-[1.2rem]"
          >
            FAQ
          </Link>
          <Link
            href="/contactus"
            className="hover:text-secondry hover:text-[#3b5eda] font-bold text-[1.2rem] border-b-2 border-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <aside
        className={`md:hidden flex items-center justify-center p-6 fixed top-0 h-screen w-full bg-gradient-to-br from-[#a2c089] to-[#438fcb] transition-all ${
          sidebarIsOpen ? "right-0" : "-right-full"
        }`}
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-40">
          <img
            src={"assets/Navigation/sidebarPattern.svg"}
            alt="sidebarPattern"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative flex w-full h-full flex-col justify-center text-center gap-4 max-w-md">
          <Link
            onClick={() => setSidebarIsOpen(false)}
            href={"/"}
            className="font-bold text-2xl hover:bg-gray-900 rounded-lg p-2 text-white w-full transition-colors"
          >
            Home
          </Link>
          <Link
            onClick={() => setSidebarIsOpen(false)}
            href={"/products"}
            className="font-bold text-2xl hover:bg-gray-900 rounded-lg p-2 text-white w-full transition-colors"
          >
            Products
          </Link>
          <Link
            onClick={() => setSidebarIsOpen(false)}
            href={"/about"}
            className="font-bold text-2xl hover:bg-gray-900 rounded-lg p-2 text-white w-full transition-colors"
          >
            About Us
          </Link>
          
          <Link
            onClick={() => setSidebarIsOpen(false)}
            href={"/blogs"}
            className="font-bold text-2xl hover:bg-gray-900 rounded-lg p-2 text-white w-full transition-colors"
          >
            Blogs
          </Link>
          <Link
            onClick={() => setSidebarIsOpen(false)}
            href={"/faq"}
            className="font-bold text-2xl hover:bg-gray-900 rounded-lg p-2 text-white w-full transition-colors"
          >
            FAQs
          </Link>
          <Link
            onClick={() => setSidebarIsOpen(false)}
            href={"/contactus"}
            className="font-bold text-2xl hover:bg-gray-900 rounded-lg p-2 text-white w-full transition-colors"
          >
            Contact Us
          </Link>
        </div>
        <button type="button" onClick={() => setSidebarIsOpen(false)}>
          <FontAwesomeIcon
            icon={faXmark}
            className="absolute top-3 right-3 text-xl hover:bg-gray-800 aspect-square p-2 rounded-full text-white"
          />
        </button>
      </aside>
    </div>
    </div>
  );
};

export default Header;
