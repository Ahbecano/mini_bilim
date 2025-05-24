import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../types';
import { getIconComponent } from '../data/categories';
import { motion } from 'framer-motion';

interface CategoryCardProps {
  category: Category;
  index: number;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, index }) => {
  const Icon = getIconComponent(category.icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link 
        to={`/category/${category.id}`}
        className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all group"
      >
        <div className="flex flex-col items-center text-center">
          <motion.div 
            className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mb-4"
            whileHover={{ scale: 1.1 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ 
              y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
              scale: { duration: 0.3 }
            }}
          >
            <Icon size={32} />
          </motion.div>
          <h3 className="text-lg font-display font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
            {category.name}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2">
            {category.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};