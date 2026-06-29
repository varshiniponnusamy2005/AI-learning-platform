import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { X, Target, Code, Briefcase, Sparkles } from 'lucide-react';
import { useAuth } from '../utils/AuthContext';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);
  const [goal, setGoal] = useState('');
  const [experience, setExperience] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const { completeOnboarding } = useAuth();

  const goals = [
    { id: 'job', label: 'Get a Job', icon: Briefcase },
    { id: 'skills', label: 'Learn New Skills', icon: Code },
    { id: 'career', label: 'Career Growth', icon: Target },
    { id: 'explore', label: 'Explore Tech', icon: Sparkles },
  ];

  const experienceLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

  const techInterests = [
    'Web Development', 'Mobile Apps', 'AI/ML', 'Data Science',
    'DevOps', 'Cloud', 'Cybersecurity', 'Game Development'
  ];

  const handleInterestToggle = (interest: string) => {
    setInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    }
  };

  const handleFinish = () => {
    completeOnboarding();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            <Card className="p-8 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-[#131929] transition-colors"
              >
                <X className="w-5 h-5 text-[#94A3B8]" />
              </button>

              <div className="mb-6">
                <h2 className="text-2xl font-['Poppins'] font-bold mb-2">
                  Let's personalize your journey!
                </h2>
                <p className="text-[#94A3B8]">
                  Step {step + 1} of 3 - Help us tailor the experience for you
                </p>
              </div>

              {/* Progress Bar */}
              <div className="flex gap-2 mb-8">
                {[0, 1, 2].map(i => (
                  <div
                    key={i}
                    className={`h-2 flex-1 rounded-full transition-colors ${
                      i <= step ? 'bg-[#00A8CC]' : 'bg-[#1E2A45]'
                    }`}
                  />
                ))}
              </div>

              {step === 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">What's your main goal?</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {goals.map(g => (
                      <button
                        key={g.id}
                        onClick={() => setGoal(g.id)}
                        className={`p-4 rounded-xl border transition-all flex items-center gap-3 ${
                          goal === g.id
                            ? 'border-[#00A8CC] bg-[#00A8CC]/10'
                            : 'border-[#1E2A45] hover:border-[#00A8CC]/50'
                        }`}
                      >
                        <g.icon className={`w-6 h-6 ${goal === g.id ? 'text-[#00A8CC]' : 'text-[#94A3B8]'}`} />
                        <span className="font-medium">{g.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 1 && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">What's your experience level?</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {experienceLevels.map(level => (
                      <button
                        key={level}
                        onClick={() => setExperience(level)}
                        className={`p-4 rounded-xl border transition-all ${
                          experience === level
                            ? 'border-[#F5A623] bg-[#F5A623]/10'
                            : 'border-[#1E2A45] hover:border-[#F5A623]/50'
                        }`}
                      >
                        <span className="font-medium">{level}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Select your tech interests (optional)</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {techInterests.map(interest => (
                      <button
                        key={interest}
                        onClick={() => handleInterestToggle(interest)}
                        className={`p-3 rounded-xl border transition-all text-sm ${
                          interests.includes(interest)
                            ? 'border-[#2ECC8A] bg-[#2ECC8A]/10'
                            : 'border-[#1E2A45] hover:border-[#2ECC8A]/50'
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={() => setStep(step - 1)}
                  disabled={step === 0}
                  className={step === 0 ? 'invisible' : ''}
                >
                  Back
                </Button>
                <Button
                  onClick={step === 2 ? handleFinish : handleNext}
                  disabled={
                    (step === 0 && !goal) ||
                    (step === 1 && !experience)
                  }
                  className="flex items-center gap-2"
                >
                  {step === 2 ? 'Get Started' : 'Next'}
                  {step < 2 && <Sparkles className="w-4 h-4" />}
                </Button>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
