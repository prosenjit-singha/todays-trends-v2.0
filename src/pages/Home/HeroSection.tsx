import { styled } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import banner1 from "../../assets/images/hero/hero-5.jpg";
import banner2 from "../../assets/images/hero/hero-12.jpg";
import banner3 from "../../assets/images/hero/hero-6.jpg";
import { useState } from "react";

function HeroSection() {
  const [start, setStart] = useState<undefined | "started">(undefined);
  function handleTransitionEnd() {
    setStart(undefined);
  }
  function handleTransitionStart() {
    setStart("started");
  }
  return (
    <Container
      spaceBetween={30}
      loop
      speed={1000}
      // autoplay={{
      //   delay: 5000,
      //   disableOnInteraction: false,
      // }}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination, Autoplay]}
      onTransitionEnd={handleTransitionEnd}
      onTransitionStart={handleTransitionStart}
    >
      {banners.map((banner, i) => (
        <Banner key={i}>
          <Content>
            <Heading start={start}>{banner.heading}</Heading>
            <SubHeading start={start}>{banner.subHeading}</SubHeading>
          </Content>
          <Background src={banner.bgImage} alt={banner.title} />
        </Banner>
      ))}
    </Container>
  );
}

export default HeroSection;

const banners = [
  {
    title: "Hero Banner 1",
    bgImage: banner1,
    heading: "Reliablity",
    subHeading:
      "Original Reporting and Analysis Directly from Your Reliable Sources.",
  },
  {
    title: "Hero Banner 2",
    bgImage: banner2,
    heading: "Raise Your Voice",
    subHeading: "Use Your Voice to Roam Around the World.",
  },
  {
    title: "Hero Banner 3",
    bgImage: banner3,
    heading: "Uniqueness",
    subHeading: "Have a New Experience with a News Website.",
  },
];

// Styles

const Container = styled(Swiper)((props) => ({
  width: "100%",
  maxHeight: "300px",
}));

const Banner = styled(SwiperSlide)(({ theme }) => ({
  position: "relative",
  minHeight: "300px",
  width: "100% !important",
  padding: 24,
}));

const Content = styled("div")`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-inline: clamp(1.5rem, 10vw, 18rem);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.65) 35%,
    rgba(0, 0, 0, 0)
  );
`;

const Heading = styled("h1")<{ start?: string }>`
  color: hsla(0, 0%, 95%);
  text-align: center;
  text-transform: uppercase;
  margin: 0;
  margin-top: auto;
  opacity: ${(p) => (p.start ? 0 : 1)};
  transform: translateX(${(p) => (p.start ? "50%" : "0%")});
  transition: transform 500ms ease-out, opacity 500ms ease-out;
`;

const SubHeading = styled("p")<{ start?: string }>`
  color: hsla(0, 0%, 95%);
  text-align: center;
  margin: 0;
  margin-bottom: 2rem;
  opacity: ${(p) => (p.start ? 0 : 1)};
  transform: translateX(${(p) => (p.start ? "50%" : "0%")});
  transition: transform 500ms ease-out 100ms, opacity 500ms ease-out 200ms;
`;

const Background = styled("img")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: -1;
  background-image: blue;
`;
