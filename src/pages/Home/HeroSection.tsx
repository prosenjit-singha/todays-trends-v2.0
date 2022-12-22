import { styled } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import banner1 from "../../assets/images/hero/hero-5.jpg";
import banner2 from "../../assets/images/hero/hero-12.jpg";
import banner3 from "../../assets/images/hero/hero-10.jpg";

const Container = styled(Swiper)((props) => ({
  width: "100%",
  maxHeight: "300px",
}));

const Banner = styled(SwiperSlide)(({ theme }) => ({
  minHeight: "300px",
  width: "100% !important",
  padding: 24,
}));

const Heading = styled("h1")``;

const SubHeading = styled("p")``;

function HeroSection() {
  return (
    <Container
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
    >
      {banners.map((banner, i) => (
        <Banner key={i}>
          <Heading>{banner.heading}</Heading>
          <SubHeading>{banner.subHeading}</SubHeading>
        </Banner>
      ))}
    </Container>
  );
}

export default HeroSection;

const banners = [
  {
    bgImage: banner1,
    heading: "Reliablity",
    subHeading:
      "Original Reporting and Analysis Directly from Your Reliable Sources.",
  },
  {
    bgImage: banner2,
    heading: "Raise Your Voice",
    subHeading: "Use Your Voice to Roam Around the World.",
  },
  {
    bgImage: banner3,
    heading: "Uniqueness",
    subHeading: "Have a New Experience with a News Website.",
  },
];
