import { Main } from "../../components/styled/containers";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import HeroSection from "./HeroSection";
import LatestNews from "./LatestNews";
import PopularCategory from "./PopularCategory";

function Home() {
  useScrollToTop();
  return (
    <Main>
      <HeroSection />
      <PopularCategory />
      <LatestNews />
    </Main>
  );
}

export default Home;
