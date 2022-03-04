import { useState, useEffect } from 'react';
import { client, urlFor } from './client.js';

function PostPage() {
	const [postData, setPostData] = useState([]);

	useEffect(() => {
		const query = '*[_type == "post"]';
		client.fetch(query).then((data) => setPostData(data));
	}, []);
	// useEffect(() => {
	// 	sanityClient
	// 		.fetch(
	// 			`*[_type=="post"]{
	// 		title,slug,mainImage{
	// 			assets->{
	// 				_id,
	// 				url,
	// 			},
	// 			alt
	// 		}
	// 	}`
	// 		)
	// 		.then((data) => setPost(data))
	// 		.catch(console.error);
	// }, []);

	return (
		<div>
			<section>
				<h1>static Blog post page</h1>
				<h2>static subtitle</h2>
				<div>
					{postData &&
						postData.map((post, index) => (
							<article key={index}>
								<img src={urlFor(post.mainImage)} alt={post.title} />
								<span>
									<h3>{post.title}</h3>
									<p>{post.body[0].children[0].text}</p>
								</span>
							</article>
						))}
				</div>
				{/* {postData.map((post) => console.log(post.body[0].children[0].text))} */}
			</section>
		</div>
	);
}

export default PostPage;
