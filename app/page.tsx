import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MatchBar from "@/components/MatchBar";
import MatchSchedule from "@/components/MatchSchedule";
import ActionBanners from "@/components/ActionBanners";
import { SponsorAd } from "@/components/SponsorAd";
import TVTimba from "@/components/TVTimba";
import History from "@/components/History";
import TrophyGallery from "@/components/TrophyGalery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-nautico-light">
      <Header />
      <div className="mt-[-40px]"> 
        <MatchBar />
        <Hero />
        <SponsorAd />
        <MatchSchedule />
        <SponsorAd />
        <TVTimba />
        <History />
        <TrophyGallery />
        <SponsorAd />
        <ActionBanners />
        <Footer />
      </div>
    </main>
  );
}