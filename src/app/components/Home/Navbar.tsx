"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import TW from '/public/TW.png';
import { FaSearch } from 'react-icons/fa';
import { IoMdCart } from 'react-icons/io';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Menu = [
  { id: 1, name: 'Home', Link: '/' },
  { id: 2, name: 'Men Wears', Link: '/components/Men' },
  { id: 3, name: 'Women Wears', Link: '/components/Women' },
];

const Menu2 = [
  { id: 4, name: 'About', Link: '/components/About' },
  { id: 5, name: 'Contact', Link: '/components/Contact' },
];

const DropdownLink = [
  { id: 6, name: 'Girls Wears', Link: '/components/kids/kids-girls' },
  { id: 7, name: 'Boys Wears', Link: '/components/kids/kids-boys' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      {/* Upper Navbar */}
      <div className="bg-[#c9e265] bg-opacity-[0.5] py-2">
        <div className="flex justify-between items-center mx-2">
          <div>
            <Link href="#" className="font-bold text-2xl sm:text-3xl flex gap-2 text-[#6b7a15]">
              <Image src={TW} alt="Logo" className="w-20" />
              <div className=" hidden sm:block py-5">Trendy Wardrobe</div>
            </Link>
          </div>
          {/* Search Bar */}
          <div className="flex items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 px-2 py-1 rounded-full focus:border-2 focus:outline-none focus:border-[#6b7a15]"
              />
              <FaSearch className="text-gray-500 group-hover:text-[#6b7a15] absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            {/* Order Button */}
            <button
              onClick={() => alert('Ordering not available yet')}
              className="bg-gradient-to-r from-[#6b7a15] to-[#c9e265] transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">Order</span>
              <IoMdCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            {/* Mobile Menu Toggle */}
            <button
              className="sm:hidden text-2xl text-[#6b7a15]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div
        className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } sm:block bg-white shadow-md sm:shadow-none transition-all duration-300`}
      >
        <ul className="flex flex-col sm:flex-row justify-center items-center gap-4 py-4 sm:py-0">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.Link}
                className="inline-block px-4 hover:text-[#6b7a15] duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Dropdown */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Kids Wears
              <RiArrowDropDownLine className="transition-all duration-200 group-hover:rotate-180" />
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] p-2 bg-white shadow-md">
              <ul>
                {DropdownLink.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.Link}
                      className="inline-block w-full rounded-md p-2 hover:bg-[#c9e265]"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          {Menu2.map((data) => (
            <li key={data.id}>
              <a
                href={data.Link}
                className="inline-block px-4 hover:text-[#6b7a15] duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
