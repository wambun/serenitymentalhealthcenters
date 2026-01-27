'use client';

import { stats } from '@/data/stats';

const StatsBar = () => {
  const displayStats = stats.slice(0, 5);

  return (
    <section className="py-12 bg-neutral-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {displayStats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-500">
                {stat.prefix}
                {stat.value}
                {stat.suffix}
              </div>
              <div className="mt-2 text-sm text-neutral-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
