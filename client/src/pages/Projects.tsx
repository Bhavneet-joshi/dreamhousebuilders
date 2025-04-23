import { useState, useEffect } from "react";
import { Project } from "@shared/schema";

// Fallback projects data
const fallbackProjects: Project[] = [
  {
    id: 1,
    title: "Modern Residential Tower",
    category: "Residential",
    description: "Luxury residential tower with 200 apartments featuring smart home technology and sustainable design elements.",
    imageUrl: "https://images.unsplash.com/photo-1606946887361-78feb162a525?q=80&w=1000",
    location: "Sydney, Australia",
    year: 2022,
    featured: true
  },
  {
    id: 2,
    title: "Urban Office Complex",
    category: "Commercial",
    description: "State-of-the-art office complex designed for modern work environments with flexible spaces and collaborative areas.",
    imageUrl: "https://images.unsplash.com/photo-1554041243-9dad330c1d1d?q=80&w=1000",
    location: "London, UK",
    year: 2021,
    featured: true
  },
  {
    id: 3,
    title: "Sustainable Shopping Center",
    category: "Commercial",
    description: "Eco-friendly shopping center with solar panels, rainwater harvesting, and energy-efficient systems throughout.",
    imageUrl: "https://images.unsplash.com/photo-1617900906639-cab7adceb499?q=80&w=1000",
    location: "Milan, Italy",
    year: 2023,
    featured: true
  },
  {
    id: 4,
    title: "Luxury Villa Complex",
    category: "Residential",
    description: "Premium villa complex with private gardens, swimming pools, and smart home integration for ultimate comfort.",
    imageUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000",
    location: "Dubai, UAE",
    year: 2022,
    featured: false
  },
  {
    id: 5,
    title: "Industrial Production Facility",
    category: "Industrial",
    description: "Modern industrial facility with advanced automation systems and sustainable manufacturing processes.",
    imageUrl: "https://images.unsplash.com/photo-1521798928596-9fae7e05bcf8?q=80&w=1000",
    location: "Toronto, Canada",
    year: 2021,
    featured: false
  },
  {
    id: 6,
    title: "Urban Public Library",
    category: "Public",
    description: "Contemporary public library with open spaces, digital resources, and community gathering areas.",
    imageUrl: "https://images.unsplash.com/photo-1562932831-afcfe48b5786?q=80&w=1000",
    location: "Berlin, Germany",
    year: 2023,
    featured: false
  }
];

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    // Simulate loading
    setLoading(true);
    
    // Use a timeout to simulate network delay
    setTimeout(() => {
      // Filter projects by category if selected
      if (selectedCategory) {
        setProjects(fallbackProjects.filter(project => 
          project.category.toLowerCase() === selectedCategory.toLowerCase()
        ));
      } else {
        setProjects(fallbackProjects);
      }
      
      setLoading(false);
    }, 500);
  }, [selectedCategory]);

  const filteredProjects = projects;

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Our Projects</h1>
      
      <div className="flex gap-4 mb-8">
        <button
          className={`px-4 py-2 rounded-lg ${!selectedCategory ? 'bg-primary text-white' : 'bg-gray-100'}`}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${selectedCategory === 'Residential' ? 'bg-primary text-white' : 'bg-gray-100'}`}
          onClick={() => setSelectedCategory('Residential')}
        >
          Residential
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${selectedCategory === 'Commercial' ? 'bg-primary text-white' : 'bg-gray-100'}`}
          onClick={() => setSelectedCategory('Commercial')}
        >
          Commercial
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${selectedCategory === 'Industrial' ? 'bg-primary text-white' : 'bg-gray-100'}`}
          onClick={() => setSelectedCategory('Industrial')}
        >
          Industrial
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${selectedCategory === 'Public' ? 'bg-primary text-white' : 'bg-gray-100'}`}
          onClick={() => setSelectedCategory('Public')}
        >
          Public
        </button>
      </div>

      {loading && (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      )}

      {!loading && filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No projects found in this category.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg">
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
              <div className="flex justify-between items-center mt-2">
                <span className="text-white/60 uppercase text-sm">{project.category}</span>
                <span className="text-white/60 text-sm">{project.location}, {project.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
