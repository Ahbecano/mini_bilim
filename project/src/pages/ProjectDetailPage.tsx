import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, CheckCircle2 } from 'lucide-react';
import { ProjectCard } from '../components/ProjectCard';
import { DifficultyBadge } from '../components/ui/DifficultyBadge';
import { useProject, useRelatedProjects } from '../hooks/useProjects';

export const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const { project, loading, error } = useProject(projectId ? parseInt(projectId) : 0);
  const { relatedProjects, loading: relatedLoading } = useRelatedProjects(
    project?.category ?? '',
    project?.id ?? 0
  );
    
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen pt-24 container mx-auto px-4">
        <div className="text-center py-16">
          <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">
            Deney bulunamadı
          </h2>
          <p className="text-gray-600 mb-8">
            Aradığınız deney bulunamadı veya bir hata oluştu.
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Project Hero */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12">
        <div className="container mx-auto px-4">
          <Link to={`/category/${project.category}`} className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            <span>Geri Dön</span>
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <DifficultyBadge difficulty={project.difficulty} />
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white">
              {project.age_range}
            </span>
            <span className="inline-flex items-center text-white/80 text-sm">
              <Clock size={16} className="mr-1" />
              {new Date(project.created_at).toLocaleDateString('tr-TR')}
            </span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <img
                src={project.image_url}
                alt={project.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              
              <div className="p-6">
                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                  Deney Hakkında
                </h2>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  {project.description}
                </p>
                
                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                  Deney Adımları
                </h2>
                <ol className="space-y-4 mb-8">
                  {project.steps.map((step, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex"
                    >
                      <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-800 font-bold mr-3">
                        {index + 1}
                      </span>
                      <div className="pt-1">
                        <p className="text-gray-700">{step}</p>
                      </div>
                    </motion.li>
                  ))}
                </ol>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h3 className="text-lg font-display font-semibold text-gray-800 mb-3">
                    Bilimsel Açıklama
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Bu deneyde bilimsel prensipleri gözlemleme fırsatı bulacaksınız. Çocuklarınıza deney sonuçlarını açıklarken, onlara sorular sorarak kendi sonuçlarına varmalarını sağlayabilirsiniz.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8 sticky top-24">
              <h2 className="text-xl font-display font-semibold text-gray-800 mb-4">
                Gerekli Malzemeler
              </h2>
              
              <ul className="space-y-3 mb-6">
                {project.materials.map((material, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle2 size={18} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{material}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="p-4 bg-accent-50 rounded-lg border border-accent-100">
                <h3 className="text-lg font-display font-semibold text-accent-800 mb-2">
                  Ebeveyn Notu
                </h3>
                <p className="text-accent-700 text-sm">
                  Bu deneyi çocuğunuzla yaparken güvenlik önlemlerini almayı unutmayın. Gerektiğinde yardım edin ve birlikte eğlenin!
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-display font-bold text-gray-800 mb-6">
              Benzer Deneyler
            </h2>
            
            {relatedLoading ? (
              <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-600"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};