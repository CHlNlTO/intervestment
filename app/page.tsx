import { Navbar } from "@/components/layout/navbar";
import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "Intervestment - Track your investments",
  description: "Intervestment is a platform to track your manual investments",
  openGraph: {
    type: "website",
    url: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Intervestment - Track your investments",
    description: "Intervestment is a platform to track your manual investments",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "Intervestment - Track your investments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Intervestment - Track your investments",
    description: "Intervestment is a platform to track your manual investments",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <>
        <HeroSection />
        <SponsorsSection />
        <BenefitsSection />
        <FeaturesSection />
        <ServicesSection />
        <TestimonialSection />
        <TeamSection />
        <CommunitySection />
        <PricingSection />
        <ContactSection />
        <FAQSection />
        <FooterSection />
      </>
    </>
  );
}
