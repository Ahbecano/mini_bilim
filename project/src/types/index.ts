export type Project = {
  id: number;
  title: string;
  description: string;
  steps: string[];
  materials: string[];
  age_range: string;
  difficulty: 'Kolay' | 'Orta' | 'Zor';
  category: string;
  image_url: string;
  created_at: string;
};

export type Category = {
  id: string;
  name: string;
  icon: string;
  description: string;
};

export type DifficultyColor = {
  bg: string;
  text: string;
};

export type DifficultyMap = {
  [key in 'Kolay' | 'Orta' | 'Zor']: DifficultyColor;
};