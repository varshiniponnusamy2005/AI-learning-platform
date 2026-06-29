import React from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { Flame, Star, Menu, X, Trophy, LogOut } from 'lucide-react';
import logoSrc from '../../imports/WhatsApp_Image_2026-06-19_at_1.56.20_PM.jpeg';
import { cn } from '../utils/cn';
import { useAuth } from '../utils/AuthContext';

export const AppLayout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();
  const { logout } = useAuth();

  const links = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'Levels', path: '/levels' },
    { name: 'Interviews', path: '/interview' },
    { name: 'Leaderboard', path: '/leaderboard' },
    { name: 'AI Chat', path: '/chat' },
  ];

  return (
    <div className="min-h-screen bg-[#0A0F2C] text-white font-['Inter'] selection:bg-[#F5A623] selection:text-white pb-20 md:pb-0">
      <header className="fixed top-0 w-full z-40 h-16 bg-[#0A0F2C]/90 backdrop-blur-md border-b border-[#1E2A45]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-[#F5A623]">
              <img src={logoSrc} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-['Poppins'] font-bold text-lg md:text-xl text-[#F5A623] hidden sm:block">Career Nanban</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-[#94A3B8] font-medium text-sm">
            {links.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={cn(
                  "hover:text-white transition-colors relative py-2",
                  location.pathname.startsWith(link.path) && "text-white"
                )}
              >
                {link.name}
                {location.pathname.startsWith(link.path) && (
                  <motion.div layoutId="nav-indicator" className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F5A623]" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#131929] border border-[#1E2A45]">
              <Star className="w-4 h-4 text-[#F5A623]" fill="currentColor" />
              <span className="text-sm font-semibold font-['Space_Grotesk']">1,240 XP</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#131929] border border-[#1E2A45]">
              <Flame className="w-4 h-4 text-[#EF4444]" fill="currentColor" />
              <span className="text-sm font-semibold font-['Space_Grotesk']">7 Day Streak</span>
            </div>
            <Link to="/achievements">
              <div className="w-9 h-9 rounded-full bg-[#00A8CC]/20 border border-[#00A8CC] flex items-center justify-center cursor-pointer hover:bg-[#00A8CC]/30 transition-colors">
                <span className="font-bold text-sm">JS</span>
              </div>
            </Link>
            <button
              onClick={() => {
                logout();
                window.location.href = '/login';
              }}
              className="p-2 rounded-lg hover:bg-[#131929] transition-colors"
              title="Logout"
            >
              <LogOut className="w-5 h-5 text-[#94A3B8] hover:text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 w-full z-40 h-16 bg-[#131929] border-t border-[#1E2A45] flex items-center justify-around px-2">
        {links.slice(0, 5).map(link => (
          <Link key={link.path} to={link.path} className="flex flex-col items-center justify-center w-full h-full text-[#94A3B8]">
            <span className="text-[10px] mt-1">{link.name}</span>
          </Link>
        ))}
      </nav>

      <main className="pt-20 px-4 md:px-6 max-w-7xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
};
