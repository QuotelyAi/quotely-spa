import React, { useMemo } from 'react';
import useStore from '../store/useStore';
import { Calculator as CalcIcon, TrendingUp } from 'lucide-react';

const Calculator: React.FC = () => {
  const { calculatorData, setCalculatorData } = useStore();

  const calculations = useMemo(() => {
    const {
      numAgents,
      quotesPerAgent,
      conversionRate,
      averagePremium,
      commissionRate,
    } = calculatorData;

    const monthlyQuotes = numAgents * quotesPerAgent * 4;
    const monthlyPolicies = (monthlyQuotes * conversionRate) / 100;
    const monthlyPremium = monthlyPolicies * averagePremium;
    const monthlyCommission = (monthlyPremium * commissionRate) / 100;
    
    const yearlyQuotes = monthlyQuotes * 12;
    const yearlyPolicies = monthlyPolicies * 12;
    const yearlyPremium = monthlyPremium * 12;
    const yearlyCommission = monthlyCommission * 12;

    // With Quotely improvements (40% conversion increase, 50% time savings)
    const improvedConversionRate = conversionRate * 1.4;
    const improvedMonthlyPolicies = (monthlyQuotes * improvedConversionRate) / 100;
    const improvedMonthlyPremium = improvedMonthlyPolicies * averagePremium;
    const improvedMonthlyCommission = (improvedMonthlyPremium * commissionRate) / 100;
    
    const improvedYearlyPolicies = improvedMonthlyPolicies * 12;
    const improvedYearlyPremium = improvedMonthlyPremium * 12;
    const improvedYearlyCommission = improvedMonthlyCommission * 12;

    const additionalYearlyRevenue = improvedYearlyCommission - yearlyCommission;
    const roi = ((additionalYearlyRevenue - 9588) / 9588) * 100; // Based on $799/month cost

    return {
      current: {
        monthlyQuotes,
        monthlyPolicies,
        monthlyPremium,
        monthlyCommission,
        yearlyQuotes,
        yearlyPolicies,
        yearlyPremium,
        yearlyCommission,
      },
      withQuotely: {
        monthlyPolicies: improvedMonthlyPolicies,
        monthlyPremium: improvedMonthlyPremium,
        monthlyCommission: improvedMonthlyCommission,
        yearlyPolicies: improvedYearlyPolicies,
        yearlyPremium: improvedYearlyPremium,
        yearlyCommission: improvedYearlyCommission,
      },
      improvement: {
        additionalYearlyRevenue,
        roi,
      },
    };
  }, [calculatorData]);

  const handleInputChange = (field: keyof typeof calculatorData, value: string) => {
    const numValue = parseFloat(value) || 0;
    setCalculatorData({ [field]: numValue });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container-wrapper">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ROI Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how much additional revenue Quotely can generate for your agency
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CalcIcon className="mr-2 text-primary-600" />
                Your Agency Details
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Agents
                  </label>
                  <input
                    type="number"
                    value={calculatorData.numAgents}
                    onChange={(e) => handleInputChange('numAgents', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quotes per Agent (Weekly)
                  </label>
                  <input
                    type="number"
                    value={calculatorData.quotesPerAgent}
                    onChange={(e) => handleInputChange('quotesPerAgent', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Conversion Rate (%)
                  </label>
                  <input
                    type="number"
                    value={calculatorData.conversionRate}
                    onChange={(e) => handleInputChange('conversionRate', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Average Premium ($)
                  </label>
                  <input
                    type="number"
                    value={calculatorData.averagePremium}
                    onChange={(e) => handleInputChange('averagePremium', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Commission Rate (%)
                  </label>
                  <input
                    type="number"
                    value={calculatorData.commissionRate}
                    onChange={(e) => handleInputChange('commissionRate', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {/* Current Performance */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Performance</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Monthly Policies</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {Math.round(calculations.current.monthlyPolicies)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Yearly Commission</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {formatCurrency(calculations.current.yearlyCommission)}
                  </p>
                </div>
              </div>
            </div>

            {/* With Quotely */}
            <div className="bg-primary-50 border-2 border-primary-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-primary-900 mb-4">With Quotely</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-primary-700">Monthly Policies</p>
                  <p className="text-2xl font-bold text-primary-900">
                    {Math.round(calculations.withQuotely.monthlyPolicies)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-primary-700">Yearly Commission</p>
                  <p className="text-2xl font-bold text-primary-900">
                    {formatCurrency(calculations.withQuotely.yearlyCommission)}
                  </p>
                </div>
              </div>
            </div>

            {/* ROI Summary */}
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center">
                <TrendingUp className="mr-2" />
                Your ROI with Quotely
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-green-700">Additional Yearly Revenue</p>
                  <p className="text-3xl font-bold text-green-900">
                    {formatCurrency(calculations.improvement.additionalYearlyRevenue)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-green-700">Return on Investment</p>
                  <p className="text-3xl font-bold text-green-900">
                    {calculations.improvement.roi.toFixed(0)}%
                  </p>
                </div>
                <div className="pt-4 border-t border-green-200">
                  <p className="text-sm text-green-700">
                    Based on 40% conversion improvement and Professional plan ($799/month)
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Ready to boost your revenue?
              </h3>
              <a href="/demo" className="btn-primary w-full">
                Start Your Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;