import { Main } from "../../components/styled/containers";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import HeroSection from "./HeroSection";
import LatestNews from "./LatestNews";
import PopularCategory from "./PopularCategory";
import PopularSources from "./PopularSources";
import SubscribeSection from "./SubscribeSection";

function Home() {
  useScrollToTop();
  return (
    <Main>
      <HeroSection />
      <PopularCategory />
      <LatestNews />
      <PopularSources />
      <SubscribeSection />
    </Main>
  );
}

export default Home;
