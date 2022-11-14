import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Frontend client to communicate with backend Sanity DB.
export const client = sanityClient({
    // Data id.
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    // Data type.
    dataset: 'production',
    // Client API version.
    apiVersion: '2021-03-25',
    // Data token.
    token: process.env.REACT_APP_SANITY_TOKEN,
    // Use cdn for getting faster access.
    useCdn: true,
    ignoreBrowserTokenWarning: true,
});

// Getting access to google user's picture.
const builder = imageUrlBuilder(client);
// Google user's picture.
export const urlFor = (source) => builder.image(source);
