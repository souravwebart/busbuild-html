import FifthSection from "../Components/FifthSection";
import Footer from "../Components/Footer";
import FourthSection from "../Components/FourthSection";
import HeroSection from "../Components/HeroSection";
import SecondSection from "../Components/secondSection";
import SixthSection from "../Components/sixthSection";
import ThirdSection from "../Components/thirdSection";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#F8FAFC",
      }}
    >
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <Footer />
    </div>
  );
}
