import React from 'react'
import {PostMasonry, MasonryPost} from '../components/common'
import trending from '../assets/mocks/trending'
import featured from '../assets/mocks/featured'

const trendingConfig = {
    1: {
        gridArea: '1 / 2 / 3 / 3'
    }
}

const featuredConfig = {
	0: {
		gridArea: '1 / 1 / 2 / 3',
		height: '300px'
	},
	1: {
		height: '300px'
	},
	3: {
		height: '300px',
		marginLeft: '30px',
		width: '630px'
	}
}

const mergeStyles = function (posts, config){
    posts.forEach((post, index) => {
        post.style = config[index]
        post.author = 'John Doe'
        post.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.'
    })
}

mergeStyles(trending, trendingConfig)
mergeStyles(featured, featuredConfig)

const lastFeatured = featured.pop()

export default function Home () {
	return (
		<section className="container home">
			<div className="row">
				<h1>Featured Posts</h1>
				<section className="featured-posts-container">
					<PostMasonry posts={featured} columns={2} tagsOnTop={true}/>
					<MasonryPost post={lastFeatured} tagsOnTop={true}/>
				</section>
				<h1>Trending Posts</h1>
				<PostMasonry posts={trending} columns={3}/>
			</div>
		</section>
	) 
}
