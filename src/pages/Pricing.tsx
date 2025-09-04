import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const Pricing: React.FC = () => {

  const plans = [
    {
      name: 'Starter',
      price: 'Contact Sales',
      description: 'Perfect for small agencies just getting started',
      features: [
        'Cloud-based platform',
        'Basic quote generation',
        'Verified carrier data',
        'Email support',
        'Mobile responsive design',
        'Standard reporting',
      ],
      notIncluded: [
        'Advanced analytics',
        'API access',
        'Custom integrations',
        'Priority support',
      ],
    },
    {
      name: 'Professional',
      price: 'Contact Sales',
      description: 'Ideal for growing agencies with multiple agents',
      popular: true,
      features: [
        'Everything in Starter',
        'Multiple user accounts',
        'TurboRater integration',
        'Advanced reporting',
        'Priority email support',
        'Analytics dashboard',
        'API access',
        'Team collaboration tools',
      ],
      notIncluded: [
        'Custom integrations',
        'Dedicated account manager',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom Quote',
      description: 'For large agencies with complex needs',
      features: [
        'Everything in Professional',
        'Unlimited users',
        'Custom integrations',
        'Dedicated support team',
        'Custom reporting',
        'Full API access',
        'White-label options',
        'Implementation assistance',
        'Training sessions',
        'SLA agreement',
      ],
      notIncluded: [],
    },
  ];


  return (
    <div className="min-h-screen py-12">
      <div className="container-wrapper">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Flexible Solutions for Every Agency
          </h1>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
            Contact our sales team for custom pricing tailored to your agency's needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-secondary-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-secondary-500 text-white px-4 py-1 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">{plan.name}</h3>
                <p className="text-neutral-600 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="text-3xl font-bold text-secondary-500">{plan.price}</div>
                  <p className="text-sm text-neutral-600 mt-2">sales@tryquotely.com</p>
                </div>

                <a
                  href="mailto:sales@tryquotely.com?subject=Quotely%20${plan.name}%20Plan%20Inquiry"
                  className={`block text-center w-full mb-6 ${
                    plan.popular ? 'btn-primary' : 'px-6 py-3 text-base font-semibold text-primary-600 bg-neutral-100 rounded-lg hover:bg-neutral-200 transition-all duration-200'
                  }`}
                >
                  Contact Sales Team
                </a>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Included:</h4>
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="text-green-500 mr-2 mt-0.5" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      <h4 className="font-semibold text-gray-900 pt-3">Not Included:</h4>
                      {plan.notIncluded.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <X className="text-gray-400 mr-2 mt-0.5" size={20} />
                          <span className="text-gray-500">{feature}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Not sure which plan is right for you?
          </p>
          <Link to="/compare" className="text-primary-600 hover:text-primary-700 font-semibold">
            Compare all features →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;