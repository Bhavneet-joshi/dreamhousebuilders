import { useState, useEffect } from "react";
import { Project } from "@shared/schema";

// Fallback projects data
const fallbackProjects: Project[] = [
  {
    id: 1,
    title: "Victorian Manor Restoration",
    category: "Historic Restoration",
    description: "Complete restoration of a 19th-century Victorian manor, including period-accurate woodwork, detailed trim restoration, and historical color matching.",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000",
    location: "Auckland, New Zealand",
    year: 2023,
    featured: true
  },
  {
    id: 2,
    title: "Heritage Staircase Reconstruction",
    category: "Custom Woodwork",
    description: "Hand-crafted reproduction of a heritage staircase, featuring intricate balustrades and custom millwork to match the original 1920s design.",
    imageUrl: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1000",
    location: "Wellington, New Zealand",
    year: 2023,
    featured: true
  },
  {
    id: 3,
    title: "Antique Furniture Collection",
    category: "Furniture Restoration",
    description: "Meticulous restoration of a collection of 18th-century furniture pieces, including detailed veneer work and traditional finishing techniques.",
    imageUrl: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=1000",
    location: "Christchurch, New Zealand",
    year: 2023,
    featured: true
  },
  {
    id: 4,
    title: "Colonial Homestead Revival",
    category: "Historic Restoration",
    description: "Comprehensive restoration of a colonial-era homestead, including structural timber repairs and authentic period detailing.",
    imageUrl: "https://images.unsplash.com/photo-1464146072230-91cabc968266?q=80&w=1000",
    location: "Hamilton, New Zealand",
    year: 2023,
    featured: false
  },
  {
    id: 5,
    title: "Bespoke Library Installation",
    category: "Custom Woodwork",
    description: "Custom-designed and hand-crafted floor-to-ceiling library with traditional joinery techniques and built-in ladder system.",
    imageUrl: "https://images.unsplash.com/photo-1507467747992-27c2c988d0f0?q=80&w=1000",
    location: "Dunedin, New Zealand",
    year: 2023,
    featured: false
  },
  {
    id: 6,
    title: "Heritage Window Restoration",
    category: "Architectural Elements",
    description: "Restoration of original sash windows and frames in a heritage-listed building, including custom molding reproduction and glazing.",
    imageUrl: "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?q=80&w=1000",
    location: "Tauranga, New Zealand",
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
      <h1 className="text-4xl font-bold mb-8 text-[#917b53]">Our Restoration & Carpentry Projects</h1>
      
      <div className="flex flex-wrap gap-4 mb-8">
        <button
          className={`px-4 py-2 rounded-lg ${!selectedCategory ? 'bg-[#917b53] text-white' : 'bg-gray-100'}`}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${selectedCategory === 'Historic Restoration' ? 'bg-[#917b53] text-white' : 'bg-gray-100'}`}
          onClick={() => setSelectedCategory('Historic Restoration')}
        >
          Historic Restoration
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${selectedCategory === 'Custom Woodwork' ? 'bg-[#917b53] text-white' : 'bg-gray-100'}`}
          onClick={() => setSelectedCategory('Custom Woodwork')}
        >
          Custom Woodwork
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${selectedCategory === 'Furniture Restoration' ? 'bg-[#917b53] text-white' : 'bg-gray-100'}`}
          onClick={() => setSelectedCategory('Furniture Restoration')}
        >
          Furniture Restoration
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${selectedCategory === 'Architectural Elements' ? 'bg-[#917b53] text-white' : 'bg-gray-100'}`}
          onClick={() => setSelectedCategory('Architectural Elements')}
        >
          Architectural Elements
        </button>
      </div>

      {loading && (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#917b53]"></div>
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
