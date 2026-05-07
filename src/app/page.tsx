"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="largeSmall"
        background="noise"
        cardStyle="inset"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "About", id: "#about" },
        { name: "Services", id: "#services" },
        { name: "Metrics", id: "#metrics" },
        { name: "Testimonials", id: "#testimonials" },
        { name: "FAQ", id: "#faq" },
        { name: "Contact", id: "#contact" },
      ]}
      brandName="CJ Private Resort"
      button={{
        text: "Book Now",        href: "#contact"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{ variant: "radial-gradient" }}
      title="Escape to CJ Private Resort"
      description="Experience unparalleled luxury and serenity in your own private sanctuary."
      buttons={[{ text: "Explore Stays", href: "#about" }]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        { type: "text", content: "A Haven of Relaxation" },
        { type: "image", src: "https://img.b2bpic.net/free-photo/luxurious-resort-with-pool_1150-17551.jpg", alt: "Private Resort" },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardSix
      textboxLayout="inline-image"
      useInvertedBackground={true}
      features={[
        { title: "Private Pool", description: "Exclusive access to crystal clear waters.", imageSrc: "https://img.b2bpic.net/free-photo/swimming-pool_1150-2556.jpg" },
        { title: "Spa Services", description: "Unwind with world-class wellness treatments.", imageSrc: "https://img.b2bpic.net/free-photo/spa-treatment_1150-2647.jpg" },
        { title: "Gourmet Dining", description: "Fine dining prepared by private chefs.", imageSrc: "https://img.b2bpic.net/free-photo/gourmet-meal_1150-2720.jpg" }
      ]}
      title="Exclusive Resort Amenities"
      description="Tailored experiences designed for your comfort."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      useInvertedBackground={false}
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      metrics={[
        { id: "1", value: "10+", description: "Acres of Paradise" },
        { id: "2", value: "500+", description: "Satisfied Guests" },
        { id: "3", value: "5", description: "Luxury Villas" }
      ]}
      title="Resort Highlights"
      description="The numbers behind our excellence."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        { id: "1", name: "Jane Doe", handle: "@janedoe", testimonial: "The most relaxing stay of my life!" },
        { id: "2", name: "John Smith", handle: "@jsmith", testimonial: "Perfect service and stunning views."}
      ]}
      title="Guest Experiences"
      description="What our visitors are saying."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      useInvertedBackground={false}
      textboxLayout="default"
      faqs={[
        { id: "1", title: "Is check-in flexible?", content: "Yes, we accommodate early check-ins upon request." },
        { id: "2", title: "Do you host events?", content: "Absolutely, we offer full event planning services." }
      ]}
      title="Frequently Asked Questions"
      description="Everything you need to know about your stay."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{ variant: "radial-gradient" }}
      tag="Contact Us"
      title="Plan Your Private Retreat"
      description="Get in touch with us to start your booking process."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="CJ Private Resort"
      columns={[
          { title: "Resort", items: [{ label: "About Us", href: "#about" }, { label: "Amenities", href: "#services" }] },
          { title: "Contact", items: [{ label: "Inquiries", href: "#contact" }, { label: "Events", href: "#faq" }] }
      ]}
      copyrightText="© 2025 CJ Private Resort. Tropical Oasis Edition."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}