import React from 'react'
import p1 from "/public/p1.png"
import p2 from "/public/p2.jpg"
import p3 from "/public/p3.jpg"
import p4 from "/public/p4.jpg"
import p5 from "/public/p5.jpg"
import Image from 'next/image'
import { FaStar } from "react-icons/fa";

const ProductData = [
    {
        id:1,
        img:p1,
        title:"Woman Ethnic",
        rating:5.0,
        author:"white",
        aosDely:"0",
    },
    {
        id:2,
        img:p2,
        title:"Woman Western",
        rating:4.5,
        author:"Red",
        aosDely:"200",
    },
    {
        id:3,
        img:p3,
        title:"Goggle",
        rating:4.7,
        author:"browen",
        aosDely:"400",
    },
    {
        id:4,
        img:p4,
        title:"Printed T-shirt",
        rating:4.4,
        author:"yellow",
        aosDely:"600",
    },
    {
        id:5,
        img:p5,
        title:"Fashion T-shirt",
        rating:4.7,
        author:"pink",
        aosDely:"800",
    },
];
const Products = () => {
  return (
    <div>
      <div className='mt-14 mb-12'>
        {/* Header section */}
        <div className='text-center  mb-10 max-w-[600px] mx-auto items-center'>
            <p className='text-sm text-[#6b7a15]'>Top selling Products for you</p>
            <h1 className='text-3xl font-bold'>Products</h1>
            <p className='text-xs text-gray-400'>Lorem, ipsum dolor sit amet 
                consectetur adipisicing elit. 
                Architecto exercitationem 
                </p>
        </div>
        {/* Body section */}
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
             {/* cards section */}
            {
                ProductData.map((data) =>(
                    <div data-aos="fade-up" data-aos-delay={data.aosDely} key={data.id} className='space-y-3'>
                        <Image src={data.img} alt='cards' className='h-[220px] w-[150px] object-cover rounded-md'/>
                    <div>
                        <h3 className='font-semibold'>{data.title}</h3>
                        <p className='text-sm text-gray-600'>{data.author}</p>
                   <div className='flex items-center gap-1'>
                    <FaStar className='text-yellow-500'/>
                   <span>{data.rating}</span>
                   </div>
                    </div>
                    
                    </div>
                
            
                ))
            }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Products
