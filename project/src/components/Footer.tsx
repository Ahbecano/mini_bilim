import React from 'react';
import { Link } from 'react-router-dom';
import { FlaskRound as Flask, Mail, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Flask size={24} className="text-primary-400" />
              <span className="font-display font-bold text-xl">Mini Bilim</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Çocuklara bilimi sevdiren, evde yapılabilecek eğlenceli ve öğretici deney fikirleri.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:info@minibilim.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Ana Sayfa</Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-400 hover:text-white transition-colors">Tüm Kategoriler</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">Hakkımızda</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Kategoriler</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/fizik" className="text-gray-400 hover:text-white transition-colors">Fizik Deneyleri</Link>
              </li>
              <li>
                <Link to="/category/kimya" className="text-gray-400 hover:text-white transition-colors">Kimya Deneyleri</Link>
              </li>
              <li>
                <Link to="/category/biyoloji" className="text-gray-400 hover:text-white transition-colors">Biyoloji Deneyleri</Link>
              </li>
              <li>
                <Link to="/category/astronomi" className="text-gray-400 hover:text-white transition-colors">Astronomi Deneyleri</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">İletişim</h3>
            <p className="text-gray-400 mb-4">
              Sorularınız ve önerileriniz için bize ulaşın.
            </p>
            <Link 
              to="/contact"
              className="inline-block px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
            >
              Bize Yazın
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Mini Bilim Projeleri. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};