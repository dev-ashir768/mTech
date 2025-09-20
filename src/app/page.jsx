"use client";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import FunFact2 from "@/app/ui/FunFact/FunFact2";
import Hero5 from "@/app/ui/Hero/Hero5";
import LogoList from "@/app/ui/LogoList";
import MovingText from "@/app/ui/MovingText";
import SectionHeading from "@/app/ui/SectionHeading";
import ServiceList from "@/app/ui/ServiceList";
import PortfolioSlider2 from "@/app/ui/Slider/PortfolioSlider2";
import TestimonialSlider from "@/app/ui/Slider/TestimonialSlider";
import Spacing from "@/app/ui/Spacing";
import VideoModal from "@/app/ui/VideoModal";
import PricingTableList from "@/app/ui/PricingTable/PricingTableList";

const heroSocialLinks = [
  {
    name: "Linkedin",
    links: "#",
  },
  {
    name: "Instagram",
    links: "#",
  },
  {
    name: "Facebook",
    links: "#",
  },
];
const funfaceData = [
  {
    title: "Digital products",
    factNumber: "10",
  },
  {
    title: "Global happy clients",
    factNumber: "60",
  },
  {
    title: "Project completed",
    factNumber: "10",
  },
  {
    title: "Team members",
    factNumber: "10",
  },
];

export default function MarketingAgencyHome() {
  return (
    <>
      <Hero5
        title="Where Creativity <br /> Meets Code"
        subtitle="Your Brand, Our Code – mTech Leads Your Digital Evolution by Blending Innovation, Technology, and Growth-Driven Strategies."
        btnLink="contact"
        btnText="Let’s talk"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
      />

      <Div className="cs-video_block_1_wrap">
        <Div className="container">
          <VideoModal videoSrc="/video/intro.mp4" />
        </Div>
      </Div>

      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Our core services"
          subtitle="Services"
          variant="cs-style1 text-center"
        />
        <Spacing lg="70" md="45" />
        <ServiceList />
      </Div>

      <Spacing lg="120" md="50" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 cs-line_height_4">
          Innovative Campaigns, Tangible Results – Explore Our Work and See How
          We Deliver Impact.
        </h2>
      </Div>
      <Spacing lg="90" md="70" />
      <PortfolioSlider2 />

      <Spacing lg="150" md="80" />
      <Div className="container">
        <FunFact2
          data={funfaceData}
          variant="cs-no_shadow"
          bgUrl="/images/funfact_shape_bg.svg"
        />
      </Div>
      {/* <Spacing lg="145" md="80" /> */}

      {/* <Div className="container">
        <SectionHeading
          title="Providing Effective <br/> Solutions at the best price"
          subtitle="Pricing"
        />
        <Spacing lg="85" md="40" />
        <PricingTableList />
      </Div> */}
      <Spacing lg="65" md="55" />

      <MovingText text="More than a vendor, a trusted mTech." />
      <Spacing lg="100" md="70" />

      <Div className="container">
        <Cta
          title="Ready to speak with a <i>coding</i> <br /> expert? Give me a ring"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg_2.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
