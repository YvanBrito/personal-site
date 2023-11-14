import ReactMarkdown from 'react-markdown'
import Script from 'next/script'
import './styles.css'

export default async function FullPost({
  params,
}: {
  params: { slug: string }
}) {
  const response = await fetch(
    `http://localhost:3000/api/posts?slug=${params.slug}`,
    {
      cache: 'no-store',
    },
  )
  const post: { content: string } = await response.json()

  return (
    <div className="w-2/3 m-auto">
      <div className="remove-all">
        <ReactMarkdown>{post?.content}</ReactMarkdown>
      </div>
      <Script
        id={`highlight-post-${params.slug}`}
      >{`hljs.highlightAll()`}</Script>
    </div>
  )
}
