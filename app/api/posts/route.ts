import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')
  const mostRecents = searchParams.get('mostRecents')

  const response = await fetch(
    'https://raw.githubusercontent.com/YvanBrito/blog-posts/main/posts-details.json',
  )
  const json = await response.text()
  const postsDetails = JSON.parse(json)

  if (!slug && !mostRecents)
    return NextResponse.json(postsDetails, { status: 200 })

  if (slug) {
    const secondResponse = await fetch(
      `https://raw.githubusercontent.com/YvanBrito/blog-posts/main/${slug}.md`,
    )
    const jsonRes = await secondResponse.text()
    return NextResponse.json({ content: jsonRes }, { status: 200 })
  }

  const mostRecentsNumber = Number(mostRecents)
  if (Number.isNaN(mostRecentsNumber))
    return NextResponse.json(
      { errorMessage: 'mostRecents não é um número' },
      { status: 400 },
    )

  if (mostRecentsNumber) {
    const mostRecentsPosts = postsDetails.slice(0, mostRecentsNumber)
    console.log('server mostRecentsPosts', mostRecentsNumber, mostRecentsPosts)
    return NextResponse.json(mostRecentsPosts, { status: 200 })
  }
}
