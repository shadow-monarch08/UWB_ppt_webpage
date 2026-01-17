import React from 'react';
import { BadgeProps } from '../../types';

const Badge: React.FC<BadgeProps> = ({ text, variant = 'primary' }) => {
  const baseClasses = "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide";
  
  let variantClasses = "";
  switch (variant) {
    case 'primary':
      variantClasses = "bg-sapphire/10 text-sapphire";
      break;
    case 'secondary':
      variantClasses = "bg-gray-100 text-neutral-grey";
      break;
    case 'outline':
      variantClasses = "border border-gray-200 text-charcoal";
      break;
  }

  return (
    <span className={`${baseClasses} ${variantClasses}`}>
      {text}
    </span>
  );
};

export default Badge;