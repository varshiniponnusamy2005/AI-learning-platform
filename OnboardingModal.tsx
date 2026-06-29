import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ArrowRight, Mail, Lock, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../utils/AuthContext';
import { OnboardingModal } from './OnboardingModal';

export const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);

  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      let success: boolean;
      if (isSignUp) {
        success = await signup(name, email, password);
        if (!success) setError('Signup failed. Please try again.');
      } else {
        success = await login(email, password);
        if (!success) setError('Invalid email or password.');
      }

      if (success) {
        if (isSignUp) {
          setShowOnboarding(true);
        } else {
          navigate('/dashboard');
        }
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#0A0F2C] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#00A8CC]/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#F5A623]/20 rounded-full blur-[80px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-['Poppins'] font-bold mb-2">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h1>
            <p className="text-[#94A3B8]">
              {isSignUp ? 'Start your learning journey today' : 'Sign in to continue your journey'}
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {isSignUp && (
              <div className="space-y-2">
                <label className="text-sm text-[#94A3B8]">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-[#0A0F2C] border border-[#1E2A45] rounded-lg focus:outline-none focus:border-[#00A8CC] text-white"
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm text-[#94A3B8]">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[#0A0F2C] border border-[#1E2A45] rounded-lg focus:outline-none focus:border-[#00A8CC] text-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-[#94A3B8]">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[#0A0F2C] border border-[#1E2A45] rounded-lg focus:outline-none focus:border-[#00A8CC] text-white"
                />
              </div>
            </div>

            {!isSignUp && (
              <div className="text-right">
                <a href="#" className="text-sm text-[#00A8CC] hover:underline">Forgot password?</a>
              </div>
            )}

            <Button type="submit" className="w-full flex items-center justify-center gap-2" disabled={loading}>
              {loading ? 'Please wait...' : (isSignUp ? 'Create Account' : 'Sign In')} <ArrowRight className="w-4 h-4" />
            </Button>
          </form>

          {error && (
            <div className="mt-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-500 text-sm">
              {error}
            </div>
          )}

          <div className="mt-6 text-center">
            <p className="text-[#94A3B8]">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-[#00A8CC] hover:underline font-medium"
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>

          {showOnboarding && (
            <OnboardingModal
              isOpen={showOnboarding}
              onClose={() => {
                setShowOnboarding(false);
                navigate('/dashboard');
              }}
            />
          )}

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#1E2A45]" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#131929] text-[#94A3B8]">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button variant="outline" className="w-full">
                Google
              </Button>
              <Button variant="outline" className="w-full">
                GitHub
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};
