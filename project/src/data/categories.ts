import { Category } from '../types';
import { Beaker, Dna, FlaskRound as Flask, LeafyGreen, Rocket, Zap } from 'lucide-react';

export const categories: Category[] = [
  {
    id: 'fizik',
    name: 'Fizik Deneyleri',
    icon: 'Zap',
    description: 'Hareket, kuvvet, elektrik ve enerji ile ilgili eğlenceli deneyler',
  },
  {
    id: 'kimya',
    name: 'Kimya Deneyleri',
    icon: 'Flask',
    description: 'Renkli reaksiyonlar ve malzemelerin özelliklerini keşfedin',
  },
  {
    id: 'biyoloji',
    name: 'Biyoloji Deneyleri',
    icon: 'LeafyGreen',
    description: 'Bitkiler, hayvanlar ve insan vücudu hakkında deneyler',
  },
  {
    id: 'astronomi',
    name: 'Astronomi Deneyleri',
    icon: 'Rocket',
    description: 'Gezegenler, yıldızlar ve uzay keşifleri',
  },
  {
    id: 'genetik',
    name: 'Genetik Deneyleri',
    icon: 'Dna',
    description: 'DNA ve genetik bilimi hakkında basit deneyler',
  },
  {
    id: 'diger',
    name: 'Diğer Deneyler',
    icon: 'Beaker',
    description: 'Farklı bilim alanlarından eğlenceli deneyler',
  },
];

export const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Zap':
      return Zap;
    case 'Flask':
      return Flask;
    case 'LeafyGreen':
      return LeafyGreen;
    case 'Rocket':
      return Rocket;
    case 'Dna':
      return Dna;
    case 'Beaker':
    default:
      return Beaker;
  }
};