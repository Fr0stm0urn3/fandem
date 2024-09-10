import GoBackToBlog from "../../../components/GoBackToBlog"
// import NFTHero from "../../../components/NFTHero"
import PostContent from "../../../components/PostContent"
import RelatedArticles from "../../../components/RelatedArticles"

export async function fetchPosts() {
  try {
    const res = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@l.kakabadze2020"
    )

    if (res.status !== 200) {
      throw new Error("Failed to fetch the data...")
    }

    const data = await res.json()

    return data
  } catch (error) {
    console.log(error)
  }
}

const NFTPage = () => {
  return (
    <div className="bg-[#FFF] flex justify-center items-center flex-col">
      <GoBackToBlog />
      {/* <NFTHero /> */}
      <PostContent />
      <RelatedArticles />
    </div>
  )
}

export default NFTPage
