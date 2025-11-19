import React from "react";

const DetailsCardSkeleton = () => {
  return (
    <section className="flex flex-col md:flex-row gap-4 md:gap-8 p-4 md:p-6 border border-white/30 rounded-2xl">
      <div className="w-full md:w-1/2 space-y-5 rounded-2xl overflow-hidden">
        <div className="space-y-5">
          <div className="skeleton w-full h-52 md:h-64 lg:h-72 xl:h-80 2xl:h-96"></div>
          <div className="flex gap-4">
            <div className="skeleton w-full h-28 md:h-40"></div>
            <div className="skeleton w-full h-28 md:h-40"></div>
            <div className="skeleton w-full h-28 md:h-40"></div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 text-white/50 text-lg">
        <div>
          <div className="space-y-6">
            <div className="skeleton h-12"></div>
            <div className="skeleton h-6"></div>
            <div className="skeleton h-6"></div>
            <div className="skeleton h-24"></div>
          </div>
          <div className="pt-4 space-y-5">
            <div className="skeleton h-6"></div>
            <div className="skeleton h-6"></div>
            <div className="skeleton h-6"></div>
          </div>
        </div>
        <div className="flex justify-end gap-6 items-end mt-4 h-36">
          <div className="skeleton w-23 h-10"></div>
          <div className="skeleton w-23 h-10"></div>
        </div>
      </div>
    </section>
  );
};

export default DetailsCardSkeleton;
