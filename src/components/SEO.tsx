import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Quotely - AI-Powered Insurance Quoting Platform',
  description = 'Transform your insurance agency with Quotely\'s AI-powered quoting platform. Get real-time rates from 100+ carriers, boost conversions by 40%, and save 10+ hours weekly.',
  keywords = 'insurance quoting, insurance software, agency management, AI insurance, insurance CRM, carrier integration, insurance automation',
  image = '/og-image.png',
  url = 'https://tryquotely.com',
}) => {
  const fullTitle = title.includes('Quotely') ? title : `${title} | Quotely`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;