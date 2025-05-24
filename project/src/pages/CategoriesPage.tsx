import React from 'react';
import { motion } from 'framer-motion';
import { categories } from '../data/categories';
import { CategoryCard } from '../components/CategoryCard';

export const CategoriesPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Deney Kategorileri
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Çocuğunuzun ilgi alanına göre farklı bilim dallarında heyecan verici deneyler keşfedin
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="bg-gray-50 rounded-lg p-8 mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">
            Eğlenceli Bilim Zamanı!
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Bu kategorilerde yer alan deneyleri evde kolayca bulabileceğiniz malzemelerle yapabilirsiniz. Bilim öğrenmenin en eğlenceli yolu, yaparak ve keşfederek öğrenmektir!
          </p>
          <a 
            href="/"
            className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            Öne Çıkan Deneyleri Gör
          </a>
        </motion.div>
      </div>
    </div>
  );
};