import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Splash = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A0F2C]"
        >
          <div className="flex flex-col items-center">
            {/* Logo animation */}
            <motion.div
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: [1.1, 1] }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="relative w-20 h-20 rounded-full border-2 border-[#F5A623] flex items-center justify-center mb-6"
            >
              {/* Ripple rings */}
              <motion.div
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                className="absolute inset-0 rounded-full border-2 border-[#F5A623]"
              />
              <motion.div
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                className="absolute inset-0 rounded-full border-2 border-[#F5A623]"
              />
              
              <span className="text-[#F5A623] font-['Poppins'] font-bold text-3xl z-10">CN</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-white text-4xl font-['Poppins'] font-bold mb-2"
            >
              Career Nanban
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="text-[#00A8CC] text-lg font-['Inter']"
            >
              Guiding you today, empowering you tomorrow.
            </motion.p>

            {/* Loading Bar */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 h-1 bg-[#1E2A45] rounded-full overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 2.5, ease: 'linear' }}
                className="w-full h-full bg-[#F5A623]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
