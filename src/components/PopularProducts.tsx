import React from 'react';  

const Newsletter = () => {
  return (
    <div id="AF" className="bg-gray-100 p-10 mt-[150px]">
      <h2 id="AG" className="text-2xl font-bold mb-4">Or Subscribe To The Newsletter</h2>
      <div id="AH" className="flex items-center">
        <input
          type="email"
          placeholder="Email Address..."
          id="AI"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button id="AJ" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md ml-4">
          SUBMIT
        </button>
      </div>
      <h3 id="AK" className="text-xl font-bold mt-8">Follow Products And Discounts On Instagram</h3>
      <div id="AL" className="grid grid-cols-6 gap-4 mt-4">
        <img
          src="/.png"
          alt="Chair 1"
          id="AM"
          className="rounded-md"
        />
        <img
          src="/Image (8).png"
          alt="Chair 2"
          id="AN"
          className="rounded-md"
        />
        <img
          src="/Image (1).png"
          alt="Chair 3"
          id="AO"
          className="rounded-md"
        />
        <img
          src="/Image (2).png"
          alt="Chair 4"
          id="AP"
          className="rounded-md"
        />
        <img
          src="/Image (4).png"
          alt="Chair 5"
          id="AQ"
          className="rounded-md"
        />
        <img
          src="/Image (6).png"
          alt="Chair 6"
          id="AR"
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default Newsletter;
