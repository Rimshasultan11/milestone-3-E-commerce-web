import React from 'react'
import Image from 'next/image'
import TW from '/public/TW.png'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import p1 from "/public/p1.png"
import p2 from "/public/p2.jpg"
import p3 from "/public/p3.jpg"
import p4 from "/public/p4.jpg"
import p5 from "/public/p5.jpg"
import kids from '/public/kids.jpg'
import b5 from '/public/b5.jpg'



const Footer = () => {
  return (
    <div className="text-gray-600 ">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-72 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image src={TW} alt='logo' className='w-[100px] h-[100px]' />
            <span className="ml-3 text-xl">Trendy Wardrobe</span>
          </div>
          <p className="mt-2 text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odio.</p>
        </div>
        <div className="  flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Support</h2>
            <nav className="list-none mb-10 leading-10">
              <li className="text-[15px]  text-gray-600 hover:text-gray-800">shop 111 markt,hyderabad
              </li>
              <li className="text-gray-600 hover:text-gray-800">trandy@gmail.com
              </li>
              <li className="text-gray-600 hover:text-gray-800">+92-XXXXXXX
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Quick Link</h2>
            <nav className="list-none mb-10 leading-10">
              <li className="text-gray-600 hover:text-gray-800">Privacy Policy
              </li>
              <li className="text-gray-600 hover:text-gray-800">Terms Of Use
              </li>
              <li className="text-gray-600 hover:text-gray-800">FAQ
              </li>
              <li className="text-gray-600 hover:text-gray-800">Contact
              </li>
            </nav>
          </div>
          <div className=" w-full md:w-[400px] items-center px-4 ">
            <h2 className="title-font font-medium text-center text-gray-900 tracking-widest text-sm mb-3">Gallery</h2>
            <div className='grid grid-cols-2 mx-auto md:grid-cols-4 gap-2 items-center justify-center'>
              <Image src={p1} alt='logo' className='w-[80px] h-[80px] bg-[orange] hover:scale-105' />
              <Image src={p2} alt='logo' className='w-[80px] h-[80px] hover:scale-105' />
              <Image src={p3} alt='logo' className='w-[80px] h-[80px] hover:scale-105' />
              <Image src={p4} alt='logo' className='w-[80px] h-[80px] hover:scale-105' />
              <Image src={p5} alt='logo' className='w-[80px] h-[80px] hover:scale-105' />
              <Image src={kids} alt='logo' className='w-[80px] h-[80px] hover:scale-105' />
              <Image src={p1} alt='logo' className='w-[80px] h-[80px] bg-[orange] hover:scale-105' />
              <Image src={b5} alt='logo' className='w-[80px] h-[80px]  hover:scale-105' />

            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#c9e265]">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <div className="text-[#000] flex text-sm text-center sm:text-left">© 2024 Trendy Wardrobe—
            <p className=" ml-1">@Rimshakhan</p>
          </div>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start gap-6 text-2xl text-[#6b7a15] ">
            <div >
              <FaFacebookSquare className=' hover:bg-[#6b7a15] hover:text-[white] ' />
            </div>
            <div >
              <FaSquareInstagram className='hover:text-[white] hover:bg-[#6b7a15]' />
            </div>
            <div >
              <FaGithub className='hover:text-[white] hover:bg-[#6b7a15]' />
            </div>
            <div>
              <FaLinkedin className='hover:text-[white] hover:bg-[#6b7a15]' />
            </div>
          </span>
        </div>
      </div>
    </div>

  )
}

export default Footer
