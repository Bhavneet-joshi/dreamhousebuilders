import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 border-b border-[rgba(0,0,0,0.1)]">
      <div className="p-8 md:p-12 border-r border-[rgba(0,0,0,0.1)] flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          ARTISAN CARPENTRY & TIMELESS RESTORATION
        </h1>
        <p className="text-xl mb-6 text-[#917b53]">
          Breathing new life into historic homes with master craftsmanship
        </p>
        <div className="mt-auto">
          <Link href="/contact" className="block bg-[#917b53] text-white py-4 px-6 text-center hover:bg-[#917b53]/90 transition">
            Contact us
          </Link>
        </div>
      </div>
      <div className="relative h-96 md:h-auto overflow-hidden">
        <img 
          src="attached_assets/w2.jpg"
          alt="Master carpenter at work" 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-white/90 transition">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
}
