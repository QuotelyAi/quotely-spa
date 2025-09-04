import React from 'react';
import { Check, X } from 'lucide-react';

const Compare: React.FC = () => {
  const features = [
    { category: 'Core Features', items: [
      { name: 'Number of Agents', starter: 'Up to 5', professional: 'Up to 20', enterprise: 'Unlimited' },
      { name: 'Monthly Quotes', starter: '100', professional: 'Unlimited', enterprise: 'Unlimited' },
      { name: 'Carrier Integrations', starter: '5', professional: '50+', enterprise: 'All Available' },
      { name: 'Mobile App Access', starter: true, professional: true, enterprise: true },
    ]},
    { category: 'Automation & AI', items: [
      { name: 'AI-Powered Recommendations', starter: false, professional: true, enterprise: true },
      { name: 'Automated Follow-ups', starter: false, professional: true, enterprise: true },
      { name: 'Smart Lead Scoring', starter: false, professional: true, enterprise: true },
      { name: 'Predictive Analytics', starter: false, professional: true, enterprise: true },
    ]},
    { category: 'Reporting & Analytics', items: [
      { name: 'Basic Reporting', starter: true, professional: true, enterprise: true },
      { name: 'Advanced Analytics', starter: false, professional: true, enterprise: true },
      { name: 'Custom Reports', starter: false, professional: false, enterprise: true },
      { name: 'Real-time Dashboards', starter: false, professional: true, enterprise: true },
    ]},
    { category: 'Integrations', items: [
      { name: 'CRM Integration', starter: false, professional: true, enterprise: true },
      { name: 'API Access', starter: false, professional: true, enterprise: true },
      { name: 'Custom Integrations', starter: false, professional: false, enterprise: true },
      { name: 'Webhook Support', starter: false, professional: true, enterprise: true },
    ]},
    { category: 'Support & Training', items: [
      { name: 'Email Support', starter: true, professional: true, enterprise: true },
      { name: 'Phone Support', starter: false, professional: true, enterprise: true },
      { name: 'Priority Support', starter: false, professional: true, enterprise: true },
      { name: 'Dedicated Account Manager', starter: false, professional: false, enterprise: true },
      { name: 'Onboarding Training', starter: 'Self-service', professional: 'Guided', enterprise: 'White-glove' },
    ]},
    { category: 'Security & Compliance', items: [
      { name: 'SSL Encryption', starter: true, professional: true, enterprise: true },
      { name: 'Two-Factor Authentication', starter: true, professional: true, enterprise: true },
      { name: 'HIPAA Compliant', starter: false, professional: true, enterprise: true },
      { name: 'SOC 2 Certified', starter: false, professional: true, enterprise: true },
      { name: 'On-Premise Option', starter: false, professional: false, enterprise: true },
    ]},
  ];

  const renderValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="text-green-500 mx-auto" size={24} />
      ) : (
        <X className="text-gray-300 mx-auto" size={24} />
      );
    }
    return <span className="text-gray-900">{value}</span>;
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container-wrapper">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Compare Plans
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the perfect plan for your agency with our detailed feature comparison
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Features</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                  <div>Core Platform</div>
                  <div className="text-xl font-bold text-gray-900 mt-1">
                    <span className="line-through text-gray-400 text-sm">$1699</span> $999/mo
                  </div>
                  <div className="text-xs text-green-600 font-semibold">50 tokens included</div>
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 bg-primary-50">
                  <div className="flex items-center justify-center">
                    Core + 200 Tokens
                    <span className="ml-2 bg-primary-500 text-white text-xs px-2 py-1 rounded">Popular</span>
                  </div>
                  <div className="text-xl font-bold text-primary-600 mt-1">$1339/mo</div>
                  <div className="text-xs text-gray-600">Core + 200 token package</div>
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                  <div>Enterprise</div>
                  <div className="text-xl font-bold text-gray-900 mt-1">Custom</div>
                  <div className="text-xs text-gray-600">Volume pricing available</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((category, categoryIndex) => (
                <React.Fragment key={categoryIndex}>
                  <tr className="bg-gray-50">
                    <td colSpan={4} className="px-6 py-3 text-sm font-semibold text-gray-700">
                      {category.category}
                    </td>
                  </tr>
                  {category.items.map((feature, featureIndex) => (
                    <tr key={featureIndex} className="border-t border-gray-200">
                      <td className="px-6 py-4 text-sm text-gray-700">{feature.name}</td>
                      <td className="px-6 py-4 text-center">{renderValue(feature.starter)}</td>
                      <td className="px-6 py-4 text-center bg-primary-50/30">
                        {renderValue(feature.professional)}
                      </td>
                      <td className="px-6 py-4 text-center">{renderValue(feature.enterprise)}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-50">
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4 text-center">
                  <a href="mailto:sales@tryquotely.com?subject=Quotely Starter Plan Inquiry" className="btn-secondary text-sm">
                    Get Pricing
                  </a>
                </td>
                <td className="px-6 py-4 text-center bg-primary-50">
                  <a href="mailto:sales@tryquotely.com?subject=Quotely Professional Plan Inquiry" className="btn-primary text-sm">
                    Get Pricing
                  </a>
                </td>
                <td className="px-6 py-4 text-center">
                  <a href="mailto:sales@tryquotely.com?subject=Quotely Enterprise Plan Inquiry" className="btn-secondary text-sm">
                    Contact Sales
                  </a>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="mt-12 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Transparent Token-Based Pricing</h2>
          <p className="text-gray-700 mb-6">
            <strong>Core Platform: $999/month</strong> (marked down from $1699) includes 50 tokens to get you started.
            Need more? Add token packages anytime: 50 tokens ($85), 200 tokens ($340), 500 tokens ($650), or 1000 tokens ($1200).
            Contact <strong>sales@tryquotely.com</strong> for enterprise volume discounts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:sales@tryquotely.com" className="btn-primary">
              Email Sales Team
            </a>
            <a href="/calculator" className="btn-secondary">
              Calculate Your ROI
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;