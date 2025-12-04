import StickyScroll from '@/components/StickyScroll/StickyScroll';
import { Records, RecordProps } from '@/components/StickyScroll/Records';

const values: RecordProps[] = [
  {
    title: 'Inclusivity',
    description: `Inclusivity is more than just a word; it's a way of life at Azolla. We create an environment where every team member feels valued, respected, and empowered to be authentic. `,
    icon: '/images/careers/Inclusivity.webp',
  },
  {
    title: 'Diverse Perspectives',
    description: `We believe diversity of thought, background, and experience is the bedrock of innovation. Azolla embraces various perspectives, allowing us to approach challenges from all angles.`,
    icon: '/images/careers/Diverse-Perspective.webp',
  },
  {
    title: 'Gender-Neutral Roles',
    description: `Azolla is committed to creating gender-neutral roles in a field traditionally dominated by one gender. We aim to break down gender stereotypes and create a level playing field for everyone. `,
    icon: '/images/careers/Gender-Neutral.png',
  },
  {
    title: 'Learning and Growth',
    description: `Azolla invests in your personal and professional growth, providing continuous learning and development opportunities regardless of your background or identity.`,
    icon: '/images/careers/Learning-and-growth.png',
  },
  {
    title: 'Empowering All Voices',
    description: `Every voice matters at Azolla. We empower all team members to share their insights and ideas, ensuring no valuable contribution goes unheard of.`,
    icon: '/images/careers/Empowering-all-voices.png',
  },
];
function AzollaBeliefs() {
  return (
    <StickyScroll
      title={
        <>
          Azolla&apos;s <br /> Beliefs
        </>
      }
      customClass='px-10 py-14 md:py-20 xl:pl-24 xl:py-32 2xl:px-24'
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

export default AzollaBeliefs;
