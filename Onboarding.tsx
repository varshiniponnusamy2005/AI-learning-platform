import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ProgressBar } from './ui/ProgressBar';
import { Play, FileText, CheckCircle2, Lock, ArrowLeft, ChevronRight, HelpCircle, FileCode } from 'lucide-react';
import { cn } from '../utils/cn';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';

export const Level = () => {
  const [activeTab, setActiveTab] = useState('notes');
  const [quizScore, setQuizScore] = useState<number | null>(null);

  const handleComplete = () => {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ['#F5A623', '#00A8CC', '#2ECC8A'] });
  };

  return (
    <div className="py-6 animate-in fade-in flex flex-col lg:flex-row gap-6 h-[calc(100vh-100px)]">
      {/* Sidebar */}
      <div className="w-full lg:w-72 shrink-0 flex flex-col gap-4 overflow-y-auto hide-scrollbar">
        <Link to="/roadmap" className="text-[#94A3B8] hover:text-white flex items-center gap-2 text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Roadmap
        </Link>
        <h3 className="font-['Poppins'] font-bold text-lg">Python → Data Science Path</h3>
        <div className="space-y-2">
          {[
            { id: 1, title: 'Python Basics', xp: 150, status: 'done' },
            { id: 2, title: 'Data Types', xp: 120, status: 'done' },
            { id: 3, title: 'Functions & Scope', xp: 240, status: 'active' },
            { id: 4, title: 'OOP in Python', xp: 300, status: 'locked' },
            { id: 5, title: 'NumPy & Pandas', xp: 400, status: 'locked' },
          ].map(level => (
            <div key={level.id} className={cn(
              "p-3 rounded-lg border flex items-center gap-3 cursor-pointer",
              level.status === 'active' ? "bg-[#F5A623]/10 border-[#F5A623]" :
              level.status === 'done' ? "bg-[#131929] border-[#1E2A45] hover:border-[#2ECC8A]" :
              "bg-[#0A0F2C] border-[#1E2A45] opacity-50"
            )}>
              <div className="shrink-0">
                {level.status === 'done' ? <CheckCircle2 className="w-5 h-5 text-[#2ECC8A]" /> :
                 level.status === 'active' ? <Play className="w-5 h-5 text-[#F5A623]" fill="currentColor" /> :
                 <Lock className="w-5 h-5 text-[#94A3B8]" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className={cn("text-sm font-medium truncate", level.status === 'active' ? 'text-white' : 'text-[#94A3B8]')}>Level {level.id}: {level.title}</div>
                <div className="text-xs text-[#F5A623]">⭐ {level.xp} XP</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto hide-scrollbar pb-20">
        <div className="text-[#94A3B8] text-sm mb-4">Home &gt; Roadmap &gt; Python Basics &gt; Level 3</div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-['Poppins'] font-bold mb-2">Level 3 — Functions & Scope</h1>
            <div className="flex gap-3">
              <Badge variant="amber">⭐ 240 XP</Badge>
              <Badge variant="teal">⏱ 2 hours</Badge>
            </div>
          </div>
          <div className="w-full md:w-64">
            <div className="flex justify-between text-sm text-[#94A3B8] mb-1">
              <span>Progress</span>
              <span>2 of 6 done</span>
            </div>
            <ProgressBar value={33} />
          </div>
        </div>

        {/* Video Player Area */}
        <div className="aspect-video bg-black rounded-xl border border-[#1E2A45] relative flex items-center justify-center group cursor-pointer mb-6 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=80" alt="Code Background" className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <div className="w-16 h-16 rounded-full bg-[#F5A623] flex items-center justify-center text-white z-10 group-hover:scale-110 transition-transform">
            <Play className="w-8 h-8 ml-1" fill="currentColor" />
          </div>
          <div className="absolute bottom-4 left-4 z-10 text-white font-medium">3.1 — Introduction to Functions</div>
        </div>

        {/* Tabs */}
        <div className="border-b border-[#1E2A45] mb-6 flex gap-6">
          {['notes', 'resources', 'quiz', 'discussion'].map(tab => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              className={cn(
                "pb-3 text-sm font-medium capitalize border-b-2 transition-colors",
                activeTab === tab ? "border-[#F5A623] text-white" : "border-transparent text-[#94A3B8] hover:text-white"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mb-10">
          {activeTab === 'notes' && (
            <div className="space-y-6 text-[#94A3B8] leading-relaxed">
              <p>A function is a block of reusable code that is used to perform a single, related action. Functions provide better modularity for your application and a high degree of code reusing.</p>
              
              <div className="bg-[#131929] border-l-4 border-l-[#F5A623] p-4 rounded-r-lg">
                <strong className="text-white">Key Concept:</strong> You can define functions to provide the required functionality. Here are simple rules to define a function in Python.
              </div>

              <div className="bg-[#0A0F2C] border border-[#1E2A45] rounded-lg p-4 font-mono text-sm">
                <span className="text-[#8B5CF6]">def</span> <span className="text-[#00A8CC]">greet</span>(name):<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#F5A623]">print</span>(<span className="text-[#2ECC8A]">f"Hello, {`{name}`}!"</span>)<br/>
                <br/>
                greet(<span className="text-[#2ECC8A]">"Alice"</span>)
              </div>
            </div>
          )}

          {activeTab === 'quiz' && (
            <Card className="p-6">
              <h3 className="text-xl font-['Poppins'] font-semibold mb-6 flex items-center gap-2">
                <HelpCircle className="text-[#F5A623]" /> Test Your Knowledge — Level 3 Quiz
              </h3>
              
              {quizScore === null ? (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <p className="font-medium text-white">1. Which keyword is used to define a function in Python?</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {['func', 'define', 'def', 'function'].map((opt, i) => (
                        <button key={i} onClick={() => setQuizScore(4)} className="p-3 rounded-lg border border-[#1E2A45] bg-[#131929] text-left hover:border-[#00A8CC] transition-colors">
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                  <div className="text-4xl mb-4">🎉</div>
                  <h4 className="text-2xl font-bold mb-2">4/5 Correct!</h4>
                  <p className="text-[#2ECC8A] font-bold mb-6">+180 XP Earned</p>
                  <Button onClick={() => setQuizScore(null)} variant="outline">Retry Quiz</Button>
                </motion.div>
              )}
            </Card>
          )}

          {activeTab === 'resources' && (
            <div className="space-y-4">
              <Card className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Badge variant="teal">Video</Badge>
                  <div>
                    <div className="font-medium text-white">Python Functions Deep Dive</div>
                    <div className="text-sm text-[#94A3B8]">YouTube • Corey Schafer</div>
                  </div>
                </div>
                <Button size="sm" variant="ghost">Open <ChevronRight className="w-4 h-4 ml-1 inline" /></Button>
              </Card>
              <Card className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Badge variant="green">Docs</Badge>
                  <div>
                    <div className="font-medium text-white">Official Python Documentation</div>
                    <div className="text-sm text-[#94A3B8]">Python.org</div>
                  </div>
                </div>
                <Button size="sm" variant="ghost">Open <ChevronRight className="w-4 h-4 ml-1 inline" /></Button>
              </Card>
            </div>
          )}
        </div>
      </div>

      {/* Right Action Panel */}
      <div className="w-full lg:w-64 shrink-0">
        <Card className="p-6 sticky top-24">
          <h4 className="font-semibold mb-4 text-center">Level Progress</h4>
          <div className="flex justify-center mb-6">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#1E2A45" strokeWidth="8" />
                <circle cx="50" cy="50" r="45" fill="none" stroke="#2ECC8A" strokeWidth="8" strokeDasharray="283" strokeDashoffset={283 * 0.67} />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold">33%</span>
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-[#94A3B8] mb-6">
            <span className="text-[#F5A623] font-bold">+80 XP</span> earned this session
          </div>
          <Button className="w-full" onClick={handleComplete}>Mark Complete</Button>
        </Card>
      </div>
    </div>
  );
};
