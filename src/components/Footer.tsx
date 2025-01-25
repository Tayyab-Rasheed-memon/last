import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-gray-50">
      <div className="container px-5 py-16 mx-auto flex flex-wrap justify-between mt-[120px]">
        <div className="flex flex-wrap w-full md:justify-between">
          {/* Logo and About Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-6">
            <img src="/Logo Icon.png" alt="logo-sofa" className="mb-4" />
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Comforty
            </h2>
            <p className="text-gray-600 hover:text-gray-800 transition-all duration-300 ease-in-out">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis
              interdum. Cras egestas purus.
            </p>
          </div>

          {/* Categories Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-6">
            <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              {["Sofa", "Armchair", "Wiring Chair", "Wooden Chair", "Park Bench"].map(
                (category, index) => (
                  <li key={index} className="mb-2">
                    <a
                      href="#"
                      className="text-gray-600 hover:text-teal-500 transition-colors duration-300 ease-in-out"
                    >
                      {category}
                    </a>
                  </li>
                )
              )}
            </nav>
          </div>

          {/* Support Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-6">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Support
            </h2>
            <nav className="list-none mb-10">
              {["Help And Support", "Terms & Conditions", "Privacy Policy", "Help"].map(
                (support, index) => (
                  <li key={index} className="mb-2">
                    <a
                      href="#"
                      className="text-gray-600 hover:text-teal-500 transition-colors duration-300 ease-in-out"
                    >
                      {support}
                    </a>
                  </li>
                )
              )}
            </nav>
          </div>

          {/* Subscribe Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-6">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              SUBSCRIBE
            </h2>
            <div className="flex flex-wrap justify-start items-end">
              <div className="relative w-full lg:w-auto xl:mr-4">
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  placeholder="Your Email"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-base outline-none text-gray-700 py-2 px-4 transition-colors duration-300 ease-in-out"
                />
              </div>
              <button className="mt-4 lg:mt-0 text-white bg-teal-500 hover:bg-teal-600 px-6 py-2 rounded transition-transform duration-300 ease-in-out hover:-translate-y-1">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              Stay updated with our latest trends and collections.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-100">
        <div className="container px-5 py-6 mx-auto flex flex-wrap items-center justify-between">
          <p className="text-sm text-gray-500">
            © Design And Create 2020 ZakirBlogs —
            <a
              href="https://twitter.com/knyttneve"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1 hover:text-teal-500"
            >
              @knyttneve
            </a>
          </p>
          <div className="flex space-x-3">
            {["facebook", "twitter", "instagram", "linkedin"].map((platform, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-500 hover:text-teal-500 transition-transform duration-300 ease-in-out hover:-translate-y-1"
              >
                <svg
                  fill="currentColor"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  {/* Replace these with actual SVG paths for each platform */}
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
