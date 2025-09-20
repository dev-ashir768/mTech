import React from "react";
import Div from "../Div";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import MenuWidget from "../Widget/MenuWidget";
import Newsletter from "../Widget/Newsletter";
import SocialWidget from "../Widget/SocialWidget";
import TextWidget from "../Widget/TextWidget";

const copyrightLinks = [
  {
    title: "Terms of Use",
    href: "/",
  },
  {
    title: "Privacy Policy",
    href: "/",
  },
];

const serviceMenu = [
  {
    title: "Digital Marketing",
    href: "/service",
  },
  {
    title: "Website Development",
    href: "/service",
  },
  {
    title: "App Development",
    href: "/service",
  },
  {
    title: "Search Engine Optimization",
    href: "/service",
  },
];

const date = new Date().getFullYear();

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <TextWidget
                  logoSrc="/images/hanzak_logo.png"
                  logoAlt="Logo"
                  text="Empowering your brand with innovative strategies and results-driven solutions."
                />
                <SocialWidget />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading="Services" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title="Contact Us" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <Newsletter
                  title="Subscribe"
                  subtitle="Have a project in mind?
Stay connected with us!"
                  placeholder="mTech@gmail.com"
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer" style={{ justifyContent: "center" }}>
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">Copyright © {`${date}`} Haz-Zak.</Div>
          </Div>
          {/* <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant=" cs-style2" />
          </Div> */}
        </Div>
      </Div>
    </footer>
  );
}
