import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Mic, Brain, Users, Clock, ChevronRight, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../utils/cn';

export const Interview = () => {
  const [isPracticing, setIsPracticing] = useState(false);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState<null | 'loading' | 'done'>(null);

  const handleGetFeedback = () => {
    if (!answer.trim()) return;
    setFeedback('loading');
    setTimeout(() => setFeedback('done'), 2000);
  };

  return (
    <div className="py-6 animate-in fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-['Poppins'] font-bold mb-2 flex items-center gap-3">
          Mock Interview Center <Mic className="w-8 h-8 text-[#00A8CC]" />
        </h1>
        <p className="text-[#94A3B8]">Practice makes placement. Get AI feedback on every answer.</p>
      </div>

      {!isPracticing ? (
        <>
          {/* Modes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card glowOnHover className="p-6 flex flex-col h-full">
              <Brain className="w-10 h-10 text-[#00A8CC] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quick Practice</h3>
              <p className="text-[#94A3B8] text-sm mb-6 flex-1">Answer one question at a time. Get instant AI feedback.</p>
              <Button onClick={() => setIsPracticing(true)} variant="secondary" className="w-full">Start Practice <ArrowRight className="w-4 h-4 ml-2 inline" /></Button>
            </Card>
            
            <Card glowOnHover className="p-6 flex flex-col h-full border-[#F5A623]">
              <Users className="w-10 h-10 text-[#F5A623] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Full Mock Interview</h3>
              <p className="text-[#94A3B8] text-sm mb-6 flex-1">Simulate a complete interview: Aptitude → Technical → HR. 45 minutes.</p>
              <Button variant="primary" className="w-full shadow-[0_0_15px_rgba(245,166,35,0.3)]">Start Full Mock <ArrowRight className="w-4 h-4 ml-2 inline" /></Button>
            </Card>

            <Card glowOnHover className="p-6 flex flex-col h-full">
              <Clock className="w-10 h-10 text-[#2ECC8A] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Topic-Wise Practice</h3>
              <p className="text-[#94A3B8] text-sm mb-6 flex-1">Pick a specific topic like Arrays, DBMS, or HR questions.</p>
              <Button variant="outline" className="w-full border-[#2ECC8A] text-[#2ECC8A]">Choose Topic <ArrowRight className="w-4 h-4 ml-2 inline" /></Button>
            </Card>
          </div>

          {/* Rounds Explained */}
          <h2 className="text-2xl font-['Poppins'] font-bold mb-6">What to Expect in Each Round</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { num: 1, title: 'Online Aptitude Test', topics: ['Quantitative', 'Logical', 'Verbal'], tips: 'Practice speed. Use elimination method.', color: 'border-t-blue-500' },
              { num: 2, title: 'Technical Interview', topics: ['DSA', 'Core CS Subjects', 'Projects'], tips: 'Explain your thought process.', color: 'border-t-[#00A8CC]' },
              { num: 3, title: 'HR Interview', topics: ['About yourself', 'Strengths', 'Why us?'], tips: 'Be genuine. Use STAR method.', color: 'border-t-[#F5A623]' },
              { num: 4, title: 'Managerial Round', topics: ['Situational', 'Leadership', 'Salary'], tips: 'Show confidence. Research well.', color: 'border-t-[#2ECC8A]' },
            ].map((round) => (
              <Card key={round.num} className={`p-5 border-t-4 ${round.color}`}>
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-semibold">{round.title}</h4>
                  <Badge variant="purple">Round {round.num}</Badge>
                </div>
                <ul className="text-sm text-[#94A3B8] space-y-1 mb-4 list-disc pl-4">
                  {round.topics.map(t => <li key={t}>{t}</li>)}
                </ul>
                <div className="text-xs italic text-[#94A3B8] bg-[#0A0F2C] p-2 rounded">
                  💡 Tip: {round.tips}
                </div>
              </Card>
            ))}
          </div>
        </>
      ) : (
        <div className="max-w-3xl mx-auto">
          <Button variant="ghost" onClick={() => setIsPracticing(false)} className="mb-6"><ArrowLeft className="w-4 h-4 mr-2" /> Back</Button>
          
          <div className="flex justify-between items-center mb-4">
            <span className="text-[#94A3B8] font-medium">Question 12 of 50</span>
            <Badge variant="amber">Medium Difficulty</Badge>
          </div>

          <Card className="p-6 md:p-8 mb-6 border-[#1E2A45]">
            <h2 className="text-xl md:text-2xl font-['Poppins'] font-semibold mb-6">Explain the difference between stack and queue with a real-world example.</h2>
            
            <textarea 
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your answer here... Be as detailed as you can."
              className="w-full min-h-[160px] bg-[#0A0F2C] border border-[#1E2A45] rounded-xl p-4 text-white focus:outline-none focus:border-[#F5A623] resize-y mb-4"
              disabled={feedback !== null}
            />

            {feedback === null && (
              <div className="flex justify-end">
                <Button onClick={handleGetFeedback} className="flex items-center gap-2 bg-[#F5A623] hover:bg-[#d48c1a]">
                  Get AI Feedback 🤖
                </Button>
              </div>
            )}
          </Card>

          <AnimatePresence>
            {feedback === 'loading' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-center py-8">
                <div className="w-8 h-8 border-4 border-[#1E2A45] border-t-[#00A8CC] rounded-full animate-spin mx-auto mb-4" />
                <p className="text-[#00A8CC] animate-pulse">🤖 Analyzing your answer...</p>
              </motion.div>
            )}

            {feedback === 'done' && (
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
                <Card className="p-6 md:p-8 border-[#2ECC8A] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#2ECC8A]/10 rounded-full blur-[40px]" />
                  
                  <div className="flex items-center gap-6 mb-8 border-b border-[#1E2A45] pb-6">
                    <div className="text-5xl font-bold text-[#F5A623]">7<span className="text-2xl text-[#94A3B8]">/10</span></div>
                    <Badge variant="green" className="text-sm px-3 py-1">Good Answer</Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-semibold text-white mb-3 flex items-center gap-2"><CheckCircle2 className="text-[#2ECC8A]" /> What you got right:</h4>
                      <ul className="space-y-2 text-[#94A3B8] text-sm">
                        <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#2ECC8A] mt-1.5 shrink-0" /> Correctly identified LIFO vs FIFO principle.</li>
                        <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#2ECC8A] mt-1.5 shrink-0" /> Good real-world example for Queue (ticket counter).</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-3 flex items-center gap-2"><AlertTriangle className="text-[#F5A623]" /> What you missed:</h4>
                      <ul className="space-y-2 text-[#94A3B8] text-sm">
                        <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#F5A623] mt-1.5 shrink-0" /> Forgot to mention standard operations (push/pop vs enqueue/dequeue).</li>
                        <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#F5A623] mt-1.5 shrink-0" /> Could have given a real-world example for Stack (browser history).</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-[#0A0F2C] border-l-4 border-l-[#00A8CC] p-4 rounded-r-lg mb-6">
                    <div className="font-semibold text-white mb-2 flex items-center gap-2">💡 Model Answer:</div>
                    <p className="text-sm text-[#94A3B8] leading-relaxed">
                      A Stack follows the LIFO (Last In First Out) principle, meaning the last element added is the first one removed. Operations are push and pop. A real-world example is a stack of plates in a cafeteria or a browser's back button history.
                      <br /><br />
                      A Queue follows the FIFO (First In First Out) principle, meaning the first element added is the first one removed. Operations are enqueue and dequeue. A real-world example is a line of people waiting at a ticket counter.
                    </p>
                  </div>

                  <div className="flex justify-end">
                    <Button onClick={() => { setFeedback(null); setAnswer(''); }} className="flex items-center gap-2">Next Question <ArrowRight className="w-4 h-4" /></Button>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

const ArrowLeft = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round" className={className}>
    <path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>
  </svg>
);
