import React from 'react';
import { siteContent, theme } from '../config';
import { Link } from 'react-router-dom';
import YouTubeEmbed from './YouTubeEmbed';

export const HomePage: React.FC = () => {
  return (
    <div style={{ fontFamily: theme.fonts.primary }}>
      {/* Hero Section */}
      <section 
        className="py-20 px-4"
        style={{ backgroundColor: theme.colors.primary }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ color: theme.colors.accent }}
          >
            Quotely
          </h1>
          <h2 
            className="text-3xl md:text-4xl font-semibold mb-6"
            style={{ color: theme.colors.textLight }}
          >
            {siteContent.hero.title}
          </h2>
          <p 
            className="text-xl mb-8 opacity-90"
            style={{ color: theme.colors.textLight }}
          >
            {siteContent.hero.subtitle}
          </p>
          <button
            className="px-8 py-3 rounded-lg font-semibold text-white text-lg transition-all transform hover:scale-105"
            style={{ 
              backgroundColor: theme.colors.secondary,
              transition: theme.transitions.base
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.secondaryHover;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.secondary;
            }}
          >
            {siteContent.hero.cta}
          </button>
          
          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold" style={{ color: theme.colors.accent }}>
                {siteContent.stats.aiOperation}
              </div>
              <div className="text-sm opacity-80" style={{ color: theme.colors.textLight }}>
                AI Operation
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: theme.colors.accent }}>
                {siteContent.stats.costPerHour}
              </div>
              <div className="text-sm opacity-80" style={{ color: theme.colors.textLight }}>
                Per Hour
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: theme.colors.accent }}>
                {siteContent.stats.responseRate}
              </div>
              <div className="text-sm opacity-80" style={{ color: theme.colors.textLight }}>
                Response Rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section 
        className="py-16 px-4"
        style={{ backgroundColor: theme.colors.backgroundAlt }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold text-center mb-8"
            style={{ color: theme.colors.textPrimary }}
          >
            See Quotely in Action
          </h2>
          <p 
            className="text-lg text-center mb-10 opacity-80"
            style={{ color: theme.colors.textSecondary }}
          >
            Watch how Quotely revolutionizes insurance quoting with AI-powered automation
          </p>
          <YouTubeEmbed 
            videoId="7Pdwd-RArO8"
            title="Quotely Platform Demo"
            className="shadow-2xl"
          />
          <div className="text-center mt-8">
            <a 
              href="https://www.youtube.com/@TryQuotely"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all hover:scale-105"
              style={{ 
                backgroundColor: '#FF0000',
                color: 'white'
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Subscribe on YouTube
            </a>
            <p className="text-sm opacity-70 mt-4" style={{ color: theme.colors.textSecondary }}>
              Follow @TryQuotely for more insurance tech insights
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section 
        className="py-16 px-4"
        style={{ backgroundColor: theme.colors.background }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            style={{ color: theme.colors.textPrimary }}
          >
            Why Choose Quotely?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteContent.features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg hover:shadow-lg transition-all"
                style={{ 
                  backgroundColor: theme.colors.background,
                  border: `1px solid ${theme.colors.border}`,
                  transition: theme.transitions.base
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = theme.colors.secondary;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = theme.colors.border;
                }}
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 
                  className="text-xl font-semibold mb-3"
                  style={{ color: theme.colors.primary }}
                >
                  {feature.title}
                </h3>
                <p style={{ color: theme.colors.textSecondary }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4" style={{ backgroundColor: theme.colors.background }}>
        <div className="max-w-5xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            style={{ color: theme.colors.textPrimary }}
          >
            {siteContent.comparison.title}
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ backgroundColor: theme.colors.primary }}>
                  <th 
                    className="text-left p-4 font-semibold"
                    style={{ color: theme.colors.textLight }}
                  >
                    Feature
                  </th>
                  {siteContent.comparison.competitors.map((competitor) => (
                    <th 
                      key={competitor} 
                      className="text-center p-4 font-semibold"
                      style={{ 
                        color: competitor === 'Quotely' ? theme.colors.accent : theme.colors.textLight 
                      }}
                    >
                      {competitor}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {siteContent.comparison.features.map((feature, index) => (
                  <tr 
                    key={index}
                    style={{ 
                      borderBottom: `1px solid ${theme.colors.border}`,
                      backgroundColor: index % 2 === 0 ? theme.colors.background : theme.colors.backgroundAlt
                    }}
                  >
                    <td 
                      className="p-4 font-semibold"
                      style={{ color: theme.colors.textPrimary }}
                    >
                      {feature.name}
                    </td>
                    <td className="p-4 text-center">{feature.traditionalSystems}</td>
                    <td className="p-4 text-center">{feature.legacyPlatforms}</td>
                    <td 
                      className="p-4 text-center font-semibold"
                      style={{ color: theme.colors.success }}
                    >
                      {feature.quotely}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 px-4 text-center"
        style={{ backgroundColor: theme.colors.secondary }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: theme.colors.textLight }}
          >
            Ready to Modernize Your Insurance Business?
          </h2>
          <p 
            className="text-xl mb-8 opacity-90"
            style={{ color: theme.colors.textLight }}
          >
            Join forward-thinking agencies using Quotely
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`mailto:${siteContent.contact.email}`}
              className="px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              style={{ 
                backgroundColor: theme.colors.accent,
                color: theme.colors.primary,
                transition: theme.transitions.base
              }}
            >
              Contact Sales
            </a>
            <Link
              to="/calculator"
              className="px-8 py-3 rounded-lg font-semibold text-lg border-2 transition-all"
              style={{ 
                borderColor: theme.colors.textLight,
                color: theme.colors.textLight,
                transition: theme.transitions.base
              }}
            >
              Calculate ROI
            </Link>
          </div>
          <p className="mt-8" style={{ color: theme.colors.textLight }}>
            Email: <strong>{siteContent.contact.email}</strong>
          </p>
        </div>
      </section>
    </div>
  );
};