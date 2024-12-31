import Image from 'next/image';
import Link from 'next/link';
export default function MenWear() {
  const products = [
    {
      id: 9,
      name: "Men's Kurta",
      description: "Stylish and comfortable kurta for men.",
      price: "PKR 2000",
      image: "/b9.jpg", 
    },
    {
      id: 10,
      name: "Men's Stylish Kurta",
      description: "Stylish and comfortable kurta for men.",
      price: "PKR 3000",
      image: "/b2.jpg", 
    },
    {
        id:11,
        name: "Men's Kurta",
        description: "Stylish and comfortable kurta for men.",
        price: "PKR 2500",
        image: "/b4.jpg", 
      },
      {
        id: 12,
        name: "Men's Stylish Kurta",
        description: "Stylish and comfortable kurta for men.",
        price: "PKR 3500",
        image: "/b6.jpg", 
      },

      {
        id: 13,
        name: "Men's T-Shirt",
        description: "Trendy and comfortable t-shirt for men",
        price: "PKR 1500",
        image: "/T1.jpg", 
      },
      {
        id: 14,
        name: "Men's T-Shirt",
        description: "Trendy and comfortable t-shirt for men",
        price: "PKR 1200",
        image: "/T2.jpg", 
      },
      {
        id: 15,
        name: "Men's Printed T-Shirt",
        description: "Trendy and comfortable shirt for men",
        price: "PKR 1500",
        image: "/T4.jpg", 
      },
      {
        id: 16,
        name: "Men's T-Shirt",
        description: "Trendy and comfortable shirt for men",
        price: "PKR 1200",
        image: "/T3.jpg", 
      },
  ];

  return (
    <div className="bg-lime-100 min-h-screen">
      {/* Header Section */}
      <section className="bg-lime-200 py-12 text-center">
        <h1 className="text-4xl font-bold text-[#6b7a15]">Men&apos;s Wear</h1>
        <p className="text-lg mt-4">Explore our collection of stylish and comfortable mens clothing and accessories.</p>
      </section>

      {/* Product Cards Section */}
      <section className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8">
          {products.map((product) => (
            <Link href={`/components/${product.id}`} key={product.id}>
              <div 
              className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 duration-300"
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
  );
}
