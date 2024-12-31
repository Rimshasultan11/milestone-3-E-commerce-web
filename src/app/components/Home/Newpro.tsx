import React from 'react'
import Image from 'next/image'
import kids from '/public/kids.jpg'
import b5 from '/public/b5.jpg'
import g3 from '/public/g3.jpg'
import Link from 'next/link'
const produtList =[

  {
    id:1,
  img:kids,
  title:"Kids Wear",
  Link:"/components/kids/kids-boys",
  },
  {
    id:2,
  img:b5,
  title:"Men's Wear",
  Link:"/components/Men",
  },
  {
    id:3,
  img:g3,
  title:"Women's Wear",
  Link:"/components/Women",
  },


 ]
const Newpro = () => {
  return (
  
      <div className='w-full 
      items-center my-10'>
        <div>
        <h1 className='text-4xl text-center  '> Explore More</h1>
        </div>
        <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto my-10 cursor-pointer' >
          {/* kids wear card */}
          {produtList.map((data)=>(
            <div key={data.id} className='flex flex-col items-center justify-center  bg-gray-100 hover:bg-[#c9e265] border-2 border-[#6b7a15] hover:text-[#6b7a15] p-4 rounded-lg'>
              {/* image div */}
              <div>
             <Image src={data.img} alt='kids' className='w-[300px] h-[400px]'/>
              </div>
              {/* text div */}
              <div className='text-center py-4 leading-10 text-lg'>
                <h1 className='text-xl'>{data.title}</h1>
                <Link href={data.Link}><p>Shop Now</p></Link>
              </div>
            </div>))}
        
</div>
      </div>
   
  )
}

export default Newpro
