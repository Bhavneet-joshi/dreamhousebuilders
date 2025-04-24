import { useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
  date: string;
}

export default function TestimonialsSection() {
  const [testimonials] = useState<Testimonial[]>([
    {
      id: 1,
      name: "Sarah Thompson",
      role: "Homeowner",
      location: "Auckland",
      content: "Dream House Builders did an exceptional job restoring our Victorian home. Their attention to detail and craftsmanship was outstanding. They preserved the original character while making necessary updates. Highly recommend!",
      rating: 5,
      date: "March 2023"
    },
    {
      id: 2,
      name: "James Wilson",
      role: "Property Developer",
      location: "Wellington",
      content: "We've worked with Dream House Builders on several heritage restoration projects. Their expertise in period-accurate woodwork and commitment to quality has made them our go-to contractor for all historic properties.",
      rating: 5,
      date: "January 2023"
    },
    {
      id: 3,
      name: "Emma and Michael Chen",
      role: "Homeowners",
      location: "Christchurch",
      content: "The team at Dream House Builders restored our family's antique furniture collection with incredible skill. They took the time to understand the history of each piece and used traditional techniques to preserve their beauty.",
      rating: 5,
      date: "February 2023"
    },
    {
      id: 4,
      name: "Robert O'Connor",
      role: "Architect",
      location: "Hamilton",
      content: "As an architect specializing in heritage buildings, I've collaborated with Dream House Builders on numerous projects. Their knowledge of historical construction methods and dedication to authenticity is impressive.",
      rating: 5,
      date: "April 2023"
    },
    {
      id: 5,
      name: "Lisa and David Parker",
      role: "Homeowners",
      location: "Dunedin",
      content: "We had Dream House Builders create custom cabinetry for our heritage home. The craftsmanship was exceptional, and they took great care to match the existing architectural details. The result is beautiful and functional.",
      rating: 5,
      date: "March 2023"
    }
  ]);

  return (
    <section className="py-16 bg-[#f5f2eb]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience working with Dream House Builders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex-1">
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.location}</p>
                </div>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg 
                      key={i} 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-yellow-400" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
              <p className="text-sm text-gray-500">{testimonial.date}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://www.google.com/maps/place/Dream+House+Builders+Ltd" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#917b53] hover:underline"
          >
            <span>Read more reviews on Google</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 