import BlogAndArticles from "@/components/BlogAndArticles"
import ContactForm from "@/components/ContactForm"
import FooterHeader from "@/components/FooterHeader"
import HomePageHero from "@/components/HomePageHero"
import OurProjects from "@/components/OurProjects"
import HomePageBackgroundImages from "@/components/HomePageBackgroundImages"

const HomePage = () => {
  return (
    <>
      <HomePageHero />
      <OurProjects />
      <BlogAndArticles />
      <HomePageBackgroundImages />
      <ContactForm />
      <FooterHeader />
    </>
  )
}

export default HomePage
