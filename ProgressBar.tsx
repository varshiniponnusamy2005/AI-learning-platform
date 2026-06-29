import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { CheckCircle2, Lock, Flame, ChevronRight, Edit2 } from 'lucide-react';
import { cn } from '../utils/cn';
import { motion } from 'motion/react';
import { Link } from 'react-router';

export const Roadmap = () => {
  const nodes = [
    { phase: 'PHASE 1 — FOUNDATIONS', title: 'Python Basics', status: 'done', lessons: 5, days: 2, xp: 150, topics: ['Syntax & Variables', 'Data Types', 'Operators'] },
    { phase: 'PHASE 1 — FOUNDATIONS', title: 'Data Types & Variables', status: 'done', lessons: 4, days: 1, xp: 120, topics: ['Lists & Tuples', 'Dictionaries', 'Sets'] },
    { phase: 'PHASE 1 — FOUNDATIONS', title: 'Functions & Scope', status: 'active', lessons: 8, days: 3, xp: 240, topics: ['Defining Functions', 'Arguments & Returns', 'Lambda Functions', 'Variable Scope'] },
    { phase: 'PHASE 1 — FOUNDATIONS', title: 'OOP in Python', status: 'locked', lessons: 10, days: 4, xp: 300, topics: ['Classes & Objects', 'Inheritance', 'Polymorphism'] },
    { phase: 'PHASE 1 — FOUNDATIONS', title: 'Libraries: NumPy & Pandas', status: 'locked', lessons: 12, days: 5, xp: 400, topics: ['Arrays', 'DataFrames', 'Data Manipulation'] },
  ];

  return (
    <div className="py-6 animate-in fade-in duration-500 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-['Poppins'] font-bold mb-2">Your Career Roadmap</h1>
          <p className="text-[#94A3B8] text-sm">Goal: Data Science & Analytics | Target: 3 Months | Est. Placement: Sept 2026</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="flex items-center gap-2"><Edit2 className="w-4 h-4" /> Edit Goal</Button>
          <div className="w-12 h-12 relative flex items-center justify-center border-2 border-[#00A8CC] rounded-full text-[#00A8CC] font-bold text-sm">
            25%
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto gap-4 mb-10 pb-2 hide-scrollbar border-b border-[#1E2A45]">
        {['All', 'Phase 1: Foundations', 'Phase 2: Core Skills', 'Phase 3: Projects', 'Phase 4: Placement'].map((tab, i) => (
          <button key={i} className={cn("px-4 py-2 font-medium whitespace-nowrap", i === 1 ? "text-white border-b-2 border-[#F5A623]" : "text-[#94A3B8] hover:text-white")}>
            {tab}
          </button>
        ))}
      </div>

      {/* Vertical Roadmap */}
      <div className="relative pl-8 md:pl-0">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-[#1E2A45] md:-translate-x-1/2" />
        
        <div className="space-y-12">
          {nodes.map((node, i) => (
            <div key={i} className="relative flex flex-col md:flex-row items-center justify-between w-full">
              {/* Connector for Mobile */}
              <div className="md:hidden absolute left-0 top-6 w-8 h-0.5 bg-[#1E2A45]" />
              
              {/* Node content: alternated left/right for desktop */}
              <div className={cn("w-full md:w-[45%] pl-8 md:pl-0", i % 2 !== 0 && "md:order-3 md:text-left", i % 2 === 0 && "md:text-right")}>
                <Card glowOnHover={node.status !== 'locked'} className={cn(
                  "p-5 inline-block w-full text-left",
                  node.status === 'done' ? "border-[#2ECC8A]" : node.status === 'active' ? "border-[#F5A623] shadow-[0_0_20px_rgba(245,166,35,0.1)]" : ""
                )}>
                  <div className="text-[#00A8CC] text-xs font-bold mb-2 tracking-wider">{node.phase}</div>
                  <h4 className={cn("text-lg font-['Poppins'] font-semibold mb-2", node.status === 'locked' ? 'text-[#94A3B8]' : 'text-white')}>
                    {node.title}
                  </h4>
                  <ul className="text-[#94A3B8] text-sm space-y-1 flex flex-col mb-4 list-disc pl-4">
                    {node.topics.map((t, ti) => <li key={ti}>{t}</li>)}
                  </ul>
                  <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
                    <div className="text-xs text-[#94A3B8] bg-[#0A0F2C] px-3 py-1.5 rounded-full inline-flex gap-2 border border-[#1E2A45]">
                      <span>{node.lessons} lessons</span>•
                      <span>{node.days} days</span>•
                      <span className="text-[#F5A623]">⭐ {node.xp} XP</span>
                    </div>
                    {node.status === 'active' && (
                      <Link to="/levels/3">
                        <Button size="sm" className="whitespace-nowrap">Continue <ChevronRight className="w-4 h-4 ml-1 inline" /></Button>
                      </Link>
                    )}
                  </div>
                </Card>
              </div>

              {/* Node Icon Desktop/Mobile */}
              <div className={cn(
                "absolute left-0 top-4 md:static md:w-[10%] flex justify-center md:order-2 z-10 -translate-x-1/2 md:translate-x-0"
              )}>
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center border-4 border-[#0A0F2C]",
                  node.status === 'done' ? "bg-[#2ECC8A] text-white" :
                  node.status === 'active' ? "bg-[#F5A623] text-white shadow-[0_0_15px_rgba(245,166,35,0.5)]" :
                  "bg-[#1E2A45] text-[#94A3B8]"
                )}>
                  {node.status === 'done' ? <CheckCircle2 className="w-5 h-5" /> :
                   node.status === 'active' ? <Flame className="w-5 h-5" /> :
                   <Lock className="w-4 h-4" />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
