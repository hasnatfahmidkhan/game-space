const GameCardSkeleton = ({ count = 8 }) => {
  return Array.from({ length: count }).map((_, ind) => (
    <div key={ind} className="flex flex-col gap-4">
      <div className="skeleton h-52 w-full bg-white/30 animate-pulse "></div>
      <div className="skeleton h-4 w-28 bg-white/30 animate-pulse "></div>
      <div className="skeleton h-4 w-28 bg-white/30 animate-pulse "></div>
      <div className="flex items-center justify-between">
        <div className="skeleton h-4 w-12 bg-white/30 animate-pulse "></div>
        <div className="skeleton h-4 w-12 bg-white/30 animate-pulse "></div>
      </div>
    </div>
  ));
};

export default GameCardSkeleton;
