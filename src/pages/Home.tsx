import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, TrendingUp, Users, Clock, Award } from 'lucide-react';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="Quotely - AI-Powered Insurance Quoting Platform"
        description="Transform your insurance agency with Quotely's AI-powered quoting platform. Get real-time rates from 100+ carriers and boost conversions by 40%."
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 section-padding">
        <div className="container-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Transform Your Insurance Agency with <span className="text-primary-600">AI-Powered Quoting</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Quotely revolutionizes insurance quoting with intelligent automation, real-time rates, and seamless carrier integration. Boost your agency's efficiency by 10x.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/demo" className="btn-primary">
                  Get Started Free <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link to="/calculator" className="btn-secondary">
                  Calculate Your ROI
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-2xl p-8">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Quotely Dashboard" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-wrapper">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Quotely?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built by insurance professionals for insurance professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <Zap className="text-primary-600 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">Lightning Fast Quotes</h3>
              <p className="text-gray-600">
                Generate accurate quotes in seconds with our AI-powered engine that learns from millions of data points.
              </p>
            </div>

            <div className="card">
              <Shield className="text-primary-600 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">100+ Carrier Integration</h3>
              <p className="text-gray-600">
                Access real-time rates from over 100 insurance carriers through our unified API platform.
              </p>
            </div>

            <div className="card">
              <TrendingUp className="text-primary-600 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">Increase Conversion</h3>
              <p className="text-gray-600">
                Boost your conversion rates by up to 40% with intelligent recommendations and automated follow-ups.
              </p>
            </div>

            <div className="card">
              <Users className="text-primary-600 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
              <p className="text-gray-600">
                Seamlessly collaborate with your team with built-in CRM, task management, and communication tools.
              </p>
            </div>

            <div className="card">
              <Clock className="text-primary-600 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">Save 10+ Hours Weekly</h3>
              <p className="text-gray-600">
                Automate repetitive tasks and focus on what matters most - building relationships with clients.
              </p>
            </div>

            <div className="card">
              <Award className="text-primary-600 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">Industry Leading Support</h3>
              <p className="text-gray-600">
                Get 24/7 support from our team of insurance experts and technical specialists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">10,000+</div>
              <p className="text-gray-600">Active Agencies</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">2M+</div>
              <p className="text-gray-600">Quotes Generated</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">$500M+</div>
              <p className="text-gray-600">Premiums Written</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="container-wrapper text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Agency?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of successful agencies using Quotely to streamline operations and boost revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Start Free Trial
            </Link>
            <Link to="/pricing" className="btn-secondary bg-primary-700 text-white hover:bg-primary-800">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;