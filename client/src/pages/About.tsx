import { useEffect } from "react";
import AboutSection from "@/components/AboutSection";
import IntroSection from "@/components/IntroSection";
import { Separator } from "@/components/ui/separator";

export default function About() {
  useEffect(() => {
    document.title = "About Us - Nova Construct";
  }, []);

  return (
    <div>
      <section className="py-16 border-b border-[rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">ABOUT NOVA CONSTRUCT</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="mb-4 text-lg">
                Nova Construct is an architectural studio that designs spaces that inspire. Established with a vision to transform the construction industry, we have grown to become a leading name in architectural innovation and excellence.
              </p>
              <p className="mb-4">
                Our journey began with a simple yet powerful idea: to create buildings that are not only functional and aesthetically pleasing but also environmentally responsible and socially impactful. Today, we stand as a testament to that vision, with a portfolio of iconic projects across 62 cities worldwide.
              </p>
            </div>
            <div>
              <p className="mb-4">
                With a team of 400 professionals who bring diverse expertise and perspectives, we tackle projects of all sizes with the same level of dedication and creativity. Our approach is collaborative, our methods innovative, and our results exceptional.
              </p>
              <p>
                We believe that architecture has the power to transform lives, shape communities, and create a better future for all. This belief guides our work and inspires us to push the boundaries of what's possible in construction and design.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="story" className="py-16 border-b border-[rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">OUR STORY</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5">
              <img 
                src="https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                alt="Nova Construct history" 
                className="w-full h-auto"
              />
            </div>
            <div className="md:col-span-7">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">FOUNDED IN 1995</h3>
                  <p>
                    Nova Construct was founded by a group of visionary architects who wanted to challenge conventional approaches to construction and design. Starting with small residential projects, we quickly gained recognition for our innovative solutions and attention to detail.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">INTERNATIONAL EXPANSION</h3>
                  <p>
                    By 2005, we had expanded our operations beyond our home market, taking on projects in Europe, the Middle East, and Asia. This international presence allowed us to incorporate diverse cultural influences into our designs and develop a global perspective on architecture.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">SUSTAINABILITY COMMITMENT</h3>
                  <p>
                    In 2010, we made a formal commitment to sustainability, pledging to incorporate environmentally responsible practices into all our projects. This commitment has led to numerous awards and recognitions for our eco-friendly designs.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">TODAY</h3>
                  <p>
                    Today, Nova Construct stands as a global leader in architectural innovation, with offices in Australia, the Middle East, United Kingdom, and Canada. Our portfolio spans residential, commercial, industrial, and public projects, each reflecting our commitment to excellence, sustainability, and positive social impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <AboutSection />
      
      <section id="team" className="py-16 border-b border-[rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12">OUR LEADERSHIP TEAM</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alexander Wright",
                position: "CEO & Founder",
                bio: "With over 25 years of experience in architecture and construction, Alexander leads our global operations with a focus on innovation and sustainability."
              },
              {
                name: "Sophia Chen",
                position: "Chief Architect",
                bio: "Sophia brings a unique perspective to our projects, combining traditional architectural principles with cutting-edge technology and design thinking."
              },
              {
                name: "Marcus Johnson",
                position: "Head of Engineering",
                bio: "Marcus ensures that all our projects meet the highest standards of structural integrity and technical excellence."
              },
              {
                name: "Isabella Rodriguez",
                position: "Sustainability Director",
                bio: "Isabella leads our sustainability initiatives, driving our commitment to environmentally responsible construction practices."
              }
            ].map((member, index) => (
              <div key={index} className="border border-[rgba(0,0,0,0.1)] p-6">
                <div className="w-full h-64 bg-[#232323]/5 mb-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-[#232323]/20">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-[#232323]/70 mb-3">{member.position}</p>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="services" className="py-16 border-b border-[rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12">OUR SERVICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {[
              {
                title: "Architectural Design",
                description: "Comprehensive architectural services from concept development to detailed design, creating spaces that are both functional and aesthetically pleasing."
              },
              {
                title: "Construction Management",
                description: "End-to-end management of construction projects, ensuring timely delivery, cost-effectiveness, and adherence to quality standards."
              },
              {
                title: "Sustainability Consulting",
                description: "Expert advice on sustainable building practices, energy efficiency, and environmental certification for new and existing structures."
              },
              {
                title: "Urban Planning",
                description: "Strategic planning for urban developments, balancing aesthetic, functional, and social considerations to create vibrant communities."
              },
              {
                title: "Interior Design",
                description: "Thoughtful interior design that enhances the functionality and ambiance of spaces, reflecting the unique character of each project."
              },
              {
                title: "Renovation & Restoration",
                description: "Skilled renovation of existing structures and restoration of historic buildings, preserving architectural heritage while updating functionality."
              }
            ].map((service, index) => (
              <div key={index} className="relative pl-10">
                <span className="absolute left-0 top-0 text-[#917b53] font-semibold">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="approach" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">OUR APPROACH</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="mb-6">
                Our approach to architecture and construction is built on four key pillars: Collaboration, Innovation, Sustainability, and Excellence. We believe that the best results come from working closely with our clients, embracing new ideas and technologies, respecting the environment, and maintaining the highest standards in everything we do.
              </p>
              <p>
                Each project begins with a deep understanding of our client's vision and needs. We then apply our expertise and creativity to develop solutions that not only meet but exceed expectations. Throughout the process, we maintain open communication and transparency, ensuring that our clients are partners in the journey from concept to completion.
              </p>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-[#917b53] pl-6">
                <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                <p>We work closely with clients, stakeholders, and communities to create buildings that truly serve their users.</p>
              </div>
              <div className="border-l-4 border-[#917b53] pl-6">
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p>We embrace new technologies, materials, and methods to push the boundaries of what's possible in construction.</p>
              </div>
              <div className="border-l-4 border-[#917b53] pl-6">
                <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                <p>We design with the future in mind, creating buildings that minimize environmental impact and maximize efficiency.</p>
              </div>
              <div className="border-l-4 border-[#917b53] pl-6">
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p>We are committed to the highest standards of quality, craftsmanship, and professional service.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
