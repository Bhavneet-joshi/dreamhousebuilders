import { ArrowRight } from "lucide-react";

export default function IntroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 border-b border-[rgba(0,0,0,0.1)]">
      <div className="p-8 md:p-12 border-r border-[rgba(0,0,0,0.1)]">
        <h2 className="text-2xl font-semibold leading-tight mb-6">
          DELIVERING ICONIC PROJECTS IN PARTNERSHIP WITH OUR CLIENTS AROUND THE WORLD
        </h2>
        <div className="mt-8 flex items-center">
          <div className="w-10 h-10 rounded-full border border-[#232323] flex items-center justify-center mr-4">
            <ArrowRight className="w-5 h-5" />
          </div>
          <span>Learn more</span>
        </div>
      </div>
      <div className="p-8 md:p-12 border-r border-[rgba(0,0,0,0.1)]">
        <p className="text-base leading-relaxed">
          With offices in Australia, the Middle East, United Kingdom and Canada, we have a proven track record of delivering iconic and world-class projects for public and private clients in major cities and regional centers. We pride ourselves on our consultative relationships with clients and stakeholders to create common goals, raising standards forward in every phase of programme delivery.
        </p>
      </div>
      <div className="p-8 md:p-12">
        <p className="text-base leading-relaxed">
          We do this through our quality systems, our market-leading health and safety approaches and the positive impacts we create through our projects – on society, local communities and the environment. Our commitment to excellence is reflected in every detail of our work.
        </p>
      </div>
    </section>
  );
}
