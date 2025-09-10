import React, { useState } from 'react';
import { Check, Play, ArrowRight, Zap, Shield, TrendingUp, Users } from 'lucide-react';

const Compare: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const plans = [
    {
      id: 'core',
      name: 'Core Platform',
      price: '$999',
      originalPrice: '$1699',
      period: '/month',
      description: 'Essential tools for growing agencies',
      highlight: false,
      features: ['50 quotes included', 'All carrier integrations', 'Mobile app access', 'Basic reporting'],
      color: 'gray'
    },
    {
      id: 'professional',
      name: 'Professional',
      price: '$1339',
      period: '/month',
      description: 'Complete automation & AI suite',
      highlight: true,
      popular: true,
      features: ['250 quotes total', 'AI-powered automation', 'Advanced analytics', 'Priority support'],
      color: 'primary'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored for large agencies',
      highlight: false,
      features: ['Unlimited quotes', 'Custom integrations', 'Dedicated support', 'White-glove onboarding'],
      color: 'secondary'
    }
  ];

  const keyDifferences = [
    {
      icon: <Zap className="text-primary-500" size={24} />,
      title: 'AI Automation',
      core: 'Manual processes',
      professional: 'Full AI automation',
      enterprise: 'Custom AI workflows'
    },
    {
      icon: <TrendingUp className="text-primary-500" size={24} />,
      title: 'Analytics',
      core: 'Basic reports',
      professional: 'Advanced dashboards',
      enterprise: 'Custom analytics'
    },
    {
      icon: <Users className="text-primary-500" size={24} />,
      title: 'Support',
      core: 'Email only',
      professional: 'Priority phone & email',
      enterprise: 'Dedicated manager'
    },
    {
      icon: <Shield className="text-primary-500" size={24} />,
      title: 'Compliance',
      core: 'Standard security',
      professional: 'HIPAA & SOC 2',
      enterprise: 'On-premise option'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Choose the plan that fits your agency's needs
          </p>

          {/* Video Section */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-1">
              <div className="bg-white rounded-xl p-8">
                <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/wbBMxIYdlHw"
                    title="Quotely Plans Explained"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="text-gray-600">
                  <Play className="inline mr-2" size={16} />
                  Watch a 2-minute overview of our plans and features
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Plans */}
      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-6 transition-all cursor-pointer ${
                  plan.highlight 
                    ? 'bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-500 shadow-xl transform scale-105' 
                    : 'bg-white border border-gray-200 hover:shadow-lg'
                } ${selectedPlan === plan.id ? 'ring-4 ring-primary-300' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-center justify-center">
                    {plan.originalPrice && (
                      <span className="text-gray-400 line-through mr-2">{plan.originalPrice}</span>
                    )}
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.highlight
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:shadow-lg'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  {plan.id === 'enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Differences - Simplified */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Key Differences at a Glance
          </h2>
          
          <div className="space-y-6">
            {keyDifferences.map((diff, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {diff.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">{diff.title}</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className={`p-4 rounded-lg ${selectedPlan === 'core' ? 'bg-white border-2 border-primary-500' : 'bg-white'}`}>
                    <div className="text-sm font-semibold text-gray-500 mb-1">Core</div>
                    <div className="text-gray-700">{diff.core}</div>
                  </div>
                  <div className={`p-4 rounded-lg ${selectedPlan === 'professional' ? 'bg-white border-2 border-primary-500' : 'bg-white'}`}>
                    <div className="text-sm font-semibold text-primary-600 mb-1">Professional</div>
                    <div className="text-gray-700">{diff.professional}</div>
                  </div>
                  <div className={`p-4 rounded-lg ${selectedPlan === 'enterprise' ? 'bg-white border-2 border-primary-500' : 'bg-white'}`}>
                    <div className="text-sm font-semibold text-secondary-600 mb-1">Enterprise</div>
                    <div className="text-gray-700">{diff.enterprise}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Not sure which plan is right for you?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Our team can help you choose the perfect solution for your agency
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
              Schedule a Demo <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              View Full Feature List
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Compare;