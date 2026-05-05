"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterCard from '@/components/sections/footer/FooterCard';
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
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Willy's Rock"
      button={{
        text: "Book Now",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "radial-gradient",
      }}
      title="Willy's Rock: Premium Cleaning Services"
      description="Experience the gold standard of home and office cleanliness. We bring professional care to every corner."
      buttons={[
        {
          text: "Book Your Clean",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/man-washing-windows-using-spray-detergent_1303-30947.jpg"
      imageAlt="Professional cleaning services in action"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/view-professional-cleaning-service-person-holding-supplies_23-2150520607.jpg",
          alt: "Cleaner 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/professional-cleaning-service-person-cleaning-office-window_23-2150520582.jpg",
          alt: "Cleaner 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/view-professional-cleaning-service-person-holding-supplies_23-2150520593.jpg",
          alt: "Cleaner 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/professional-cleaning-service-person-using-steam-cleaner-office_23-2150520635.jpg",
          alt: "Cleaner 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-cleaning-guy-wearing-uniform-cap-holding-rag-with-cleaning-agent-isolated-white-wall_141793-121676.jpg",
          alt: "Cleaner 5",
        },
      ]}
      avatarText="Trusted by 1,500+ happy clients"
      marqueeItems={[
        {
          type: "text",
          text: "Eco-Friendly Cleaning",
        },
        {
          type: "text",
          text: "100% Satisfaction Guaranteed",
        },
        {
          type: "text",
          text: "Professional Staff",
        },
        {
          type: "text",
          text: "Flexible Scheduling",
        },
        {
          type: "text",
          text: "Premium Care",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Our Mission for Your Space",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/group-volunteers-pointing-front-them_23-2148687293.jpg",
          alt: "Cleaning team",
        },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardSix
      textboxLayout="inline-image"
      useInvertedBackground={true}
      features={[
        {
          title: "Deep Residential Cleaning",
          description: "Comprehensive top-to-bottom cleaning for your entire home.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-servant-doing-chores-around-house_23-2149508098.jpg",
        },
        {
          title: "Eco-Friendly Supplies",
          description: "Green cleaning solutions safe for family, pets, and the planet.",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-eco-friendly-cleaning-brushes-with-ablution_23-2148818466.jpg",
        },
        {
          title: "Seamless Scheduling",
          description: "Easy online booking and flexible timing for your busy life.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-pretty-woman-use-phone-laptop-sitting-bed_231208-13827.jpg",
        },
        {
          title: "Office Sanitation",
          description: "Keeping your workspace productive and hygienic.",
          imageSrc: "http://img.b2bpic.net/free-photo/hand-cleaning_23-2148104601.jpg",
        },
        {
          title: "Move-In Deep Clean",
          description: "Get a fresh start in your new home.",
          imageSrc: "http://img.b2bpic.net/free-photo/housewife-cleaning-dust-tv-stand-living-room_482257-78.jpg",
        },
      ]}
      title="Our Specialized Cleaning Services"
      description="We offer a wide range of tailored cleaning solutions to meet your specific needs."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "1,500+",
          description: "Homes Sparkling Clean",
        },
        {
          id: "m2",
          value: "98%",
          description: "Customer Satisfaction Rate",
        },
        {
          id: "m3",
          value: "25",
          description: "Expert Cleaners On Staff",
        },
      ]}
      title="Our Impact at a Glance"
      description="Numbers that reflect our commitment to excellence."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Sarah Miller",
          handle: "@sarah_m",
          testimonial: "Willy's Rock completely transformed our apartment. So reliable!",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-checking-flowers-home-kitchen-using-tablet-pc_482257-8658.jpg",
        },
        {
          id: "2",
          name: "James Henderson",
          handle: "@jh_consult",
          testimonial: "The best office cleaning we've had in years. Professional and fast.",
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-with-laptop-looks-camera_482257-120283.jpg",
        },
        {
          id: "3",
          name: "Elena Rodriguez",
          handle: "@elena_rod",
          testimonial: "I love coming home after a Willy's Rock clean. Truly excellent.",
          imageSrc: "http://img.b2bpic.net/free-photo/home-cooking-attentive-middleaged-man-casual-clothes-touching-oven-control-panel-kitchen_259150-59233.jpg",
        },
        {
          id: "4",
          name: "David Wu",
          handle: "@dwu_design",
          testimonial: "Exceptional attention to detail. Highly recommend their eco-cleaning.",
          imageSrc: "http://img.b2bpic.net/free-photo/american-colors-household-decorations-independence-day-celebration_23-2151469809.jpg",
        },
        {
          id: "5",
          name: "Linda Peterson",
          handle: "@linda_p",
          testimonial: "The staff are so friendly and efficient. Always on time.",
          imageSrc: "http://img.b2bpic.net/free-photo/middle-age-couple-standing-together-doing-ok-gesture-with-hand-smiling-eye-looking-through-fingers-with-happy-face_839833-32832.jpg",
        },
      ]}
      title="What Our Clients Say"
      description="Don't just take our word for it—hear from the families and businesses we serve."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Are your cleaning supplies safe?",
          content: "Yes, we prioritize non-toxic, eco-friendly products that are safe for pets and children.",
        },
        {
          id: "f2",
          title: "Do I need to be home?",
          content: "Not at all. Many of our clients provide secure access, and we handle the rest.",
        },
        {
          id: "f3",
          title: "How do I book a session?",
          content: "You can book directly through our website or give us a quick call.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Have questions? We've got answers."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient",
      }}
      tag="Get in touch"
      title="Ready for a Sparkle?"
      description="Contact us today for a free estimate tailored to your home or office."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Willy's Rock"
      copyrightText="© 2025 Willy's Rock Cleaning. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
