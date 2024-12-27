import Image from 'next/image';
import { FcCustomerSupport } from "react-icons/fc";
export default function About() {
  return (
    <div className="bg-lime-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-lime-200 py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#6b7a15]">About Trendy Wardrobe</h1>
          <p className="mt-4 text-lg">Your one-stop shop for trendy clothing for men, women, and kids.</p>
          <div className="mx-auto mt-6 rounded-lg shadow-lg bg-[url('/about.jpg')] bg-cover bg-center" style={{ width: '100%', height: '400px' }}>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#6b7a15]">Our Vision</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <Image
                src="/vision.jpg"
                alt="Vision Image"
                width={400}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <p className="text-lg">
              To bring fashion and comfort together, offering styles that make everyone feel confident and trendy.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-lime-50 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#6b7a15]">Our History</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <p className="text-lg">
              Trendy Wardrobe started as a small boutique in Hyderabad. With dedication and passion, we have grown into a trusted brand, offering quality and style to our valued customers.
            </p>
            <div>
              <Image
                src="/history.png"
                alt="History Image"
                width={400}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}
