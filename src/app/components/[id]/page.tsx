"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const Page = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<{ item: Product; quantity: number }[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [isCheckoutSuccessful, setCheckoutSuccessful] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `/api/products`
        );
        const data: Product[] = await response.json();
        const foundProduct = data.find((item) => item.id === Number(params.id));
        setProduct(foundProduct || null);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [params.id]);

  useEffect(() => {
    const newTotal = cart.reduce(
      (sum, cartItem) =>
        sum + cartItem.item.price * cartItem.quantity,
      0
    );
    setTotal(newTotal);
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.item.id === product.id
      );
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.item.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { item: product, quantity: 1 }];
      }
    });
  };

  const incrementQuantity = (productId: number) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.item.id === productId
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const decrementQuantity = (productId: number) => {
    setCart((prevCart) =>
      prevCart
        .map((cartItem) =>
          cartItem.item.id === productId && cartItem.quantity > 1
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.item.id !== productId)
    );
  };

  const handleCheckout = () => {
    if (cart.length > 0) {
      setCheckoutSuccessful(true);
      setCart([]);
      setTotal(0);
    } else {
      alert("Your cart is empty!");
    }
  };

  if (!product) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl text-red-500">Product Not found</h1>
        <Link href="/">
          <p className="text-blue-500 underline mt-4">Go back to Home</p>
        </Link>
      </div>
    );
  }

  const currentProductInCart = cart.find((item) => item.item.id === product.id);
  const currentQuantity = currentProductInCart?.quantity || 0;

  return (
    <div className="w-full bg-[#c9e265] bg-opacity-[0.5] py-4 flex flex-col md:flex-row justify-center items-start gap-4">
      {/* Product Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg p-6 gap-4 my-10 shadow-lg">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src={product.image}
              alt="product image"
              width={600}
              height={400}
              className="w-full max-w-[500px] h-[400px] rounded-lg object-cover shadow-md"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-lg text-[#6b7a15] md:text-3xl font-bold">
              {product.name}
            </h2>
            <p className="text-base my-4 text-gray-700">{product.description}</p>
            <h3 className="text-lg font-semibold text-[#6b7a15]">
              Price: PKR {product.price}
            </h3>
            <div className="flex flex-col md:flex-row gap-4 mt-4 items-center">
              <div className=" bg-[#6b7a15] flex  rounded-lg text-xl gap-4 w-[250px]  px-8 h-[50px]  border-2 justify-center items-center text-white">
                <p>Quantity:</p>
                <button
                  onClick={() => decrementQuantity(product.id)}
                  className="px-3 py-1 border-2 border-white   rounded"
                >
                  -
                </button>
                <span>{currentQuantity}</span>
                <button
                  onClick={() => incrementQuantity(product.id)}
                  className="px-3 py-1 border-2 border-white rounded"
                >
                  +
                </button>
              </div>
              <button
                className="bg-[#6b7a15] text-white py-2 px-4 rounded"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Cart Section */}
      <div className="max-w-7xl mx-auto bg-gray-100 rounded-lg p-6 my-10 shadow-lg">
        <h2 className="text-2xl font-bold text-[#6b7a15]">Cart Items</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600 mt-4">Your cart is empty.</p>
        ) : (
          <div className="mt-4">
            {cart.map((cartItem) => (
              <div
                key={cartItem.item.id}
                className="flex flex-col justify-between gap-6 items-center border-b pb-2"
              >
                <div className="flex flex-col items-center gap-4">
                  <h3 className="font-semibold">{cartItem.item.name}</h3>
                  <p>
                    PKR: {cartItem.quantity} x {cartItem.item.price}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => removeFromCart(cartItem.item.id)}
                    className="px-4 py-2 text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <h3 className="mt-4 text-right text-xl font-bold text-[#6b7a15]">
              Total: PKR {total.toFixed(2)}
            </h3>
            <button
              onClick={handleCheckout}
              className="mt-4 px-6 py-2 bg-[#6b7a15] text-white rounded"
            >
              Checkout
            </button>
          </div>
        )}
      </div>

      {/* Order Successful Popup */}
      {isCheckoutSuccessful && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <h2 className="text-2xl font-bold text-green-600">
              Order Successful!
            </h2>
            <p className="mt-4 text-gray-600
            ">Thank you for shopping with us.</p> <button
              onClick={() => setCheckoutSuccessful(false)}
              className="mt-4 px-6 py-2 bg-[#6b7a15] text-white rounded"> Close
            </button> </div> </div>
      )}
    </div>
  );
}
export default Page;