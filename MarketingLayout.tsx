import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Trophy, Flame, ChevronUp, ChevronDown, Minus } from 'lucide-react';
import { cn } from '../utils/cn';

export const Leaderboard = () => {
  const users = [
    { rank: 1, name: 'Priya S.', avatar: 'PS', goal: 'Data Science', xp: 2450, badges: 12, streak: 45, change: 'up' },
    { rank: 2, name: 'Rahul K.', avatar: 'RK', goal: 'Full Stack', xp: 2100, badges: 10, streak: 30, change: 'same' },
    { rank: 3, name: 'Ananya M.', avatar: 'AM', goal: 'UI/UX Design', xp: 1950, badges: 8, streak: 21, change: 'down' },
    { rank: 4, name: 'Vikram T.', avatar: 'VT', goal: 'Cloud & DevOps', xp: 1800, badges: 7, streak: 14, change: 'up' },
    { rank: 47, name: 'John Student', avatar: 'JS', goal: 'Frontend Dev', xp: 1240, badges: 2, streak: 7, change: 'up', isUser: true },
  ];

  return (
    <div className="py-6 animate-in fade-in flex flex-col lg:flex-row gap-6">
      <div className="flex-1">
        <div className="mb-8">
          <h1 className="text-3xl font-['Poppins'] font-bold mb-2">Top Learners 🏆</h1>
          <p className="text-[#94A3B8]">Compete, stay motivated, climb the ranks.</p>
        </div>

        <div className="flex overflow-x-auto gap-2 mb-10 pb-2 hide-scrollbar">
          {['This Week', 'This Month', 'All Time', 'My College'].map((tab, i) => (
            <button key={i} className={cn("px-4 py-2 rounded-full font-medium whitespace-nowrap text-sm transition-colors", i === 0 ? "bg-[#F5A623] text-white" : "bg-[#131929] text-[#94A3B8] hover:bg-[#1E2A45]")}>
              {tab}
            </button>
          ))}
        </div>

        {/* Podium */}
        <div className="flex items-end justify-center gap-2 md:gap-6 mb-16 h-[300px]">
          {/* Rank 2 */}
          <div className="flex flex-col items-center animate-in slide-in-from-bottom duration-700 delay-100">
            <div className="w-16 h-16 rounded-full bg-slate-300 border-4 border-slate-400 flex items-center justify-center text-slate-700 font-bold text-xl mb-4 shadow-[0_0_20px_rgba(148,163,184,0.3)] z-10">
              RK
            </div>
            <div className="w-24 md:w-32 bg-slate-300/20 border-t border-slate-400 rounded-t-lg flex flex-col items-center pt-4" style={{ height: '160px' }}>
              <span className="font-bold text-slate-300 text-lg">2</span>
              <span className="text-white font-medium text-sm mt-2 truncate max-w-full px-2">Rahul K.</span>
              <span className="text-xs text-slate-400 mt-1">2100 XP</span>
            </div>
          </div>

          {/* Rank 1 */}
          <div className="flex flex-col items-center animate-in slide-in-from-bottom duration-700">
            <div className="text-4xl mb-2 animate-bounce">👑</div>
            <div className="w-20 h-20 rounded-full bg-[#F5A623] border-4 border-[#FCD34D] flex items-center justify-center text-white font-bold text-2xl mb-4 shadow-[0_0_30px_rgba(245,166,35,0.5)] z-10">
              PS
            </div>
            <div className="w-24 md:w-32 bg-[#F5A623]/20 border-t border-[#F5A623] rounded-t-lg flex flex-col items-center pt-4" style={{ height: '200px' }}>
              <span className="font-bold text-[#F5A623] text-xl">1</span>
              <span className="text-white font-medium text-sm mt-2 truncate max-w-full px-2">Priya S.</span>
              <span className="text-xs text-[#F5A623] mt-1 font-bold">2450 XP</span>
            </div>
          </div>

          {/* Rank 3 */}
          <div className="flex flex-col items-center animate-in slide-in-from-bottom duration-700 delay-200">
            <div className="w-16 h-16 rounded-full bg-[#B45309] border-4 border-[#D97706] flex items-center justify-center text-white font-bold text-xl mb-4 shadow-[0_0_20px_rgba(180,83,9,0.3)] z-10">
              AM
            </div>
            <div className="w-24 md:w-32 bg-[#B45309]/20 border-t border-[#B45309] rounded-t-lg flex flex-col items-center pt-4" style={{ height: '140px' }}>
              <span className="font-bold text-[#B45309] text-lg">3</span>
              <span className="text-white font-medium text-sm mt-2 truncate max-w-full px-2">Ananya M.</span>
              <span className="text-xs text-[#D97706] mt-1">1950 XP</span>
            </div>
          </div>
        </div>

        {/* Table */}
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-[#0A0F2C] border-b border-[#1E2A45] text-xs uppercase text-[#94A3B8] font-['Space_Grotesk']">
                <tr>
                  <th className="px-6 py-4">Rank</th>
                  <th className="px-6 py-4">Learner</th>
                  <th className="px-6 py-4 hidden sm:table-cell">Goal</th>
                  <th className="px-6 py-4">XP</th>
                  <th className="px-6 py-4 hidden md:table-cell">Badges</th>
                  <th className="px-6 py-4 hidden sm:table-cell">Streak</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1E2A45]">
                {users.map((user, i) => (
                  <tr key={i} className={cn("hover:bg-[#1E2A45]/30 transition-colors", user.isUser && "bg-[#F5A623]/10 hover:bg-[#F5A623]/20")}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="font-bold w-6">{user.rank}</span>
                        {user.change === 'up' && <ChevronUp className="w-4 h-4 text-[#2ECC8A]" />}
                        {user.change === 'down' && <ChevronDown className="w-4 h-4 text-[#EF4444]" />}
                        {user.change === 'same' && <Minus className="w-4 h-4 text-[#94A3B8]" />}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#1E2A45] flex items-center justify-center text-xs font-bold shrink-0">{user.avatar}</div>
                        <div>
                          <div className="font-medium text-white flex items-center gap-2">
                            {user.name}
                            {user.isUser && <Badge variant="amber" className="text-[10px] px-2 py-0.5">You</Badge>}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-[#94A3B8] text-sm hidden sm:table-cell">{user.goal}</td>
                    <td className="px-6 py-4 font-bold text-[#F5A623]">{user.xp}</td>
                    <td className="px-6 py-4 text-[#94A3B8] hidden md:table-cell">
                      <div className="flex items-center gap-1"><Trophy className="w-4 h-4 text-[#8B5CF6]" /> {user.badges}</div>
                    </td>
                    <td className="px-6 py-4 text-[#94A3B8] hidden sm:table-cell">
                      <div className="flex items-center gap-1"><Flame className="w-4 h-4 text-[#EF4444]" /> {user.streak}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Sidebar */}
      <div className="w-full lg:w-72 shrink-0">
        <Card className="p-6 sticky top-24 border-[#F5A623]">
          <h4 className="font-semibold mb-6 flex items-center gap-2">Your Ranking</h4>
          <div className="flex justify-between items-end mb-4">
            <div>
              <div className="text-4xl font-['Poppins'] font-bold text-white mb-1">#47</div>
              <div className="text-sm text-[#94A3B8]">Current Rank</div>
            </div>
            <div className="text-right">
              <div className="text-[#F5A623] font-bold">1240 XP</div>
            </div>
          </div>
          
          <div className="mb-2 flex justify-between text-xs">
            <span className="text-[#94A3B8]">Need 240 more XP to reach #46</span>
          </div>
          <div className="h-2 bg-[#1E2A45] rounded-full overflow-hidden mb-6">
            <div className="h-full bg-[#F5A623] w-[80%]" />
          </div>

          <Button className="w-full">Study Today →</Button>
        </Card>
      </div>
    </div>
  );
};
