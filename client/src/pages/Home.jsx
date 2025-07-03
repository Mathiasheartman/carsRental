import Banner from "../components/Banner";
import FeaturedSection from "../components/FeaturedSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Loader from "../components/Loader";
import Newletter from "../components/Newletter";
import Testimonial from "../components/Testimonial";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedSection />
      <Banner />
      <Testimonial />
      <Newletter />
    </>
  );
}

export default Home;
