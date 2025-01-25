import React from "react";

const ProductList = () => {
  return (
    <div className="container mx-auto p-4 mt-[150px]">
      <h1 className="text-3xl font-bold mb-4">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Product 1 */}
        <div className="bg-white rounded-md shadow-md overflow-hidden">
          <img src="/Image.png" alt="Product 1" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Product 1</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product 2 */}
        <div className="bg-white rounded-md shadow-md overflow-hidden">
          <img src="/Image (10).png" alt="Product 2" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Product 2</h2>
            <p className="text-gray-600">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product 3 */}
        <div className="bg-white rounded-md shadow-md overflow-hidden">
          <img src="/Image (2).png" alt="Product 3" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Product 3</h2>
            <p className="text-gray-600">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product 4 */}
        <div className="bg-white rounded-md shadow-md overflow-hidden">
          <img src="/sss.png" alt="Product 4" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Product 4</h2>
            <p className="text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
