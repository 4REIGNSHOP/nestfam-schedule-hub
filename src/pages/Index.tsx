
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Users, Clock, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-blue-800 mb-6 leading-tight">
            {t('heroTitle')} 
            <span className="text-orange-500"> {t('heroTitleHighlight')}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {t('heroDescription')}
          </p>
          <Link to="/calendar">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-lg shadow-lg transform hover:scale-105 transition-all">
              <Calendar className="h-5 w-5 mr-2" />
              {t('getStarted')}
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">
          {t('featuresTitle')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0 group">
            <CardContent className="p-6 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('sharedCalendarTitle')}</h3>
              <p className="text-gray-600">
                {t('sharedCalendarDesc')}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0 group">
            <CardContent className="p-6 text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('familyMembersTitle')}</h3>
              <p className="text-gray-600">
                {t('familyMembersDesc')}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0 group">
            <CardContent className="p-6 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('eventCategoriesTitle')}</h3>
              <p className="text-gray-600">
                {t('eventCategoriesDesc')}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0 group">
            <CardContent className="p-6 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('familyFirstTitle')}</h3>
              <p className="text-gray-600">
                {t('familyFirstDesc')}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            {t('ctaTitle')}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('ctaDescription')}
          </p>
          <Link to="/calendar">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-lg shadow-lg transform hover:scale-105 transition-all">
              <Calendar className="h-5 w-5 mr-2" />
              {t('viewFamilyCalendar')}
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Users className="h-6 w-6" />
            <span className="text-xl font-bold">NestFam</span>
          </div>
          <p className="text-blue-200">
            {t('footerTagline')}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
