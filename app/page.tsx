import Airtag from "@/components/Airtag";
import Cta from "@/components/CTA";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import RealtimeTracking from "@/components/RealtimeTracking";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <RealtimeTracking />
      <Airtag />
      <Cta />
    </main>
  );
}
