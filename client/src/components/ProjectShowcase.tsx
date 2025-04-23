import { useState } from "react";
import { Project } from "@shared/schema";

export default function ProjectShowcase() {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "Modern Office Complex",
      description: "A state-of-the-art office building with sustainable features",
      category: "commercial",
      imageUrl: "/assets/projects/office.jpg"
    },
    {
      id: 2,
      title: "Luxury Apartments",
      description: "High-end residential complex with premium amenities",
      category: "residential",
      imageUrl: "/assets/projects/apartment.jpg"
    }
  ]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div key={project.id} className="group relative overflow-hidden rounded-lg">
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={project.imageUrl || '/assets/projects/placeholder.jpg'}
              alt={project.title}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-white/80">{project.description}</p>
            <span className="text-white/60 mt-2 uppercase text-sm">{project.category}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
