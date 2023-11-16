import ReactMarkdown from 'react-markdown'
import Script from 'next/script'
import '@/styles/blog.css'
import { getPosts } from '@/utils'

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPosts({ slug: params.slug })

  return (
    <div className="w-2/3 m-auto">
      <div className="remove-all">
        <ReactMarkdown>{post}</ReactMarkdown>
      </div>
      <Script
        id={`highlight-post-${params.slug}`}
      >{`hljs.highlightAll()`}</Script>
    </div>
  )
}
