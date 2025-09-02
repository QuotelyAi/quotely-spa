import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';
import useStore from '../store/useStore';

const Pricing: React.FC = () => {
  const { setSelectedPlan } = useStore();

  const plans = [
    {
      name: 'Starter',
      price: 299,
      description: 'Perfect for small agencies just getting started',
      features: [
        'Up to 5 agents',
        '100 quotes per month',
        '5 carrier integrations',
        'Basic reporting',
        'Email support',
        'Mobile app access',
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
      price: 799,
      description: 'Ideal for growing agencies with multiple agents',
      popular: true,
      features: [
        'Up to 20 agents',
        'Unlimited quotes',
        '50+ carrier integrations',
        'Advanced reporting',
        'Priority support',
        'Mobile app access',
        'Advanced analytics',
        'API access',
        'CRM integration',
      ],
      notIncluded: [
        'Custom integrations',
        'Dedicated account manager',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large agencies with complex needs',
      features: [
        'Unlimited agents',
        'Unlimited quotes',
        'All carrier integrations',
        'Custom reporting',
        '24/7 phone support',
        'Mobile app access',
        'Advanced analytics',
        'Full API access',
        'Custom integrations',
        'Dedicated account manager',
        'On-premise deployment option',
        'SLA guarantee',
      ],
      notIncluded: [],
    },
  ];

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container-wrapper">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your agency's needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-lg shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-primary-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  {typeof plan.price === 'number' ? (
                    <div>
                      <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                      <span className="text-gray-600">/month</span>
                    </div>
                  ) : (
                    <div className="text-4xl font-bold text-gray-900">{plan.price}</div>
                  )}
                </div>

                <button
                  onClick={() => handleSelectPlan(plan.name)}
                  className={`w-full mb-6 ${
                    plan.popular ? 'btn-primary' : 'btn-secondary'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </button>

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