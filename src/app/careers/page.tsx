import { Metadata } from 'next';
import NavBar from '@/components/Navbar/index';
import HomePage from '@/_pages/HomePage';
import AzollaBeliefs from '@/_pages/AzollaBeliefs';
import NewFooter from '@/_pages/NewFooter';
import CommunityQuotes from '@/_pages/CommunityQuotes';
import JobOpenings from '@/_pages/JobOpenings';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Careers | Azolla',
    description: 'Join us for our mission from around the world.',
    metadataBase: new URL('https://azolla.sg'),
    alternates: { 
      canonical: '/careers'
    },
    openGraph: {
      title: 'Careers | Azolla',
      description: 'Join us for our mission from around the world.',
      images: [{ url: 'https://azolla.sg/icon.png' }],
      url: 'https://azolla.sg/careers',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Careers | Azolla',
      description: 'Join us for our mission from around the world.',
      images: [{ url: 'https://azolla.sg/icon.png' }],
    },
  };
};

function Careers() {
  return (
    <>
      <NavBar />
      <HomePage type='Careers' />
      <CommunityQuotes />
      <AzollaBeliefs />
      <JobOpenings />
      <NewFooter type='Careers' />
    </>
  );
}

export default Careers;
