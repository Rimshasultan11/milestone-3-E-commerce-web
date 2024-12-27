
import React from 'react'
import p6 from "/public/p6.png"
import p7 from "/public/p7.png"
import p8 from "/public/p8.png"
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
const produtList =[
  {
    id:1,
  img:p6,
  title:"Casual Wear",
  description:"  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis sed voluptate inventore illo facere "
  },
  {
    id:2,
    img:p7,
    title:"Printed shirt",
    description:"  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis sed voluptate inventore illo facere "
    },
    {
      id:3,
      img:p8,
      title:"women Shirt",
      description:"  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis sed voluptate inventore illo facere "
      },    
  ]

const TopProduct = () => {
  return (
    <div>
      <div className='mt-14 mb-12'>
        {/* Header section */}
        <div className='text-left  mb-14 mx-10'>
            <p className='text-sm text-[#6b7a15]'>Top Rated Products for you</p>
            <h1 className='text-3xl font-bold'>Best Products</h1>
        </div>
        {/* Body section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center '>
        {produtList.map((data)=>(
          <div className='
          rounded-2xl bg-white hover:bg-[#c9e265]
          hover:text-white relative shadow-xl durition-300 group max-w-[300px]
          ' key={data.id}>
          {/* image section */}    
          <div  className='h-[100px] mt-10'>
 <Image src={data.img} alt="cards" className='max-w-[140px] block mx-auto transform -translate-y-24 group-hover:scale-105
 duration-300 drop-shadow-md
 '/>
          </div>
          {/* details section */}
          <div className='p-4 text-center'>
            {/* star rating */}
            <div className='w-full flex items-center justify-center gap-1'>
         <FaStar className='text-yellow-500'/>
         <FaStar className='text-yellow-500'/>
         <FaStar className='text-yellow-500'/>
         <FaStar className='text-yellow-500'/>
            </div>
            <h1 className='text-xl  text-[#6b7a15] font-bold'>{data.title}</h1>
          <p className='
          text-gray-500 group-hover:text-white
          duration-300 text-sm line-clamp-2
          '>{data.description}</p>
          <button 
          className='bg-[#6b7a15] hover:scale-105
          duration-300 text-white py-1 px-4 rounded-full
          group-hover:bg-white group-hover:text-[#6b7a15] my-4
          '>Order Now</button>
          </div>
</div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default TopProduct
