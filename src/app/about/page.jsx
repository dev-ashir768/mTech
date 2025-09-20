"use client";
import Image from "next/image";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import FunFact2 from "@/app/ui/FunFact/FunFact2";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";

const funfaceData = [
  {
    title: "Digital products",
    factNumber: "10",
  },
  {
    title: "Global happy clients",
    factNumber: "100",
  },
  {
    title: "Project completed",
    factNumber: "20",
  },
  {
    title: "Team members",
    factNumber: "15",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="About Us"
        bgSrc="/images/about_hero_bg.jpeg"
        pageLinkText="About Us"
      />

      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="We combine customer data with thoughtful work"
              subtitle="About Our Agency"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Welcome to mTech! We're a team of trained professionals who help
                clients from all over the United Kingdom. Our goal is to provide
                top notch services including digital solution, web development,
                app development and SEO. Our services deliver on every front
                without breaking the bank. We’re all about mastering our craft,
                telling compelling stories, and creating content that people
                love.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <Image
              src="/images/about_img_1.jpeg"
              alt="About"
              width={800}
              height={800}
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-7">
            <Image
              src="/images/about_img_2.jpeg"
              alt="About"
              width={800}
              height={800}
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-5">
            <Image
              src="/images/about_img_3.jpeg"
              alt="About"
              width={800}
              height={800}
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* End About Section */}

      {/* Start Fun Fact Section */}
      <Div className="container">
        <FunFact2
          title="My Supermacy"
          subtitle="Your Brand, Our Code – mTech Leads Your Digital Evolution by Blending Innovation, Technology, and Growth-Driven Strategies."
          data={funfaceData}
        />
      </Div>
      {/* End Fun Fact Section */}

      {/* Start Why Choose Section */}
      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <Image
                  src="/images/about_img_4.jpeg"
                  alt="About"
                  width={800}
                  height={800}
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <SectionHeading
              title="We turn customer data into impactful strategies."
              subtitle="Why Choose Us"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                At mTech, we blend customer insights with creativity to deliver
                effective, affordable digital solution. We help businesses
                across United Kingdom grow with engaging stories, captivating
                content, and result-driven strategies
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                What sets us apart? We prioritize understanding your brand and
                crafting tailored strategies that deliver real results. At
                mTech, we provide creative and effective solutions, helping your
                business grow without the hefty price tag.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* End Why Choose Section */}

      {/* Start CTA Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Ready to speak with a <i>coding</i> <br /> expert? Give me a ring"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
