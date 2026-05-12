import { Metadata } from 'next';
import HomePage from '@/_pages/HomePage';
import AboutUsContent from '@/_pages/AboutUs';
import NewFooter from '@/_pages/NewFooter';
// import TextColorRevealOnScroll from '@/utils/TextColorRevealOnScroll';
import NavBar from '@/components/Navbar/index';

export const generateMetadata = (): Metadata => {
  return {
    title: 'About us | Azolla',
    description:
      'Uncover the heart and soul of Azolla. Discover our history, values, and the people shaping our vision.',
    metadataBase: new URL('https://azolla.sg'),
    alternates: {
      canonical: '/about-us'
    },
    openGraph: {
      title: 'About us | Azolla',
      description:
        'Uncover the heart and soul of Azolla. Discover our history, values, and the people shaping our vision.',
      images: [{ url: 'https://azolla.sg/images/azolla-team.webp' }],
      url: 'https://azolla.sg/about-us',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About us | Azolla',
      description:
        'Uncover the heart and soul of Azolla. Discover our history, values, and the people shaping our vision.',
      images: [{ url: 'https://azolla.sg/images/azolla-team.webp' }],
    },
  };
};

const colorChangeText = [
  'We help shipowners and operators to go beyond compliance to make decarbonization a commercial advantage.',
  'Through digital solutions, carbon abatement consulting, and retrofit project management,',
  'Azolla provides structured pathways across the IMO CII, ',
  'EU ETS and FuelEU Maritime to reduce costs, improve efficiency and protect asset value.',
  
];

function AboutUs() {
  return (
    <>
      <NavBar />
      <HomePage type='About us' />
      <div className='bg-black p-10 pr-2 py-14 md:py-20 xl:p-24 text-white !leading-[1.5] text-[2.8vw] lg:text-[2.5vw] font-[400]'>
        {colorChangeText}
      </div>
      <AboutUsContent />
      <NewFooter type='About us' />
    </>
  );
}
export default AboutUs;
