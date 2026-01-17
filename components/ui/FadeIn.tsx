import React from 'react';
import { motion } from 'framer-motion';
import { AnimationProps } from '../../types';

const FadeIn: React.FC<AnimationProps> = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      // once: false ensures the animation resets when the element leaves and re-enters the viewport
      // amount: 0.2 ensures the animation triggers when 20% of the element is visible
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, delay: delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;