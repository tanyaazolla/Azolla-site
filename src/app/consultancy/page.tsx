import type { Metadata } from 'next';
import NewFooter from '@/_pages/NewFooter';
import TabsAndTestimonials from '@/_pages/TabsAndTestimonials';
import HomePage from '@/_pages/HomePage';
import AzollaAdvantage from '../../_pages/AzollaAdvantage';
import TextColorRevealOnScroll from '@/utils/TextColorRevealOnScroll';
import NavBar from '@/components/Navbar/index';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Decarb Consulting | Azolla',
    description:
      'Identify and evaluate opportunities for optimization, cost reduction, and emissions control',
    metadataBase: new URL('https://azolla.sg'),
    alternates: {
      canonical: '/consultancy'
    },
    openGraph: {
      title: 'Decarb Consulting | Azolla',
      description:
        'Identify and evaluate opportunities for optimization, cost reduction, and emissions control',
      images: [{ url: 'https://azolla.sg/icon.png' }],
      url: 'https://azolla.sg/consultancy',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Decarb Consulting | Azolla',
      description:
        'Identify and evaluate opportunities for optimization, cost reduction, and emissions control',
      images: [{ url: 'https://azolla.sg/icon.png' }],
    },
  };
};

const colorChangeText = [
  "Unlock your vessel's",
  "true potential",
  'with Azolla!',
];

export default function Home() {
  return (
    <>
      <NavBar />
      <HomePage type='Consultancy' />
      <div className='bg-black p-10 pr-5 py-20 xl:px-24 text-white text-responsive-4xl lg:text-[6vw] font-[500] !leading-[1.2]'>
        <TextColorRevealOnScroll text={colorChangeText} />
      </div>
      <TabsAndTestimonials type='Consultancy' />
      <AzollaAdvantage />
      <NewFooter type='Consultancy' />
    </>
  );
}
