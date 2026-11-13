import { Header } from "@/components/layout/Header";
import { Categories } from "@/components/sections/Categories";
import { Community } from "@/components/sections/Community";
import { Contact } from "@/components/sections/Contact";
import { FeaturedCourse } from "@/components/sections/FeaturedCourse";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonial } from "@/components/sections/Testimonial";
import { headerActions, mainNav } from "@/data/content";

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
      </main>
    </>
  );
}
