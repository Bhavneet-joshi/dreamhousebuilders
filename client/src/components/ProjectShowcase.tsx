import { Link } from "wouter";

export default function ProjectShowcase() {
   return (
    <section className="grid grid-cols-1 md:grid-cols-2 border-b border-[rgba(0,0,0,0.1)]">
      <div className="h-96 md:h-auto">
        <div className="grid grid-cols-2 h-full">
          <div className="col-span-1 h-full relative border-r border-[rgba(0,0,0,0.1)]">
            <img 
              src="https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Modern building exterior" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 h-full grid grid-rows-2">
            <div className="row-span-1 border-b border-[rgba(0,0,0,0.1)] relative">
              <img 
                src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Architectural detail" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="row-span-1 relative">
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Modern interior" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-8 md:p-12 flex flex-col justify-center">
        <h2 className="text-2xl font-semibold mb-8">CONVENIENCE AND COMFORT</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <p className="text-base leading-relaxed">
            Luxurious interiors and functional spaces will make the home not just a place to live, but an oasis of comfort, where every detail has been thoughtfully designed for your convenience.
          </p>
          <p className="text-base leading-relaxed">
            Intelligent control systems allow you to control the atmosphere of your home with a single touch. Adjust light, temperature and security to create the perfect space for your life.
          </p>
        </div>
        <div className="mt-8">
          <Link href="/contact" className="inline-block bg-[#232323] text-white py-3 px-6 hover:bg-[#232323]/90 transition">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
