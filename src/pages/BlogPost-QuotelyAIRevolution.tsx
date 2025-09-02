import React from 'react';
import { Brain, Zap, Shield, TrendingUp, CheckCircle, Users, Globe, ArrowRight, BarChart, Lock, Cpu, Bot } from 'lucide-react';

const QuotelyAIRevolutionPost: React.FC = () => {
  return (
    <article className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-gradient-to-r from-primary-600 to-secondary-600 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 opacity-10 bg-gradient-to-b from-transparent to-black/20"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The <span className="text-accent-400">Future of Insurance</span> Technology: 
              How Quotely is Leading the <span className="text-accent-400">AI Revolution</span> 
              for Independent Agencies
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Artificial intelligence is revolutionizing insurance technology by automating risk assessments, 
              speeding up claims processes, and personalizing customer interactions—transforming how independent 
              agencies compete and thrive.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/pricing" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                Get Started <ArrowRight className="ml-2" size={20} />
              </a>
              <a href="#learn-more" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        
        {/* Key Insights */}
        <section id="learn-more" className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            What You'll Discover
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "How AI is transforming operations for independent agencies",
              "Specific Quotely AI solutions and integration strategies",
              "Measurable ROI and efficiency gains from AI adoption",
              "Strategies for overcoming adoption challenges",
              "Future trends redefining the independent agent's role",
              "Key market insights validating AI's impact"
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="mr-3 mt-1 text-primary-500 flex-shrink-0" size={20} />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* AI Transformation Section */}
        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
            <Brain className="mr-3 text-primary-500" />
            How AI is Transforming Insurance for Independent Agencies
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Artificial intelligence in insurance technology utilizes machine learning algorithms to analyze 
            complex risk data, automate workflows, and provide personalized policy recommendations—enhancing 
            accuracy and service speed.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Cpu className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Predictive Analytics</h3>
              <p className="text-sm text-gray-600">
                AI interprets vast datasets, improving underwriting precision by identifying subtle risk patterns
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Zap className="text-green-600" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Automated Workflows</h3>
              <p className="text-sm text-gray-600">
                Streamline routine tasks, freeing agents to concentrate on complex cases and consultations
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="text-purple-600" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Personalization</h3>
              <p className="text-sm text-gray-600">
                Deliver tailored policy recommendations and communications for each client
              </p>
            </div>
          </div>
        </section>

        {/* Quotely Solutions */}
        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Quotely's AI Solutions for Independent Agencies
          </h2>
          
          <div className="space-y-8">
            {/* AI-Powered Underwriting */}
            <div className="border-l-4 border-primary-500 pl-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Shield className="mr-2 text-primary-500" />
                AI-Powered Underwriting
              </h3>
              <p className="text-gray-700 mb-4">
                Quotely's underwriting engine analyzes historical policy data, external risk indicators, 
                and dynamic market factors to generate risk scores in seconds.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="bg-gray-50 p-4 rounded">
                  <div className="text-2xl font-bold text-primary-600">60%</div>
                  <div className="text-sm text-gray-600">Faster Quotes</div>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <div className="text-2xl font-bold text-primary-600">95%</div>
                  <div className="text-sm text-gray-600">Accuracy Rate</div>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <div className="text-2xl font-bold text-primary-600">35%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
              </div>
            </div>

            {/* Claims Processing */}
            <div className="border-l-4 border-secondary-500 pl-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Zap className="mr-2 text-secondary-500" />
                Streamlined Claims Processing
              </h3>
              <p className="text-gray-700 mb-4">
                Quotely's claims automation platform uses natural language processing to extract details 
                from loss notices, categorize severity, and assign cases appropriately.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 text-green-600 flex-shrink-0" size={16} />
                  <span className="text-gray-700">72% reduction in initial claim triage time</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 text-green-600 flex-shrink-0" size={16} />
                  <span className="text-gray-700">Predictive routing matching complexity with expertise</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 text-green-600 flex-shrink-0" size={16} />
                  <span className="text-gray-700">Real-time status updates for policyholders</span>
                </li>
              </ul>
            </div>

            {/* AI Chatbots */}
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Bot className="mr-2 text-green-500" />
                AI Chatbots & Virtual Assistants
              </h3>
              <p className="text-gray-700 mb-4">
                Handle routine inquiries 24/7 with contextual understanding, escalating complex questions 
                while capturing engagement data for continuous improvement.
              </p>
              <div className="bg-green-50 p-4 rounded">
                <p className="text-green-900">
                  <strong>Result:</strong> 25% improvement in Net Promoter Scores through immediate response 
                  to common questions and seamless handoffs to human agents.
                </p>
              </div>
            </div>

            {/* Fraud Detection */}
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Lock className="mr-2 text-red-500" />
                Fraud Detection & Risk Management
              </h3>
              <p className="text-gray-700 mb-4">
                Combines anomaly detection algorithms with social network analysis to flag suspicious 
                claims and policy applications with 95% accuracy.
              </p>
            </div>
          </div>
        </section>

        {/* Integration Benefits */}
        <section className="mb-12 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Seamless Integration with Your Systems
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-3">AMS Integration Benefits</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <ArrowRight className="mr-2 mt-1 text-primary-500" size={16} />
                  <span>Unified data repository across quotes, policies, and claims</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 mt-1 text-primary-500" size={16} />
                  <span>Automated AI process triggering on new submissions</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 mt-1 text-primary-500" size={16} />
                  <span>Consistent user experience within familiar interfaces</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-3">Security & Compliance</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <Lock className="mr-2 mt-1 text-green-600" size={16} />
                  <span>ISO 27001 and SOC 2 Type II certified</span>
                </li>
                <li className="flex items-start">
                  <Lock className="mr-2 mt-1 text-green-600" size={16} />
                  <span>GDPR and CCPA compliant</span>
                </li>
                <li className="flex items-start">
                  <Lock className="mr-2 mt-1 text-green-600" size={16} />
                  <span>Explainable AI models with audit logs</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Measurable Results */}
        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
            <BarChart className="mr-3 text-primary-500" />
            Measurable Results & ROI
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">45%</div>
              <div className="text-sm text-gray-600">Reduction in Manual Processing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary-600 mb-2">30%</div>
              <div className="text-sm text-gray-600">More Quotes Per Agent</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">25%</div>
              <div className="text-sm text-gray-600">Fewer Documentation Errors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">15%</div>
              <div className="text-sm text-gray-600">Higher Renewal Rates</div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h3 className="font-semibold mb-3">Real Agency Success Stories</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Agency X:</strong> Accelerated policy issuance by 60% and reduced underwriting costs by 35% within three months</li>
              <li><strong>Agency Y:</strong> Decreased claim resolution time by 50% with automated triage and virtual assistant support</li>
              <li><strong>Agency Z:</strong> Achieved 22% revenue growth through AI-powered marketing campaigns</li>
            </ul>
          </div>
        </section>

        {/* Market Insights */}
        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
            <Globe className="mr-3 text-primary-500" />
            Industry Statistics & Market Insights
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border p-3 text-left">Statistic</th>
                  <th className="border p-3 text-left">Context</th>
                  <th className="border p-3 text-left">Outcome</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-semibold text-primary-600">33% CAGR</td>
                  <td className="border p-3">AI in insurance market (2024–2034)</td>
                  <td className="border p-3">Market size expands from $8.1B to $140B</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3 font-semibold text-primary-600">91% Adoption</td>
                  <td className="border p-3">Insurers using AI by 2025</td>
                  <td className="border p-3">Broad uptake across underwriting, claims, fraud</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold text-primary-600">70% Reduction</td>
                  <td className="border p-3">Claims processing time</td>
                  <td className="border p-3">Faster payouts, improved retention</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3 font-semibold text-primary-600">28% Improvement</td>
                  <td className="border p-3">Fraud detection accuracy</td>
                  <td className="border p-3">Lower loss ratios, stronger risk control</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Future Trends */}
        <section className="mb-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            The Future of Insurance Technology
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            AI will enhance, not replace, the expertise of independent agents by providing deeper insights, 
            enabling faster execution, and improving client experiences. Agents will increasingly transition 
            into strategic advisors focused on complex cases and expert risk counseling.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <TrendingUp className="mr-2 text-primary-500" />
                Emerging Trends
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Hyper-personalization through behavioral segmentation</li>
                <li>• Blockchain-enabled smart contracts</li>
                <li>• Voice-activated policy management</li>
                <li>• Augmented reality risk assessment</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Shield className="mr-2 text-secondary-500" />
                Future-Proofing Your Agency
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Scale services without proportional headcount</li>
                <li>• Adapt to market shifts with configurable AI</li>
                <li>• Maintain competitive edge with continuous updates</li>
                <li>• Build strategic partnerships for innovation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                How does Quotely's AI help independent insurance agents improve their business?
              </h3>
              <p className="text-gray-700">
                Quotely's AI automates routine underwriting and claims tasks, provides precise risk scores, 
                and powers chatbots for instant client support, enabling agents to concentrate on advisory 
                services and complex negotiations—thereby boosting productivity and client satisfaction.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">
                What are the benefits of AI in insurance underwriting and claims processing?
              </h3>
              <p className="text-gray-700">
                AI delivers faster, more accurate underwriting through predictive analytics, reduces manual 
                review by automating data extraction, and accelerates claims workflows—resulting in lower 
                operational costs and higher customer retention.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">
                How does Quotely address data security and ethical AI concerns?
              </h3>
              <p className="text-gray-700">
                Quotely enforces ISO 27001-level encryption, role-based access controls, and bias-monitoring 
                frameworks, while providing explainability logs to ensure transparent and compliant AI operations.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">
                How can independent agencies get started with Quotely's AI platform?
              </h3>
              <p className="text-gray-700">
                Begin with a complimentary discovery session to assess your data readiness, proceed with a 
                pilot integration with your AMS, and scale with guided training and ongoing success 
                management—unlocking rapid AI-driven value.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Embrace the AI Revolution Today
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Position your independent agency for sustained growth and competitive advantage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/pricing" 
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Start Your AI Journey <ArrowRight className="ml-2" size={20} />
            </a>
            <a 
              href="/calculator" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              Calculate Your ROI
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

export default QuotelyAIRevolutionPost;