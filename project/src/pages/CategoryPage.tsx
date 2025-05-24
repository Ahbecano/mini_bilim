import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories, getIconComponent } from '../data/categories';
import { ProjectCard } from '../components/ProjectCard';
import { useProjects } from '../hooks/useProjects';

export const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { projects, loading } = useProjects(categoryId);
  const [ageFilter, setAgeFilter] = useState<string>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');

  // Find the current category
  const currentCategory = categories.find(c => c.id === categoryId);
  const Icon = currentCategory ? getIconComponent(currentCategory.icon) : null;

  // Filter projects based on selected filters
  const filteredProjects = projects.filter(project => {
    const matchesAge = ageFilter === 'all' || project.age_range.includes(ageFilter);
    const matchesDifficulty = difficultyFilter === 'all' || project.difficulty === difficultyFilter;
    return matchesAge && matchesDifficulty;
  });

  // Get unique age ranges and difficulties for filter options
  const ageRanges = Array.from(new Set(projects.map(p => p.age_range)));
  const difficulties = ['Kolay', 'Orta', 'Zor'];

  return (
    <div className="min-h-screen pt-16">
      {/* Category Header */}
      <div className="bg-primary-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-6 md:mb-0">
              {Icon && (
                <div className="bg-white/10 p-4 rounded-full mr-4">
                  <Icon size={32} />
                </div>
              )}
              <div>
                <h1 className="text-3xl font-display font-bold">
                  {currentCategory?.name || 'Kategori'}
                </h1>
                <p className="text-white/80 mt-1">
                  {currentCategory?.description || 'Bilim deneyleri kategorisi'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Projects */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 className="text-xl font-display font-semibold text-gray-800">Deneyleri Filtrele</h2>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div>
                <label htmlFor="age-filter" className="block text-sm font-medium text-gray-700 mb-1">Yaş Aralığı</label>
                <select
                  id="age-filter"
                  value={ageFilter}
                  onChange={(e) => setAgeFilter(e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                >
                  <option value="all">Tümü</option>
                  {ageRanges.map((age) => (
                    <option key={age} value={age}>{age}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="difficulty-filter" className="block text-sm font-medium text-gray-700 mb-1">Zorluk</label>
                <select
                  id="difficulty-filter"
                  value={difficultyFilter}
                  onChange={(e) => setDifficultyFilter(e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                >
                  <option value="all">Tümü</option>
                  {difficulties.map((difficulty) => (
                    <option key={difficulty} value={difficulty}>{difficulty}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
          </div>
        ) : filteredProjects.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-gray-700 mb-2">Bu filtrelere uygun deney bulunamadı</h3>
            <p className="text-gray-500">Lütfen farklı filtreler seçin veya tüm deneyleri görüntüleyin</p>
          </div>
        )}
      </div>
    </div>
  );
};