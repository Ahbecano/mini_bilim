import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="bg-primary-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Hakkımızda
          </h1>
          <p className="text-white/90 max-w-2xl">
            Mini Bilim, çocukların bilimi severek öğrenmesi için tasarlanmış eğitici bir platformdur.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mission and Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <h2 className="text-2xl font-display font-bold text-gray-800 mb-6">
              Misyonumuz ve Vizyonumuz
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3">
                  Misyonumuz
                </h3>
                <p className="text-gray-600">
                  Çocukların bilimsel düşünme becerilerini geliştirmek, merak duygularını beslemek ve bilimi günlük hayatın eğlenceli bir parçası haline getirmek için çalışıyoruz.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-600 mb-3">
                  Vizyonumuz
                </h3>
                <p className="text-gray-600">
                  Her çocuğun bilimi severek öğrendiği, keşfetme tutkusuyla dolu bir gelecek hayal ediyoruz. Amacımız, bilimi herkes için erişilebilir ve anlaşılır kılmak.
                </p>
              </div>
            </div>
          </motion.div>

          {/* What We Do */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <h2 className="text-2xl font-display font-bold text-gray-800 mb-6">
              Neler Yapıyoruz?
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                Mini Bilim olarak:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary-600 mr-3"></span>
                  Evde kolayca yapılabilecek bilim deneyleri sunuyoruz
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary-600 mr-3"></span>
                  Her yaş grubuna uygun içerikler hazırlıyoruz
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary-600 mr-3"></span>
                  Güvenli ve eğlenceli deney ortamları oluşturuyoruz
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary-600 mr-3"></span>
                  Bilimsel düşünme becerilerini geliştiriyoruz
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 bg-white rounded-lg shadow-md p-8"
        >
          <h2 className="text-2xl font-display font-bold text-gray-800 mb-8">
            İletişim Bilgileri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start">
              <Mail className="flex-shrink-0 w-6 h-6 text-primary-600 mr-3" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">E-posta</h3>
                <p className="text-gray-600">info@minibilim.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="flex-shrink-0 w-6 h-6 text-primary-600 mr-3" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Telefon</h3>
                <p className="text-gray-600">+90 (505) 035 67 78</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="flex-shrink-0 w-6 h-6 text-primary-600 mr-3" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Adres</h3>
                <p className="text-gray-600">Ayancık Yalı Mahallesi No:2, Sinop</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};