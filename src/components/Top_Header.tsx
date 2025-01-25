"use client"
import React from "react";
import { useTranslation } from "react-i18next";

const Top_Header: React.FC = () => {
  const { t, i18n } = useTranslation();  // Destructure i18n and t from useTranslation

  // Function to handle language change
  const handleLanguageChange = (language: string) => {
    if (i18n && i18n.changeLanguage) {
      i18n.changeLanguage(language);  // Should be available from react-i18next
    } else {
      console.error("i18n or changeLanguage method is not available");
}};

  return (
    <div className="flex justify-between items-center bg-[#272343] text-white py-2 px-5 text-sm">
      {/* Left Section */}
      <div>&#10003; {t("free_shipping")}</div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Language Selector */}
        <select
          onChange={(e) => handleLanguageChange(e.target.value)}
          value={i18n.language} // Keeps selected language
          className="bg-[#272343] border border-gray-400 rounded text-white px-2 py-1 cursor-pointer"
        >
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
          <option value="zh">中文</option>
          <option value="ur">اردو</option>
        </select>

        {/* Additional Links */}
        <span className="cursor-pointer hover:underline">{t("faqs")}</span>
        <span className="cursor-pointer hover:underline">{t("need_help")}</span>
      </div>
    </div>
  );
};

export default Top_Header;

// import React from "react";
// import { useTranslation } from "react-i18next";

// const Top_Header: React.FC = () => {
//   const { t, i18n } = useTranslation();  // Correctly destructuring i18n

//   // Function to handle language change
//   const handleLanguageChange = (language: string) => {
//     // Ensure i18n is initialized correctly
//     if (i18n && i18n.changeLanguage) {
//       i18n.changeLanguage(language);  // Should be available from react-i18next
//     } else {
//       console.error("i18n or changeLanguage method is not available");
//     }
//   };

//   return (
//     <div className="flex justify-between items-center bg-[#272343] text-white py-2 px-5 text-sm">
//       {/* Left Section */}
//       <div>&#10003; {t("free_shipping")}</div>

//       {/* Right Section */}
//       <div className="flex items-center gap-4">
//         {/* Language Selector */}
//         <select
//           onChange={(e) => handleLanguageChange(e.target.value)}
//           value={i18n.language} // Keeps selected language
//           className="bg-[#272343] border border-gray-400 rounded text-white px-2 py-1 cursor-pointer"
//         >
//           <option value="en">English</option>
//           <option value="es">Español</option>
//           <option value="fr">Français</option>
//           <option value="de">Deutsch</option>
//           <option value="zh">中文</option>
//           <option value="ur">اردو</option>
//         </select>

//         {/* Additional Links */}
//         <span className="cursor-pointer hover:underline">{t("faqs")}</span>
//         <span className="cursor-pointer hover:underline">{t("need_help")}</span>
//       </div>
//     </div>
//   );
// };

// export default Top_Header;




// import React, { useState } from "react";

// function Top_Header() {
//   const [language, setLanguage] = useState("English");

//   const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     const selectedLanguage = event.target.value;
//     setLanguage(selectedLanguage);

//     // Add logic to handle language change globally, e.g., update app state or fetch translations.
//     console.log(`Language changed to: ${selectedLanguage}`);
//   };

//   return (
//     <div className="flex justify-between items-center bg-[#272343] text-white py-2 px-5 text-sm">
//       {/* Left Section */}
//       <div>&#10003; Free Shipping On All Orders Over $50</div>

//       {/* Right Section */}
//       <div className="flex items-center gap-4">
//         {/* Language Selector */}
//         <select
//           value={language}
//           onChange={handleLanguageChange}
//           className="bg-[#272343] border border-gray-400 rounded text-white px-2 py-1 cursor-pointer"
//         >
//           <option value="English">English</option>
//           <option value="Spanish">Spanish</option>
//           <option value="French">French</option>
//           <option value="German">German</option>
//           <option value="Chinese">Chinese</option>
//           <option value="Urdu">Urdu</option>
//         </select>

//         {/* Additional Links */}
//         <span className="cursor-pointer hover:underline">FAQs</span>
//         <span className="cursor-pointer hover:underline">Need Help</span>
//       </div>
//     </div>
//   );
// }

// export default Top_Header;




// import React from "react";

// function Top_Header() {
//   return (
//     <div className="flex flex-wrap justify-between items-center bg-[#272343] text-white py-2 px-5 text-sm font-sans">
//       {/* Left Section */}
//       <div className="flex items-center">
//         <p className="m-0">&#10003; Free Shipping On All Orders Over $50</p>
//       </div>
//       {/* Right Section */}
//       <div className="flex gap-4 mt-2 sm:mt-0">
//         <p className="m-0 cursor-pointer hover:underline">Eng</p>
//         <p className="m-0 cursor-pointer hover:underline">FAQs</p>
//         <p className="m-0 cursor-pointer hover:underline">Need Help</p>
//       </div>
//     </div>
//   );
// }

// export default Top_Header;
