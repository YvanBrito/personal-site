'use client'
import ReactMarkdown from 'react-markdown'
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
import { useEffect, useState } from 'react'
hljs.registerLanguage('javascript', javascript)

export default function FullPost({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<{ content: string }>({ content: '' })

  useEffect(() => {
    fetch(`http://localhost:3000/api/posts?slug=${params.slug}`, {
      cache: 'no-store',
    })
      .then((res) => res.json())
      .then((post) => {
        setPost(post)
      })
  }, [])

  useEffect(() => {
    hljs.initHighlighting()
  }, [post])

  return (
    <div className="w-2/3 m-auto">
      <div>
        <ReactMarkdown>{post?.content}</ReactMarkdown>
      </div>
    </div>
  )
}
