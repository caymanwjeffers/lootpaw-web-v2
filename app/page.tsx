import Airtag from "@/components/landing/Airtag";
import Cta from "@/components/landing/CTA";
import Features from "@/components/landing/Features";
import Hero from "@/components/landing/Hero";
import RealtimeTracking from "@/components/landing/RealtimeTracking";

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
