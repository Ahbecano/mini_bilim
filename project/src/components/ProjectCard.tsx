import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { DifficultyBadge } from './ui/DifficultyBadge';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
    >
      <Link to={`/project/${project.id}`}>
        <div className="relative h-48 overflow-hidden">
          <img 
            src={project.image_url} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 flex justify-between items-center">
            <DifficultyBadge difficulty={project.difficulty} />
            <span className="text-white text-xs font-medium px-2 py-1 rounded bg-primary-700/80">
              {project.age_range}
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-display font-bold text-gray-800 mb-2 line-clamp-2">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-3">
            {project.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">
              {new Date(project.created_at).toLocaleDateString('tr-TR')}
            </span>
            <span className="text-primary-600 text-sm font-medium hover:text-primary-700">
              Deneyi Görüntüle →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};