import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ProgressBar } from './ui/ProgressBar';
import { CheckCircle2, Circle, Flame, Star, Trophy, Target, Sparkles, ChevronRight, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, Navigate } from 'react-router';
import { cn } from '../utils/cn';
import { useAuth } from '../utils/AuthContext';
import { OnboardingModal } from './OnboardingModal';

export const Dashboard = () => {
  const { user, hasCompletedOnboarding } = useAuth();
  const [showOnboarding, setShowOnboarding] = useState(!hasCompletedOnboarding);
  
  // If user signed in (not signed up), they should have completed onboarding
  // If they haven't, force show onboarding
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Watch: Introduction to Python (30 min)', xp: 50, done: true },
    { id: 2, title: 'Read: Variables & Data Types article', xp: 30, done: true },
    { id: 3, title: 'Practice: 5 LeetCode Easy problems', xp: 80, done: false },
    { id: 4, title: 'Watch: Functions in Python video', xp: 50, done: false },
    { id: 5, title: 'Quiz: Python Basics (10 questions)', xp: 100, done: false },
  ]);
  const [xpPopup, setXpPopup] = useState<{ id: number; xp: number } | null>(null);

  const handleTaskToggle = (id: number) => {
    const task = tasks.find(t => t.id === id);
    if (!task) return;
    
    if (!task.done) {
      setXpPopup({ id, xp: task.xp });
      setTimeout(() => setXpPopup(null), 1500);
    }

    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const completedTasksCount = tasks.filter(t => t.done).length;
  const progressPercent = (completedTasksCount / tasks.length) * 100;

  return (
    <div className="py-6 animate-in fade-in duration-500 space-y-6">
      {/* Welcome Banner */}
      <Card className="p-6 md:p-8 relative overflow-hidden border-l-4 border-l-[#F5A623]">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00A8CC]/10 to-[#F5A623]/5 rounded-full blur-[60px]" />
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
          <div>
            <h1 className="text-3xl font-['Poppins'] font-bold mb-2">Good morning, John! 👋</h1>
            <p className="text-[#94A3B8]">You're on Day 3 of your journey. Keep going!</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#1E2A45" strokeWidth="8" />
                <circle cx="50" cy="50" r="45" fill="none" stroke="#00A8CC" strokeWidth="8" strokeDasharray="283" strokeDashoffset={283 - (283 * 0.65)} className="transition-all duration-1000 ease-out" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center font-bold text-lg">
                65%
              </div>
            </div>
            <div className="text-sm text-[#94A3B8]">Overall<br />Progress</div>
          </div>
        </div>
      </Card>

      {/* Metric Cards Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Levels Completed', value: '3', icon: Target, color: 'text-[#00A8CC]' },
          { label: 'Current Streak', value: '7 Days', icon: Flame, color: 'text-[#EF4444]' },
          { label: 'Total XP', value: '480', icon: Star, color: 'text-[#F5A623]' },
          { label: 'Badges Unlocked', value: '2', icon: Trophy, color: 'text-[#8B5CF6]' },
        ].map((stat, i) => (
          <Card key={i} className="p-5 flex justify-between items-start hover:border-[#1E2A45]">
            <div>
              <div className="text-[#94A3B8] text-sm mb-1">{stat.label}</div>
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
            </div>
            <stat.icon className={`w-6 h-6 ${stat.color} opacity-80`} />
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Today's Mission */}
        <Card className="lg:col-span-7 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-['Poppins'] font-bold flex items-center gap-2">Today's Tasks 📋</h2>
            <Badge variant="teal">{completedTasksCount} of {tasks.length} done</Badge>
          </div>
          <ProgressBar value={progressPercent} className="mb-6" />
          
          <div className="space-y-3">
            {tasks.map(task => (
              <div 
                key={task.id}
                onClick={() => handleTaskToggle(task.id)}
                className={cn(
                  "flex items-center justify-between p-4 rounded-xl border transition-all cursor-pointer relative",
                  task.done ? "bg-[#0A0F2C] border-[#1E2A45]" : "bg-[#131929] border-[#1E2A45] hover:border-[#00A8CC]"
                )}
              >
                <div className="flex items-center gap-3">
                  {task.done ? <CheckCircle2 className="text-[#2ECC8A]" /> : <Circle className="text-[#94A3B8]" />}
                  <span className={cn(task.done ? "text-[#94A3B8] line-through" : "text-white")}>{task.title}</span>
                </div>
                <Badge variant={task.done ? 'green' : 'amber'}>+{task.xp} XP</Badge>

                {/* Floating XP Animation */}
                <AnimatePresence>
                  {xpPopup?.id === task.id && (
                    <motion.div
                      initial={{ opacity: 1, y: 0, x: -20 }}
                      animate={{ opacity: 0, y: -40, x: -20 }}
                      exit={{ opacity: 0 }}
                      className="absolute right-4 text-[#2ECC8A] font-bold z-10"
                    >
                      +{xpPopup.xp} XP
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </Card>

        {/* Right: Your Progress */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="p-6">
            <div className="text-[#94A3B8] text-sm mb-2 uppercase tracking-wider">Current Level</div>
            <h3 className="text-xl font-semibold mb-4">Level 3 — Functions & Scope</h3>
            <ProgressBar value={65} className="mb-6" />
            <Link to="/levels/3">
              <Button className="w-full flex items-center justify-center gap-2">
                Continue Learning <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </Card>

          <Card className="p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B5CF6]/10 rounded-full blur-[30px]" />
            <div className="text-[#94A3B8] text-sm mb-3">Recent Achievement</div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6] flex items-center justify-center text-xl">
                🏆
              </div>
              <div>
                <h4 className="font-semibold text-lg">Quick Learner</h4>
                <Badge variant="green" className="mt-1">Earned today!</Badge>
              </div>
            </div>
            <Sparkles className="absolute bottom-4 right-4 text-[#8B5CF6] opacity-0 group-hover:opacity-100 transition-opacity" />
          </Card>

          <Card className="p-6">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[#00A8CC] font-medium">5 more XP to Level 4!</span>
            </div>
            <ProgressBar value={95} indicatorClassName="bg-[#00A8CC]" />
          </Card>
        </div>
      </div>

      {/* Roadmap Preview Strip */}
      <Card className="p-6 overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-['Poppins'] font-bold">Your Roadmap Progress</h2>
          <Link to="/roadmap" className="text-[#00A8CC] text-sm hover:underline flex items-center">
            View Full Roadmap <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-4 hide-scrollbar">
          {[
            { title: 'Python Basics', status: 'done' },
            { title: 'Functions & Scope', status: 'active' },
            { title: 'OOP Concepts', status: 'locked' },
            { title: 'Data Structures', status: 'locked' },
            { title: 'Projects', status: 'locked' },
          ].map((node, i) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center min-w-[120px] shrink-0 gap-3">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center border-2 z-10",
                  node.status === 'done' ? "bg-[#2ECC8A] border-[#2ECC8A] text-white" :
                  node.status === 'active' ? "bg-[#F5A623]/20 border-[#F5A623] text-[#F5A623] shadow-[0_0_15px_rgba(245,166,35,0.5)]" :
                  "bg-[#131929] border-[#1E2A45] text-[#94A3B8]"
                )}>
                  {node.status === 'done' ? <CheckCircle2 className="w-5 h-5" /> :
                   node.status === 'active' ? <Flame className="w-5 h-5" /> :
                   <Lock className="w-4 h-4" />}
                </div>
                <div className={cn("text-xs text-center font-medium", node.status === 'active' ? 'text-[#F5A623]' : 'text-[#94A3B8]')}>
                  {node.title}
                </div>
              </div>
              {i < 4 && (
                <div className={cn(
                  "h-1 w-full min-w-[40px] shrink-0 -mt-8",
                  node.status === 'done' ? "bg-[#2ECC8A]" : "bg-[#1E2A45]"
                )} />
              )}
            </React.Fragment>
          ))}
        </div>
      </Card>

      {/* Show onboarding for users who haven't completed it (e.g., signed in but skipped) */}
      {user && !hasCompletedOnboarding && (
        <OnboardingModal
          isOpen={showOnboarding}
          onClose={() => {
            setShowOnboarding(false);
          }}
        />
      )}
    </div>
  );
};
