export const getAllPostsDetails = async (lang: string) => {
  const response = await fetch(
    `https://raw.githubusercontent.com/YvanBrito/blog-posts/main/${lang}/posts-details.json`,
    {
      cache: 'no-store',
    },
  )
  const json = await response.text()
  const postsDetails = JSON.parse(json)

  return postsDetails
}

export const getMostRecentPosts = async (quantity: number, lang: string) => {
  const postsDetails = await getAllPostsDetails(lang)

  const mostRecentsPosts = postsDetails.slice(0, quantity)
  return mostRecentsPosts
}

export const getPostContent = async (slug: string, lang: string) => {
  const secondResponse = await fetch(
    `https://raw.githubusercontent.com/YvanBrito/blog-posts/main/${lang}/posts/${slug}.md`,
    {
      cache: 'no-store',
    },
  )
  return await secondResponse.text()
}
