'use client'
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import Portfolio from "@/app/ui/Portfolio";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import { Icon } from "@iconify/react";
import { useState } from "react";

const portfolioData = [
  {
    title: 'Sbh Optical',
    subtitle: 'Visit',
    href: 'https://sbhoptical.com.au/',
    src: '/images/sbhoptical.png',
    category: 'web_development',
  },
  {
    title: 'Wet Ownsw',
    subtitle: 'Visit',
    href: 'https://wetownsw.com.au/',
    src: '/images/wetownsw.png',
    category: 'web_development',
  },
  {
    title: 'Kmp Building Solutions',
    subtitle: 'Visit',
    href: 'https://kmpbuildingsolutions.com.au/',
    src: '/images/kmpbuildingsolutions.png',
    category: 'web_development',
  },
  {
    title: 'Smiley Moctail',
    subtitle: 'Visit',
    href: 'https://smileymocktail.com.au/',
    src: '/images/smileymoctail.png',
    category: 'web_development',
  },
  {
    title: 'Road Map',
    subtitle: 'Visit',
    href: '#',
    src: '/images/appOne.png',
    category: 'app_development',
  },
  {
    title: 'Yoga',
    subtitle: 'Visit',
    href: '#',
    src: '/images/appTwo.png',
    category: 'app_development',
  },
  {
    title: 'Movie io',
    subtitle: 'Visit',
    href: '#',
    src: '/images/appThree.png',
    category: 'app_development',
  },
  {
    title: 'Off the Record',
    subtitle: 'Visit',
    href: '#',
    src: '/images/digitalmarketingOne.png',
    category: 'digital_marketing',
  },
  {
    title: 'Fractal',
    subtitle: 'Visit',
    href: '#',
    src: '/images/digitalmarketingTwo.png',
    category: 'digital_marketing',
  },
];
const categoryMenu = [
  {
    title: 'Web Development',
    category: 'web_development',
  },
  {
    title: 'Digital Marketing',
    category: 'digital_marketing',
  },
  {
    title: 'App Development',
    category: 'app_development',
  },
  // {
  //   title: 'SEO',
  //   category: 'seo',
  // },
];

export default function PortfolioPage() {
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(7);

  return (
    <>
      <PageHeading
        title="Portfolio"
        bgSrc="/images/portfolio_hero_bg.jpeg"
        pageLinkText="Portfolio"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title="Some recent work" subtitle="Our Portfolio" />
          <Div className="cs-filter_menu cs-style1">
            <ul className="cs-mp0 cs-center">
              <li className={active === 'all' ? 'active' : ''}>
                <span onClick={() => setActive('all')}>All</span>
              </li>
              {categoryMenu.map((item, index) => (
                <li
                  className={active === item.category ? 'active' : ''}
                  key={index}
                >
                  <span onClick={() => setActive(item.category)}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </Div>
        </Div>
        <Spacing lg="90" md="45" />
        <Div className="row">
          {portfolioData.slice(0, itemShow).map((item, index) => (
            <Div
              className={`${
                index === 3 || index === 6 ? 'col-lg-8' : 'col-lg-4'
              } ${
                active === 'all'
                  ? ''
                  : !(active === item.category)
                  ? 'd-none'
                  : ''
              }`}
              key={index}
            >
              <Portfolio
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
                src={item.src}
                variant="cs-style1 cs-type1"
              />
              <Spacing lg="25" md="25" />
            </Div>
          ))}
        </Div>

        <Div className="text-center">
          {portfolioData.length <= itemShow ? (
            ''
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 3)}
              >
                <span>Load More</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
      <Cta
        title="mTech@gmail.com"
        bgSrc="/images/cta_bg_2.jpeg"
        variant="rounded-0"
      />
    </>
  );
}
