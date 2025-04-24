import { useEffect } from "react";
import { Link } from "wouter";
import { Wrench, Trophy, Clock, Shield, Heart, Users } from "lucide-react";

interface ServiceFeature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const restorationFeatures: ServiceFeature[] = [
  {
    id: 1,
    title: "Period-Accurate Restoration",
    description: "Meticulous restoration of historic properties using traditional techniques and materials.",
    icon: <Wrench className="w-8 h-8 text-[#917b53]" />
  },
  {
    id: 2,
    title: "Heritage Preservation",
    description: "Expert preservation of architectural heritage while maintaining historical authenticity.",
    icon: <Trophy className="w-8 h-8 text-[#917b53]" />
  },
  {
    id: 3,
    title: "Structural Integrity",
    description: "Comprehensive assessment and repair of structural elements to ensure long-term stability.",
    icon: <Shield className="w-8 h-8 text-[#917b53]" />
  },
  {
    id: 4,
    title: "Historical Research",
    description: "In-depth research into original building techniques and materials for authentic restoration.",
    icon: <Heart className="w-8 h-8 text-[#917b53]" />
  }
];

const carpentryFeatures: ServiceFeature[] = [
  {
    id: 1,
    title: "Custom Woodwork",
    description: "Bespoke woodworking solutions tailored to your specific needs and preferences.",
    icon: <Wrench className="w-8 h-8 text-[#917b53]" />
  },
  {
    id: 2,
    title: "Fine Craftsmanship",
    description: "Expert craftsmanship using traditional joinery techniques and premium materials.",
    icon: <Trophy className="w-8 h-8 text-[#917b53]" />
  },
  {
    id: 3,
    title: "Timely Delivery",
    description: "Efficient project management ensuring timely completion without compromising quality.",
    icon: <Clock className="w-8 h-8 text-[#917b53]" />
  },
  {
    id: 4,
    title: "Client Collaboration",
    description: "Close collaboration with clients to bring their vision to life with precision and care.",
    icon: <Users className="w-8 h-8 text-[#917b53]" />
  }
];

export default function Services() {
  useEffect(() => {
    document.title = "Our Services - DREAM HOUSE BUILDERS LTD";
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/attached_assets/hero-bg.jpg"
            alt="Services Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Expert restoration and carpentry services for your home
          </p>
        </div>
      </section>

      {/* Restoration Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Historic Restoration</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Preserving New Zealand's architectural heritage through expert restoration services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {restorationFeatures.map((feature) => (
              <div key={feature.id} className="bg-white p-6 rounded-lg shadow-md border border-[rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contact" className="inline-block bg-[#917b53] text-white py-3 px-8 hover:bg-[#917b53]/90 transition">
              Discuss Your Restoration Project
            </Link>
          </div>
        </div>
      </section>

      {/* Carpentry Section */}
      <section className="py-16 bg-[#f5f2eb]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Expert Carpentry</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Custom woodwork and carpentry services delivered with precision and craftsmanship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {carpentryFeatures.map((feature) => (
              <div key={feature.id} className="bg-white p-6 rounded-lg shadow-md border border-[rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contact" className="inline-block bg-[#917b53] text-white py-3 px-8 hover:bg-[#917b53]/90 transition">
              Discuss Your Carpentry Project
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#232323] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Whether you need restoration work or custom carpentry, our team of experts is ready to help bring your vision to life.
          </p>
          <Link href="/contact" className="inline-block bg-[#917b53] text-white py-3 px-8 hover:bg-[#917b53]/90 transition">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
} 