export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const mediumUserUrl =
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@adrinlol" // Replace with the actual URL
      const mediumBlogs = await fetch(mediumUserUrl)

      const blogs = await mediumBlogs.json()

      res.setHeader("Cache-Control", "public, s-maxage=1200, stale-while-revalidate=600")

      return res.status(200).json({
        feed: blogs.items,
      })
    }
  } catch (e) {
    return res.status(500).json({ message: e.message })
  }
}
