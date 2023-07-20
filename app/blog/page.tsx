import { Post, getPosts } from '@/components'
import Link from 'next/link'

export default async function FullPost() {
  const posts: Post[] = await getPosts()

  return (
    <div className="w-2/4 pt-12 m-auto grid grid-cols-1 gap-y-10">
      {posts.map(({ title, slug, description }) => (
        <Link href={`/blog/${slug}`} key={title}>
          <div className="hover:cursor-pointer active:bg-[#344868] bg-[#3c547d] shadow-md hover:shadow-2xl rounded-lg overflow-hidden p-6">
            <h1 className="text-2xl mb-5">{title}</h1>
            <p>{description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
