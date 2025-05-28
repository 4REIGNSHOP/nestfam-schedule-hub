
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Users, Clock, Heart } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-blue-800 mb-6 leading-tight">
            Keep Your Family 
            <span className="text-orange-500"> Connected</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            NestFam helps families stay organized with a shared calendar where everyone 
            can add their schedules, appointments, and special events. Never miss a 
            family moment again!
          </p>
          <Link to="/calendar">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-lg shadow-lg transform hover:scale-105 transition-all">
              <Calendar className="h-5 w-5 mr-2" />
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">
          Everything Your Family Needs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0 group">
            <CardContent className="p-6 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Shared Calendar</h3>
              <p className="text-gray-600">
                One calendar for the whole family to see everyone's schedule at a glance
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0 group">
            <CardContent className="p-6 text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Family Members</h3>
              <p className="text-gray-600">
                Track each family member's activities and commitments separately
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0 group">
            <CardContent className="p-6 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Event Categories</h3>
              <p className="text-gray-600">
                Organize events by type: work, school, family time, sports, and more
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0 group">
            <CardContent className="p-6 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Family First</h3>
              <p className="text-gray-600">
                Designed with families in mind - simple, intuitive, and accessible for all ages
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Ready to Organize Your Family Life?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start using NestFam today and keep your family connected and organized.
          </p>
          <Link to="/calendar">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-lg shadow-lg transform hover:scale-105 transition-all">
              <Calendar className="h-5 w-5 mr-2" />
              View Family Calendar
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
            Bringing families together, one schedule at a time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
