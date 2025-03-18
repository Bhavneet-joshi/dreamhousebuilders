import { useEffect } from "react";
import { useLocation } from "wouter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

export default function News() {
  const [location] = useLocation();
  
  useEffect(() => {
    document.title = "News - Nova Construct";
  }, []);
  
  // Get filter parameter from URL if present
  const getFilterFromUrl = () => {
    const params = new URLSearchParams(location.split("?")[1]);
    return params.get("filter") || "latest";
  };
  
  const currentFilter = getFilterFromUrl();
  
  const newsArticles = [
    {
      id: 1,
      title: "Nova Construct Wins International Award for Sustainable Design",
      category: "Awards",
      date: "June 15, 2023",
      image: "https://images.unsplash.com/photo-1561013053-082a2b8ebfbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      excerpt: "Our Greenfield Office Tower project has been recognized for its innovative approach to sustainable urban architecture.",
      type: "latest"
    },
    {
      id: 2,
      title: "Expanding Our Presence in Southeast Asia",
      category: "Company News",
      date: "May 28, 2023",
      image: "https://images.unsplash.com/photo-1577427682430-4bbf8909bc1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      excerpt: "Nova Construct is proud to announce the opening of our new office in Singapore, expanding our reach in the rapidly growing Southeast Asian market.",
      type: "latest"
    },
    {
      id: 3,
      title: "Revolutionizing Residential Design: The Future of Urban Living",
      category: "Insights",
      date: "April 10, 2023",
      image: "https://images.unsplash.com/photo-1578075846071-850e1c4d02ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      excerpt: "Our chief architect discusses the evolving trends in residential design and how we're addressing the challenges of urban living.",
      type: "latest"
    },
    {
      id: 4,
      title: "Nova Construct Partners with Global Sustainability Initiative",
      category: "Partnerships",
      date: "March 5, 2023",
      image: "https://images.unsplash.com/photo-1586091490108-3e3986352256?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      excerpt: "We're proud to announce our partnership with the Global Sustainability Initiative, furthering our commitment to environmentally responsible construction.",
      type: "latest"
    },
    {
      id: 5,
      title: "Completion of the Landmark Cultural Center",
      category: "Projects",
      date: "January 22, 2023",
      image: "https://images.unsplash.com/photo-1604030121543-12145b5fb93e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      excerpt: "After three years of design and construction, we're excited to announce the completion of the Landmark Cultural Center, a new hub for arts and community engagement.",
      type: "latest"
    },
    {
      id: 6,
      title: "Innovative Materials Changing the Construction Industry",
      category: "Insights",
      date: "December 10, 2022",
      image: "https://images.unsplash.com/photo-1577637932128-a0d18666bd9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      excerpt: "Our research team explores the most promising new materials that are transforming how we build and design spaces.",
      type: "archive"
    },
    {
      id: 7,
      title: "Nova Construct Featured in Architectural Digest",
      category: "Press",
      date: "November 15, 2022",
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      excerpt: "Our recent residential tower project has been featured in Architectural Digest as a prime example of modern urban living solutions.",
      type: "press"
    },
    {
      id: 8,
      title: "The Impact of Climate Change on Architectural Design",
      category: "Insights",
      date: "October 28, 2022",
      image: "https://images.unsplash.com/photo-1606946887361-78feb162a525?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      excerpt: "Our sustainability director discusses how climate change is influencing architectural decisions and shaping our approach to design.",
      type: "archive"
    },
    {
      id: 9,
      title: "Nova Construct CEO Interview in Construction Today",
      category: "Press",
      date: "September 5, 2022",
      image: "https://images.unsplash.com/photo-1579538582954-1c59e628b559?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      excerpt: "Our CEO shares insights on the future of construction, our company's growth, and our commitment to sustainable building practices.",
      type: "press"
    }
  ];
  
  // Filter articles based on the current filter
  const filteredArticles = currentFilter === "latest" 
    ? newsArticles.filter(article => article.type === "latest")
    : currentFilter === "archive"
    ? newsArticles.filter(article => article.type === "archive")
    : currentFilter === "press"
    ? newsArticles.filter(article => article.type === "press")
    : newsArticles;
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">NEWS & INSIGHTS</h1>
      
      <Tabs defaultValue={currentFilter} className="mb-12">
        <TabsList className="border-b border-[rgba(0,0,0,0.1)] w-full justify-start rounded-none space-x-4 bg-transparent">
          <TabsTrigger 
            value="latest" 
            className="data-[state=active]:border-b-2 data-[state=active]:border-[#232323] px-4 py-2 rounded-none bg-transparent"
          >
            Latest News
          </TabsTrigger>
          <TabsTrigger 
            value="archive" 
            className="data-[state=active]:border-b-2 data-[state=active]:border-[#232323] px-4 py-2 rounded-none bg-transparent"
          >
            Archive
          </TabsTrigger>
          <TabsTrigger 
            value="press" 
            className="data-[state=active]:border-b-2 data-[state=active]:border-[#232323] px-4 py-2 rounded-none bg-transparent"
          >
            Press Coverage
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="latest" className="pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(article => (
              <div key={article.id} className="border border-[rgba(0,0,0,0.1)] overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-0 left-0 bg-[#232323] text-white px-3 py-1 text-xs">
                    {article.category}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-[#232323]/70 mb-2">{article.date}</p>
                  <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                  <p className="mb-4">{article.excerpt}</p>
                  <a href="#" className="text-[#917b53] hover:underline">Read more</a>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="archive" className="pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(article => (
              <div key={article.id} className="border border-[rgba(0,0,0,0.1)] overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-0 left-0 bg-[#232323] text-white px-3 py-1 text-xs">
                    {article.category}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-[#232323]/70 mb-2">{article.date}</p>
                  <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                  <p className="mb-4">{article.excerpt}</p>
                  <a href="#" className="text-[#917b53] hover:underline">Read more</a>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="press" className="pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(article => (
              <div key={article.id} className="border border-[rgba(0,0,0,0.1)] overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-0 left-0 bg-[#232323] text-white px-3 py-1 text-xs">
                    {article.category}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-[#232323]/70 mb-2">{article.date}</p>
                  <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                  <p className="mb-4">{article.excerpt}</p>
                  <a href="#" className="text-[#917b53] hover:underline">Read more</a>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      
      <Separator className="my-16" />
      
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">SUBSCRIBE TO OUR NEWSLETTER</h2>
        <div className="max-w-2xl">
          <p className="mb-6">
            Stay updated with the latest news, project highlights, and industry insights from Nova Construct. Subscribe to our newsletter to receive monthly updates directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow border border-[#232323]/10 p-3 bg-transparent"
              required
            />
            <button type="submit" className="bg-[#232323] text-white py-3 px-6 hover:bg-[#232323]/90 transition">
              Subscribe
            </button>
          </form>
          <p className="text-sm text-[#232323]/70 mt-3">
            By subscribing, you agree to receive marketing emails from Nova Construct. You can unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
}
