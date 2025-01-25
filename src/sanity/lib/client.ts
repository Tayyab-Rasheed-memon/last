import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../env';

// Debugging: Ensure variables are correctly imported
console.log({ projectId, dataset, apiVersion });

if (!projectId || typeof projectId !== 'string' || !/^[a-z0-9-]+$/.test(projectId)) {
  throw new Error(
    "Invalid 'projectId'. It must be a string containing only lowercase letters, numbers, and dashes. Please check your 'projectId' value in the '../env' file."
  );
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});


// import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId } from '../env'

// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
// })
