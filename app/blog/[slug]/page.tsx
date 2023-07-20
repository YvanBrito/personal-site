import { Post } from '@/components'

async function getPostWithSlug(slug: string) {
  const res = await fetch(`http://localhost:3000/api/posts?slug=${slug}`, {
    cache: 'no-store',
  })
  const post = await res.json()
  return post
}

export default async function FullPost({
  params,
}: {
  params: { slug: string }
}) {
  const post: Post = await getPostWithSlug(params.slug)

  return <div>{post.title}</div>
}
