import CounterAnimation from '@/components/CounterAnimation/CounterAnimation';

const numbers = [
  {
    id: 'team-members',
    value: 25,
    fromValue: 0,
    description: 'Team members',
  },
  {
    id: 'year-founded',
    value: 2019,
    fromValue: 2019,
    description: 'Year founded',
  },
  {
    id: 'projects-completed',
    value: 250,
    fromValue: 200,
    description: 'Projects completed',
  },
  {
    id: 'customer-allies',
    value: 25,
    fromValue: 0,
    description: 'Customer allies',
  },
];

function AzollaByNumbers() {
  return (
    <section className='flex flex-col gap-20 lg:gap-10 justify-center items-center lg:flex-row py-10'>
      <div className='w-full lg:w-2/5 text-4xl text-center lg:text-start md:text-start md:text-6xl lg:text-[70px] xl:text-[75px] lg:leading-[1.01] font-semibold'>
        Azolla
        <br /> by numbers
      </div>
      <div className='w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-y-20 md:gap-20 lg:gap-x-0 lg:gap-y-28'>
        {numbers.map((item) => (
          <div key={item.id} className='justify-self-center'>
            <CounterAnimation
              from={item.fromValue}
              to={item.value}
              description={item.description}
              showPlus={!(item.id === 'year-founded')}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default AzollaByNumbers;
