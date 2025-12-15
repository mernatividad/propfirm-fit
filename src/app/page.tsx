import FeaturedFirmsSection from "@/components/FeaturedFirmsSection";
import HeroSection from "../components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TrustMethodologySection from "@/components/TrustMethodologySection";
import ReviewsAndBlogSection from "@/components/ReviewsAndBlogSection";
import NewsletterSection from "@/components/NewsletterSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedFirmsSection />
      <HowItWorksSection />
      <TrustMethodologySection />
      <ReviewsAndBlogSection />
      <NewsletterSection />
    </>
  );
}
