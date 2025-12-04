export interface StrapiImage {
  data: {
    attributes: { name: string; alternativeText: string | null; url: string };
  } | null;
}

export interface BlogInfo {
  title: string;
  slug: string;
  type: string;
  subTitle: string;
  subTitle2?: string | null;
  image: StrapiImage;
  customerLogo: StrapiImage;
  bannerColor: string | null;
  summaryHeader?: string | null;
  impacts: {
    title: string;
    description: string;
  }[];
  customer: {
    feedback: string;
    name: string | null;
    role: string;
    image?: StrapiImage | null;
  };
  section: {
    id: number;
    title: string;
    content: string;
  }[];
  articleCardInfo: {
    title: string;
    category: string;
  };
  footerDetails: {
    text: string;
    changingText: Array<string>;
  };
}

export interface Blogs {
  attributes: { title: any; image: any; tag: any; type: any; };
  data: {
    id: number;
    attributes: BlogInfo;
  }[];
}
