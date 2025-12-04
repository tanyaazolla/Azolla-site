import StickyScroll from '@/components/StickyScroll/StickyScroll';
import { Records, RecordProps } from '@/components/StickyScroll/Records';

const values: RecordProps[] = [
  {
    title: 'Accurate Estimation & Efficient Implementation',
    description:
      'Azolla promises to provide precise estimates and efficient implementation, ensuring that decisions are informed, and your decarbonization initiatives are executed smoothly without unnecessary delays.',
    icon: '/images/promise/efficient-accurate.png',
  },
  {
    title: 'Impartiality Assurance',
    description:
      'As an unbiased third-party consultant, our recommendations are not bound by internal biases or affiliations, ensuring our guidance is impartial and tailored to your goals.',
    icon: '/images/promise/impartiality-assurance.png',
  },
  {
    title: 'Data Privacy Assurance',
    description:
      'Azolla takes data privacy seriously, ensuring your data remains safe and secure while we work together to achieve your decarbonization objectives.',
    icon: '/images/promise/data-privacy-assurance.png',
  },
  {
    title: 'Humane Approach',
    description:
      'We understand that this critical mission affects the environment and countless individuals who depend on the maritime industry. We promise to lead the way with compassion, empathy, and sustainability in reducing emissions and protecting our oceans.',
    icon: '/images/promise/humane-approach.png',
  },
];

function AzollaPromise() {
  return (
    <StickyScroll
      title={
        <>
          The Azolla <br />  Promise
        </>
      }
      customClass='px-10 py-14 md:py-20 xl:pl-24 xl:py-32 2xl:px-24 bg-promise_bg'
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
}

export default AzollaPromise;
