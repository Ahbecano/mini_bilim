import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';
import { ProjectCard } from '../components/ProjectCard';
import { useProjects } from '../hooks/useProjects';

export const SearchResultsPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q') || '';
  const { projects, loading } = useProjects(undefined, query);
  const [searchInput, setSearchInput] = useState(query);
  
  useEffect(() => {
    setSearchInput(query);
  }, [query]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchInput)}`;
    }
  };
  
  return (
    <div className="min-h-screen pt-16">
      <div className="bg-primary-600 text-white py-10">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            <span>Ana Sayfaya Dön</span>
          </Link>
          
          <h1 className="text-3xl font-display font-bold mb-6">
            Arama Sonuçları
          </h1>
          
          <form onSubmit={handleSearch} className="max-w-2xl relative">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Deney ara..."
              className="w-full px-5 py-3 pr-12 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent-400 shadow-lg"
            />
            <button 
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors"
            >
              <Search size={20} />
            </button>
          </form>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <p className="text-gray-600">
            <span className="font-semibold">{query}</span> için {projects.length} sonuç bulundu
          </p>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
          </div>
        ) : projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow-md">
            <div className="mb-4">
              <Search size={48} className="mx-auto text-gray-400" />
            </div>
            <h2 className="text-2xl font-display font-semibold text-gray-800 mb-2">
              Sonuç bulunamadı
            </h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              "{query}" için sonuç bulunamadı. Farklı bir arama terimi deneyin veya kategorileri göz atın.
            </p>
            <Link 
              to="/categories"
              className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
            >
              Tüm Kategorileri Gör
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};