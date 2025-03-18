import { users, projects, contactMessages, type User, type InsertUser, type Project, type InsertProject, type ContactMessage, type InsertContactMessage } from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Project methods
  getAllProjects(): Promise<Project[]>;
  getProjectById(id: number): Promise<Project | undefined>;
  getProjectsByCategory(category: string): Promise<Project[]>;
  getFeaturedProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  
  // Contact methods
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getAllContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private projects: Map<number, Project>;
  private contactMessages: Map<number, ContactMessage>;
  private userCurrentId: number;
  private projectCurrentId: number;
  private contactMessageCurrentId: number;

  constructor() {
    this.users = new Map();
    this.projects = new Map();
    this.contactMessages = new Map();
    this.userCurrentId = 1;
    this.projectCurrentId = 1;
    this.contactMessageCurrentId = 1;
    
    // Add some initial projects
    this.initializeProjects();
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Project methods
  async getAllProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }
  
  async getProjectById(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }
  
  async getProjectsByCategory(category: string): Promise<Project[]> {
    return Array.from(this.projects.values()).filter(
      (project) => project.category === category
    );
  }
  
  async getFeaturedProjects(): Promise<Project[]> {
    return Array.from(this.projects.values()).filter(
      (project) => project.featured
    );
  }
  
  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.projectCurrentId++;
    const project: Project = { ...insertProject, id };
    this.projects.set(id, project);
    return project;
  }
  
  // Contact methods
  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.contactMessageCurrentId++;
    const createdAt = new Date().toISOString();
    const message: ContactMessage = { ...insertMessage, id, createdAt };
    this.contactMessages.set(id, message);
    return message;
  }
  
  async getAllContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }
  
  // Initialize with sample projects
  private initializeProjects() {
    const sampleProjects: InsertProject[] = [
      {
        title: "Modern Residential Tower",
        category: "Residential",
        description: "Luxury residential tower with 200 apartments featuring smart home technology and sustainable design elements.",
        imageUrl: "https://images.unsplash.com/photo-1606946887361-78feb162a525?q=80&w=1000",
        location: "Sydney, Australia",
        year: 2022,
        featured: true
      },
      {
        title: "Urban Office Complex",
        category: "Commercial",
        description: "State-of-the-art office complex designed for modern work environments with flexible spaces and collaborative areas.",
        imageUrl: "https://images.unsplash.com/photo-1554041243-9dad330c1d1d?q=80&w=1000",
        location: "London, UK",
        year: 2021,
        featured: true
      },
      {
        title: "Sustainable Shopping Center",
        category: "Commercial",
        description: "Eco-friendly shopping center with solar panels, rainwater harvesting, and energy-efficient systems throughout.",
        imageUrl: "https://images.unsplash.com/photo-1617900906639-cab7adceb499?q=80&w=1000",
        location: "Milan, Italy",
        year: 2023,
        featured: true
      },
      {
        title: "Luxury Villa Complex",
        category: "Residential",
        description: "Premium villa complex with private gardens, swimming pools, and smart home integration for ultimate comfort.",
        imageUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000",
        location: "Dubai, UAE",
        year: 2022,
        featured: false
      },
      {
        title: "Industrial Production Facility",
        category: "Industrial",
        description: "Modern industrial facility with advanced automation systems and sustainable manufacturing processes.",
        imageUrl: "https://images.unsplash.com/photo-1521798928596-9fae7e05bcf8?q=80&w=1000",
        location: "Toronto, Canada",
        year: 2021,
        featured: false
      },
      {
        title: "Urban Public Library",
        category: "Public",
        description: "Contemporary public library with open spaces, digital resources, and community gathering areas.",
        imageUrl: "https://images.unsplash.com/photo-1562932831-afcfe48b5786?q=80&w=1000",
        location: "Berlin, Germany",
        year: 2023,
        featured: false
      }
    ];
    
    sampleProjects.forEach(project => {
      this.createProject(project);
    });
  }
}

export const storage = new MemStorage();
