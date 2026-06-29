import React from 'react';
import { cn } from './utils';
import { motion } from 'motion/react';

export const ProgressBar = ({ 
  value, 
  className, 
  indicatorClassName 
}: { 
  value: number; 
  className?: string;
  indicatorClassName?: string;
}) => {
  return (
    <div className={cn('h-2 bg-[#1E2A45] rounded-full overflow-hidden', className)}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn('h-full bg-[#F5A623]', indicatorClassName)}
      />
    </div>
  );
};
