'use client';

import { useState } from 'react';
import Carousel from '@/components/Carousel/Carousel';
import ArticleCard from '@/components/ArticleCard/ArticleCard';
import Link from 'next/link';
import { Blogs } from '@/types/blog';
import { STRAPI_BASE_URL } from '@/utils/baseUrl';

function CaseStudies({ blogsDetails }: { blogsDetails: Blogs }) {
  const [activeIndex, setActiveIndex] = useState<number | null>();

  return (
    <div className='xl:py-32 py-20 flex justify-center items-center'>
      <div className='w-full flex flex-col gap-10 xl:gap-16'>
        <h1 className='px-10 xl:px-24 font-medium leading-[1.02] md:text-[4rem] sm:text-[3rem] xxs:text-[2.25rem] text-[1.75rem] lg:text-responsive-4xl'>
          Transformative <br /> customer stories
        </h1>
        <Carousel>
          {blogsDetails.data.map((caseStudy, index) => {
            const { image, customerLogo, slug, type } = caseStudy.attributes;
            if (caseStudy.attributes.articleCardInfo) {
              const { title, category } = caseStudy.attributes.articleCardInfo;
              return (
                <Link
                  key={slug}
                  onMouseOver={() => setActiveIndex(index)}
                  onMouseOut={() => setActiveIndex(null)}
                  className='p-2 snap-center first-of-type:pl-10 xl:first-of-type:pl-24 '
                  href={`/${type}/${slug}`}
                >
                  <ArticleCard
                    id={slug}
                    title={title}
                    category={category}
                    image={STRAPI_BASE_URL + image?.data?.attributes?.url || ''}
                    isActive={activeIndex === index}
                    bottomIcon={
                      (customerLogo.data &&
                        STRAPI_BASE_URL +
                          customerLogo?.data?.attributes?.url) ||
                      ''
                    }
                  />
                </Link>
              );
            }
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default CaseStudies;
