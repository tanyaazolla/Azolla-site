import NewFooter from '@/_pages/NewFooter';
import NavBar from '@/components/Navbar/index';
import BlogTemplate from '@/_pages/BlogTemplate';
import { notFound } from 'next/navigation';
import { STRAPI_BASE_URL } from '@/utils/baseUrl';
import { BlogInfo, Blogs } from '@/types/blog';

async function getBlogInfo(slug: string, type: string) {
  const res = await fetch(
    `${STRAPI_BASE_URL}/api/blogs?filters[type]=${type}&filters[slug]=${slug}&populate=image,impacts,customer,section,customerLogo,articleCardInfo,footerDetails,bannerColor&populate=customer.image`,
    { cache: 'no-cache' }
  ).then((res) => {
    if (!res.ok) {
      notFound();
    }
    return res;
  });
  const response = await res.json();
  return response;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string; type: string };
}) {
  const res = await fetch(
    `${STRAPI_BASE_URL}/api/blogs?filters[type]=${params.type}&filters[slug]=${params.slug}&populate=*`
  );
  const response: Blogs = await res.json();
  const blogDetails: BlogInfo | null =
    response?.data?.length > 0 ? response?.data[0]?.attributes : null;
  return {
    title: blogDetails?.title,
    description: blogDetails?.subTitle,
    metadataBase: new URL('https://azolla.sg'),
    alternates: {
      canonical: `/${blogDetails?.type}/${blogDetails?.slug}`
    },
    openGraph: {
      title: blogDetails?.title,
      description: blogDetails?.subTitle,
      images: [
        { url: STRAPI_BASE_URL + blogDetails?.image.data?.attributes.url },
      ],
      url: `https://azolla.sg/${blogDetails?.type}/${blogDetails?.slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: blogDetails?.title,
      description: blogDetails?.subTitle,
      images: [
        { url: STRAPI_BASE_URL + blogDetails?.image.data?.attributes.url },
      ],
    },
  };
}

export default async function Page({
  params,
}: {
  params: { slug: string; type: string };
}) {
  const response = await getBlogInfo(params.slug, params.type);
  const blogInfo: BlogInfo = response?.data[0]?.attributes;

  if (response?.data?.length === 0) {
    notFound();
  }

  return (
    <>
      {response?.data?.length > 0 && (
        <>
          <NavBar />
          <BlogTemplate blogInfo={response?.data[0]?.attributes} />
          <NewFooter type='Blog' />
        </>
      )}
    </>
  );
}
