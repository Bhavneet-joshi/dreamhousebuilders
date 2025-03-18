import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navigationItems = [
  {
    name: "ABOUT US",
    path: "/about",
    dropdown: [
      { name: "Our Story", path: "/about#story" },
      { name: "Our Team", path: "/about#team" },
      { name: "Our Approach", path: "/about#approach" }
    ]
  },
  {
    name: "PROJECTS",
    path: "/projects",
    dropdown: [
      { name: "Residential", path: "/projects?category=Residential" },
      { name: "Commercial", path: "/projects?category=Commercial" },
      { name: "Industrial", path: "/projects?category=Industrial" }
    ]
  },
  {
    name: "NEWS",
    path: "/news",
    dropdown: [
      { name: "Latest", path: "/news?filter=latest" },
      { name: "Archive", path: "/news?filter=archive" },
      { name: "Press", path: "/news?filter=press" }
    ]
  },
  {
    name: "CONTACTS",
    path: "/contact",
    dropdown: [
      { name: "Locations", path: "/contact#locations" },
      { name: "Get in Touch", path: "/contact#touch" },
      { name: "Careers", path: "/contact#careers" }
    ]
  }
];

export default function Header() {
  const [location] = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="border-b border-[rgba(0,0,0,0.1)]">
      <div className="container mx-auto">
        <nav className="grid grid-cols-12 border-b border-[rgba(0,0,0,0.1)]">
          {/* Logo */}
          <div className="col-span-6 md:col-span-3 py-4 px-6 border-r border-[rgba(0,0,0,0.1)] flex items-center">
            <Link href="/" className="font-semibold">
              NOVA CONSTRUCT
            </Link>
          </div>

          {/* Language Selector (Desktop) */}
          <div className="hidden md:flex md:col-span-1 py-4 px-6 border-r border-[rgba(0,0,0,0.1)] items-center justify-center">
            <div className="relative group">
              <button className="flex items-center">
                EN <span className="ml-2 w-1 h-1 rounded-full bg-[#232323]"></span>
              </button>
              <div className="absolute left-0 hidden group-hover:block bg-[#f5f2eb] min-w-[100px] shadow-md z-10">
                <a href="#" className="block py-2 px-4 hover:bg-[#917b53]/10">FR</a>
                <a href="#" className="block py-2 px-4 hover:bg-[#917b53]/10">DE</a>
                <a href="#" className="block py-2 px-4 hover:bg-[#917b53]/10">ES</a>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="col-span-6 md:hidden flex justify-end items-center pr-6">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block md:col-span-2 py-4 px-6 border-r border-[rgba(0,0,0,0.1)] relative">
            <div 
              className="relative"
              onMouseEnter={() => toggleDropdown("ABOUT US")}
              onMouseLeave={closeDropdowns}
            >
              <button className="flex items-center justify-between w-full">
                ABOUT US <span className="ml-2 w-1 h-1 rounded-full bg-[#232323]"></span>
              </button>
              {activeDropdown === "ABOUT US" && (
                <div className="absolute left-0 top-full bg-[#f5f2eb] min-w-[160px] shadow-md z-10">
                  {navigationItems[0].dropdown.map((item) => (
                    <Link 
                      key={item.path} 
                      href={item.path} 
                      className="block py-2 px-4 hover:bg-[#917b53]/10"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Empty Space */}
          <div className="hidden md:block md:col-span-1 lg:col-span-3"></div>

          {/* Desktop Navigation Items */}
          {navigationItems.slice(1).map((item) => (
            <div 
              key={item.name}
              className="hidden md:block md:col-span-2 py-4 px-6 border-l border-[rgba(0,0,0,0.1)] relative"
              onMouseEnter={() => toggleDropdown(item.name)}
              onMouseLeave={closeDropdowns}
            >
              <button className="flex items-center justify-between w-full">
                {item.name} <span className="ml-2 w-1 h-1 rounded-full bg-[#232323]"></span>
              </button>
              {activeDropdown === item.name && (
                <div className="absolute left-0 top-full bg-[#f5f2eb] min-w-[160px] shadow-md z-10">
                  {item.dropdown.map((dropdownItem) => (
                    <Link 
                      key={dropdownItem.path} 
                      href={dropdownItem.path} 
                      className="block py-2 px-4 hover:bg-[#917b53]/10"
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#f5f2eb] border-b border-[rgba(0,0,0,0.1)]">
            {navigationItems.map((item) => (
              <div key={item.name} className="border-b border-[rgba(0,0,0,0.1)] last:border-b-0">
                <button 
                  className="flex items-center justify-between w-full p-4"
                  onClick={() => toggleDropdown(item.name)}
                >
                  {item.name} <span className="ml-2 w-1 h-1 rounded-full bg-[#232323]"></span>
                </button>
                {activeDropdown === item.name && (
                  <div className="bg-[#f5f2eb] pl-8">
                    {item.dropdown.map((dropdownItem) => (
                      <Link 
                        key={dropdownItem.path} 
                        href={dropdownItem.path} 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-3 px-4 hover:bg-[#917b53]/10"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* Language Selector (Mobile) */}
            <div className="p-4 border-t border-[rgba(0,0,0,0.1)]">
              <button 
                className="flex items-center"
                onClick={() => toggleDropdown("LANGUAGE")}
              >
                EN <span className="ml-2 w-1 h-1 rounded-full bg-[#232323]"></span>
              </button>
              {activeDropdown === "LANGUAGE" && (
                <div className="pl-8 mt-2">
                  <a href="#" className="block py-2 hover:bg-[#917b53]/10">FR</a>
                  <a href="#" className="block py-2 hover:bg-[#917b53]/10">DE</a>
                  <a href="#" className="block py-2 hover:bg-[#917b53]/10">ES</a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
