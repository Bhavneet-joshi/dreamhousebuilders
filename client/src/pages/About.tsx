import { useEffect } from "react";
import AboutSection from "@/components/AboutSection";
import IntroSection from "@/components/IntroSection";
import { Separator } from "@/components/ui/separator";

export default function About() {
  useEffect(() => {
    document.title = "About Us - DREAM HOUSE BUILDERS LTD";
  }, []);

  return (
    <div>
      <section className="py-16 border-b border-[rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">ABOUT DREAM HOUSE BUILDERS LTD</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="mb-4 text-lg">
                DREAM HOUSE BUILDERS LTD is a specialized restoration and artisan carpentry studio that brings new life to historic homes. Founded in 2023, we combine traditional craftsmanship with modern expertise to preserve the beauty and character of heritage properties.
              </p>
              <p className="mb-4">
                Our journey began with a simple yet powerful idea: to restore historic homes with meticulous attention to detail and respect for their original character. Today, we stand as a testament to that vision, with a growing portfolio of successful restoration projects that honor the past while enhancing functionality.
              </p>
            </div>
            <div>
              <p className="mb-4">
                With a team of master craftsmen who bring decades of combined experience in period-accurate restoration and fine woodworking, we tackle projects of all sizes with the same level of dedication and precision. Our approach is collaborative, our methods time-tested, and our results exceptional.
              </p>
              <p>
                We believe that historic homes have stories to tell, and our mission is to preserve those stories through expert restoration and artisan carpentry. This belief guides our work and inspires us to maintain the highest standards of craftsmanship in every project we undertake.
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
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1174&q=80" 
                alt="DREAM HOUSE BUILDERS LTD craftsmanship" 
                className="w-full h-auto"
              />
            </div>
            <div className="md:col-span-7">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">FOUNDED IN 2023</h3>
                  <p>
                    DREAM HOUSE BUILDERS LTD was founded by a team of master craftsmen with a shared passion for historic preservation and fine woodworking. Starting with small restoration projects, we quickly gained recognition for our attention to detail and respect for historical integrity.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">EXPERTISE IN HERITAGE RESTORATION</h3>
                  <p>
                    Our team brings together decades of combined experience in period-accurate restoration, traditional woodworking techniques, and historical preservation. This expertise allows us to tackle even the most challenging restoration projects with confidence and precision.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">COMMITMENT TO CRAFTSMANSHIP</h3>
                  <p>
                    From the beginning, we made a formal commitment to excellence in craftsmanship, pledging to use traditional techniques and high-quality materials in all our restoration work. This commitment has earned us a reputation for delivering exceptional results that honor the past.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">TODAY</h3>
                  <p>
                    Today, DREAM HOUSE BUILDERS LTD stands as a trusted name in historic home restoration and artisan carpentry. Our portfolio includes successful restoration projects that have breathed new life into heritage properties while preserving their character and historical significance.
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
                name: "Harpreet Singh",
                position: "Founder & Master Craftsman",
                bio: "With over 25 years of experience in restoration and fine woodworking, Harpreet leads our team with a focus on craftsmanship and historical authenticity."
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
                title: "Historic Home Restoration",
                description: "Comprehensive restoration services for historic homes, preserving original character while updating functionality for modern living."
              },
              {
                title: "Period-Accurate Woodworking",
                description: "Expert carpentry that matches the style and techniques of the original period, ensuring seamless repairs and additions."
              },
              {
                title: "Custom Furniture Restoration",
                description: "Meticulous restoration of antique and period furniture, bringing cherished pieces back to their former glory."
              },
              {
                title: "Structural Repairs",
                description: "Skilled repairs to maintain the structural integrity of historic homes while preserving their architectural heritage."
              },
              {
                title: "Interior Woodwork",
                description: "Custom interior woodwork including trim, moldings, and built-ins that match the style and craftsmanship of historic homes."
              },
              {
                title: "Heritage Preservation",
                description: "Expert guidance on preserving the historical significance of your property while making necessary updates for modern living."
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
                Our approach to restoration and carpentry is built on four key pillars: Historical Accuracy, Craftsmanship, Sustainability, and Excellence. We believe that the best results come from respecting the original design, using traditional techniques, choosing environmentally responsible materials, and maintaining the highest standards in everything we do.
              </p>
              <p>
                Each project begins with a thorough assessment of the property's historical significance and current condition. We then apply our expertise to develop restoration plans that preserve the original character while addressing necessary updates. Throughout the process, we maintain open communication with our clients, ensuring they are partners in the journey from assessment to completion.
              </p>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-[#917b53] pl-6">
                <h3 className="text-xl font-semibold mb-2">Historical Accuracy</h3>
                <p>We research and respect the original design and construction methods to ensure period-accurate restoration.</p>
              </div>
              <div className="border-l-4 border-[#917b53] pl-6">
                <h3 className="text-xl font-semibold mb-2">Craftsmanship</h3>
                <p>We employ traditional woodworking techniques and master craftsmen to deliver exceptional results.</p>
              </div>
              <div className="border-l-4 border-[#917b53] pl-6">
                <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                <p>We choose environmentally responsible materials and methods that respect both the past and the future.</p>
              </div>
              <div className="border-l-4 border-[#917b53] pl-6">
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p>We are committed to the highest standards of quality, attention to detail, and professional service.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
