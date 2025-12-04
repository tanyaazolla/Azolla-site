'use client'

import useBreakpoints from "@/hooks/useBreakPoints";

const InsightsHeader = () => {
    const {isXs} = useBreakpoints();

    return (
        <div className="mx-12 pr-12 relative lg:flex border-b-2 border-black pb-8 pt-10 justify-center items-center text-black">
            <div className="lg:text-responsive-3xl text-responsive-2xl font-bold lg:w-3/5">Road to Zero.</div>
            <div className="lg:text-responsive-sm text-responsive-md lg:p-0 xxs:pt-4 lg:w-2/5">Insights, innovations, and strategies to find your profitable pathway to Maritime Decarbonization.</div>
        </div>
    );
};

export default InsightsHeader;
        