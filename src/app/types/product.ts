// export interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   image?: {
//     asset: {
//       _ref: string;
//     };
//   };
//   slug: {
//     current: string;

//   };
// }

export type Product = {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: {
    asset: {
      url: string;
    };
  };
  category: string; // Adjust if needed
  slug: {
    current: string; // Slug should be a string
  };
};

// export interface Product {
//   _id: string; // Unique identifier for each product
//   title: string; // Product title
//   description?: string; // Optional field for product description
//   price: number; // Product price
//   image?: {
//     asset: {
//       _ref: string; // Reference to the image asset in Sanity
//       _type : "iamage";
//     }
//   }; // Optional to handle missing images
//   slug:{
//     _type : "slug"
//     current : string
//   }

// }

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
//   slug: {
//     current: string; // The current slug for dynamic routing
//   };
// }



// export interface Product {
//   _id:string;
//   title:string;
//   tyoe:"products";
//   image? :{
//     asset : {
//       _ref :string
//       _type : "image"
//     } 
//   };
//   price :number
//   description?: string

// } 