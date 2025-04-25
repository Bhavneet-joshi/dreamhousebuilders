import { useState, useEffect } from "react";
import { Project } from "@shared/schema";
import { Link } from "wouter";

// Fallback projects data
const fallbackProjects: Project[] = [
  {
    id: 1,
    title: "House Restoration",
    category: "House Restoration",
    description: "House restoration is a comprehensive process that involves restoring a property to its original condition or a specific historical period. This can include structural repairs, restoration of original features, and modernizing the property to meet current building codes and standards.",
    imageUrl: "attached_assets/m5.jpg",
    location: "Auckland, New Zealand",
    year: 2023,
    featured: true
  },
  {
    id: 2,
    title: "Staircase Reconstruction",
    category: "Custom Woodwork",
    description: "Hand-crafted reproduction of a staircase, featuring intricate balustrades and custom millwork to match the original 1920s design.",
    imageUrl: "attached_assets/m4.jpg",
    location: "Wellington, New Zealand",
    year: 2023,
    featured: true
  },
  {
    id: 3,
    title: "Bathroom renovation",
    category: "Furniture Restoration",
    description: "Modern bathroom upgrades with premium fixtures and finishes.",
    imageUrl: "attached_assets/m11.jpg",
    location: "Christchurch, New Zealand",
    year: 2023,
    featured: true
  },
  {
    id: 4,
    title: "Gibbing",
    category: "Gibbing",
    description: "Expert installation of plasterboard for walls and ceilings.",
    imageUrl: "attached_assets/w1.jpg",
    location: "Hamilton, New Zealand",
    year: 2023,
    featured: false
  },
  {
    id: 5,
    title: "Wooden Flooring",
    category: "Custom Woodwork",
    description: "Installation of high-quality wooden flooring for a timeless, elegant look.",
    imageUrl: "attached_assets/w2.jpg",
    location: "Dunedin, New Zealand",
    year: 2023,
    featured: false
  },
  {
    id: 6,
    title: "Fencing",
    category: "Fencing",
    description: "Durable and attractive fencing solutions to enhance privacy and security for your property.",
    imageUrl: "attached_assets/m12.jpg",
    location: "Tauranga, New Zealand",
    year: 2023,
    featured: false
  },
  {
    id: 7,
    title: "Wooden Decking",
    category: "Custom Woodwork",
    description: "Expert installation of wooden decking for a modern, elegant look.",
    imageUrl: "attached_assets/m6.jpg",
    location: "Napier, New Zealand",
    year: 2023,
    featured: false
  },
  {
    id: 8,
    title: "Wooden Doors",
    category: "Architectural Elements",
    description: "Expert refinishing of original period doors, including hardware restoration and custom panel repair.",
    imageUrl: "attached_assets/m17.jpg",
    location: "Nelson, New Zealand",
    year: 2023,
    featured: false
  }
];

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Simulate loading
    setLoading(true);
    
    // Use a timeout to simulate network delay
    setTimeout(() => {
      // Filter projects by category if selected
      let filteredProjects = fallbackProjects;
      
      if (selectedCategory) {
        filteredProjects = filteredProjects.filter(project => 
          project.category.toLowerCase() === selectedCategory.toLowerCase()
        );
      }
      
      // Filter by search term if provided
      if (searchTerm) {
        filteredProjects = filteredProjects.filter(project => 
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.location.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      
      setProjects(filteredProjects);
      setLoading(false);
    }, 500);
  }, [selectedCategory, searchTerm]);

  const categories = Array.from(new Set(fallbackProjects.map(project => project.category)));

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-6 text-[#917b53]">Our Restoration & Carpentry Projects</h1>
        <p className="text-gray-600 mb-8">
          Explore our portfolio of historic restoration and custom woodwork projects. Each project represents our commitment to craftsmanship, attention to detail, and preserving the beauty of heritage architecture.
        </p>
        
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#917b53] focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <button
          className={`px-4 py-2 rounded-lg ${!selectedCategory ? 'bg-[#917b53] text-white' : 'bg-gray-100'}`}
          onClick={() => setSelectedCategory(null)}
        >
          All Projects
        </button>
        {categories.map(category => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg ${selectedCategory === category ? 'bg-[#917b53] text-white' : 'bg-gray-100'}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {loading && (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#917b53]"></div>
        </div>
      )}

      {!loading && projects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">No projects found matching your criteria.</p>
          <button 
            className="text-[#917b53] hover:underline"
            onClick={() => {
              setSelectedCategory(null);
              setSearchTerm("");
            }}
          >
            Clear filters
          </button>
        </div>
      )}

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
                <span className="text-white/60 text-sm">{project.location}, {project.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-6">Ready to start your project?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Whether you're looking to restore a historic property or create custom woodwork for your home, our team of expert craftsmen is ready to bring your vision to life.
        </p>
        <Link href="/contact" className="inline-block bg-[#917b53] text-white py-3 px-8 hover:bg-[#917b53]/90 transition">
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
