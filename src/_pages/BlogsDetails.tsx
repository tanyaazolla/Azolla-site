'use client';

import CaseStudies from '@/_pages/CaseStudies';
import { Blogs } from '@/types/blog';
import { STRAPI_BASE_URL } from '@/utils/baseUrl';
import { useEffect, useState } from 'react';

export async function generateStaticParams() {
  const res = await fetch(
    `${STRAPI_BASE_URL}/api/blogs?filters[showInHomePage][$eq]=true`,
    {
      cache: 'no-cache',
    }
  );
  const blogs = await res.json();

  return blogs.data.map((blog: any) => ({
    slug: blog.attributes.slug,
  }));
}

async function getBlogsDetails() {
  const res = await fetch(
    `${STRAPI_BASE_URL}/api/blogs?filters[showInHomePage][$eq]=true&populate=*`,
    {
      cache: 'no-cache',
    }
  );
  if (!res.ok) {
    return null;
  } else {
    const response = await res.json();
    return response;
  }
}

function BlogsDetails() {
  const [blogs, setBlogs] = useState<Blogs | null>();

  useEffect(() => {
    (async () => {
      const blogs = await getBlogsDetails();
      setBlogs(blogs);
    })();
  }, []);

  return (
    <>
      {blogs && blogs?.data?.length > 0 && <CaseStudies blogsDetails={blogs} />}
    </>
  );
}

export default BlogsDetails;
