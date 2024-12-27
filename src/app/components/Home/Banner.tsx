import React from 'react' 
import Image from "next/image"
import p9 from "/public/p9.png"
import { GrSecure } from "react-icons/gr";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdLocalOffer } from "react-icons/md";
const Banner = () => {
  return (
    <div>
      <div className='min-h-[550px] flex justify-center
      items-center py-12 sm:py-0 lg:my-28'>
  <div className='grid grid-cols-1 sm:grid-cols-2 gap-6
  items-center'>
   {/* image section */}

   <div>
 <Image src={p9} alt="banner"
 className='max-w-[400px]   w-full bg-gradient-to-r from-[#6b7a15] to-[#c9e265]
 mx-auto  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover
 '
 />
   </div>
   {/* text detail section */}
   <div className='flex flex-col justify-center gap-6 sm:pt-0'>
    <h1 className='text-3xl sm:text-4xl font-bold'>Winter Sale upto 50% off</h1>
    <p className='text-sm text-gray-500 tracking-wide leading-5'>
      Lorem ipsum dolor sit amet consectetur
       adipisicing elit. Ipsam tempora at 
       saepe est, qui perferendis suscipit excepturi blanditiis facere, quibusdam officia quidem vero iusto 
      ex earum error libero rerum explicabo.
    </p>
    <div className='flex flex-col gap-4 '>
      <div className='flex items-center gap-4'>
    <GrSecure className='text-4xl h-12 w-12 shadow-sm
    rounded-full bg-violet-100
    ' />
    <p>Quality Products</p>
    </div>
    <div className='flex items-center gap-4'>
    <MdOutlineDeliveryDining className='text-4xl h-12 w-12 shadow-sm
    rounded-full bg-violet-100
    ' />
    <p>Fast Delivery</p>
    </div>
    <div className='flex items-center gap-4'>
    <RiSecurePaymentFill className='text-4xl h-12 w-12 shadow-sm
    rounded-full bg-violet-100
    ' />
    <p>Easy Payment method</p>
    </div>
    <div className='flex items-center gap-4'>
    <MdLocalOffer className='text-4xl h-12 w-12 shadow-sm
    rounded-full bg-violet-100
    ' />
    <p>Get Offers</p>
    </div>
    </div>
   </div>
  </div>
      </div>
    </div>
  )
}

export default Banner
