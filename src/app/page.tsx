import { Header } from "@/components/layout/Header";
import { headerActions, mainNav } from "@/data/content";

export default function Home() {
  return (
    <>
      <Header links={mainNav} login={headerActions.login} cta={headerActions.cta} />
      <main id="main" />
    </>
  );
}
