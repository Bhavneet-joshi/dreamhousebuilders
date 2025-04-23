import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-[rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">DREAM HOUSE BUILDERS LTD</h3>
            <p className="text-sm leading-relaxed">
              Creating iconic buildings and spaces that transform cities and improve lives through thoughtful, sustainable design.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about#services" className="hover:text-[#917b53] transition">Services</Link></li>
              <li><Link href="/about" className="hover:text-[#917b53] transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#917b53] transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">NEWSLETTER</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter to receive updates and news.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-grow border border-[#232323]/10 p-2 bg-transparent text-sm"
              />
              <button 
                type="submit" 
                className="bg-[#232323] text-white py-2 px-4 text-sm hover:bg-[#232323]/90 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-[rgba(0,0,0,0.1)] text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} DREAM HOUSE BUILDERS LTD. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#917b53] transition">Privacy Policy</a>
            <a href="#" className="hover:text-[#917b53] transition">Terms of Service</a>
            <a href="#" className="hover:text-[#917b53] transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
