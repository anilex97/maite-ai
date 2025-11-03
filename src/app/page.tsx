import GlobalBackground from "@/components/GlobalBackground";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyMaite from "@/components/WhyMaite";
import Surveys from "@/components/Surveys";
import Avatars from "@/components/Avatars";
import Plans from "@/components/Plans";
import Messengers from "@/components/Messengers";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

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
