import React from "react";

const Newsletter = () => {
  return (
    <div id="S" className="bg-gray-100 p-10 mt-[150px] animate-fadeIn">
      {/* Title */}
      <h2
        id="T"
        className="text-2xl font-bold mb-4 transition-opacity duration-1000 opacity-0 animate-fadeInDelay"
      >
        Or Subscribe To The Newsletter
      </h2>

      {/* Subscription Form */}
      <div
        id="U"
        className="flex flex-col md:flex-row items-center gap-4 animate-fadeIn"
      >
        <input
          type="email"
          placeholder="Email Address..."
          id="V"
          className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 transform hover:scale-105"
          aria-label="Email Address"
        />
        <button
          id="W"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition-all duration-300 transform hover:scale-110"
        >
          SUBMIT
        </button>
      </div>

      {/* Instagram Section */}
      <h3
        id="X"
        className="text-xl font-bold mt-8 transition-opacity duration-1000 opacity-0 animate-fadeInDelay"
      >
        Follow Products And Discounts On Instagram
      </h3>

      {/* Instagram Images */}
      <div
        id="Y"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-4 animate-fadeInDelay"
      >
        {["/download (1).jpeg", "/download (2).jpeg", "/download (3).jpeg", "/download (4).jpeg", "/images (2).jpeg", "/images (1).jpeg"].map(
          (src, index) => (
            <img
              key={index}
              src={src}
              alt={`Chair ${index + 1}`}
              id={`img-${index}`}
              className="rounded-md object-cover w-full transition-transform duration-300 transform hover:scale-110 hover:shadow-lg"
            />
          )
        )}
      </div>
    </div>
  );
};

export default Newsletter;

// import React from "react";

// const Newsletter = () => {
//   return (
//     <div id="S" className="bg-gray-100 p-10 mt-[150px]">
//       {/* Title */}
//       <h2 id="T" className="text-2xl font-bold mb-4">
//         Or Subscribe To The Newsletter
//       </h2>

//       {/* Subscription Form */}
//       <div id="U" className="flex flex-col md:flex-row items-center gap-4">
//         <input
//           type="email"
//           placeholder="Email Address..."
//           id="V"
//           className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           aria-label="Email Address"
//         />
//         <button
//           id="W"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition-all duration-300"
//         >
//           SUBMIT
//         </button>
//       </div>

//       {/* Instagram Section */}
//       <h3 id="X" className="text-xl font-bold mt-8">
//         Follow Products And Discounts On Instagram
//       </h3>

//       {/* Instagram Images */}
//       <div id="Y" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-4">
//         <img
//           src="/download (1).jpeg"
//           alt="Chair 1"
//           id="Z"
//           className="rounded-md object-cover w-full"
//         />
//         <img
//           src="/download (2).jpeg"
//           alt="Chair 2"
//           id="AA"
//           className="rounded-md object-cover w-full"
//         />
//         <img
//           src="/download (3).jpeg"
//           alt="Chair 3"
//           id="AB"
//           className="rounded-md object-cover w-full"
//         />
//         <img
//           src="/download (4).jpeg"
//           alt="Chair 4"
//           id="AC"
//           className="rounded-md object-cover w-full"
//         />
//         <img
//           src="/images (2).jpeg"
//           alt="Chair 5"
//           id="AD"
//           className="rounded-md object-cover w-full"
//         />
//         <img
//           src="/images (1).jpeg"
//           alt="Chair 6"
//           id="AE"
//           className="rounded-md object-cover w-full"
//         />
//       </div>
//     </div>
//   );
// };

// export default Newsletter;

// // import React from 'react'; 

// // const Newsletter = () => {
// //   return (
// //     <div id="S" className="bg-gray-100 p-10 mt-[150px]">
// //       <h2 id="T" className="text-2xl font-bold mb-4">Or Subscribe To The Newsletter</h2>
// //       <div id="U" className="flex items-center">
// //         <input
// //           type="email"
// //           placeholder="Email Address..."
// //           id="V"
// //           className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //         />
// //         <button id="W" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md ml-4">
// //           SUBMIT
// //         </button>
// //       </div>
// //       <h3 id="X" className="text-xl font-bold mt-8">Follow Products And Discounts On Instagram</h3>
// //       <div id="Y" className="grid grid-cols-6 gap-4 mt-4">
// //         <img
// //           src="/eee.pngnpm run dev
// //           "
// //           alt="Chair 1"
// //           id="Z"
// //           className="rounded-md"
// //         />
// //         <img
// //           src="/Image (8).png"
// //           alt="Chair 2"
// //           id="AA"
// //           className="rounded-md"
// //         />
// //         <img
// //           src="/Image (1).png"
// //           alt="Chair 3"
// //           id="AB"
// //           className="rounded-md"
// //         />
// //         <img
// //           src="/Image (2).png"
// //           alt="Chair 4"
// //           id="AC"
// //           className="rounded-md"
// //         />
// //         <img
// //           src="/Image (4).png"
// //           alt="Chair 5"
// //           id="AD"
// //           className="rounded-md"
// //         />
// //         <img
// //           src="/Image (6).png"
// //           alt="Chair 6"
// //           id="AE"
// //           className="rounded-md"
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Newsletter;
