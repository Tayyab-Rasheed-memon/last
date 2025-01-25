"use client"; // Add this at the top to enable client-side rendering

import React, { useState } from "react";

type Item = {
  name: string;
  color: string;
  size: string;
  quantity: number;
  image: string;
  price: number;
};

function Bag() {
  const [items, setItems] = useState<Item[]>([
    {
      name: "Library Stool Chair",
      color: "Ashen Slate/Cobalt Bliss",
      size: "L",
      quantity: 1,
      image: "/Image (5).png",
      price: 100,
    },
    {
      name: "Library Stool Chair",
      color: "Ashen Slate/Cobalt Bliss",
      size: "L",
      quantity: 1,
      image: "/eee.png",
      price: 99,
    },
  ]);

  const handleRemoveItem = (index: number): void => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleQuantityChange = (index: number, newQuantity: number): void => {
    if (newQuantity > 0) {
      const updatedItems = [...items];
      updatedItems[index].quantity = newQuantity;
      setItems(updatedItems);
    }
  };

  const calculateSubtotal = (): number => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Bag</h2>
      {items.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-4 flex flex-col md:flex-row items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 rounded-lg object-cover mb-4 md:mb-0 md:mr-6"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600">Color: {item.color}</p>
                  <p className="text-gray-600">Size: {item.size}</p>
                  <div className="flex items-center gap-2 mt-4">
                    <button
                      onClick={() => handleQuantityChange(index, item.quantity - 1)}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-2 py-1 rounded"
                    >
                      -
                    </button>
                    <span className="text-gray-800 font-medium">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(index, item.quantity + 1)}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-2 py-1 rounded"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-gray-800 mt-4">Price: ${item.price.toFixed(2)}</p>
                  <button
                    onClick={() => handleRemoveItem(index)}
                    className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">
              Subtotal: <span className="text-green-600">${calculateSubtotal().toFixed(2)}</span>
            </h3>
          </div>
        </>
      ) : (
        <p className="text-gray-600 text-center mt-12">Your bag is empty.</p>
      )}
    </div>
  );
}

export default Bag;
