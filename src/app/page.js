import DoctorsSection from "@/components/doctorsSection";
import HeroSection from "@/components/heroSection";

export default function Home() {
  return (
    <div className="container mx-auto min-h-screen">
      <HeroSection />
      <DoctorsSection/>
    </div>
  );
};  