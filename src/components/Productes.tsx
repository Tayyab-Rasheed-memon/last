import React from "react";

const Product = () => {
  return (
    <div id="AI" className="container mx-auto p-4 mt-[201px]">
      <div id="AJ" className="flex flex-col md:flex-row gap-4">
        <div id="AK" className="md:w-1/2">
          <img
            src="/Image (10).png"
            alt="Library Stool Chair"
            className="rounded-md shadow-md"
          />
        </div>
        <div id="AL" className="md:w-1/2">
          <h1 id="AM" className="text-3xl font-bold mb-2">Library Stool Chair</h1>
          <p id="AN" className="text-lg text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
            adipiscing.
          </p>
          <div id="AO" className="flex items-center gap-2">
            <span id="AP" className="text-2xl font-bold">$20.00</span>
            <span id="AQ" className="text-gray-500">USD</span>
          </div>
          <button
            id="AR"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
