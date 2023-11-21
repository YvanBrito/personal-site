export const getAllPostsDetails = async () => {
  const response = await fetch(
    'https://raw.githubusercontent.com/YvanBrito/blog-posts/main/posts-details.json',
    {
      cache: 'no-store',
    },
  )
  const json = await response.text()
  const postsDetails = JSON.parse(json)

  return postsDetails
}

export const getMostRecentPosts = async (quantity: number) => {
  const postsDetails = await getAllPostsDetails()

  const mostRecentsPosts = postsDetails.slice(0, quantity)
  return mostRecentsPosts
}

export const getPostContent = async (slug: string) => {
  const secondResponse = await fetch(
    `https://raw.githubusercontent.com/YvanBrito/blog-posts/main/posts/${slug}.md`,
    {
      cache: 'no-store',
    },
  )
  return await secondResponse.text()
}
