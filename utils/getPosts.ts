interface ISearchPostsParams {
  slug?: string
  mostRecents?: number
}

export const getPosts = async ({ slug, mostRecents }: ISearchPostsParams) => {
  const response = await fetch(
    'https://raw.githubusercontent.com/YvanBrito/blog-posts/main/posts-details.json',
    {
      cache: 'no-store',
    },
  )
  const json = await response.text()
  const postsDetails = JSON.parse(json)

  if (!slug && !mostRecents) return postsDetails

  if (slug) {
    const secondResponse = await fetch(
      `https://raw.githubusercontent.com/YvanBrito/blog-posts/main/posts/${slug}.md`,
      {
        cache: 'no-store',
      },
    )
    return await secondResponse.text()
  }

  const mostRecentsNumber = Number(mostRecents)
  if (Number.isNaN(mostRecentsNumber)) return []

  if (mostRecentsNumber) {
    const mostRecentsPosts = postsDetails.slice(0, mostRecentsNumber)
    return mostRecentsPosts
  }
}
