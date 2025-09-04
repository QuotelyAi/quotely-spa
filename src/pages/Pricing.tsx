import React from 'react';
import { siteContent, theme } from '../config';
import { Check } from 'lucide-react';
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

        {/* Token Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
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
                href={`mailto:sales@tryquotely.com?subject=Purchase ${pkg.tokens} Token Package - ${pkg.price}`}
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
                Select Package
              </a>
            </div>
          ))}
        </div>

        {/* What's Included Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: theme.colors.textPrimary }}>
            What's Included with Every Token
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Instant quote generation",
                "All carrier integrations",
                "Mobile & desktop access",
                "Real-time quote tracking",
                "PDF quote exports",
                "Email quote delivery",
                "Customer management",
                "24/7 AI assistance",
                "Automatic updates",
                "Technical support"
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check className="mr-3 flex-shrink-0" size={20} style={{ color: theme.colors.success }} />
                  <span style={{ color: theme.colors.textPrimary }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: theme.colors.textPrimary }}>
            How Token Pricing Works
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
                Purchase Tokens
              </h3>
              <p style={{ color: theme.colors.textSecondary }}>
                Choose a package that fits your monthly volume needs
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
                Submit Quotes
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
                Purchase additional tokens as needed - they never expire
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
                How do tokens work?
              </h3>
              <p style={{ color: theme.colors.textSecondary }}>
                Each token allows you to submit one insurance quote request through our platform. Tokens never expire and can be used anytime after purchase.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold mb-2" style={{ color: theme.colors.primary }}>
                Why is larger volume cheaper per token?
              </h3>
              <p style={{ color: theme.colors.textSecondary }}>
                We offer volume discounts to reward agencies that process more quotes. The 1000-token package offers the best value at $1.20 per token.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold mb-2" style={{ color: theme.colors.primary }}>
                Can I get a refund on unused tokens?
              </h3>
              <p style={{ color: theme.colors.textSecondary }}>
                Tokens are non-refundable but they never expire. You can use them at your own pace without any time pressure.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold mb-2" style={{ color: theme.colors.primary }}>
                Do I need a subscription in addition to tokens?
              </h3>
              <p style={{ color: theme.colors.textSecondary }}>
                Contact our sales team at sales@tryquotely.com to discuss platform access and token packages that best fit your agency's needs.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center p-8 rounded-lg" style={{ backgroundColor: theme.colors.backgroundAlt }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: theme.colors.textPrimary }}>
            Need a Custom Package or Have Questions?
          </h2>
          <p className="mb-6" style={{ color: theme.colors.textSecondary }}>
            For enterprise volumes, custom requirements, or to learn more about our platform, contact our sales team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${siteContent.contact.email}`}
              className="inline-block px-8 py-3 rounded-lg font-semibold transition-all"
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
              Email: {siteContent.contact.email}
            </a>
            <Link
              to="/calculator"
              className="inline-block px-8 py-3 rounded-lg font-semibold border-2 transition-all"
              style={{
                borderColor: theme.colors.primary,
                color: theme.colors.primary
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