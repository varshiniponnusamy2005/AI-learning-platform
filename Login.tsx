import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Target, Map, Trophy, Briefcase, MapPin, Gamepad2, CheckSquare, MessageSquare, Mic, Medal, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

export const Landing = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-80px)] flex items-center py-12 md:py-0 relative">
        {/* Background glow */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00A8CC]/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#F5A623]/20 rounded-full blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#131929] border border-[#00A8CC]/30 mb-8">
              <span className="text-[#00A8CC] text-sm">🚀 AI-Powered Career Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-['Poppins'] font-bold leading-tight mb-6">
              Learn Smart.<br />
              Level Up Fast.<br />
              <span className="text-[#F5A623]">Get Placed.</span>
            </h1>
            
            <p className="text-[#94A3B8] text-lg mb-10 max-w-lg leading-relaxed">
              Career Nanban guides you from zero to your dream job with AI-generated roadmaps, gamified learning levels, and real placement preparation — all in one platform.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link to="/login">
                <Button size="lg" className="flex items-center gap-2">
                  Start My Journey <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="flex items-center gap-2">
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-6 md:gap-12 text-sm font-['Space_Grotesk']">
              <div>
                <div className="text-2xl font-bold text-[#F5A623] mb-1">12,000+</div>
                <div className="text-[#94A3B8]">Learners</div>
              </div>
              <div className="w-px h-12 bg-[#1E2A45]" />
              <div>
                <div className="text-2xl font-bold text-[#F5A623] mb-1">500+</div>
                <div className="text-[#94A3B8]">Career Paths</div>
              </div>
              <div className="w-px h-12 bg-[#1E2A45]" />
              <div>
                <div className="text-2xl font-bold text-[#F5A623] mb-1">92%</div>
                <div className="text-[#94A3B8]">Placement Rate</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            {/* Dashboard Mockup */}
            <div className="bg-[#131929] border border-[#1E2A45] rounded-2xl p-6 shadow-2xl relative z-10">
              <div className="flex items-center justify-between mb-6 border-b border-[#1E2A45] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#00A8CC] flex items-center justify-center text-white font-bold">JS</div>
                  <div>
                    <div className="font-semibold">John Student</div>
                    <div className="text-xs text-[#94A3B8]">Level 4 • 840 XP</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-4 bg-[#1E2A45] rounded w-3/4" />
                <div className="h-4 bg-[#1E2A45] rounded w-1/2" />
                <div className="mt-6 space-y-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-[#0A0F2C] border border-[#1E2A45]">
                      <CheckCircle2 className={i === 1 ? 'text-[#2ECC8A]' : 'text-[#94A3B8]'} />
                      <div className={`flex-1 h-3 rounded ${i === 1 ? 'bg-[#2ECC8A]/20' : 'bg-[#1E2A45]'}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 z-20 bg-[#131929] border border-[#2ECC8A] rounded-xl p-4 shadow-xl"
            >
              <div className="text-[#2ECC8A] font-bold">+120 XP Earned!</div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 z-20 bg-[#131929] border border-[#F5A623] rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">🔥</span>
                <span className="text-[#F5A623] font-bold">7 Day Streak!</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -left-12 z-20 bg-[#131929] border border-[#00A8CC] rounded-xl p-4 shadow-xl"
            >
              <div className="text-[#00A8CC] font-bold">Level 5 Unlocked! 🎉</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 bg-[#0A0F2C]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-['Poppins'] font-bold mb-4">Your Journey in 4 Simple Steps</h2>
            <p className="text-[#94A3B8] text-lg">No confusion. No overwhelm. Just a clear path.</p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-[#1E2A45] border-t-2 border-dashed border-[#1E2A45] -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { icon: Target, title: 'Tell Us Your Goal', desc: 'Answer a few quick questions about your background and dream career.', color: 'text-[#F5A623]', bg: 'bg-[#F5A623]/10' },
                { icon: Map, title: 'Get Your AI Roadmap', desc: 'Our AI builds a personalized step-by-step learning path just for you.', color: 'text-[#00A8CC]', bg: 'bg-[#00A8CC]/10' },
                { icon: Trophy, title: 'Learn & Level Up', desc: 'Complete levels, earn XP, unlock badges. Learning feels like a game.', color: 'text-[#F5A623]', bg: 'bg-[#F5A623]/10' },
                { icon: Briefcase, title: 'Get Placed', desc: 'Practice mock interviews, build your resume, apply with confidence.', color: 'text-[#2ECC8A]', bg: 'bg-[#2ECC8A]/10' }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-[#131929] border border-[#1E2A45] rounded-xl p-6 text-center hover:-translate-y-2 transition-transform"
                >
                  <div className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4 ${step.bg}`}>
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  <h3 className="font-['Poppins'] font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-[#131929] border-y border-[#1E2A45]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-['Poppins'] font-bold mb-4">Everything You Need. Nothing You Don't.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: MapPin, title: 'AI Roadmap Creator', desc: 'Tell us your goal and experience. Get a complete learning path in seconds.' },
              { icon: Gamepad2, title: 'Gamified Levels', desc: 'Learn through structured levels. Earn XP and credits on every completion.' },
              { icon: CheckSquare, title: 'Daily Tasks', desc: 'Wake up to a focused daily task list. Never wonder what to study next.' },
              { icon: MessageSquare, title: 'AI Chatbot', desc: 'Ask anything career-related. Get instant answers, resources, and guidance.' },
              { icon: Mic, title: 'Mock Interview', desc: 'Practice real interview questions with AI feedback. Be ready before day one.' },
              { icon: Medal, title: 'Leaderboard', desc: 'Compete with peers, climb rankings, stay motivated.' }
            ].map((feature, i) => (
              <Card key={i} glowOnHover className="p-6">
                <feature.icon className="w-8 h-8 text-[#F5A623] mb-4" />
                <h4 className="font-['Poppins'] font-semibold text-lg mb-2 text-white">{feature.title}</h4>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-[#F5A623]/20 to-[#0A0F2C] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-50" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8">
          <h2 className="text-3xl md:text-4xl font-['Poppins'] font-bold text-white">Ready to start your career journey?</h2>
          <Link to="/login">
            <Button size="lg" className="bg-white text-[#F5A623] hover:bg-gray-100 flex items-center gap-2 whitespace-nowrap">
              Get Started Free <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
