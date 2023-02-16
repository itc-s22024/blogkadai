import { getPostBySlug } from "lib/api"
import { extractText } from "lib/extract-text"
import Meta from "components/meta"
import Container from "components/container"
import PostHeader from "components/post-header"
import Image from "next/image"
import ConvertBody from "components/convert-body"
import PostCategories from "components/post-categories"
import PostBody from "components/post-body"
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from "components/two-column"

export default function Schedule({
    title,
    publish,
    content,
    eyecatch,
    categories,
    description,
}) {
    return (
        <Container>
           <Meta
                pageTitle={title}
                pageDesc={description} 
                pageImg={eyecatch.url}
                pageImgW={eyecatch.width}
                pageImgH={eyecatch.height}
            />
            <article>
                <PostHeader title={title} subtitle="Blog Article" publish={publish} />

                <figure>
                    <Image
                        src={eyecatch.url}
                        alt=""
                        width={eyecatch.width}
                        height={eyecatch.height}
                        sizes="(min-width: 1152px) 1152px, 100vw"
                        priority
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                    />
                </figure>
                <TwoColumn>
                    <TwoColumnMain>
                        <PostBody>
                            <ConvertBody contentHTML={content} />
                        </PostBody>
                    </TwoColumnMain>
                    <TwoColumnSidebar>
                        <PostCategories categories={categories} />
                    </TwoColumnSidebar>
                </TwoColumn>
            </article>
        </Container>
    ) 
}

export async function getStaticProps() {
    const slug = 'schedule'
    
    const post = await getPostBySlug(slug)

    const description = extractText(post.content)

    return{
        props: {
            title: post.title,
            publish: post.publishDate,
            content: post.content,
            eyecatch: post.eyecatch,
            categories: post.categories,
            description: description,
        },
    }
}