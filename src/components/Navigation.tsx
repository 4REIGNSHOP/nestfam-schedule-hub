
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Home, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Navigation = () => {
  const location = useLocation();
  const { t } = useLanguage();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-white shadow-lg border-b border-blue-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Users className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-800">NestFam</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="flex space-x-8">
              <Link
                to="/"
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  isActive('/') 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Home className="h-5 w-5" />
                <span>{t('home')}</span>
              </Link>
              
              <Link
                to="/calendar"
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  isActive('/calendar') 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Calendar className="h-5 w-5" />
                <span>{t('calendar')}</span>
              </Link>
            </div>
            <LanguageToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
