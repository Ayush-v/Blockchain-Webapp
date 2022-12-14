import Faqs from "components/HomeSection/Faqs";
import { Hero } from "components/HomeSection/Hero";
import HowitWorks from "components/HomeSection/HowitWorks";
import Meaning from "components/HomeSection/Meaning";

const Home = () => {
  return (
    <main>
      {/* All the components from Components/HomeSection */}
      <Hero />
      <Meaning />
      <HowitWorks />
      <Faqs />
    </main>
  );
};

export default Home;
