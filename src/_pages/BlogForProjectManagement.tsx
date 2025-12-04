import Button from '@/components/Button/Button';
import { Image } from '@nextui-org/react';
import { STRAPI_BASE_URL } from '@/utils/baseUrl';
import { useState, useEffect } from 'react';
import { StrapiImage } from '@/types/blog';

interface Data {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  image: StrapiImage;
  chip: {
    keypoint: string;
    description: string;
    image: StrapiImage;
  }[];
}

const defaultValue = {
  buttonLink:
    'http://52.77.247.161/blog/arcelor-mittal-tracking-efficiency-post-propeller-retrofit',
  buttonText: 'Read customer success story',
  chip: [
    {
      id: 1,
      keypoint: '18.45',
      description: ' Savings Potential (%)',
      image: { data: null },
    },
    {
      id: 2,
      keypoint: '1963',
      description: 'CO2 Reduction (MT)',
      image: { data: null },
    },
    {
      id: 3,
      keypoint: '2.7',
      description: 'Payback Period (YRS)',
      image: { data: null },
    },
  ],
  image: { data: null },
  subtitle: "Azolla's Decarbonization Success with Arcelor Mittal",
  title: 'Steel-Powered Sustainability:',
};

async function getDetails() {
  const res = await fetch(
    `${STRAPI_BASE_URL}/api/project-managements?populate[0]=image&populate[1]=chip.image`,
    { cache: 'no-cache' }
  );
  const response = await res.json();
  return response;
}
function BlogForProjectManagement() {
  const [details, setDetails] = useState<Data>();

  useEffect(() => {
    (async () => {
      const response = await getDetails();
      if (response?.data && response.data.length > 0) {
        setDetails(response.data[0].attributes);
      } else {
        setDetails(defaultValue);
      }
    })();
  }, []);

  return (
    <>
      {details && (
        <div className='w-full flex-grow-0 border shadow-lg rounded-md'>
          <Image
            radius='none'
            src={
              details.image.data
                ? STRAPI_BASE_URL + details.image?.data?.attributes.url
                : '/images/ship-project.webp'
            }
            alt='Ship Project'
            classNames={{
              wrapper: '!max-w-full',
              img: 'w-full rounded-t-lg',
            }}
          />
          <div className='px-5 md:px-10 py-14 xl:pt-20 gap-10 flex flex-col items-start'>
            <div className='w-full text-4xl font-bold'>
              {details.title}{' '}
              <span className='text-[30px] font-medium'>
                {details.subtitle}
              </span>
            </div>
            <div className='w-full flex flex-col md:flex-row md:justify-center gap-10'>
              {details.chip.map((chip: any, index: any) => {
                return (
                  <div
                    key={index}
                    className='flex gap-4 md:flex-col items-center'
                  >
                    <Image
                      src={STRAPI_BASE_URL + chip.image?.data?.attributes.url}
                      alt={chip.description}
                      width={60}
                      height={60}
                    />
                    <div className='text-start md:text-center'>
                      <h1 className='text-2xl font-bold'>{chip.keypoint}</h1>
                      <p className='uppercase'>{chip.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='flex justify-start md:justify-center items-center p-10 pt-0'>
            <Button
              label={details.buttonText || 'Read customer success story'}
              variant='tertiary'
              customClass='border border-azolla_blue font-bold'
              href={
                details.buttonLink ||
                '/blog/arcelor-mittal-tracking-efficiency-post-propeller-retrofit'
              }
            />
          </div>
        </div>
      )}
    </>
  );
}

export default BlogForProjectManagement;
