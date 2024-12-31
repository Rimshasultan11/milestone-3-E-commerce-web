import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
const page = () => {
    const kidsProduct = [
        {
            id: 25,
            name: " Kid's Girls 2 piece Suit",
            description: " Stylish and comfortable  cotton printed",
            price: "PKR 2000",
            image: "/k-girls.jpg", 
        },
        {
            id: 26,
            name: "Kid's Girls 2 piece Suit",
            description: " Stylish and comfortable  cotton printed",
            price: "PKR 2000",
            image: "/k-girls2.jpg", 
        },
        {
            id: 27,
            name: " Kid's Girls 2 piece Suit",
            description: " Stylish and comfortable  cotton printed",
            price: "PKR 2000",
            image: "/k-girls3.jpg", 
        },
        {
            id: 28,
            name: " Kid's Girls 2 piece Suit",
            description: " Stylish and comfortable  cotton printed",
            price: "PKR 2000",
            image: "/k-girls4.jpg", 
        },
        {
            id: 29,
            name: " Kid's Girls 2 piece Suit",
            description: " Stylish and comfortable jens shirt and pant",
            price: "PKR 2000",
            image: "/k-girls5.jpg", 
        },
        {
            id: 30,
            name: "Kid's Girls shirt",
            description: " Stylish and comfortable  pink t-shirt",
            price: "PKR 2000",
            image: "/kg3.jpg", 
        },
        {
            id: 31,
            name: " Kid's Girls 2 piece Suit",
            description: " Stylish and comfortable red  shirt and  blank pant",
            price: "PKR 2000",
            image: "/kids-girl.jpg", 
        },
        {
            id: 32,
            name: " Kid's Girls 2 piece Suit",
            description: " Stylish and comfortable 2 pice sout",
            price: "PKR 2000",
            image: "/kids-girls2.jpg", 
        },


    ];

    return (
        <div>
            <div className="bg-lime-100 min-h-screen">
                {/* Header Section */}
                <section className="bg-lime-200 py-12 text-center">
                    <h1 className="text-4xl font-bold text-[#6b7a15]">Kid&apos;s Girls Wear</h1>
                    <p className="text-lg mt-4">Explore our collection of stylish and comfortable Baby girls clothing and accessories.</p>
                </section>

                {/* Product Cards Section */}
                <section className="container mx-auto py-12 px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8">
                        {kidsProduct.map((product) => (
                             <Link href={`/components/${product.id}`} key={product.id}> 
                             <div  key={product.id}
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
                    '>View Details  </button>
                                </div>
                            </div></Link>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default page
