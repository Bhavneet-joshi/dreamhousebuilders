import express from "express";
import { createServer } from "http";

// Sample projects data
const projects = [
  {
    id: 1,
    title: "Modern Residential Tower",
    category: "Residential",
    description: "Luxury residential tower with 200 apartments featuring smart home technology and sustainable design elements.",
    imageUrl: "https://images.unsplash.com/photo-1606946887361-78feb162a525?q=80&w=1000",
    location: "Sydney, Australia",
    year: 2022,
    featured: true
  },
  {
    id: 2,
    title: "Urban Office Complex",
    category: "Commercial",
    description: "State-of-the-art office complex designed for modern work environments with flexible spaces and collaborative areas.",
    imageUrl: "https://images.unsplash.com/photo-1554041243-9dad330c1d1d?q=80&w=1000",
    location: "London, UK",
    year: 2021,
    featured: true
  },
  {
    id: 3,
    title: "Sustainable Shopping Center",
    category: "Commercial",
    description: "Eco-friendly shopping center with solar panels, rainwater harvesting, and energy-efficient systems throughout.",
    imageUrl: "https://images.unsplash.com/photo-1617900906639-cab7adceb499?q=80&w=1000",
    location: "Milan, Italy",
    year: 2023,
    featured: true
  },
  {
    id: 4,
    title: "Luxury Villa Complex",
    category: "Residential",
    description: "Premium villa complex with private gardens, swimming pools, and smart home integration for ultimate comfort.",
    imageUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000",
    location: "Dubai, UAE",
    year: 2022,
    featured: false
  },
  {
    id: 5,
    title: "Industrial Production Facility",
    category: "Industrial",
    description: "Modern industrial facility with advanced automation systems and sustainable manufacturing processes.",
    imageUrl: "https://images.unsplash.com/photo-1521798928596-9fae7e05bcf8?q=80&w=1000",
    location: "Toronto, Canada",
    year: 2021,
    featured: false
  },
  {
    id: 6,
    title: "Urban Public Library",
    category: "Public",
    description: "Contemporary public library with open spaces, digital resources, and community gathering areas.",
    imageUrl: "https://images.unsplash.com/photo-1562932831-afcfe48b5786?q=80&w=1000",
    location: "Berlin, Germany",
    year: 2023,
    featured: false
  }
];

const app = express();
app.use(express.json());

// Enable CORS for all routes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// API routes
app.get("/api/projects", (req, res) => {
  try {
    const category = req.query.category;
    let filteredProjects;
    
    if (category) {
      filteredProjects = projects.filter(
        project => project.category.toLowerCase() === category.toLowerCase()
      );
    } else {
      filteredProjects = projects;
    }
    
    res.json(filteredProjects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ message: "Failed to fetch projects" });
  }
});

app.get("/api/projects/featured", (req, res) => {
  try {
    const featuredProjects = projects.filter(project => project.featured);
    res.json(featuredProjects);
  } catch (error) {
    console.error("Error fetching featured projects:", error);
    res.status(500).json({ message: "Failed to fetch featured projects" });
  }
});

app.get("/api/projects/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid project ID" });
    }
    
    const project = projects.find(p => p.id === id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    
    res.json(project);
  } catch (error) {
    console.error("Error fetching project:", error);
    res.status(500).json({ message: "Failed to fetch project" });
  }
});

// Contact form endpoint
app.post("/api/contact", (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Simple validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        message: "Invalid contact form data", 
        errors: { 
          name: name ? null : "Name is required",
          email: email ? null : "Email is required",
          subject: subject ? null : "Subject is required",
          message: message ? null : "Message is required"
        } 
      });
    }
    
    // In a real app, you would save this to a database
    console.log("Contact form submission:", { name, email, subject, message });
    
    res.status(201).json({ 
      message: "Contact message sent successfully",
      data: { name, email, subject, message, createdAt: new Date().toISOString() }
    });
  } catch (error) {
    console.error("Error creating contact message:", error);
    res.status(500).json({ message: "Failed to send contact message" });
  }
});

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
}).on('error', (err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
}); 