import { Main } from "../../components/styled/containers";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import HeroSection from "./HeroSection";

function Home() {
  useScrollToTop();
  return (
    <Main>
      <HeroSection />
    </Main>
  );
}

export default Home;
