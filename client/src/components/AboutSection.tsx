import { Instagram, Facebook } from "lucide-react";

export default function AboutSection() {
  const socialLinks = [
    { name: "INSTAGRAM", icon: <Instagram className="w-4 h-4 mr-2" />, url: "https://www.instagram.com/dreamhouse_builders_nz" },
    { name: "FACEBOOK", icon: <Facebook className="w-4 h-4 mr-2" />, url: "https://www.facebook.com/dream.house.builders.ltd" }
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-12 border-b border-[rgba(0,0,0,0.1)]">
      <div className="md:col-span-5 h-96 md:h-auto relative">
        <img 
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1174&q=80" 
          alt="Hand-carved woodwork detail" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:col-span-7 p-8 md:p-12">
        <h2 className="text-2xl font-semibold mb-8 text-[#917b53]">
          WE ARE DEDICATED TO PRESERVING HERITAGE THROUGH METICULOUS CRAFTSMANSHIP AND ATTENTION TO DETAIL.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8">
          <div className="md:col-span-4 text-sm font-medium">ABOUT US</div>
          <div className="md:col-span-8">
            <div className="mb-6">
              <span className="text-xs">(01)</span>
              <p>FOUNDED IN 2023, DREAM HOUSE BUILDERS LTD SPECIALIZES IN HISTORIC HOME RESTORATION AND BESPOKE CARPENTRY THAT HONORS THE PAST.</p>
            </div>
            <div className="mb-6">
              <span className="text-xs">(02)</span>
              <p>DESPITE BEING A NEW COMPANY, OUR TEAM OF MASTER CRAFTSMEN BRINGS DECADES OF COMBINED EXPERIENCE IN PERIOD-ACCURATE RESTORATION AND FINE WOODWORKING.</p>
            </div>
          </div>
          
          <div className="md:col-span-4 text-sm font-medium">OUR APPROACH</div>
          <div className="md:col-span-8">
            <div className="mb-6">
              <span className="text-xs">(03)</span>
              <p>WE COMBINE TRADITIONAL WOODWORKING TECHNIQUES WITH MODERN EXPERTISE TO DELIVER EXCEPTIONAL RESULTS, RESPECTING THE HISTORICAL INTEGRITY OF EACH PROJECT.</p>
            </div>
          </div>
          
          <div className="md:col-span-4 text-sm font-medium">OUR MISSION</div>
          <div className="md:col-span-8">
            <div className="mb-6">
              <span className="text-xs">(04)</span>
              <p>OUR MISSION IS TO PRESERVE THE BEAUTY AND CHARACTER OF HISTORIC HOMES THROUGH METICULOUS RESTORATION AND EXPERT CARPENTRY, BUILDING OUR REPUTATION ONE PROJECT AT A TIME.</p>
            </div>
          </div>
          
          <div className="md:col-span-4 text-sm font-medium">SOCIAL MEDIA</div>
          <div className="md:col-span-8">
            <ul className="space-y-2">
              {socialLinks.map(link => (
                <li key={link.name}>
                  <a 
                    href={link.url} 
                    className="hover:text-[#917b53] transition flex items-center"
                  >
                    {link.icon} {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
