import BlogAndArticles from "../components/BlogAndArticles"
import ContactForm from "../components/ContactForm"
import FooterHeader from "../components/FooterHeader"
import HomePageHero from "../components/HomePageHero"
import OurProjects from "../components/OurProjects"
import HomePageBackgroundImages from "../components/HomePageBackgroundImages"

// // Initialize the Notion client with your API key
// const notion = new Client({ auth: process.env.NOTION_SECRET })

// const databaseId = process.env.NOTION_POST_DATABASE_ID || ""

// // Fetch all posts from the Notion database
// export async function getPosts() {
//   try {
//     const response = await notion.databases.query({
//       database_id: databaseId,
//       filter: {
//         or: [
//           {
//             property: "published",
//             checkbox: {
//               equals: true,
//             },
//           },
//         ],
//       },
//     })

//     // Map the response to a more usable format
//     return response.results.map((post) => {
//       return {
//         id: post.id,
//         title: post.properties.title.title[0].plain_text,
//         description: post.properties.description.rich_text[0]?.plain_text || "",
//         slug: post.properties.slug.rich_text[0].plain_text,
//         tags: post.properties.tags.multi_select.map((tag) => tag.name),
//         createdAt: post.created_time,
//       }
//     })
//   } catch (error) {
//     console.error("Error fetching posts:", error)
//     return []
//   }
// }

// // Fetch a single post by its slug
// export async function getPost(slug) {
//   try {
//     const response = await notion.databases.query({
//       database_id: databaseId,
//       filter: {
//         or: [
//           {
//             property: "slug",
//             rich_text: {
//               equals: slug,
//             },
//           },
//         ],
//       },
//     })

//     if (response.results.length === 0) {
//       throw new Error("Post not found")
//     }

//     const pageId = response.results[0].id

//     const n2m = new NotionToMarkdown({ notionClient: notion })

//     const mdblocks = await n2m.pageToMarkdown(pageId)
//     const mdString = n2m.toMarkdownString(mdblocks)

//     return {
//       title: response.results[0].properties.title.title[0].plain_text,
//       content: mdString,
//       createdAt: response.results[0].created_time,
//     }
//   } catch (error) {
//     console.error("Error fetching post:", error)
//     return null
//   }
// }

const HomePage = () => {
  return (
    <div className="mx-auto max-w-[1920px] relative">
      <div>
        <HomePageHero />
        <OurProjects />
        <BlogAndArticles />
        <HomePageBackgroundImages />
        <ContactForm />
        <FooterHeader />
      </div>
    </div>
  )
}

export default HomePage
