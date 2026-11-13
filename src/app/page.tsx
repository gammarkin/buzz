import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Categories } from "@/components/sections/Categories";
import { Community } from "@/components/sections/Community";
import { Contact } from "@/components/sections/Contact";
import { FeaturedCourse } from "@/components/sections/FeaturedCourse";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonial } from "@/components/sections/Testimonial";
import { footer, headerActions, mainNav } from "@/data/content";

export default function Home() {
  return (
    <>
      <Header links={mainNav} login={headerActions.login} cta={headerActions.cta} />
      <main id="main">
        <Hero />
        <Categories />
        <FeaturedCourse />
        <HowItWorks />
        <Testimonial />
        <Community />
        <Contact />
        <FinalCta />
      </main>
      <Footer tagline={footer.tagline} columns={footer.columns} copyright={footer.copyright} />
    </>
  );
}
