import ReactMarkdown from 'react-markdown'
import Script from 'next/script'
import '@/styles/blog.css'
import { getPostContent } from '@/utils'

export default async function Page({
  params,
}: {
  params: { slug: string; lang: string }
}) {
  const post = await getPostContent(params.slug, params.lang)

  return (
    <div className="w-[90%] m-auto lg:w-2/3">
      <div className="remove-all">
        <ReactMarkdown>{post}</ReactMarkdown>
      </div>
      <Script
        id={`highlight-post-${params.slug}`}
      >{`hljs.highlightAll()`}</Script>
    </div>
  )
}
