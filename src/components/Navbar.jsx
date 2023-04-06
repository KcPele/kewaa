import React, { useState } from "react";
import { FiMenu } from "react-icons/fi"; // Import hamburger icon
// import { FaEstate } from "react-icons/fa"; // Import KWWAA ESTATE icon
import {
  HiOutlineHome,
  HiOutlineShoppingBag,
  HiOutlineDotsHorizontal,
  HiOutlineKey,
} from "react-icons/hi"; // Import other icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-white ">
      <div className=" ">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold ml-2">KWWAA ESTATE</span>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <a href="#home" className="px-3 py-2   font-medium">
                Home
              </a>
              <a href="#marketplace" className="px-3 py-2   font-medium">
                Marketplace
              </a>
              <a href="#blob" className="px-3 py-2   font-medium">
                Blob
              </a>
            </div>
            <div className="hidden md:flex items-center ml-4 md:ml-6">
              <button
                className="inline-flex items-center px-4 py-2 border border-purple-500 text-base font-medium rounded-md  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 "
                style={{ borderColor: "#9747FF" }}
              >
                Connect wallet
              </button>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggle}
                className="inline-flex items-center justify-center p-2 rounded-md   focus:outline-none focus:ring-2 focus:ring-offset-2 "
              >
                <span className="sr-only">Open main menu</span>
                <FiMenu className="block h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:flex flex-col sm:justify-center sm:items-center sm:pt-3">
          <a
            href="#home"
            className="block px-3 py-2 rounded-md text-base font-medium  "
          >
            Home
          </a>
          <a
            href="#marketplace"
            className="block px-3 py-2 rounded-md text-base font-medium  "
          >
            Marketplace
          </a>
          <a
            href="#blob"
            className="block px-3 py-2 rounded-md text-base font-medium  "
          >
            Blob
          </a>
          <button
            className="w-full inline-flex items-center justify-center px-4 py-2 border border-purple-500 text-base font-medium rounded-md    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 "
            style={{ borderColor: "#9747FF" }}
          >
            Connect wallet
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
