import React from 'react';

export interface SectionProps {
  id: string;
  isActive: boolean;
}

export interface AnimationProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export interface MetricCardProps {
  value: string;
  label: string;
  trend?: 'up' | 'down' | 'neutral';
}

export interface BadgeProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'outline';
}