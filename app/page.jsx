import BackgroundImages from "@/components/BackgroundImages"
import BlogAndArticles from "@/components/BlogAndArticles"
import ContactForm from "@/components/ContactForm"
import FooterHeader from "@/components/FooterHeader"
import HomePageHero from "@/components/HomePageHero"
import OurProjects from "@/components/OurProjects"

const HomePage = () => {
  return (
    <>
      <HomePageHero />
      <OurProjects />
      <BlogAndArticles />
      <BackgroundImages />
      <ContactForm />
      <FooterHeader />
    </>
  )
}

export default HomePage
