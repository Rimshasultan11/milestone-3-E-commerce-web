import React from 'react'
import Image from 'next/image'
import p10 from "/public/p10.png"
const Subscribe = () => {
  return (
    <div>
      <div className='min-h-[550px] flex justify-center w-full
      items-center py-12 max-sm:px-2 bg-gradient-to-r from-[#6b7a15] to-[#c9e265]'>
  <div className='grid grid-cols-1 sm:grid-cols-2 gap-6
  items-center'>
   {/* text section */}
   <div className='flex flex-col justify-center gap-6 sm:pt-0  lg:ml-12   w-full order-2 sm:order-1'>
    <h1 className='text-2xl lg:text-6xl sm:text-left  text-white font-semibold '>
    Don&apos;t Miss Out on the Latest Fashion Trends!
    </h1>
    <p className='text-lg text-gray-200'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Suspendisse varius
     enim in eros elementum tristique.</p>
     <input type="email" id='email' name='email' placeholder='Enter your Email' className='h-16 rounded-sm outline-none' />
     <div>
     <button 
          className='hover:bg-gradient-to-r from-[#c9e265] to-[#6b7a15]
            hover:scale-105
          duration-300 text-white py-1 px-4 rounded-full
            my-4 border-2 border-white
          '>Subscribe</button>
          </div>
   </div>
   {/* image section */}
   <div className='order-1 sm:order-2 items-center'>
    <Image src={p10} alt=''
    className='max-w-[400px]   w-full 
    mx-auto  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover
    '
    />
   </div>
  </div>
    </div>
    </div>
  )
}

export default Subscribe
