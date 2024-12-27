import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {

const womenProduct= [

    {
        id: 1,
        name: " Cotton Printed 2 Piece Suit",
        description: " Stylish and comfortable  cotton printed",
        price: "PKR 2000",
        image: "/g1.jpg", // Replace with actual image path
      },
      {
        id: 2,
        name: "Cotton Printed 2 Piece Suit ",
        description: " Stylish and comfortable  cotton printed.",
        price: "PKR 2000",
        image: "/g2.jpg", // Replace with actual image path
      },
      {
        id: 3,
        name: " Cotton Printed 2 Piece Suit",
        description: " Stylish and comfortable  cotton printed",
        price: "PKR 2000",
        image: "/g4.jpg", // Replace with actual image path
      },
      {
        id: 4,
        name: "Cotton Printed 2 Piece Suit ",
        description: " Stylish and comfortable  cotton printed.",
        price: "PKR 2000",
        image: "/g5.jpg", // Replace with actual image path
      },
      {
        id: 5,
        name: "Womens Kurti ",
        description: " Stylish and comfortable kurti for women's.",
        price: "PKR 2000",
        image: "/g6.jpg", // Replace with actual image path
      },
      {
        id: 6,
        name: "Womens Kurti ",
        description: " Stylish and comfortable kurti for women's.",
        price: "PKR 2000",
        image: "/g7.jpg", // Replace with actual image path
      },
      {
        id: 7,
        name: "Womens Kurti ",
        description: " Stylish and comfortable kurti for women's.",
        price: "PKR 2000",
        image: "/g8.jpg", // Replace with actual image path
      },
      {
        id: 8,
        name: "Womens Kurti ",
        description: " Stylish and comfortable kurti for women's.",
        price: "PKR 2000",
        image: "/g9.jpg", // Replace with actual image path
      },

]


  return (
    
     <div className="bg-lime-100 min-h-screen">
          {/* Header Section */}
          <section className="bg-lime-200 py-12 text-center">
            <h1 className="text-4xl font-bold text-[#6b7a15]">Women&apos;s Wear</h1>
            <p className="text-lg mt-4">Explore our collection of stylish and comfortable Womens clothing and accessories.</p>
          </section>
    
          {/* Product Cards Section */}
          <section className="container mx-auto py-12 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8">
              {womenProduct.map((product) => (
                <Link href={`/components/${product.id}`} key={product.id}>
                  <div
                 
                  className="max-w-sm mx-auto bg-white rounded-lg shadow-md  transform hover:scale-105 duration-300"
                >
                  {/* Product Image */}
                  <div className="relative h-72 w-full ">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover" className=''
                    />
                  </div>
    
                  {/* Product Details */}
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                    <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                    <p className="text-lg font-bold text-[#6b7a15] mt-4">{product.price}</p>
    
                    {/* Add to Cart Button */}
                    <button 
              className='bg-[#6b7a15] hover:scale-105
              duration-300 text-white py-1 px-4 rounded-full
              group-hover:bg-white group-hover:text-[#6b7a15] my-4
              '>Add to Cart </button>
                  </div>
                </div></Link>
              ))}
            </div>
          </section>
        </div>
  )
}

export default page
