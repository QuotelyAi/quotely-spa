import React from 'react';
import { Brain, Zap, Shield, TrendingUp, CheckCircle, Users, Globe } from 'lucide-react';

const AILegacyRatersPost: React.FC = () => {
  return (
    <article className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-primary-600 to-secondary-600 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              InsurTech AI: Replace Legacy Raters
            </h1>
            <p className="text-xl opacity-90">
              How Artificial Intelligence is Revolutionizing P&C Insurance Software
            </p>
            <div className="mt-6 flex items-center space-x-4 text-sm">
              <span>By Quotely I/O → A/I → UI/UX</span>
              <span>•</span>
              <span>Insurance Technology</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Introduction */}
        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            AI Technology: Key Innovations Shaping Our Future
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Artificial intelligence is rapidly transforming industries and daily life. In the insurance sector, 
            AI is modernizing core systems, replacing outdated legacy raters with intelligent, adaptive solutions 
            that can process quotes in seconds rather than minutes.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
            <p className="text-blue-900">
              <strong>Key Insight:</strong> Quotely's AI-powered platform generates insurance quotes in 90 seconds, 
              compared to 3-5 minutes on traditional platforms.
            </p>
          </div>
        </section>

        {/* AI in P&C Insurance */}
        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
            <Brain className="mr-3 text-primary-500" />
            Will AI Enter P&C AMS/CRM/Rater Software?
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            The integration of AI into Property and Casualty insurance software is not a question of "if," 
            but "when" and "how extensively." AI is already making inroads and is poised to automate a 
            significant portion of tasks within these systems.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {/* Small Tasks Automation */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-green-900">
                <Zap className="inline mr-2" size={20} />
                Automation of Small Tasks
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 text-green-600" size={16} />
                  <span>Data Entry and Validation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 text-green-600" size={16} />
                  <span>Lead Scoring and Qualification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 text-green-600" size={16} />
                  <span>Automated Communication</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 text-green-600" size={16} />
                  <span>Document Management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 text-green-600" size={16} />
                  <span>Task Management and Reminders</span>
                </li>
              </ul>
            </div>

            {/* Large Tasks Automation */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">
                <TrendingUp className="inline mr-2" size={20} />
                Automation of Large Tasks
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 text-blue-600" size={16} />
                  <span>Underwriting and Risk Assessment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 text-blue-600" size={16} />
                  <span>Claims Processing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 text-blue-600" size={16} />
                  <span>Personalized Product Recommendations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 text-blue-600" size={16} />
                  <span>Dynamic Rater Optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 text-blue-600" size={16} />
                  <span>Predictive Analytics for Retention</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Transforming Insurance with AI
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="text-primary-600" size={24} />
              </div>
              <h3 className="font-semibold mb-2">90-Second Quotes</h3>
              <p className="text-gray-600 text-sm">
                Generate accurate quotes in seconds, not minutes
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-secondary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="text-secondary-600" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Enhanced Accuracy</h3>
              <p className="text-gray-600 text-sm">
                AI-driven risk assessment reduces errors
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="text-green-600" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Better Customer Experience</h3>
              <p className="text-gray-600 text-sm">
                Personalized service and instant responses
              </p>
            </div>
          </div>
        </section>

        {/* Industry Impact */}
        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Industry-Wide Transformation
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-primary-500 pl-6">
              <h3 className="text-xl font-semibold mb-2">Underwriting Revolution</h3>
              <p className="text-gray-700">
                AI analyzes vast datasets including historical claims, external data sources, and property-specific 
                information to provide more accurate risk assessments and pricing. This automation is particularly 
                effective for simpler risks, dramatically reducing processing time.
              </p>
            </div>
            
            <div className="border-l-4 border-secondary-500 pl-6">
              <h3 className="text-xl font-semibold mb-2">Claims Processing Innovation</h3>
              <p className="text-gray-700">
                From initial intake to damage assessment through image recognition, AI automates the entire claims 
                lifecycle. Fraud detection and payout calculations for straightforward claims happen in real-time, 
                improving customer satisfaction significantly.
              </p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold mb-2">Compliance and Risk Management</h3>
              <p className="text-gray-700">
                AI continuously monitors policy documents and customer interactions for regulatory compliance, 
                flagging potential issues before they become problems. This proactive approach reduces compliance 
                costs and risks.
              </p>
            </div>
          </div>
        </section>

        {/* Future Outlook */}
        <section className="mb-12 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            The Future of Insurance Technology
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            As AI continues to evolve, we're seeing a fundamental transformation in how insurance operates. 
            The goal is to create more intelligent, efficient, and customer-centric insurance operations.
          </p>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Globe className="mr-2 text-primary-500" />
              Global Economic Impact
            </h3>
            <p className="text-gray-700 mb-4">
              AI's contribution to global GDP growth in the insurance sector is becoming increasingly significant. 
              Countries and companies that adopt AI-powered insurance solutions early are seeing substantial 
              economic benefits through:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <TrendingUp className="mr-2 mt-1 text-green-600" size={16} />
                <span>Increased operational efficiency and reduced costs</span>
              </li>
              <li className="flex items-start">
                <TrendingUp className="mr-2 mt-1 text-green-600" size={16} />
                <span>Better risk assessment leading to improved profitability</span>
              </li>
              <li className="flex items-start">
                <TrendingUp className="mr-2 mt-1 text-green-600" size={16} />
                <span>Enhanced customer acquisition and retention</span>
              </li>
              <li className="flex items-start">
                <TrendingUp className="mr-2 mt-1 text-green-600" size={16} />
                <span>New job creation in AI and data science roles</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Replace Your Legacy Rater?
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Join the insurance revolution with Quotely's AI-powered platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/pricing" 
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Pricing Plans
            </a>
            <a 
              href="/blog-upload" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              Learn More About AI Integration
            </a>
          </div>
        </section>

        {/* Company Info */}
        <div className="mt-12 text-center text-gray-600">
          <p className="mb-2">
            <strong>Quotely, Inc. DBA "Try Quotely"</strong>
          </p>
          <p>6010 S. 66th E. Ave, Ste B, Tulsa, OK 74145</p>
          <p>(918) 395-6335 | support@tryquotely.com</p>
          <p className="mt-4">
            <a href="https://tryquotely.com" className="text-primary-600 hover:underline">
              tryquotely.com
            </a>
          </p>
        </div>
      </div>
    </article>
  );
};

export default AILegacyRatersPost;