import { useState } from "react";
import { Project } from "@shared/schema";
import { Link } from "wouter";

export default function ProjectShowcase() {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "Victorian Manor Restoration",
      description: "Complete restoration of a 19th-century Victorian manor with period-accurate woodwork",
      category: "Historic Restoration",
      imageUrl: "/attached_assets/m1.jpg",
      location: "Auckland, New Zealand",
      year: 2023,
      featured: true
    },
    {
      id: 2,
      title: "Heritage Staircase Reconstruction",
      description: "Hand-crafted reproduction of a heritage staircase with intricate balustrades",
      category: "Custom Woodwork",
      imageUrl: "/attached_assets/m2.jpg",
      location: "Wellington, New Zealand",
      year: 2023,
      featured: true
    },
    {
      id: 3,
      title: "Antique Furniture Collection",
      description: "Meticulous restoration of a collection of 18th-century furniture pieces",
      category: "Furniture Restoration",
      imageUrl: "/attached_assets/m3.jpg",
      location: "Christchurch, New Zealand",
      year: 2023,
      featured: true
    }
  ]);

  return (
    <section className="py-16 border-b border-[rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl">
              Explore our portfolio of historic restoration and custom woodwork projects that showcase our commitment to craftsmanship and attention to detail.
            </p>
          </div>
          <Link href="/projects" className="mt-4 md:mt-0 inline-block bg-[#917b53] text-white py-3 px-6 hover:bg-[#917b53]/90 transition">
            View All Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-white/80 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-white/60 uppercase text-sm">{project.category}</span>
                  <Link href={`/projects#${project.id}`} className="text-white text-sm font-medium hover:text-[#917b53] transition">
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/projects" className="inline-block bg-[#232323] text-white py-3 px-8 hover:bg-[#232323]/90 transition">
            Explore Our Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
