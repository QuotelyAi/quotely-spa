import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, TrendingUp, Users, Clock, Award } from 'lucide-react';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="Quotely - Modern Insurance Intelligence Platform"
        description="Streamline your insurance quoting process with Quotely's intelligent platform. Built for professional results with verified carrier integrations."
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-800 text-white relative min-h-screen">
        {/* Background Quotely Text */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-20 z-0">
          <span className="text-[20vw] font-black text-white/10">Quotely</span>
        </div>
        
        <div className="container-wrapper relative z-10 pt-16 pb-20">
          <div className="max-w-4xl">
            {/* Main Heading with Yellow Quotely */}
            <h1 className="mb-8 leading-tight">
              <span className="block text-6xl md:text-7xl lg:text-8xl font-black text-accent-500 mb-2">
                Quotely
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1">
                Insurance Intelligence
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Platform
              </span>
            </h1>
              <p className="text-xl text-white/90 mb-12 max-w-2xl">
                Streamline your quote process, increase conversions, and grow your revenue with our intelligent insurance platform. Built for professional results.
              </p>
              
              {/* Stats Section */}
              <div className="flex flex-col sm:flex-row gap-8 mb-12">
                <div className="stat-item">
                  <div className="text-5xl font-bold text-accent-500 mb-2">24/7</div>
                  <div className="text-white/80">AI Operation</div>
                </div>
                <div className="stat-item">
                  <div className="text-5xl font-bold text-accent-500 mb-2">$1.37</div>
                  <div className="text-white/80">Cost Per Hour</div>
                </div>
                <div className="stat-item">
                  <div className="text-5xl font-bold text-accent-500 mb-2">94.4%</div>
                  <div className="text-white/80">Response Rate</div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:sales@tryquotely.com" className="btn-primary">
                  Get Early Access <ArrowRight className="ml-2" size={20} />
                </a>
                <Link to="/calculator" className="btn-secondary border-white/30 hover:border-white">
                  Calculate ROI
                </Link>
              </div>
            </div>
          </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-wrapper">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Why Choose Quotely?
            </h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              Built for insurance professionals who demand accuracy and efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <Zap className="text-secondary-500 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">Modern Web Platform</h3>
              <p className="text-neutral-600">
                Cloud-based solution accessible from any device with responsive design for desktop and mobile.
              </p>
            </div>

            <div className="card">
              <Shield className="text-secondary-500 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">Verified Integrations</h3>
              <p className="text-neutral-600">
                Authentic connections with TurboRater and Momentum AMP for accurate carrier data.
              </p>
            </div>

            <div className="card">
              <TrendingUp className="text-secondary-500 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">Professional Tools</h3>
              <p className="text-neutral-600">
                Designed specifically for insurance professionals who demand accuracy and reliability.
              </p>
            </div>

            <div className="card">
              <Users className="text-secondary-500 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">Team Features</h3>
              <p className="text-neutral-600">
                Collaborate effectively with your agency team through our modern interface.
              </p>
            </div>

            <div className="card">
              <Clock className="text-secondary-500 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">24/7 AI Operation</h3>
              <p className="text-neutral-600">
                Platform operates continuously at just $1.37/hour compared to traditional staffing costs.
              </p>
            </div>

            <div className="card">
              <Award className="text-secondary-500 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">Professional Support</h3>
              <p className="text-neutral-600">
                Contact our team at sales@tryquotely.com for personalized assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white section-padding">
        <div className="container-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-secondary-500 mb-2">24/7</div>
              <p className="text-neutral-700">AI Operation</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary-500 mb-2">$1.37</div>
              <p className="text-neutral-700">Cost Per Hour</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary-500 mb-2">100%</div>
              <p className="text-neutral-700">Web-Based</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary-500 mb-2">2025</div>
              <p className="text-neutral-700">Platform Launch</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="container-wrapper text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Modernize Your Insurance Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join forward-thinking agencies exploring the future of insurance technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:sales@tryquotely.com" className="btn-primary bg-secondary-500 text-white hover:bg-secondary-600">
              Contact Sales Team
            </a>
            <Link to="/calculator" className="btn-secondary text-white border-white hover:bg-white hover:bg-opacity-10">
              Calculate ROI
            </Link>
          </div>
          <p className="mt-8 text-neutral-200">
            For custom pricing and demos: <strong>sales@tryquotely.com</strong>
          </p>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;