import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// export default sanityClient({
// 	projectId: 'n0ujj1wy',
// 	dataset: 'production',
// });

export const client = sanityClient({
	projectId: 'n0ujj1wy',
	dataset: 'production',
	apiVersion: '2022-03-04',
	useCdn: true,
	token: process.env.REACT_SANITY_PROJECT_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
