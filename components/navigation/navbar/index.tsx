import React from "react";
import Link from "next/link";
import Logo from "@/components/navigation/navbar/Logo"
import Button from "@/components/navigation/navbar/Button"

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <ul className="hidden md:flex gap-x-6 text-white">
            <li>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/components/About.tsx">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/components/Features.tsx">
                  <p>Features</p>
                </Link>
              </li>
            </ul>
            <Button />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;