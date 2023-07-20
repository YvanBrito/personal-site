import { Post, getPosts } from '@/components'
import Link from 'next/link'

export default async function FullPost() {
  const posts: Post[] = await getPosts()

  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 gap-y-10">
        {posts.map(({ title, slug, description }) => (
          <Link href={`/blog/${slug}`} key={title}>
            <div
              style={{ transition: 'all 500ms' }}
              className="w-[90%] hover:cursor-pointer active:bg-[#344868] bg-[#3c547d] shadow-md hover:shadow-2xl rounded-lg overflow-hidden p-6"
            >
              <h1 className="text-2xl mb-5">{title}</h1>
              <p>{description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
