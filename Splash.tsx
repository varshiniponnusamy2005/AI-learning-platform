import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Check, ArrowRight } from 'lucide-react';
import { cn } from '../utils/cn';
import logoSrc from '../../imports/WhatsApp_Image_2026-06-19_at_1.56.20_PM.jpeg';

export const Onboarding = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => setStep(prev => prev + 1);

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="text-center">
            <h1 className="text-4xl font-['Poppins'] font-bold mb-4">Let's build your career path! 👋</h1>
            <p className="text-[#94A3B8] text-lg mb-8">Answer 6 quick questions. We'll create a roadmap just for you.</p>
            <Button size="lg" onClick={handleNext} className="w-full md:w-auto">Let's Go <ArrowRight className="inline ml-2" /></Button>
          </motion.div>
        );
      case 2:
        return <StepOption title="What is your education background?" subtitle="This helps us suggest the right career paths for you." options={['🎓 Currently Studying (UG/PG)', '📚 Completed Degree — Fresher (0-1 year)', '💼 Working Professional (1+ years experience)', '🔄 Career Switcher']} onNext={handleNext} />;
      case 3:
        return <StepOption title="What is your career goal?" subtitle="Choose the domain you want to work in." options={['💻 Software Development', '📊 Data Science & Analytics', '🤖 AI & Machine Learning', '🎨 UI/UX Design', '☁️ Cloud & DevOps', '🔐 Cybersecurity', '📱 Mobile Development', '🧪 QA & Testing', '📢 Digital Marketing']} grid onNext={handleNext} />;
      case 4:
        return <StepOption title="What skills do you already have?" subtitle="Be honest — this helps us skip what you already know." options={['Python', 'Java', 'C++', 'JavaScript', 'HTML/CSS', 'React', 'Node.js', 'SQL']} multi onNext={handleNext} />;
      case 5:
        return <StepOption title="How would you rate yourself?" subtitle="Be honest — we'll start you at the right level." options={['🌱 Complete Beginner', '📈 Some Knowledge', '🚀 Intermediate']} onNext={handleNext} />;
      case 6:
        return <StepOption title="What's your placement goal?" subtitle="Target company and timeline." options={['1 Month', '3 Months', '6 Months', '1 Year']} onNext={() => setStep(7)} />;
      case 7:
        return <GeneratingRoadmap onComplete={() => navigate('/dashboard')} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0F2C] text-white flex flex-col">
      <header className="h-16 border-b border-[#1E2A45] flex items-center justify-between px-6">
        <img src={logoSrc} alt="Logo" className="w-8 h-8 rounded-full border border-[#F5A623]" />
        {step < 7 && <span className="text-[#94A3B8]">Step {step} of 6</span>}
      </header>
      {step < 7 && (
        <div className="h-1 bg-[#1E2A45]">
          <motion.div className="h-full bg-[#F5A623]" initial={{ width: 0 }} animate={{ width: `${(step / 6) * 100}%` }} />
        </div>
      )}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-3xl">
          <AnimatePresence mode="wait">
            <React.Fragment key={step}>
              {renderStep()}
            </React.Fragment>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

const StepOption = ({ title, subtitle, options, grid, multi, onNext }: any) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (opt: string) => {
    if (multi) setSelected(prev => prev.includes(opt) ? prev.filter(x => x !== opt) : [...prev, opt]);
    else setSelected([opt]);
  };

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
      <h2 className="text-3xl font-['Poppins'] font-bold mb-2">{title}</h2>
      <p className="text-[#94A3B8] mb-8">{subtitle}</p>
      <div className={cn("grid gap-4 mb-8", grid ? "grid-cols-2 md:grid-cols-3" : "grid-cols-1", multi && "flex flex-wrap")}>
        {options.map((opt: string) => (
          <div 
            key={opt}
            onClick={() => toggle(opt)}
            className={cn(
              "p-4 rounded-xl border cursor-pointer transition-all flex items-center gap-3",
              multi ? "inline-flex w-auto" : "w-full",
              selected.includes(opt) ? "border-[#F5A623] bg-[#F5A623]/10" : "border-[#1E2A45] bg-[#131929] hover:border-[#00A8CC]"
            )}
          >
            {selected.includes(opt) ? <div className="w-5 h-5 rounded-full bg-[#F5A623] flex items-center justify-center"><Check className="w-3 h-3 text-white" /></div> : <div className="w-5 h-5 rounded-full border border-[#94A3B8]" />}
            <span className={selected.includes(opt) ? "text-white font-medium" : "text-[#94A3B8]"}>{opt}</span>
          </div>
        ))}
      </div>
      <Button disabled={selected.length === 0 && !multi} onClick={onNext} className="w-full md:w-auto">Continue <ArrowRight className="inline ml-2 w-4 h-4" /></Button>
    </motion.div>
  );
};

const GeneratingRoadmap = ({ onComplete }: { onComplete: () => void }) => {
  React.useEffect(() => {
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
      <div className="w-16 h-16 border-4 border-[#1E2A45] border-t-[#F5A623] rounded-full animate-spin mx-auto mb-8" />
      <h2 className="text-2xl font-['Poppins'] font-bold mb-6">🤖 AI is building your personalized roadmap...</h2>
      <div className="space-y-4 text-left max-w-sm mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="text-[#2ECC8A]">✓ Analyzing your background...</motion.div>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }} className="text-[#2ECC8A]">✓ Mapping career requirements...</motion.div>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.9 }} className="text-[#2ECC8A]">✓ Building your learning path...</motion.div>
      </div>
    </motion.div>
  );
};
