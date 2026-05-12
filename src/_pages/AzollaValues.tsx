import StickyScroll from '@/components/StickyScroll/StickyScroll';
import { RecordProps, Records } from '@/components/StickyScroll/Records';

const values: RecordProps[] = [
  {
    icon: '/images/values/DECARBONIZATION_LEADERSHIP.svg',
    title: 'DECARBONIZATION LEADERSHIP',
    description:
      'We advance practical, scalable decarbonization solutions by combining technical expertise, regulatory insight, and real-world execution to deliver measurable emissions and efficiency outcomes.',
  },
  {
    icon: '/images/values/PROFITABLE_SUSTAINABILITY.svg',
    title: 'PROFITABLE SUSTAINABILITY',
    description:
      'We integrate sustainability with commercial performance, ensuring that every decarbonization initiative contributes to cost optimisation, operational efficiency, and long-term asset value.',
  },
  {
    icon: '/images/values/MARITIME_STEWARDSHIP.svg',
    title: 'MARITIME STEWARDSHIP',
    description:
      'We support responsible maritime operations by aligning environmental performance with industry best practices, helping safeguard ecosystems while enabling sustainable industry growth.',
  },
  {
    icon: '/images/values/RESILIENCE_FOR_TOMORROW.svg',
    title: 'RESILIENCE FOR TOMORROW',
    description:
      "We strengthen maritime businesses' ability to adapt to regulatory, environmental, and market shifts through forward-looking strategies and future-ready solutions.",
  },
  {
    icon: '/images/values/VISIONARY_BELIEF.svg',
    title: 'OUTCOME-LED PARTNERSHIP',
    description:
      'We work alongside our customers to deliver tangible results, combining strategic advisory with execution and accountability. Our focus is not only on defining decarbonization pathways, but on delivering outcomes that create lasting operational and commercial impact.',
  },
];

const AzollaValues = () => {
  return (
    <StickyScroll
      title={
        <>
          How We <br />
         Create Value
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
