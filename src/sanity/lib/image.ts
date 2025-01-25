

// sanity/lib/image.ts
import imageUrlBuilder from '@sanity/image-url';
import { client } from './client';  // Make sure you have the Sanity client properly set up

// Initialize image URL builder with the Sanity client
const builder = imageUrlBuilder(client);

// The `urlFor` function generates the image URL based on the image asset reference
export function urlFor(source: any) {
  return builder.image(source);  // This returns an ImageUrlBuilder object
}
