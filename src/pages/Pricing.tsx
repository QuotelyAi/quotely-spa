import React from 'react';
import { siteContent, theme } from '../config';
import { Check, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const { pricing } = siteContent;

  return (
    <div className="min-h-screen py-12">
      <div className="container-wrapper">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: theme.colors.textPrimary }}>
            {pricing.title}
          </h1>
          <p className="text-xl" style={{ color: theme.colors.textSecondary }}>
            {pricing.subtitle}
          </p>
        </div>

        {/* Core Platform Pricing */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all">
            {/* Header with discount badge */}
            <div className="relative" style={{ backgroundColor: theme.colors.primary }}>
              <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold">
                {pricing.corePlatform.savings}
              </div>
              <div className="p-8 text-center">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {pricing.corePlatform.name}
                </h2>
                <p className="text-white/90 mb-4">
                  {pricing.corePlatform.description}
                </p>
                
                {/* Pricing display */}
                <div className="flex items-center justify-center gap-4">
                  <span className="text-2xl text-white/60 line-through">
                    {pricing.corePlatform.originalPrice}
                  </span>
                  <span className="text-6xl font-bold" style={{ color: theme.colors.accent }}>
                    {pricing.corePlatform.price}
                  </span>
                  <span className="text-xl text-white/90">
                    /month
                  </span>
                </div>
                
                {/* Included tokens badge */}
                <div className="mt-4 inline-block px-6 py-3 rounded-full font-semibold" 
                     style={{ backgroundColor: theme.colors.accent, color: theme.colors.primary }}>
                  <Zap className="inline mr-2" size={20} />
                  {pricing.corePlatform.includes}
                </div>
              </div>
            </div>

            {/* Features list */}
            <div className="p-8">
              <h3 className="font-semibold text-lg mb-4" style={{ color: theme.colors.textPrimary }}>
                Everything included in Core Platform:
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {pricing.corePlatform.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="mr-3 flex-shrink-0" size={20} style={{ color: theme.colors.success }} />
                    <span style={{ color: theme.colors.textPrimary }}>{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA Button */}
              <div className="mt-8 text-center">
                <a
                  href={`mailto:sales@tryquotely.com?subject=Core Platform Subscription - $999/month`}
                  className="inline-block px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-lg"
                  style={{
                    backgroundColor: theme.colors.secondary,
                    color: theme.colors.textLight
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = theme.colors.secondaryHover;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = theme.colors.secondary;
                  }}
                >
                  Get Started with Core Platform
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Token Packages */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4" style={{ color: theme.colors.textPrimary }}>
              {pricing.tokenPackages.title}
            </h2>
            <p className="text-lg" style={{ color: theme.colors.textSecondary }}>
              {pricing.tokenPackages.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pricing.packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all transform hover:-translate-y-1"
                style={{ borderTop: `4px solid ${theme.colors.secondary}` }}
              >
                {/* Token Count */}
                <div className="mb-4">
                  <span className="text-4xl font-bold" style={{ color: theme.colors.textPrimary }}>
                    {pkg.tokens}
                  </span>
                  <span className="text-xl ml-2" style={{ color: theme.colors.textSecondary }}>
                    tokens
                  </span>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-5xl font-bold" style={{ color: theme.colors.secondary }}>
                    {pkg.price}
                  </span>
                </div>

                {/* Savings Badge */}
                <div 
                  className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                  style={{ 
                    backgroundColor: theme.colors.success + '20',
                    color: theme.colors.success
                  }}
                >
                  {pkg.savings}
                </div>

                {/* Per Token Price */}
                <div className="text-sm mb-6" style={{ color: theme.colors.textMuted }}>
                  {pkg.perToken}
                </div>

                {/* CTA Button */}
                <a
                  href={`mailto:sales@tryquotely.com?subject=Add ${pkg.tokens} Token Package - ${pkg.price}`}
                  className="block w-full px-4 py-3 rounded-lg font-semibold transition-all hover:shadow-md"
                  style={{
                    backgroundColor: theme.colors.primary,
                    color: theme.colors.textLight
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = theme.colors.primaryHover;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = theme.colors.primary;
                  }}
                >
                  Add Tokens
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: theme.colors.textPrimary }}>
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold"
                style={{ backgroundColor: theme.colors.accent, color: theme.colors.primary }}
              >
                1
              </div>
              <h3 className="font-semibold mb-2" style={{ color: theme.colors.primary }}>
                Start with Core
              </h3>
              <p style={{ color: theme.colors.textSecondary }}>
                Get the Core Platform with 50 tokens included for $999/month
              </p>
            </div>
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold"
                style={{ backgroundColor: theme.colors.accent, color: theme.colors.primary }}
              >
                2
              </div>
              <h3 className="font-semibold mb-2" style={{ color: theme.colors.primary }}>
                Use Your Tokens
              </h3>
              <p style={{ color: theme.colors.textSecondary }}>
                Each quote submission uses one token from your balance
              </p>
            </div>
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold"
                style={{ backgroundColor: theme.colors.accent, color: theme.colors.primary }}
              >
                3
              </div>
              <h3 className="font-semibold mb-2" style={{ color: theme.colors.primary }}>
                Add More Anytime
              </h3>
              <p style={{ color: theme.colors.textSecondary }}>
                Purchase additional token packages as your needs grow
              </p>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="mt-16 p-8 rounded-lg text-center" style={{ backgroundColor: theme.colors.backgroundAlt }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: theme.colors.textPrimary }}>
            Why Quotely's Pricing Works for You
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold mb-2" style={{ color: theme.colors.secondary }}>
                $999
              </div>
              <p style={{ color: theme.colors.textSecondary }}>
                Low monthly platform fee vs competitors' $2000+ pricing
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2" style={{ color: theme.colors.secondary }}>
                50
              </div>
              <p style={{ color: theme.colors.textSecondary }}>
                Tokens included every month with Core Platform
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2" style={{ color: theme.colors.secondary }}>
                No Expiry
              </div>
              <p style={{ color: theme.colors.textSecondary }}>
                Unused tokens roll over - never lose what you paid for
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: theme.colors.textPrimary }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold mb-2" style={{ color: theme.colors.primary }}>
                What's included in the $999 Core Platform?
              </h3>
              <p style={{ color: theme.colors.textSecondary }}>
                Full platform access with all features, integrations, mobile apps, and 50 tokens to get you started each month. This covers everything most agencies need.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold mb-2" style={{ color: theme.colors.primary }}>
                Do the 50 included tokens roll over?
              </h3>
              <p style={{ color: theme.colors.textSecondary }}>
                The 50 tokens included with your monthly Core Platform subscription are use-it-or-lose-it. However, any additional token packages you purchase never expire and always roll over.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold mb-2" style={{ color: theme.colors.primary }}>
                How do I know how many tokens I need?
              </h3>
              <p style={{ color: theme.colors.textSecondary }}>
                Most agencies use 30-50 tokens per month. Start with the Core Platform's included 50 tokens, then add packages based on your actual usage. You can purchase more anytime.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold mb-2" style={{ color: theme.colors.primary }}>
                Is there a setup fee?
              </h3>
              <p style={{ color: theme.colors.textSecondary }}>
                No setup fees, no hidden costs. Just $999/month for the Core Platform and optional token packages as needed.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center p-8 rounded-lg" style={{ backgroundColor: theme.colors.primary }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: theme.colors.textLight }}>
            Ready to Transform Your Insurance Business?
          </h2>
          <p className="mb-6" style={{ color: theme.colors.textLight }}>
            Join agencies saving time and money with Quotely's modern platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${siteContent.contact.email}?subject=Get Started with Quotely Core Platform`}
              className="inline-block px-8 py-3 rounded-lg font-semibold transition-all"
              style={{
                backgroundColor: theme.colors.accent,
                color: theme.colors.primary
              }}
            >
              Start Today - {siteContent.contact.email}
            </a>
            <Link
              to="/calculator"
              className="inline-block px-8 py-3 rounded-lg font-semibold border-2 transition-all"
              style={{
                borderColor: theme.colors.textLight,
                color: theme.colors.textLight
              }}
            >
              Calculate Your ROI
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;