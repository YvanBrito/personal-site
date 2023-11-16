import Image from 'next/image'
import Link from 'next/link'
import './styles.css'
import { getPosts } from '@/utils'

export interface Post {
  title: string
  slug: string
  description: string
  coverImg: string
}

const Posts = async () => {
  const posts: Post[] = await getPosts({ mostRecents: 6 })

  return (
    <div className="w-full grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-2">
      {posts.map(({ title, slug, description, coverImg }) => (
        <Link href={`/blog/${slug}`} key={title}>
          <div className="post flex relative gap-2 p-0 w-[20rem] lg:w-full hover:cursor-pointer active:bg-[#344868] bg-[#3c547d] shadow-md hover:shadow-2xl rounded-lg overflow-hidden">
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

export { Posts }
