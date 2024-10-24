"use client";
import { useState, useEffect } from "react";
import Header from "@/components/UI/Header";
import Footer from "@/components/UI/Footer";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(items);
  }, []);

  return (
    <div className="flex flex-col justify-between min-h-[100vh]">
      <Header />
      <main>
        <div className="p-4">
          <h1 className="text-2xl font-semibold mb-4">Cart</h1>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item, index) => (
                <li key={index} className="border p-4 rounded-lg">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Color: {item.selectedColor}</p>
                  <p>Size: {item.selectedSize}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
