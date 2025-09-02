import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs: FAQItem[] = [
    {
      category: 'General',
      question: 'What is Quotely?',
      answer: 'Quotely is an AI-powered insurance quoting platform that helps agencies streamline their quoting process, integrate with multiple carriers, and boost conversion rates through intelligent automation.',
    },
    {
      category: 'General',
      question: 'How does Quotely work?',
      answer: 'Quotely connects to your existing carrier systems through APIs, allowing you to generate quotes from multiple carriers in seconds. Our AI analyzes customer data to provide personalized recommendations and automate follow-ups.',
    },
    {
      category: 'Pricing',
      question: 'Is there a free trial available?',
      answer: 'Yes! All plans include a 14-day free trial with full access to features. No credit card required to start.',
    },
    {
      category: 'Pricing',
      question: 'Can I change my plan later?',
      answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.',
    },
    {
      category: 'Pricing',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, ACH transfers, and wire transfers for enterprise accounts. Annual payments receive a 15% discount.',
    },
    {
      category: 'Features',
      question: 'Which insurance carriers are supported?',
      answer: 'We integrate with over 100 insurance carriers including all major national and regional carriers. New carriers are added monthly based on customer requests.',
    },
    {
      category: 'Features',
      question: 'Can I import my existing client data?',
      answer: 'Yes! We support bulk imports from CSV, Excel, and most popular CRM systems. Our onboarding team will help you migrate your data seamlessly.',
    },
    {
      category: 'Features',
      question: 'Does Quotely replace my agency management system?',
      answer: 'Quotely can work standalone or integrate with your existing agency management system. We have native integrations with Applied Epic, AMS360, and other popular platforms.',
    },
    {
      category: 'Security',
      question: 'Is my data secure?',
      answer: 'Yes. We use bank-level 256-bit SSL encryption, are SOC 2 certified, and HIPAA compliant. All data is stored in secure, redundant data centers with 24/7 monitoring.',
    },
    {
      category: 'Security',
      question: 'Who has access to my data?',
      answer: 'Only you and authorized users in your agency have access to your data. Our employees cannot access your data without explicit permission for support purposes.',
    },
    {
      category: 'Support',
      question: 'What kind of support is available?',
      answer: 'Support varies by plan: Starter includes email support, Professional adds phone and priority support, and Enterprise includes a dedicated account manager and 24/7 support.',
    },
    {
      category: 'Support',
      question: 'Do you provide training?',
      answer: 'Yes! We offer comprehensive training including video tutorials, documentation, webinars, and personalized onboarding sessions for Professional and Enterprise plans.',
    },
    {
      category: 'Technical',
      question: 'What are the system requirements?',
      answer: 'Quotely is cloud-based and works on any modern web browser (Chrome, Firefox, Safari, Edge). Mobile apps are available for iOS and Android.',
    },
    {
      category: 'Technical',
      question: 'Is there an API available?',
      answer: 'Yes, Professional and Enterprise plans include API access for custom integrations. Full documentation and SDKs are available for popular programming languages.',
    },
  ];

  const categories = [...new Set(faqs.map(faq => faq.category))];

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container-wrapper">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about Quotely
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {categories.map((category) => (
            <div key={category} className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{category}</h2>
              <div className="space-y-4">
                {faqs
                  .filter(faq => faq.category === category)
                  .map((faq, index) => {
                    const globalIndex = faqs.indexOf(faq);
                    const isOpen = openItems.includes(globalIndex);
                    
                    return (
                      <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-medium text-gray-900">{faq.question}</span>
                          {isOpen ? (
                            <ChevronUp className="text-gray-500" size={20} />
                          ) : (
                            <ChevronDown className="text-gray-500" size={20} />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-700">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-700 mb-6">
            Our support team is here to help you get the answers you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Contact Support
            </a>
            <a href="/demo" className="btn-secondary">
              Schedule a Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;