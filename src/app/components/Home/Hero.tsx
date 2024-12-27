"use client"
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import pic5 from "/public/pic5.png"
import pic2 from "/public/pic2.png"
import pic7 from "/public/pic7.png"

const HeroSlider = () => {
   const settings = {
    dots: true, // Show navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Auto-slide
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      id: 1,
      title: " Up to 70% off Men's Collection",
      img: pic5,
      
    },
    {
      id: 2,
      title: " Up to 60% off Women's Collection",
      img: pic2,
      
    },
    {
      id: 3,
      title: " Up to 40% off Kids' Collection",
      img: pic7,
      
    },
  ];

  return (
    <div className="relative overflow-hidden min-h-[550px]
   sm:min-h-[650px] bg-gray-100 flex justify-center
  items-center duration-200">
  {/* Background pattern */}
 <div className="h-[700px] w-[700px] bg-[#c9e265]
 absolute -top-1/2 right-0 rounded-3xl rotate-45
 -z-9"></div>
    <div className="relative w-full h-[400px]">
      <Slider {...settings}>
        {slides.map((data) => (
          <div key={data.id} className="h-[500px]">
        
  <div className="grid grid-cols-1 sm:grid-cols-2">
   {/* text content section */}
    <div className="flex flex-col justify-center
   gap-4 pt-12 sm:pt-0 text-center sm:text-left lg:text-center
   order-2 sm:order-1  relative z-10 ">
  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">{data.title}</h1>
        <div>       
      <button className='bg-gradient-to-r from-[#6b7a15] to-[#c9e265]
       transition-all duration-200 text-white py-2 px-4 rounded-full  hover:scale-105'
            >Order Now</button>
       </div>
  </div>
  {/* image section */}
 <div className="order-1 sm:order-2">
  <div className="relative z-10">
    <Image src={data.img} alt="pic"
   className="w-[500px] h-[500px] sm:h[450px]
     sm:w-[450px] sm:scale-125 object-contain mx-auto"/>
    
  </div>
</div>
   
  </div>
</div>

        
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default HeroSlider;
