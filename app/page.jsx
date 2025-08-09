import Navbar from "@/src/components/Navbar";
import HeroSection from "@/src/components/HeroSection";
import WhoAreYou from "@/src/components/WhoAreYou";
import Services from "@/src/components/Services";

export const metadata = {
  title: "Cocktail Enjoy - Barman à domicile en Charente-Maritime",
  description: "Prestations barman, professionel et particulier, pour tous vos événements.",
  icons: {
    icon: "/assets/Logo.webp"
  }
};

export default function Home() {
  return (
    <>
      <div className="bg-zinc-100">
          <Navbar />
          <HeroSection />
          <WhoAreYou />
          <Services />
      </div>
    </>
  );
}
