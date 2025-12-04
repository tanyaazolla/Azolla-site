import { StrapiImage } from '@/types/blog';
import Quote from './Quote';
import { STRAPI_BASE_URL } from '@/utils/baseUrl';

async function getQuotes() {
  const res = await fetch(
    `${STRAPI_BASE_URL}/api/community-quotes?populate=*`,
    { cache: 'no-cache' }
  );
  if (!res.ok) {
    return null;
  } else {
    const response = await res.json();
    return response.data;
  }
}

interface TypeQuote {
  id: number;
  attributes: {
    name: string;
    quote: string;
    image: StrapiImage;
  };
}

async function CommunityQuotes() {
  const quotes: TypeQuote[] = await getQuotes();
  return (
    <>
      {quotes?.length > 0 && (
        <div className='bg-promise_gray flex flex-col lg:flex-row gap-10 md:gap-20 xl:gap-0 px-10 py-14 md:p-20 xl:px-24 xl:py-32'>
          <div className='w-full self-center xl:self-start lg:w-1/3 text-responsive-xl font-bold leading-[1.2]'>
            At Azolla, we hold a substantial value for both people and their
            individual purposes, as well as our collective aspirations. Our
            community ranges from ages 23 to 49.
          </div>
          <div className='w-full lg:w-2/3 flex flex-col gap-10'>
            {quotes.slice(0, 2).map((item) => {
              const { name, quote, image } = item.attributes;
              return (
                <Quote
                  key={item.id}
                  image={image.data ? image?.data?.attributes?.url : ''}
                  name={name}
                  quote={quote}
                  className='odd:self-start even:self-end xl:odd:self-center xl:even:self-end'
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default CommunityQuotes;
