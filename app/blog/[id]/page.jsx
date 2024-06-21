import GoBackToBlog from "@/components/GoBackToBlog"
import NFTHero from "@/components/NFTHero"
import PostContent from "@/components/PostContent"
import RelatedArticles from "@/components/RelatedArticles"

const NFTPage = () => {
  return (
    <div className="bg-[#FFF] flex justify-center items-center flex-col">
      <GoBackToBlog />
      <NFTHero />
      <PostContent />
      <RelatedArticles />
    </div>
  )
}

export default NFTPage
