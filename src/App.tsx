import GlobalBackground from "@/Components/GlobalBackground";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import WhyMaite from "@/Components/WhyMaite";
import Surveys from "@/Components/Surveys";
import Avatars from "@/Components/Avatars";
import Plans from "@/Components/Plans";
import Messengers from "@/Components/Messengers";
import FAQ from "@/Components/FAQ";
import Footer from "@/Components/Footer";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <GlobalBackground />
      <Header />
      <Hero />
      <WhyMaite />
      <Surveys />
      <Avatars />
      <Plans />
      <Messengers />
      <FAQ />
      <Footer />
    </main>
  );
}
