import { Header } from "@/components/layout/Header";
import { Categories } from "@/components/sections/Categories";
import { FeaturedCourse } from "@/components/sections/FeaturedCourse";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
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
      </main>
    </>
  );
}
