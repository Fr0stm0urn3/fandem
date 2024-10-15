import BlogPageBackgroundImages from "../../components/BlogPageBackgroundImages"
import BlogPageHero from "../../components/BlogPageHero"
import AllBlogPosts from "../../components/AllBlogPosts"

const BlogPage = async () => {
  return (
    <div>
      <BlogPageHero />
      <div className="max-w-[1920px]">
        <BlogPageBackgroundImages />
      </div>
      <div className="bg-white mt-[135px] pt-[100px] pb-[30px] z-20">
        <AllBlogPosts />
      </div>
    </div>
  )
}

export default BlogPage
