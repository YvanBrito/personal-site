import { Post, getPosts } from '@/components'
import Link from 'next/link'
import Image from 'next/image'

export default async function FullPost() {
  const posts: Post[] = await getPosts()

  return (
    <div className="w-full lg:w-3/4 pt-12 m-auto flex flex-col items-center">
      {posts.map(({ title, slug, description, coverImg }) => (
        <Link className="w-3/4" href={`/blog/${slug}`} key={title}>
          <div className="flex relative gap-2 p-0 hover:cursor-pointer active:bg-[#344868] bg-[#3c547d] shadow-md hover:shadow-2xl rounded-lg overflow-hidden">
            <div className="imgCover relative">
              <Image src={coverImg} width={200} height={200} alt="cover" />
            </div>
            <div className="ml-[-60px] z-[2]">
              <h1 className="text-2xl mb-5">{title}</h1>
              <p>{description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
