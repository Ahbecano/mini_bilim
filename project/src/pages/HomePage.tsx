import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { HeroSection } from '../components/HeroSection';
import { CategoryCard } from '../components/CategoryCard';
import { ProjectCard } from '../components/ProjectCard';
import { categories } from '../data/categories';
import { useProjects } from '../hooks/useProjects';

export const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { projects, loading } = useProjects();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  // Get featured projects (just take the first 3 for now)
  const featuredProjects = projects.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen">
      <HeroSection onSearch={handleSearch} />
      
      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-800 mb-4">
              Deney Kategorileri
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              İlgi alanınıza göre farklı bilim dallarında deneyler keşfedin
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-800 mb-2">
                Öne Çıkan Deneyler
              </h2>
              <p className="text-gray-600">
                Çocukların en çok sevdiği bilim deneyleri
              </p>
            </div>
            <motion.div whileHover={{ x: 5 }}>
              <a href="/categories" className="flex items-center text-primary-600 hover:text-primary-700 font-medium">
                <span>Tüm Deneyleri Gör</span>
                <ArrowRight size={16} className="ml-1" />
              </a>
            </motion.div>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
            </div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {featuredProjects.map((project) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 bg-primary-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-primary-900 mb-4">
              Bilimi Eğlenceli Hale Getirin!
            </h2>
            <p className="text-primary-800 mb-8">
              Çocuklarınızla birlikte evde yapabileceğiniz bilim deneylerini keşfedin ve öğrenmenin tadını çıkarın.
            </p>
            <a href="/categories" className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              Deneyleri Keşfet
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};