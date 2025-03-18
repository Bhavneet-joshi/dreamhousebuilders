export default function ProjectSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 border-b border-[rgba(0,0,0,0.1)]">
      <div className="h-96 md:h-auto relative">
        <img 
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
          alt="Modern interior design" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="h-96 md:h-auto relative">
        <img 
          src="https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
          alt="Modern building exterior with stairs" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
