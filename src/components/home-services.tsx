
'use client';

import Link from 'next/link';

const services = [
  {
    icon: 'fa-hard-hat',
    title: "Hard Facility<br>Management",
    href: "/hard-fm",
  },
  {
    icon: 'fa-star',
    title: "Soft Facility<br>Management",
    href: "/soft-fm",
  },
  {
    icon: 'fa-wrench',
    title: "Renovations & Repairs",
    href: "/renovations",
  },
  {
    icon: 'fa-handshake',
    title: "Integrated FM Services",
    href: "/integrated-fm",
  },
  {
    icon: 'fa-clipboard-check',
    title: "Facility Maintenance<br>& Management",
    href: "/facility-maintenance",
  },
  {
    icon: 'fa-sliders-h',
    title: "Specialized FM Services",
    href: "/specialized-fm",
  },
];

const HomeServices = () => {
  return (
    <section id="home-services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-5 max-w-6xl mx-auto justify-center">
            {services.map((service) => (
              <Link key={service.title} href={service.href} className="group relative bg-card rounded-xl p-5 w-[200px] text-center shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:bg-yellow-50/50 hover:shadow-lg flex flex-col items-center min-h-[180px] no-underline overflow-hidden">
                <div className="bg-yellow-50 border border-yellow-300 rounded-full w-[55px] h-[55px] flex justify-center items-center mb-4 shadow-inner">
                    <i className={`fas ${service.icon} text-yellow-500 text-2xl`}></i>
                </div>
                <div 
                    className="text-sm font-bold leading-tight text-center text-foreground mb-[25px]"
                    dangerouslySetInnerHTML={{ __html: service.title }}
                />
                <i className="fas fa-arrow-up text-yellow-500 text-xl mt-auto mb-1.5 animate-arrow-up group-hover:animate-arrow-up-fast group-hover:[text-shadow:0_0_10px_rgba(212,169,54,0.9)]"></i>
              </Link>
            ))}
          </div>
      </div>
    </section>
  );
};

export default HomeServices;