import React from 'react';
import { Link, Outlet } from 'react-router';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import logoSrc from '../../imports/WhatsApp_Image_2026-06-19_at_1.56.20_PM.jpeg';
import { Menu, X, Linkedin, Github, Instagram, Youtube } from 'lucide-react';

export const MarketingLayout = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0F2C] text-white font-['Inter'] selection:bg-[#F5A623] selection:text-white">
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrolled ? 'h-16 bg-[#0A0F2C]/85 backdrop-blur-md border-b border-[#1E2A45]' : 'h-20 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#F5A623] group-hover:scale-105 transition-transform">
              <img src={logoSrc} alt="Career Nanban Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-['Poppins'] font-bold text-xl text-[#F5A623]">Career Nanban</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-[#94A3B8] font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/onboarding">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/onboarding">
              <Button variant="primary">Get Started Free</Button>
            </Link>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#0A0F2C] pt-24 px-6">
          <nav className="flex flex-col gap-6 text-xl">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
            <Link to="/onboarding" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" className="w-full mt-4">Get Started Free</Button>
            </Link>
          </nav>
        </div>
      )}

      <main className="pt-20">
        <Outlet />
      </main>

      <footer id="contact" className="bg-[#131929] border-t border-[#1E2A45] pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#F5A623]">
                <img src={logoSrc} alt="Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-['Poppins'] font-bold text-lg text-[#F5A623]">Career Nanban</span>
            </Link>
            <p className="text-[#00A8CC] mb-6 font-['Space_Grotesk']">Guiding you today, empowering you tomorrow.</p>
            <div className="flex gap-4 text-[#94A3B8]">
              <a href="#" className="hover:text-white"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white"><Github className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-['Poppins'] font-semibold mb-4">Platform</h4>
            <ul className="space-y-3 text-[#94A3B8]">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><Link to="/roadmap" className="hover:text-white">Roadmap</Link></li>
              <li><Link to="/levels" className="hover:text-white">Levels</Link></li>
              <li><Link to="/leaderboard" className="hover:text-white">Leaderboard</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-['Poppins'] font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-[#94A3B8]">
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-['Poppins'] font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <input type="email" placeholder="Email Address" className="bg-[#0A0F2C] border border-[#1E2A45] rounded-md px-4 py-2 text-sm focus:outline-none focus:border-[#F5A623]" />
              <input type="text" placeholder="Instagram Handle" className="bg-[#0A0F2C] border border-[#1E2A45] rounded-md px-4 py-2 text-sm focus:outline-none focus:border-[#F5A623]" />
              <Button size="sm">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-[#1E2A45] pt-8 text-center text-[#94A3B8] text-sm">
          © 2026 Career Nanban. Built with ❤️ for students.
        </div>
      </footer>
    </div>
  );
};
