export default function ProjectSection() {
    return (
      <section className="grid grid-cols-1 md:grid-cols-2 border-b border-[rgba(0,0,0,0.1)]">
        <div className="h-96 md:h-auto relative">
          <img 
            src="/attached_assets/c4.webp" 
            alt="Modern interior design" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-96 md:h-auto relative">
          <img 
            src="/attached_assets/c5.webp" 
            alt="Modern building exterior" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    );
  }
  