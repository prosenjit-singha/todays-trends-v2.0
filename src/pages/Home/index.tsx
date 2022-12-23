import { Main } from "../../components/styled/containers";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import HeroSection from "./HeroSection";
import PopularCategory from "./PopularCategory";

function Home() {
  // useScrollToTop();
  return (
    <Main>
      <HeroSection />
      <PopularCategory />
    </Main>
  );
}

export default Home;
