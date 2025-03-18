import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Project } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";

export default function Projects() {
  const [location] = useLocation();
  const [category, setCategory] = useState<string>("");
  
  useEffect(() => {
    document.title = "Projects - Nova Construct";
    
    // Extract category from URL if present
    const params = new URLSearchParams(location.split("?")[1]);
    const categoryParam = params.get("category");
    if (categoryParam) {
      setCategory(categoryParam);
    }
  }, [location]);
  
  const { data: projects, isLoading, isError } = useQuery<Project[]>({
    queryKey: ['/api/projects', category],
    queryFn: async ({ queryKey }) => {
      const [_, selectedCategory] = queryKey;
      const url = selectedCategory 
        ? `/api/projects?category=${selectedCategory}` 
        : '/api/projects';
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
      return response.json();
    },
  });
  
  const handleCategoryChange = (value: string) => {
    setCategory(value);
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">OUR PROJECTS</h1>
      
      <Tabs defaultValue={category || "all"} value={category || "all"} onValueChange={handleCategoryChange} className="mb-12">
        <TabsList className="border-b border-[rgba(0,0,0,0.1)] w-full justify-start rounded-none space-x-4 bg-transparent">
          <TabsTrigger 
            value="all" 
            className="data-[state=active]:border-b-2 data-[state=active]:border-[#232323] px-4 py-2 rounded-none bg-transparent"
          >
            All Projects
          </TabsTrigger>
          <TabsTrigger 
            value="Residential" 
            className="data-[state=active]:border-b-2 data-[state=active]:border-[#232323] px-4 py-2 rounded-none bg-transparent"
          >
            Residential
          </TabsTrigger>
          <TabsTrigger 
            value="Commercial" 
            className="data-[state=active]:border-b-2 data-[state=active]:border-[#232323] px-4 py-2 rounded-none bg-transparent"
          >
            Commercial
          </TabsTrigger>
          <TabsTrigger 
            value="Industrial" 
            className="data-[state=active]:border-b-2 data-[state=active]:border-[#232323] px-4 py-2 rounded-none bg-transparent"
          >
            Industrial
          </TabsTrigger>
          <TabsTrigger 
            value="Public" 
            className="data-[state=active]:border-b-2 data-[state=active]:border-[#232323] px-4 py-2 rounded-none bg-transparent"
          >
            Public
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="pt-8">
          {renderProjects()}
        </TabsContent>
        <TabsContent value="Residential" className="pt-8">
          {renderProjects()}
        </TabsContent>
        <TabsContent value="Commercial" className="pt-8">
          {renderProjects()}
        </TabsContent>
        <TabsContent value="Industrial" className="pt-8">
          {renderProjects()}
        </TabsContent>
        <TabsContent value="Public" className="pt-8">
          {renderProjects()}
        </TabsContent>
      </Tabs>
    </div>
  );
  
  function renderProjects() {
    if (isLoading) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="border border-[rgba(0,0,0,0.1)]">
              <Skeleton className="w-full h-64" />
              <div className="p-6">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2 mb-4" />
                <Skeleton className="h-20 w-full" />
              </div>
            </div>
          ))}
        </div>
      );
    }
    
    if (isError || !projects) {
      return (
        <div className="text-center p-8">
          <p className="text-red-500 mb-4">Failed to load projects</p>
          <Button onClick={() => window.location.reload()} variant="outline">
            Try Again
          </Button>
        </div>
      );
    }
    
    if (projects.length === 0) {
      return (
        <div className="text-center p-8">
          <p className="mb-4">No projects found in this category</p>
        </div>
      );
    }
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="border border-[rgba(0,0,0,0.1)] overflow-hidden group">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-[#232323]/70 mb-4">
                {project.location} | {project.year}
              </p>
              <p className="mb-4">{project.description}</p>
              <div className="inline-block bg-[#232323]/10 px-3 py-1 text-xs">
                {project.category}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
