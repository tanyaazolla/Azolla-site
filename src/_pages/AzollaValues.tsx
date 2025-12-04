import StickyScroll from '@/components/StickyScroll/StickyScroll';
import { RecordProps, Records } from '@/components/StickyScroll/Records';

const values: RecordProps[] = [
  {
    icon: '/images/values/DECARBONIZATION_LEADERSHIP.svg',
    title: 'DECARBONIZATION LEADERSHIP',
    description:
      'Decarbonization is at the heart of our mission. We lead by example, pushing the boundaries of reducing carbon emissions across the maritime sector and beyond.',
  },
  {
    icon: '/images/values/PROFITABLE_SUSTAINABILITY.svg',
    title: 'PROFITABLE SUSTAINABILITY',
    description:
      'We firmly believe that sustainability and profitability coexist. Our solutions not only reduce carbon footprints but also enhance the economic viability of maritime operations.',
  },
  {
    icon: '/images/values/MARITIME_STEWARDSHIP.svg',
    title: 'MARITIME STEWARDSHIP',
    description:
      'We are guardians of the oceans and waterways. Our commitment to maritime stewardship means we take every action to protect these vital ecosystems while ensuring the sustainable growth of the marine industry.',
  },
  {
    icon: '/images/values/RESILIENCE_FOR_TOMORROW.svg',
    title: 'RESILIENCE FOR TOMORROW',
    description:
      "We envision a resilient future for the maritime industry. Our initiatives and values reflect our dedication to strengthening the industry's capacity to adapt to a changing climate and evolving challenges.",
  },
  {
    icon: '/images/values/VISIONARY_BELIEF.svg',
    title: 'VISIONARY BELIEF',
    description:
      'Our vision of a decarbonized future is an aspiration and an achievable reality. With unwavering faith in our mission, we are confident that we can shape a future where decarbonization drives positive change.',
  },
];

const AzollaValues = () => {
  return (
    <StickyScroll
      title={
        <>
          Azolla <br />
          by values
        </>
      }
      titlecustomClass='pb-8'
    >
      <div className='pt-10 md:pt-0 flex flex-col space-y-responsive-xl md:space-y-responsive-3xl'>
        {values.map((content) => {
          return (
            <Records
              key={content.title}
              title={content.title}
              icon={content.icon}
              description={content.description}
            />
          );
        })}
      </div>
    </StickyScroll>
  );
};

export default AzollaValues;
