import { Link } from "wouter";

const mostRequestedServices = [
  {
    id: 1,
    title: "New Build",
    description: "Custom-designed homes built to your specifications with quality materials and expert craftsmanship.",
    image: "/attached_assets/m18.jpg"
  },
  {
    id: 2,
    title: "Full House Renovation",
    description: "Complete home transformations that breathe new life into your existing space.",
    image: "/attached_assets/m2.jpg"
  },
  {
    id: 3,
    title: "Bathroom Renovation",
    description: "Modern bathroom upgrades with premium fixtures and finishes.",
    image: "/attached_assets/m11.jpg"
  },
  {
    id: 4,
    title: "Stairs",
    description: "Custom stair design and installation for safe and stylish access between levels.",
    image: "/attached_assets/m4.jpg"
  },  
  {
    id: 5,
    title: "Gibbing",
    description: "Expert installation of plasterboard for walls and ceilings.",
    image: "/attached_assets/m5.jpg"
  },
  {
    id: 6,
    title: "Wooden Flooring",
    description: "Installation of high-quality wooden flooring for a timeless, elegant look.",
    image: "/attached_assets/m9.jpg"
  },
  {
    id: 7,
    title: "Fencing",
    description: "Durable and attractive fencing solutions to enhance privacy and security for your property.",
    image: "/attached_assets/m12.jpg"
  }
];

export default function MostRequestedServices() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Most Requested Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular construction and renovation services that have helped countless homeowners transform their spaces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mostRequestedServices.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href="/contact" className="text-[#917b53] hover:text-[#917b53]/80 transition">
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
} 