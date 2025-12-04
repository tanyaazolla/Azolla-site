import { Metadata } from 'next';
import HomePage from '@/_pages/HomePage';
import AboutUsContent from '@/_pages/AboutUs';
import NewFooter from '@/_pages/NewFooter';
import TextColorRevealOnScroll from '@/utils/TextColorRevealOnScroll';
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
  'Our mission at Azolla',
  'is to help companies',
  'leverage business and',
  'unlock value through',
  'decarbonization.',
];

function AboutUs() {
  return (
    <>
      <NavBar />
      <HomePage type='About us' />
      <div className='bg-black p-10 pr-2 py-14 md:py-20 xl:p-24 text-white !leading-[1.2] text-[7.8vw] lg:text-[6.5vw] font-[500]'>
        <TextColorRevealOnScroll text={colorChangeText} />
      </div>
      <AboutUsContent />
      <NewFooter type='About us' />
    </>
  );
}
export default AboutUs;
