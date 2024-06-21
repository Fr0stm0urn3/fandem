import AllBlogPosts from "@/components/AllBlogPosts"
import BlogPageBackgroundImages from "@/components/BlogPageBackgroundImages"
import BlogPageHero from "@/components/BlogPageHero"
import FilterSearch from "@/components/FilterSearch"

const BlogPage = () => {
  return (
    <>
      <BlogPageHero />

      <BlogPageBackgroundImages />
      <div className="bg-white mt-[135px] pt-[100px] pb-[30px] z-20">
        <FilterSearch />
        <AllBlogPosts />
      </div>
    </>
  )
}

export default BlogPage
