// sanity/lib/client.ts
import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'yourProjectId',  // Replace with your Sanity project ID
  dataset: 'production',       // Dataset name
  useCdn: true,                // Set to true for better performance in production
});




// /**
// * This configuration file lets you run `$ sanity [command]` in this folder
// * Go to https://www.sanity.io/docs/cli to learn more.
// **/
// import { defineCliConfig } from 'sanity/cli'

// const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
// const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

// export default defineCliConfig({ api: { projectId, dataset } })
