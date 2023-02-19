import { getAllPosts } from "lib/api"
import Container from "components/container"
import Hero from "components/hero"
import Posts from "components/posts"
import Pagination from "components/pagination"
import { getPlaiceholder } from "plaiceholder"
import { eyecatchLocal } from "lib/constants"

export default function Home({ posts }) {
    return (
        <Container>
            <Hero
                title="CUBE"
                subtitle="アウトプットしていくサイト"
                imageOn
            />
            <Posts posts={posts} />
            <Pagination nextUrl="/blog" nextText="More Posts" />
        </Container>
    )
}

export async function getStaticProps() {
    const url = 'https://images.microcms-assets.io/assets/ca83e792c77f456d83ca8a3e70c25305/6dcbbc700eb843178db9cdbeab1027b1/about.jpg'
    console.log(await getPlaiceholder(url))
    const posts = await getAllPosts(4)

    for (const post of posts) {
        if (!post.hasOwnProperty('eyecatch')) {
            post.eyecatch = eyecatchLocal
        }
        const { base64 } = await getPlaiceholder(post.eyecatch.url)
        post.eyecatch.blurDataURL = base64
    }

    return {
        props: {
            posts: posts,
        },
    }
}
    
