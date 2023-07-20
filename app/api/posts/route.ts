import { NextRequest, NextResponse } from 'next/server'

const posts = [
  {
    title: 'Post 1',
    slug: 'post-1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti provident repellendus, ullam...',
  },
  {
    title: 'Post 2',
    slug: 'post-2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti provident repellendus, ullam...',
  },
  {
    title: 'Post 3',
    slug: 'post-3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti provident repellendus, ullam...',
  },
  {
    title: 'Post 4',
    slug: 'post-4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti provident repellendus, ullam...',
  },
]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')

  if (!slug) return NextResponse.json({ posts }, { status: 200 })

  const postWithSlug = posts.find((p) => p.slug === slug)
  return NextResponse.json(postWithSlug, { status: 200 })
}
