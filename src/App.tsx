import Hero from "./Components/Hero";
import WhyChooseUs from "./Components/WhyChooseUs";
import Research from "./Components/Research";
import Avatars from "./Components/Avatars";
import Pricing from "./Components/Pricing";
import Messengers from "./Components/Messengers";
import Reviews from "./Components/Reviews";
import FAQ from "./Components/FAQ";
import Disclaimer from "./Components/Disclaimer";

function App() {
  return (
    <div className="bg-bg text-copy font-body overflow-x-hidden">
      <Hero />
      <WhyChooseUs />
      <Research />
      <Avatars />
      <Pricing />
      <Messengers />
      <Reviews />
      <FAQ />
      <Disclaimer />
    </div>
  );
}

export default App;
