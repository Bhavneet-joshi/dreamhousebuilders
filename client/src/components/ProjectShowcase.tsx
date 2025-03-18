import { useEffect } from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Project } from "@shared/schema";

export default function ProjectShowcase() {
  const { data: projects, isLoading, isError } = useQuery<Project[]>({
    queryKey: ['/api/projects/featured'],
  });

  if (isLoading) {
    return (
      <section className="grid grid-cols-1 md:grid-cols-2 border-b border-[rgba(0,0,0,0.1)]">
        <div className="h-96 md:h-auto bg-gray-100 animate-pulse"></div>
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="h-8 bg-gray-200 animate-pulse mb-8 w-2/3"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="h-32 bg-gray-200 animate-pulse"></div>
            <div className="h-32 bg-gray-200 animate-pulse"></div>
          </div>
        </div>
      </section>
    );
  }

  if (isError || !projects) {
    return (
      <section className="grid grid-cols-1 md:grid-cols-2 border-b border-[rgba(0,0,0,0.1)]">
        <div className="h-96 md:h-auto bg-gray-100"></div>
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-8">CONVENIENCE AND COMFORT</h2>
          <p className="text-red-500">Failed to load project data</p>
        </div>
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 border-b border-[rgba(0,0,0,0.1)]">
      <div className="h-96 md:h-auto">
        <div className="grid grid-cols-2 h-full">
          <div className="col-span-1 h-full relative border-r border-[rgba(0,0,0,0.1)]">
            <img 
              src="https://images.unsplash.com/photo-1593313637552-29c2c0dacd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
              alt="Modern building exterior" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 h-full grid grid-rows-2">
            <div className="row-span-1 border-b border-[rgba(0,0,0,0.1)] relative">
              <img 
                src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                alt="Architectural detail" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="row-span-1 relative">
              <img 
                src="https://images.unsplash.com/photo-1600607687644-c7e5eacd4e20?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                alt="Modern interior" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-8 md:p-12 flex flex-col justify-center">
        <h2 className="text-2xl font-semibold mb-8">CONVENIENCE AND COMFORT</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <p className="text-base leading-relaxed">
            Luxurious interiors and functional spaces will make the home not just a place to live, but an oasis of comfort, where every detail has been thoughtfully designed for your convenience.
          </p>
          <p className="text-base leading-relaxed">
            Intelligent control systems allow you to control the atmosphere of your home with a single touch. Adjust light, temperature and security to create the perfect space for your life.
          </p>
        </div>
        <div className="mt-8">
          <Link href="/projects" className="inline-block bg-[#232323] text-white py-3 px-6 hover:bg-[#232323]/90 transition">View more</Link>
        </div>
      </div>
    </section>
  );
}
