'use client'

import useBreakpoints from "@/hooks/useBreakPoints";
import InsightsCard from "./InsightsCard";
import {Input, Link} from "@nextui-org/react"; 
import { useCallback, useEffect, useState } from "react";
import { SearchIcon } from "@/svg/SearchIcon";
import { STRAPI_BASE_URL } from "@/utils/baseUrl";
import { notFound } from 'next/navigation';
import { Blogs } from "@/types/blog";
import ButtonComponent from "../components/Button/Button";
import { debounce } from 'lodash'; 
import InsightsContactus from "./InsightsContactus";



  const menuItems = [
    { id: "All", text: "All" },
    { id: "FEUM%26EU-ETS", text: "FEUM & EU-ETS" },
    { id: "alternate-fuels", text: "Alternate Fuels" },
    { id: "innovation", text: "innovation" },
    { id: "case-study", text: "Case Study" },
    { id: "news", text: "News" }
  ];

  async function getBlogs(type: string, title: string, pageSize = 6) {
    let url = `${STRAPI_BASE_URL}/api/blogs?populate=image,title,type&pagination[pageSize]=${pageSize}&sort=publishedAt:desc`;
    if (type !== "All") {
      url += `&filters[type]=${type}`;
    }
    if (title) {
      url += `&filters[title][$containsi]=${title}`;
    }
    const res = await fetch(url, { cache: 'no-cache' });
    if (!res.ok) {
      notFound();
    }
    const response = await res.json();
    return response;
  }
  
const InsightsContent= () => {
    const {isXs} = useBreakpoints();
    const [selectedTab, setSelectedTab] = useState(menuItems[0].id);
    const [blogs, setBlogs] = useState<Blogs | null>(null); 
    const [searchTitle, setSearchTitle] = useState<string>("")
    const [pageSize, setPageSize] = useState(6);
    const [totalBlogs, setTotalBlogs] = useState<number>(0);

    const handleButtonChange = async (key:any) => {
        setSelectedTab(key);
        const fetchedBlogs = await getBlogs(key, searchTitle);
        setBlogs(fetchedBlogs);
        setTotalBlogs(fetchedBlogs.meta.pagination.total);
    };
    const handleShowMore = async () => {
      const newPageSize = pageSize + 6; 
      setPageSize(newPageSize);
      const type = selectedTab === "All" ? "All" : selectedTab.toLowerCase();
      const fetchedBlogs = await getBlogs(type, searchTitle,newPageSize); 
      setBlogs(fetchedBlogs);
  };

  useEffect(() => {
    const fetchInitialBlogs = async () => {
        try {
            const fetchedBlogs = await getBlogs("All", searchTitle);
            setBlogs(fetchedBlogs);
            setTotalBlogs(fetchedBlogs.meta.pagination.total);
        } catch (error) {
            console.error("Error fetching initial blogs:", error); 
        } 
    };

    fetchInitialBlogs();
}, []); 

  const fetchSearchedBlogs = async (title: string) => {
    try {
      const type = selectedTab === "All" ? "All" : selectedTab.toLowerCase();
        const fetchedBlogs = await getBlogs(type, title);
        setBlogs(fetchedBlogs);
        setTotalBlogs(fetchedBlogs.meta.pagination.total);
    } catch (error) {
        console.error("Error fetching blogs:", error); 
    } 
};

const debouncedFetchBlogs = useCallback(
  debounce((title: string) => {
    fetchSearchedBlogs(title);
  }, 500), [selectedTab] 
);

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (e) {
        setSearchTitle(e.target?.value)
        debouncedFetchBlogs(e.target.value);
    }
};

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      debouncedFetchBlogs.flush();
    }
};

 const showMoreButtonVisible = blogs?.data?.length ? blogs.data.length < totalBlogs : false;
 const selectedMenuItem = menuItems.find(item => item.id === selectedTab);


    return (
      <>
        <div className="px-12 mt-16">
            <div className="lg:flex justify-between items-start">
            <div className="xl:w-2/3 w-full flex-wrap pb-4">
                    {menuItems.map((data) => (
                        <button
                            key={data.id}
                            onClick={() => handleButtonChange(data.id)}
                            className={`px-4 py-2 rounded-full whitespace-nowrap font-semibold uppercase text-responsive-sm ${selectedTab === data.id ? 'bg-azolla_blue text-white' : 'bg-transparent text-black'}`}
                        >
                            {data.text}
                        </button>
                    ))}
            </div>
            <div className="xl:w-1/3 w-full rounded-none xxs:mt-6 xl:mt-0 pb-4">
              <Input
                radius="lg"
                classNames={{
                  input: [
                    "bg-transparent",
                    "text-black text-[18px] tracking-wide",
                    "placeholder:text-default-700/50 text-[18px] font-semibold",
                  ],
                  innerWrapper: "bg-transparent",
                  inputWrapper: [
                    "rounded-none",
                    "bg-default-200/50",           
                  
                  ],
                }}
                placeholder="SEARCH"
                value={searchTitle}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                endContent={
                    <SearchIcon className="text-default-700/50 mb-0.5 pointer-events-none font-medium flex-shrink-0" />
                }
              />
            </div>
            </div>
            {blogs && blogs.data.length > 0 ? (
              <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-24 gap-12 lg:my-32 xxs:my-10">
              {blogs.data.map((data, index) => {
                const { title, image, type, slug } = data?.attributes || {};

                return (
                    <div key={index}>
                      <Link href={`/${type}/${slug}`}>
                        <InsightsCard 
                            image={STRAPI_BASE_URL + (image?.data?.attributes?.url || '')} 
                            tag={type} 
                            title={title} 
                            team={""}
                        />
                        </Link>
                    </div>
                    );
                })}
                </div>
            ) : (
                <p className="text-responsive-sm font-medium justify-center lg:my-32 xxs:my-10">Insightful articles on {selectedMenuItem?.text} Coming Soon.</p>
            )}
          
            {showMoreButtonVisible && (
            <div className="flex justify-center items-center mt-12">
            <button className="font-bold text-xl text-black hover:underline" onClick={handleShowMore}>
            Show More
            </button>
            </div>
            )}  
        </div>

        <InsightsContactus tag={selectedTab}/>
        </>
    );
};

export default InsightsContent;
