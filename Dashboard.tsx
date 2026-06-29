import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ProgressBar } from './ui/ProgressBar';
import { Star, Target, Crown, Lock } from 'lucide-react';
import { cn } from '../utils/cn';

export const Achievements = () => {
  const badges = [
    { id: 1, title: 'First Step', desc: 'Complete your first lesson', earned: true, icon: '🌟' },
    { id: 2, title: 'Week Warrior', desc: '7 day streak', earned: true, icon: '🔥' },
    { id: 3, title: 'Speed Learner', desc: 'Complete level in under 1 hour', earned: false, icon: '⚡' },
    { id: 4, title: 'Quiz Master', desc: 'Score 100% on any quiz', earned: false, icon: '💯' },
    { id: 5, title: 'Interview Ready', desc: 'Complete first mock interview', earned: false, icon: '🎤' },
    { id: 6, title: 'Placement Bound', desc: 'Apply to first company', earned: false, icon: '🏢' },
  ];

  const milestones = [
    { date: 'Jun 12', title: 'Joined Career Nanban', xp: 50, earned: true },
    { date: 'Jun 14', title: 'Completed First Level', xp: 150, earned: true },
    { date: 'Jun 19', title: '7 Day Streak', xp: 200, earned: true },
    { date: 'Jul 01', title: 'Finish Phase 1', xp: 500, earned: false },
    { date: 'Aug 15', title: 'First Mock Interview', xp: 300, earned: false },
  ];

  return (
    <div className="py-6 animate-in fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-['Poppins'] font-bold mb-2">Achievement Wall 🏅</h1>
        <p className="text-[#94A3B8]">Your journey, visualized.</p>
      </div>

      {/* Summary Banner */}
      <Card className="p-6 md:p-8 mb-10 border-[#1E2A45] bg-gradient-to-r from-[#131929] to-[#0A0F2C]">
        <div className="flex flex-wrap items-center justify-between gap-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#F5A623]/20 flex items-center justify-center"><Star className="text-[#F5A623] w-6 h-6" fill="currentColor" /></div>
            <div>
              <div className="text-sm text-[#94A3B8]">Total XP</div>
              <div className="text-2xl font-bold text-white">1,240</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#00A8CC]/20 flex items-center justify-center"><Target className="text-[#00A8CC] w-6 h-6" /></div>
            <div>
              <div className="text-sm text-[#94A3B8]">Current Level</div>
              <div className="text-2xl font-bold text-white">12</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center"><Crown className="text-[#8B5CF6] w-6 h-6" /></div>
            <div>
              <div className="text-sm text-[#94A3B8]">Rank</div>
              <div className="text-2xl font-bold text-[#8B5CF6]">Gold Learner</div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-[#00A8CC]">240 XP to reach Platinum Rank</span>
          </div>
          <ProgressBar value={80} indicatorClassName="bg-[#00A8CC]" />
        </div>
      </Card>

      {/* Tabs */}
      <div className="flex overflow-x-auto gap-2 mb-8 pb-2 hide-scrollbar">
        {['All', 'Learning', 'Streaks', 'Speed', 'Interview', 'Placement'].map((tab, i) => (
          <button key={i} className={cn("px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap", i === 0 ? "bg-[#1E2A45] text-white" : "text-[#94A3B8] hover:text-white hover:bg-[#1E2A45]/50")}>
            {tab}
          </button>
        ))}
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 mb-16">
        {badges.map(badge => (
          <div key={badge.id} className="group relative">
            <div className={cn(
              "aspect-square rounded-2xl flex flex-col items-center justify-center p-4 transition-all duration-300 text-center border-2",
              badge.earned ? "bg-[#131929] border-[#F5A623]/30 hover:border-[#F5A623] hover:-translate-y-2 shadow-[0_4px_20px_rgba(0,0,0,0.2)]" : "bg-[#0A0F2C] border-[#1E2A45] opacity-50 grayscale hover:opacity-100"
            )}>
              <div className="text-4xl md:text-5xl mb-3 relative">
                {badge.icon}
                {!badge.earned && <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full"><Lock className="w-5 h-5 text-white" /></div>}
              </div>
              <div className="font-semibold text-sm leading-tight text-white mb-1">{badge.title}</div>
            </div>
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-[#1E2A45] text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity text-center z-10 hidden md:block">
              {badge.earned ? badge.desc : `Complete task to unlock this badge.`}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#1E2A45]" />
            </div>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <h2 className="text-2xl font-['Poppins'] font-bold mb-6">Milestones Timeline</h2>
      <div className="relative pt-8 pb-4 overflow-x-auto hide-scrollbar">
        <div className="absolute top-11 left-0 right-0 h-0.5 border-t-2 border-dashed border-[#1E2A45] min-w-[800px]" />
        
        <div className="flex justify-between min-w-[800px] relative z-10 px-4">
          {milestones.map((ms, i) => (
            <div key={i} className="flex flex-col items-center w-32 shrink-0 group">
              <div className="text-xs text-[#94A3B8] mb-3">{ms.date}</div>
              <div className={cn(
                "w-6 h-6 rounded-full border-4 flex items-center justify-center mb-3 transition-transform group-hover:scale-125",
                ms.earned ? "bg-[#F5A623] border-[#0A0F2C]" : "bg-[#1E2A45] border-[#0A0F2C]"
              )} />
              <div className={cn("text-sm text-center font-medium", ms.earned ? "text-white" : "text-[#94A3B8]")}>
                {ms.title}
              </div>
              <Badge variant={ms.earned ? 'amber' : 'teal'} className="mt-2 scale-90">+{ms.xp} XP</Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
