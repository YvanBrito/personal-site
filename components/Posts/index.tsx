import Link from 'next/link'

export interface Post {
  title: string
  slug: string
  description: string
}

export async function getPosts() {
  const res = await fetch('http://localhost:3000/api/posts?mostRecents=1', {
    cache: 'no-store',
  })

  const response = await res.json()

  return response
}

const Posts = async () => {
  const posts: Post[] = await getPosts()

  return (
    <div className="w-full grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-2">
      {posts.map(({ title, slug, description }) => (
        <Link href={`/blog/${slug}`} key={title}>
          <div className="w-[20rem] lg:w-full hover:cursor-pointer active:bg-[#344868] bg-[#3c547d] shadow-md hover:shadow-2xl rounded-lg overflow-hidden p-6">
            <h1 className="text-2xl mb-5">{title}</h1>
            <p>{description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export { Posts }
