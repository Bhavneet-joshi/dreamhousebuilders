import { useEffect } from "react";
import ContactSection from "@/components/ContactSection";
import { Separator } from "@/components/ui/separator";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us - DREAM HOUSE BUILDERS LTD";
  }, []);

  return (
    <div>
      <section className="py-16 border-b border-[rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">CONTACT US</h1>
          <p className="max-w-3xl text-lg mb-6">
            We'd love to hear from you whether you're interested in our services, have a question about our projects, or want to discuss potential collaboration opportunities.
          </p>
          <p className="max-w-3xl mb-8">
            Our team is ready to assist you and provide the information you need. Choose the most convenient way to reach us using the options below.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="border border-[rgba(0,0,0,0.1)] p-6">
              <h3 className="text-xl font-semibold mb-4">By Phone</h3>
              <p className="mb-2">General Inquiries:</p>
              <p className="mb-4 text-lg">‪+64 210520060</p>
              <p className="mb-2">Client Support:</p>
              <p className="text-lg">‪+64 210520060</p>
            </div>
            <div className="border border-[rgba(0,0,0,0.1)] p-6">
              <h3 className="text-xl font-semibold mb-4">By Email</h3>
              <p className="mb-2">General Inquiries:</p>
              <p className="mb-4 text-lg">dreamhousebuilders@outlook.co.nz</p>
              <p className="mb-2">Project Proposals:</p>
              <p className="text-lg">dreamhousebuilders@outlook.co.nz</p>
            </div>
            <div className="border border-[rgba(0,0,0,0.1)] p-6">
              <h3 className="text-xl font-semibold mb-4">‪Social Media</h3>
              <p className="mb-4">Connect with us on social media for the latest updates, project showcases, and industry insights.</p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/dreamhouse_builders_nz" target="_blank" rel="noopener noreferrer" className="hover:text-[#917b53] transition">Instagram</a>
                <a href="https://www.facebook.com/dream.house.builders.ltd" target="_blank" rel="noopener noreferrer" className="hover:text-[#917b53] transition">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ContactSection />
      
      <section id="careers" className="py-16 border-b border-[rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">CAREERS AT DREAM HOUSE BUILDERS LTD</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="mb-6">
                At DREAM HOUSE BUILDERS LTD, we're always looking for talented individuals who share our passion for innovative architecture and sustainable construction. We offer a dynamic work environment, challenging projects, and opportunities for professional growth.
              </p>
              <p>
                If you're interested in joining our team, check out our current openings below or send your resume and portfolio to dreamhousebuilders@outlook.co.nz.
              </p>
            </div>
            <div className="space-y-6">
              <div className="border border-[rgba(0,0,0,0.1)] p-6">
                <h2 className="text-xl font-semibold mb-2">Sorrry There are currently no oppeening in the company.</h2>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="faq" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12">FREQUENTLY ASKED QUESTIONS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">What services does DREAM HOUSE BUILDERS LTD offer?</h3>
              <p>
                We offer a comprehensive range of services including architectural design, construction management, sustainability consulting, urban planning, interior design, and renovation & restoration.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">What types of projects do you work on?</h3>
              <p>
                Our portfolio includes residential, commercial, industrial, and public projects of various scales, from private homes to large commercial complexes and public institutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">How do I start a project with DREAM HOUSE BUILDERS LTD?</h3>
              <p>
                Contact us through our website, email, or phone to schedule an initial consultation. We'll discuss your vision, requirements, and budget to determine how we can best serve your needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">What is your approach to sustainability?</h3>
              <p>
                Sustainability is a core value at DREAM HOUSE BUILDERS LTD. We integrate eco-friendly practices into all our projects, focusing on energy efficiency, sustainable materials, waste reduction, and creating healthy environments.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Do you work internationally?</h3>
              <p>
                Yes, we have offices in Australia, the Middle East, United Kingdom, and Canada, and we've completed projects in 62 cities worldwide. We're equipped to handle international projects of all sizes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">How do you ensure quality in your projects?</h3>
              <p>
                We maintain rigorous quality standards throughout our design and construction processes. Our team includes skilled professionals who are committed to excellence, and we utilize advanced technologies and methodologies to ensure the highest quality outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
