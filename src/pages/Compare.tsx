import React, { useState } from 'react';
import { Check, Play, ArrowRight } from 'lucide-react';

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

  const testimonials = [
    {
      quote: "Quotely cut our quote time from 5 minutes to 90 seconds. Game changer for our agency.",
      author: "Sarah Chen",
      role: "Agency Owner",
      company: "Premier Insurance Group"
    },
    {
      quote: "The AI handles routine tasks so my team can focus on building client relationships.",
      author: "Michael Rodriguez",
      role: "Sales Director",
      company: "Coastal Coverage Solutions"
    },
    {
      quote: "We're processing 3x more quotes with the same team size. ROI was immediate.",
      author: "James Park",
      role: "Operations Manager",
      company: "NextGen Insurance Agency"
    }
  ];

  const comparisonData = {
    title: "Why Agencies Choose Quotely",
    items: [
      {
        metric: "90 seconds",
        description: "Average quote time",
        comparison: "vs 3-5 minutes with competitors"
      },
      {
        metric: "24/7",
        description: "AI availability",
        comparison: "Never miss a lead again"
      },
      {
        metric: "$1.37/hour",
        description: "Operating cost",
        comparison: "vs $15-25/hour for staff"
      },
      {
        metric: "60% faster",
        description: "Than legacy systems",
        comparison: "Based on customer data"
      }
    ]
  };

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

      {/* Performance Metrics */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            {comparisonData.title}
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Real results from real agencies using Quotely
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {comparisonData.items.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6">
                  <div className="text-3xl font-bold text-primary-600 mb-2">{item.metric}</div>
                  <div className="text-gray-900 font-semibold mb-1">{item.description}</div>
                  <div className="text-sm text-gray-600">{item.comparison}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Trusted by Leading Insurance Agencies
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="mb-4">
                  <svg className="text-primary-500 w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-primary-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Calculate Your ROI
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            See how much time and money Quotely can save your agency
          </p>
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current quotes per month
                </label>
                <input 
                  type="number" 
                  placeholder="e.g., 100"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Average time per quote (minutes)
                </label>
                <input 
                  type="number" 
                  placeholder="e.g., 5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
            <button className="mt-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
              Calculate Savings
            </button>
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