import type { Metadata } from 'next';
import TabsAndTestimonials from '@/_pages/TabsAndTestimonials';
import NewFooter from '@/_pages/NewFooter';
import AzollaAdvantageForProjectManagement from '../../_pages/AzollaAdvantageForProjectManagement';
import HomePage from '@/_pages/HomePage';
import TrackRecord from '@/_pages/TrackRecord';
import TextColorRevealOnScroll from '@/utils/TextColorRevealOnScroll';
import NavBar from '@/components/Navbar/index';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Project Management | Azolla',
    description:
      'Executing transformative decarbonization measures with precision and excellence',
    metadataBase: new URL('https://azolla.sg'),
    alternates: {
      canonical: '/project-management'
    },
    openGraph: {
      title: 'Project Management | Azolla',
      description:
        'Executing transformative decarbonization measures with precision and excellence',
      images: [{ url: 'https://azolla.sg/icon.png' }],
      type: 'website',
      url: 'https://azolla.sg/project-management',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Project Management | Azolla',
      description:
        'Executing transformative decarbonization measures with precision and excellence',
      images: [{ url: 'https://azolla.sg/icon.png' }],
    },
  };
};

const colorChangeText = [
  'Turn challenges into',
  'stepping stones with',
  'Azolla’s turnkey projects.',
];

function ProjectManagement() {
  return (
    <>
      <NavBar />
      <HomePage type='Project Management' />
      <div className='bg-black p-10 pr-0 py-20 xl:px-24 text-white text-responsive-4xl md:text-[6.5vw] font-[500] !leading-[1.2]'>
        <TextColorRevealOnScroll text={colorChangeText} />
      </div>
      <TabsAndTestimonials type='Project Management' />
      <TrackRecord />
      <AzollaAdvantageForProjectManagement />
      <NewFooter type='Project Management' />
    </>
  );
}

export default ProjectManagement;
