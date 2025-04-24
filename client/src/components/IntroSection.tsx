import { ArrowRight } from "lucide-react";

export default function IntroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 border-b border-[rgba(0,0,0,0.1)]">
      <div className="p-8 md:p-12 border-r border-[rgba(0,0,0,0.1)]">
        <h2 className="text-2xl font-semibold leading-tight mb-6">
          REVIVING HOMES, RESTORING HERITAGE WITH EXPERT CRAFTSMANSHIP
        </h2>
        <div className="mt-8 flex items-center">
          <div className="w-10 h-10 rounded-full border border-[#917b53] flex items-center justify-center mr-4">
            <ArrowRight className="w-5 h-5" />
          </div>
          <span>Learn more</span>
        </div>
      </div>
      <div className="p-8 md:p-12 border-r border-[rgba(0,0,0,0.1)]">
        <p className="text-base leading-relaxed">
          Our master carpenters specialize in breathing new life into historic homes through meticulous attention to detail and respect for historical integrity. We combine traditional woodworking techniques with modern expertise to preserve the character of your home while enhancing its functionality.
        </p>
      </div>
      <div className="p-8 md:p-12">
        <p className="text-base leading-relaxed">
          From hand-carved woodwork and period-accurate restoration to structural repairs that maintain historical authenticity, we take pride in delivering exceptional results that honor the past. Our commitment to quality materials and sustainable practices ensures that your restored spaces are both beautiful and environmentally conscious.
        </p>
      </div>
    </section>
  );
}
