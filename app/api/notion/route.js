// import { NextResponse } from "next/server"

// export default async function handler(req, res) {
//   const posts = await getBlogPosts()
//   res.status(200).json(posts)
// }

// export default (req, res) => {
//   res.status(200).json({ name: "Hello" })
// }

// export async function GET(request) {
//   return NextResponse.json({ message: "Hello World" })
// }

// const { Client } = require("@notionhq/client")

// export async function GET(req, res) {
//   const notion = new Client({ auth: process.env.NOTION_SECRET })
//   const databaseId = "ea8786b08efe4b44ab571a4c8405d9a9"
//   const response = await notion.databases.retrieve({ databaseId })

//   return NextResponse.json({ messsage: "Hello World" })
// }

// export async function GET(request) {
//     return NextResponse.json({ messsage: "Hello World" })
//   }

// ;(async () => {
//   const databaseId = "ea8786b08efe4b44ab571a4c8405d9a9"
//   const response = await notion.databases.query({
//     database_id: databaseId,
//     filter: {
//       or: [
//         {
//           property: "In stock",
//           checkbox: {
//             equals: true,
//           },
//         },
//         {
//           property: "Cost of next trip",
//           number: {
//             greater_than_or_equal_to: 2,
//           },
//         },
//       ],
//     },
//     sorts: [
//       {
//         property: "Last ordered",
//         direction: "ascending",
//       },
//     ],
//   })
//   console.log(response)
// })()

// import { Client } from "@notionhq/client"

// const notion = new Client({ auth: process.env.NOTION_SECRET })

// export default async function handler(req, res) {
//   if (req.method === "GET") {
//     try {
//       const response = await notion.databases.query({
//         database_id: process.env.NOTION_POST_DATABASE_ID,
//       })
//       res.status(200).json(response)
//     } catch (error) {
//       res.status(500).json({ error: error.message })
//     }
//   } else {
//     res.setHeader("Allow", ["GET"])
//     res.status(405).end(`Method ${req.method} Not Allowed`)
//   }
// }

// export default function handler(req, res) {
//   if (req.method === "GET") {
//     res.status(200).json({ message: "GET request successful" })
//   } else {
//     res.setHeader("Allow", ["GET"])
//     res.status(405).end(`Method ${req.method} Not Allowed`)
//   }
// }

// const { Client } = require("@notionhq/client")

// export async function GET(req, res) {
//   const notion = new Client({ auth: process.env.NOTION_SECRET })
//   const databaseId = "ea8786b08efe4b44ab571a4c8405d9a9"
//   // const response = await notion.databases.retrieve({ database_id: databaseId })

//   const response = await notion.databases.retrieve({
//     database_id: databaseId,
//     filter: {
//       or: [
//         {
//           property: "In stock",
//           checkbox: {
//             equals: true,
//           },
//         },
//         {
//           property: "Cost of next trip",
//           number: {
//             greater_than_or_equal_to: 2,
//           },
//         },
//       ],
//     },
//     sorts: [
//       {
//         property: "Last ordered",
//         direction: "ascending",
//       },
//     ],
//   })

//   return NextResponse.json(response)
//   //   res.status(200).json({ response })
// }

// import { NextResponse } from "next/server"
// const { Client } = require("@notionhq/client")

// export async function GET(req, res) {
//   const notion = new Client({ auth: process.env.NOTION_SECRET })
//   const databaseId = process.env.NOTION_POST_DATABASE_ID

//   const response = await notion.databases.retrieve({
//     database_id: databaseId,
//     filter: {
//       or: [
//         {
//           property: "In stock",
//           checkbox: {
//             equals: true,
//           },
//         },
//         {
//           property: "Cost of next trip",
//           number: {
//             greater_than_or_equal_to: 2,
//           },
//         },
//       ],
//     },
//     sorts: [
//       {
//         property: "Last ordered",
//         direction: "ascending",
//       },
//     ],
//   })

//   return NextResponse.json(response)
// }

// import { NextResponse } from "next/server"
// import { Client } from "@notionhq/client"

// export async function GET(req, res) {
//   const notion = new Client({ auth: process.env.NOTION_SECRET })
//   const databaseId = process.env.NOTION_POST_DATABASE_ID

//   const response = await notion.databases.retrieve({
//     database_id: databaseId,
//     filter: {
//       or: [
//         {
//           property: "In stock",
//           checkbox: {
//             equals: true,
//           },
//         },
//         {
//           property: "Cost of next trip",
//           number: {
//             greater_than_or_equal_to: 2,
//           },
//         },
//       ],
//     },
//     sorts: [
//       {
//         property: "Last ordered",
//         direction: "ascending",
//       },
//     ],
//   })

//   return NextResponse.json(response)
// }

import { NextResponse } from "next/server"
import { Client } from "@notionhq/client"

export async function GET(req, res) {
  const notion = new Client({ auth: process.env.NOTION_SECRET })
  const databaseId = process.env.NOTION_POST_DATABASE_ID

  const response = await notion.databases.retrieve({
    database_id: databaseId,
  })

  // Log the entire response for debugging
  console.log(response)

  return NextResponse.json(response)
}

// import { NextResponse } from "next/server"
// import { Client } from "@notionhq/client"

// export async function GET(req, res) {
//   const notion = new Client({ auth: process.env.NOTION_SECRET })
//   const databaseId = process.env.NOTION_POST_DATABASE_ID

//   const response = await notion.databases.retrieve({
//     database_id: databaseId,
//     filter: {
//       or: [
//         {
//           property: "In stock",
//           checkbox: {
//             equals: true,
//           },
//         },
//         {
//           property: "Cost of next trip",
//           number: {
//             greater_than_or_equal_to: 2,
//           },
//         },
//       ],
//     },
//     sorts: [
//       {
//         property: "Last ordered",
//         direction: "ascending",
//       },
//     ],
//   })

//   // Access the rich text property
//   const richTextContent = response.properties.subtitle.rich_text[0]?.text.content

//   return NextResponse.json({ response, richTextContent })
// }
