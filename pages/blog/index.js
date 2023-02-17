import { getAllPosts } from "lib/api"
import Meta from "components/meta"
import Hero from "components/hero"
import Posts from "components/posts"
import { getPlaiceholder } from "plaiceholder"
import { eyecatchLocal } from "lib/constants"
import Container from "components/container"

export default function Blog({ posts }) {
    return (
        <Container>
            <Meta pageTitle="ブログ" pageDesc="ブログの記事一覧" />
            <Hero title='Blog' subtitle='lksdf;al;alshf;'/>
            <Posts posts={posts} />
        </Container>
    )
}

export async function getStaticProps() {
    const posts = await getAllPosts()

    for (const post of posts)  {
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
