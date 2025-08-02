import Navbar from "@/src/components/Navbar";

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
      <Navbar />
    </>
  );
}
