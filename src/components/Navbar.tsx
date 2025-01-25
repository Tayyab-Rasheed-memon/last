"use client"; // Ensure client-side rendering

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { allProduct } from "@/sanity/lib/qury";

export interface Product {
  _id: string; // Unique identifier for each product
  title: string; // Product title
  description?: string; // Optional field for product description
  price: number; // Product price
  image: {
    asset: {
      _ref: string; // Reference to the image asset in Sanity
    };
  };
  slug?: {
    current?: string; // The current slug for dynamic routing
  };
}

function Navbar() {
  const [products, setProducts] = useState<Product[]>([]); // Holds all products
  const [searchQuery, setSearchQuery] = useState<string>(""); // Search input
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // Holds filtered products
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts: Product[] = await client.fetch(allProduct);
        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts); // Initialize filteredProducts
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products when search query changes
  useEffect(() => {
    const results = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchQuery, products]);

  // Handle Dark/Light Mode Toggle
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className={`${isDarkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      {/* Navbar Container */}
      <div className="flex justify-between items-center p-4 border-b border-gray-300">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img src="/Logo Icon.png" alt="Sofa" className="w-8 h-8" />
          <h1 className="text-lg font-bold">Comforty</h1>
        </div>

        {/* Search Bar */}
        <div className="flex-1 px-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
              isDarkMode ? "bg-gray-800 text-white border-gray-600" : "bg-white border-gray-300"
            }`}
          />
        </div>

        {/* Dark/Light Mode Toggle */}
        <div className="flex items-center">
          <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded-md font-medium transition ${
              isDarkMode
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>

      {/* Links and Contact Section */}
      <div className="flex flex-wrap justify-between items-center py-4 px-4 text-gray-700">
        {/* Navigation Links */}
        <div className="flex flex-wrap gap-8">
          <Link
            href="/"
            className={`hover:text-blue-900 transition-all duration-300 ease-in-out ${
              isDarkMode ? "text-white" : "text-gray-700"
            }`}
          >
            Home
          </Link>
          <Link
            href="/Bag"
            className={`hover:text-blue-900 transition-all duration-300 ease-in-out ${
              isDarkMode ? "text-white" : "text-gray-700"
            }`}
          >
            About
          </Link>
          <Link
            href="/Producte"
            className={`hover:text-blue-900 transition-all duration-300 ease-in-out ${
              isDarkMode ? "text-white" : "text-gray-700"
            }`}
          >
            Product
          </Link>
          <Link
            href="/Contact"
            className={`hover:text-blue-900 transition-all duration-300 ease-in-out ${
              isDarkMode ? "text-white" : "text-gray-700"
            }`}
          >
            Contact
          </Link>
          <Link
            href="/Bag"
            className={`hover:text-blue-900 transition-all duration-300 ease-in-out ${
              isDarkMode ? "text-white" : "text-gray-700"
            }`}
          >
            Bag
          </Link>
        </div>

        {/* Contact Information */}
        <div className="mt-2 sm:mt-0">
          <p>
            Contact:{" "}
            <strong className={isDarkMode ? "text-teal-400" : "text-blue-900"}>
              (808) 555-0111
            </strong>
          </p>
        </div>
      </div>

      {/* Filtered Products (Optional Display) */}
      <div className="container mx-auto py-4">
        {searchQuery && filteredProducts.length > 0 ? (
          <ul
            className={`shadow-md rounded-md p-4 ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
          >
            {filteredProducts.map((product, index) => (
              <li
                key={product._id || product.slug?.current || `index-${index}`} // Safely access slug.current
                className="p-2 border-b last:border-b-0"
              >
                {product.title}
              </li>
            ))}
          </ul>
        ) : searchQuery ? (
          <p className={`text-center ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
            No products found.
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default Navbar;



// "use client"; // Ensure client-side rendering

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { client } from "@/sanity/lib/client";
// import { allProduct } from "@/sanity/lib/qury";

// export interface Product {
//   _id: string; // Unique identifier for each product
//   title: string; // Product title
//   description?: string; // Optional field for product description
//   price: number; // Product price
//   image: {
//     asset: {
//       _ref: string; // Reference to the image asset in Sanity
//     };
//   };
//   slug?: {
//     current?: string; // The current slug for dynamic routing
//   };
// }

// function Navbar() {
//   const [products, setProducts] = useState<Product[]>([]); // Holds all products
//   const [searchQuery, setSearchQuery] = useState<string>(""); // Search input
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // Holds filtered products
//   const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state

//   // Fetch products from Sanity
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const fetchedProducts: Product[] = await client.fetch(allProduct);
//         setProducts(fetchedProducts);
//         setFilteredProducts(fetchedProducts); // Initialize filteredProducts
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Filter products when search query changes
//   useEffect(() => {
//     const results = products.filter((product) =>
//       product.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredProducts(results);
//   }, [searchQuery, products]);

//   // Handle Dark/Light Mode Toggle
//   useEffect(() => {
//     const storedTheme = localStorage.getItem("theme");
//     if (storedTheme) {
//       setIsDarkMode(storedTheme === "dark");
//       document.documentElement.classList.toggle("dark", storedTheme === "dark");
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = isDarkMode ? "light" : "dark";
//     setIsDarkMode(!isDarkMode);
//     document.documentElement.classList.toggle("dark", newTheme === "dark");
//     localStorage.setItem("theme", newTheme);
//   };

//   return (
//     <div className={`${isDarkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
//       {/* Navbar Container */}
//       <div className="flex justify-between items-center p-4 border-b border-gray-300">
//         {/* Logo Section */}
//         <div className="flex items-center gap-3">
//           <img src="/Logo Icon.png" alt="Sofa" className="w-8 h-8" />
//           <h1 className="text-lg font-bold">Comforty</h1>
//         </div>

//         {/* Search Bar */}
//         <div className="flex-1 px-4">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
//               isDarkMode ? "bg-gray-800 text-white border-gray-600" : "bg-white border-gray-300"
//             }`}
//           />
//         </div>

//         {/* Dark/Light Mode Toggle */}
//         <div className="flex items-center">
//           <button
//             onClick={toggleTheme}
//             className={`px-4 py-2 rounded-md font-medium transition ${
//               isDarkMode
//                 ? "bg-gray-700 text-white hover:bg-gray-600"
//                 : "bg-gray-200 text-black hover:bg-gray-300"
//             }`}
//           >
//             {isDarkMode ? "Light Mode" : "Dark Mode"}
//           </button>
//         </div>
//       </div>

//       {/* Filtered Products (Optional Display) */}
//       <div className="container mx-auto py-4">
//         {searchQuery && filteredProducts.length > 0 ? (
//           <ul className="bg-white shadow-md rounded-md p-4">
//             {filteredProducts.map((product, index) => (
//               <li
//                 key={product._id || product.slug?.current || `index-${index}`} // Safely access slug.current
//                 className="p-2 border-b last:border-b-0"
//               >
//                 {product.title}
//               </li>
//             ))}
//           </ul>
//         ) : searchQuery ? (
//           <p className="text-gray-500 text-center">No products found.</p>
//         ) : null}
//       </div>
//     </div>
//   );
// }

// export default Navbar;



// "use client"; // Ensure client-side rendering

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { client } from "@/sanity/lib/client";
// import { allProduct } from "@/sanity/lib/qury";

// export interface Product {
//   _id: string; // Unique identifier for each product
//   title: string; // Product title
//   description?: string; // Optional field for product description
//   price: number; // Product price
//   image: {
//     asset: {
//       _ref: string; // Reference to the image asset in Sanity
//     };
//   };
//   slug?: {
//     current?: string; // The current slug for dynamic routing
//   };
// }

// function Navbar() {
//   const [products, setProducts] = useState<Product[]>([]); // Holds all products
//   const [searchQuery, setSearchQuery] = useState<string>(""); // Search input
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // Holds filtered products

//   // Fetch products from Sanity
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const fetchedProducts: Product[] = await client.fetch(allProduct);
//         setProducts(fetchedProducts);
//         setFilteredProducts(fetchedProducts); // Initialize filteredProducts
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Filter products when search query changes
//   useEffect(() => {
//     const results = products.filter((product) =>
//       product.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredProducts(results);
//   }, [searchQuery, products]);

//   return (
//     <div>
//       {/* Navbar Container */}
//       <div className="flex justify-between items-center bg-gray-100 p-4 border-b border-gray-300">
//         {/* Logo Section */}
//         <div className="flex items-center gap-3">
//           <img src="/Logo Icon.png" alt="Sofa" className="w-8 h-8" />
//           <h1 className="text-lg font-bold text-blue-900">Comforty</h1>
//         </div>

//         {/* Search Bar */}
//         <div className="flex-1 px-4">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-teal-500"
//           />
//         </div>

//         {/* Cart Section */}
//         <div className="relative">
//           <button className="flex items-center gap-2 bg-white border border-gray-300 rounded-full px-3 py-1 hover:border-blue-900">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
//               alt="Cart"
//               className="w-5 h-5"
//             />
//             <span className="text-sm">Cart</span>
//             <span className="absolute bg-teal-500 text-white text-xs font-bold rounded-full px-2 py-1 -top-2 -right-3">
//               2
//             </span>
//           </button>
//         </div>
//       </div>

//       {/* Filtered Products (Optional Display) */}
//       <div className="container mx-auto py-4">
//         {searchQuery && filteredProducts.length > 0 ? (
//           <ul className="bg-white shadow-md rounded-md p-4">
//             {filteredProducts.map((product, index) => (
//               <li
//                 key={product._id || product.slug?.current || `index-${index}`} // Safely access slug.current
//                 className="p-2 border-b last:border-b-0"
//               >
//                 {product.title}
//               </li>
//             ))}
//           </ul>
//         ) : searchQuery ? (
//           <p className="text-gray-500 text-center">No products found.</p>
//         ) : null}
//       </div>
//     </div>
//   );
// }

// export default Navbar;
// "use client";
// import React, { useState } from "react";
// import Link from "next/link";

// type Product = {
//   id: string;
//   title: string;
// };

// type NavbarProps = {
//   products?: Product[]; // Allow products to be optional
// };

// function Navbar({ products = [] }: NavbarProps) {
//   const [searchQuery, setSearchQuery] = useState<string>("");

//   const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };

//   // Ensure products is an array before filtering
//   const filteredProducts = Array.isArray(products)
//     ? products.filter((item) =>
//       item.title.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     : [];

//   return (
//     <div>
//       {/* Navbar Container */}
//       <div className="flex justify-between items-center bg-gray-100 p-4 border-b border-gray-300">
//         {/* Logo Section */}
//         <div className="flex items-center gap-3">
//           <img src="/Logo Icon.png" alt="Sofa" className="w-8 h-8" />
//           <h1 className="text-lg font-bold text-blue-900">Comforty</h1>
//         </div>

//         {/* Search Bar */}
//         <div className="flex-1 px-4">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchQuery}
//             onChange={handleSearch}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-teal-500"
//           />
//         </div>

//         {/* Cart Section */}
//         <div className="relative">
//           <button className="flex items-center gap-2 bg-white border border-gray-300 rounded-full px-3 py-1 hover:border-blue-900">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
//               alt="Cart"
//               className="w-5 h-5"
//             />
//             <span className="text-sm">Cart</span>
//             <span className="absolute bg-teal-500 text-white text-xs font-bold rounded-full px-2 py-1 -top-2 -right-3">
//               2
//             </span>
//           </button>
//         </div>
//       </div>

//       {/* Filtered Products (Optional Display) */}
//       <div className="container mx-auto py-4">
//         {searchQuery && filteredProducts.length > 0 ? (
//           <ul className="bg-white shadow-md rounded-md p-4">
//             {filteredProducts.map((product) => (
//               <li key={product.id} className="p-2 border-b last:border-b-0">
//                 {product.title}
//               </li>
//             ))}
//           </ul>
//         ) : searchQuery ? (
//           <p className="text-gray-500 text-center">No products found.</p>
//         ) : null}
//       </div>
//     </div>
//   );
// }

// export default Navbar;


// import React from "react";
// import Link from "next/link";

// function Navbar() {
//   return (
//     <div>
//       {/* Navbar Container */}
//       <div id="AZ" className="flex justify-between items-center bg-gray-100 p-4 border-b border-gray-300">
//         {/* Logo Section */}
//         <div id="BA" className="flex items-center gap-3">
//           <img src="/Logo Icon.png" alt="Sofa" className="w-8 h-8" />
//           <h1 className="text-lg font-bold text-blue-900">Comforty</h1>
//         </div>

//         {/* Cart Section */}
//         <div id="BB" className="relative">
//           <button className="flex items-center gap-2 bg-white border border-gray-300 rounded-full px-3 py-1 hover:border-blue-900">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
//               alt="Cart"
//               className="w-5 h-5"
//             />
//             <span className="text-sm">Cart</span>
//             <span className="absolute bg-teal-500 text-white text-xs font-bold rounded-full px-2 py-1 -top-2 -right-3">
//               2
//             </span>
//           </button>
//         </div>
//       </div>

//       {/* Links and Contact Section */}
//       <div id="BC" className="flex flex-wrap justify-between items-center py-4 px-4 text-gray-700">
//         {/* Navigation Links */}
//         <div id="BD" className="flex flex-wrap gap-8">
//           {/* Existing Links */}
//           <Link
//             href="/Home"
//             id="BE"
//             className="text-gray-700 hover:text-blue-900 transition-all duration-300 ease-in-out"
//           >
//             Home
//           </Link>

//           {/* New Links */}
//           <Link
//             href="/AboutUs"
//             id="BF"
//             className="text-gray-700 hover:text-blue-900 transition-all duration-300 ease-in-out"
//           >
//             About
//           </Link>
//           <Link
//             href="/Products"
//             id="BG"
//             className="text-gray-700 hover:text-blue-900 transition-all duration-300 ease-in-out"
//           >
//             Product
//           </Link>
//           <Link
//             href="/Contact"
//             id="BH"
//             className="text-gray-700 hover:text-blue-900 transition-all duration-300 ease-in-out"
//           >
//             Contact
//           </Link>
//           <Link
//             href="/Bag"
//             id="BI"
//             className="text-gray-700 hover:text-blue-900 transition-all duration-300 ease-in-out"
//           >
//             Bag
//           </Link>
//         </div>

//         {/* Contact Information */}
//         <div id="BK" className="mt-2 sm:mt-0">
//           <p>
//             Contact: <strong className="text-blue-900">(808) 555-0111</strong>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;