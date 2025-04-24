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
    path: "/projects"
  },
  {
    name: "CONTACT",
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
              DREAM HOUSE BUILDERS LTD
            </Link>
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
          {navigationItems.map((item) => (
            <div 
              key={item.name}
              className="hidden md:block md:col-span-2 py-4 px-6 border-l border-[rgba(0,0,0,0.1)] relative"
              onMouseEnter={() => toggleDropdown(item.name)}
              onMouseLeave={closeDropdowns}
            >
              <button className="flex items-center justify-between w-full">
                {item.name} <span className="ml-2 w-1 h-1 rounded-full bg-[#232323]"></span>
              </button>
              {item.dropdown && (
                <div className="absolute top-full left-0 w-48 bg-white shadow-lg py-2 hidden group-hover:block">
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.path}
                      href={dropdownItem.path}
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
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
          </div>
        )}
      </div>
    </header>
  );
}
