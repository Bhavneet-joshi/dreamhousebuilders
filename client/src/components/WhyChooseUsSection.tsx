import { Wrench, Trophy, Clock, Shield, Heart, Users } from "lucide-react";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function WhyChooseUsSection() {
  const features: Feature[] = [
    {
      id: 1,
      title: "Expert Craftsmanship",
      description: "Our team of master craftsmen brings decades of combined experience in period-accurate restoration and fine woodworking.",
      icon: <Wrench className="w-8 h-8 text-[#917b53]" />
    },
    {
      id: 2,
      title: "Quality Guaranteed",
      description: "We stand behind the quality of our work with comprehensive guarantees and warranties on all our restoration and woodwork projects.",
      icon: <Trophy className="w-8 h-8 text-[#917b53]" />
    },
    {
      id: 3,
      title: "Timely Completion",
      description: "We understand the importance of timelines and work diligently to complete your project on schedule without compromising quality.",
      icon: <Clock className="w-8 h-8 text-[#917b53]" />
    },
    {
      id: 4,
      title: "Licensed & Insured",
      description: "As a fully licensed and insured company, we provide peace of mind knowing your project is protected and meets all regulatory requirements.",
      icon: <Shield className="w-8 h-8 text-[#917b53]" />
    },
    {
      id: 5,
      title: "Passion for Heritage",
      description: "We have a genuine passion for preserving New Zealand's architectural heritage and take pride in restoring historic properties to their former glory.",
      icon: <Heart className="w-8 h-8 text-[#917b53]" />
    },
    {
      id: 6,
      title: "Client-Focused Approach",
      description: "We believe in building lasting relationships with our clients through transparent communication and personalized service throughout your project.",
      icon: <Users className="w-8 h-8 text-[#917b53]" />
    }
  ];

  return (
    <section className="py-16 border-b border-[rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Why Choose Dream House Builders</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            With our commitment to excellence, attention to detail, and passion for preserving heritage, we deliver exceptional results for every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white p-6 rounded-lg shadow-md border border-[rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            At Dream House Builders, we combine traditional craftsmanship with modern expertise to deliver exceptional results that stand the test of time.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[#917b53] text-white py-3 px-8 hover:bg-[#917b53]/90 transition"
          >
            Get a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
} 