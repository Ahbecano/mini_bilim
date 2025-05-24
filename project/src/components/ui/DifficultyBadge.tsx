import React from 'react';
import { DifficultyMap } from '../../types';

interface DifficultyBadgeProps {
  difficulty: 'Kolay' | 'Orta' | 'Zor';
  className?: string;
}

const difficultyColors: DifficultyMap = {
  'Kolay': {
    bg: 'bg-green-100',
    text: 'text-green-800'
  },
  'Orta': {
    bg: 'bg-yellow-100',
    text: 'text-yellow-800'
  },
  'Zor': {
    bg: 'bg-red-100',
    text: 'text-red-800'
  }
};

export const DifficultyBadge: React.FC<DifficultyBadgeProps> = ({ difficulty, className = '' }) => {
  const { bg, text } = difficultyColors[difficulty];
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bg} ${text} ${className}`}>
      {difficulty}
    </span>
  );
};