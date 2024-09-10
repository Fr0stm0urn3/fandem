import BlogPageBackgroundImages from "../../components/BlogPageBackgroundImages"
import BlogPageHero from "../../components/BlogPageHero"
import AllBlogPosts from "../../components/AllBlogPosts"

const BlogPage = async () => {
  return (
    <>
      <BlogPageHero />
      <BlogPageBackgroundImages />
      <div className="bg-white mt-[135px] pt-[100px] pb-[30px] z-20">
        <AllBlogPosts />
      </div>
    </>
  )
}

export default BlogPage
