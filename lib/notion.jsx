// import "server-only"
// import React from "react"
// import { Client } from "@notionhq/client"

// export const notion = new Client({
//   auth: process.env.NOTION_SECRET,
// })

// export const fetchPages = React.cache(() => {
//   return notion.databases.query({
//     database_id: process.env.NOTION_POST_DATABASE_ID,
//     filter: {
//       property: "Status",
//       select: {
//         equals: "Live",
//       },
//     },
//   })
// })

// export const fetchBySlug = React.cache((slug) => {
//   return notion.databases
//     .query({
//       database_id: process.env.NOTION_POST_DATABASE_ID,
//       filter: {
//         property: "slug",
//         rich_text: {
//           equals: slug,
//         },
//       },
//     })
//     .then((res) => res.results[0])
// })

// export const fetchPageBlocks = React.cache((pageId) => {
//   return notion.blocks.children
//     .list({
//       block_id: pageId,
//     })
//     .then((res) => res.results)
// })

import { Client } from "@notionhq/client"

const notion = new Client({ auth: process.env.NOTION_SECRET })
export async function getBlogPosts() {
  const databaseId = process.env.NOTION_POST_DATABASE_ID
  const response = await notion.databases.query({
    database_id: databaseId,
  })
  return response.results.map((page) => ({
    id: page.id,
    title: page.properties["Title"].title[0].text.content,
    date: page.properties["Date"].date.start,
    tags: page.properties["Tags"].multi_select.map((tag) => tag.name),
    content: page.properties["Content"].rich_text[0].text.content,
  }))
}
