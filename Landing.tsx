import React, { useState, useRef, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Send, Map, Briefcase, BookOpen, Target, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../utils/cn';

export const Chatbot = () => {
  const [messages, setMessages] = useState([
    { id: 1, role: 'ai', text: "Hi! I'm Career Nanban AI 👋 I'm here to help with your career journey. Ask me anything about learning paths, interview prep, skills, or job search!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const topics = [
    {
      icon: Map, title: 'Roadmap Help',
      queries: ['Build my roadmap for Data Science', 'What should I learn for full stack?', "I'm a fresher, where do I start?"]
    },
    {
      icon: Briefcase, title: 'Interview Prep',
      queries: ['Give me 10 HR interview questions', "How do I answer 'Tell me about yourself'?", 'Explain DBMS concepts for interview']
    },
    {
      icon: BookOpen, title: 'Learning Help',
      queries: ['Explain recursion simply', 'What is the difference between SQL joins?', 'Suggest resources for machine learning']
    },
    {
      icon: Target, title: 'Career Advice',
      queries: ['Which companies hire data science freshers?', 'How to write a fresher resume?', 'What skills does TCS look for?']
    }
  ];

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    
    const newMsg = { id: Date.now(), role: 'user', text };
    setMessages(prev => [...prev, newMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now(),
        role: 'ai',
        text: `Here is some information regarding "${text}". As an AI mentor, I recommend breaking this down into smaller steps. First, ensure you have strong fundamentals...`
      }]);
    }, 1500);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="py-6 flex flex-col h-[calc(100vh-80px)]">
      <div className="mb-6 flex justify-between items-center shrink-0">
        <div>
          <h1 className="text-3xl font-['Poppins'] font-bold mb-1">Career Nanban AI 🤖</h1>
          <p className="text-[#94A3B8]">Your personal career mentor. Ask anything.</p>
        </div>
        <Button variant="outline" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Menu className="w-5 h-5" />
        </Button>
      </div>

      <div className="flex-1 flex gap-6 overflow-hidden relative border border-[#1E2A45] rounded-xl bg-[#0A0F2C]">
        {/* Sidebar */}
        <div className={cn(
          "w-80 shrink-0 bg-[#131929] border-r border-[#1E2A45] p-4 overflow-y-auto hide-scrollbar absolute lg:static inset-y-0 left-0 z-20 transition-transform duration-300",
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}>
          <h3 className="font-semibold mb-6 text-[#94A3B8]">Suggested Topics</h3>
          <div className="space-y-6">
            {topics.map((section, i) => (
              <div key={i}>
                <div className="flex items-center gap-2 mb-3 text-white">
                  <section.icon className="w-4 h-4 text-[#F5A623]" />
                  <h4 className="font-medium">{section.title}</h4>
                </div>
                <div className="flex flex-col gap-2">
                  {section.queries.map((q, qi) => (
                    <button
                      key={qi}
                      onClick={() => { handleSend(q); setSidebarOpen(false); }}
                      className="text-left text-sm text-[#94A3B8] bg-[#0A0F2C] border border-[#1E2A45] p-2.5 rounded-lg hover:border-[#00A8CC] hover:text-white transition-colors"
                    >
                      "{q}"
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col relative">
          {/* Overlay for mobile sidebar */}
          {sidebarOpen && <div className="absolute inset-0 bg-black/50 z-10 lg:hidden" onClick={() => setSidebarOpen(false)} />}
          
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 hide-scrollbar">
            {messages.map(msg => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                key={msg.id}
                className={cn("flex max-w-[85%]", msg.role === 'user' ? "ml-auto justify-end" : "")}
              >
                <div className={cn("flex gap-3", msg.role === 'user' ? "flex-row-reverse" : "")}>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold text-xs",
                    msg.role === 'ai' ? "bg-[#00A8CC] text-white" : "bg-[#F5A623] text-white"
                  )}>
                    {msg.role === 'ai' ? 'CN' : 'ME'}
                  </div>
                  <div className={cn(
                    "p-4 rounded-2xl",
                    msg.role === 'user' ? "bg-[#F5A623]/10 border border-[#F5A623] text-white rounded-tr-sm" : "bg-[#131929] border-l-4 border-l-[#00A8CC] border-y border-r border-[#1E2A45] rounded-tl-sm text-white"
                  )}>
                    <p className="whitespace-pre-wrap text-sm md:text-base leading-relaxed">{msg.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex max-w-[85%] gap-3">
                <div className="w-8 h-8 rounded-full bg-[#00A8CC] text-white flex items-center justify-center shrink-0 font-bold text-xs">CN</div>
                <div className="bg-[#131929] border-l-4 border-l-[#00A8CC] border-y border-r border-[#1E2A45] p-4 rounded-2xl rounded-tl-sm flex items-center gap-1.5">
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-2 h-2 rounded-full bg-[#00A8CC]" />
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-2 h-2 rounded-full bg-[#00A8CC]" />
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-2 h-2 rounded-full bg-[#00A8CC]" />
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-[#1E2A45] bg-[#131929] shrink-0">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend(input)}
                placeholder="Ask anything about your career..."
                className="w-full bg-[#0A0F2C] border border-[#1E2A45] rounded-full py-3 pl-4 pr-14 text-white focus:outline-none focus:border-[#F5A623] transition-colors"
              />
              <button
                onClick={() => handleSend(input)}
                disabled={!input.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#F5A623] text-white rounded-full flex items-center justify-center hover:bg-[#d48c1a] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-4 h-4 -ml-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
