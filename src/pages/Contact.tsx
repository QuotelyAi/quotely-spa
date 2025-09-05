import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container-wrapper">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team to transform your insurance business
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-primary-600 mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Location</h3>
                    <p className="text-gray-600">
                      6010 S 66th E Ave B<br />
                      Tulsa, OK 74145<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-primary-600 mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:sales@tryquotely.com" className="text-primary-600 hover:text-primary-700">
                      sales@tryquotely.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-primary-600 mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Sales Inquiries</h3>
                    <p className="text-gray-600">
                      Contact our sales team for pricing and demos
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-primary-600 mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">AI Available 24/7</h3>
                    <p className="text-gray-600">
                      Our AI-powered platform operates round the clock at just $1.37/hour
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <div className="space-y-4">
                <a 
                  href="mailto:sales@tryquotely.com?subject=Quotely Platform Inquiry" 
                  className="btn-primary w-full text-center"
                >
                  Email Sales Team
                </a>
                <a 
                  href="/demo" 
                  className="btn-secondary w-full text-center"
                >
                  Schedule a Demo
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full min-h-[450px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.699750564421!2d-95.90776212475696!3d36.07642684732069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b69280c4541adf%3A0x97e4ace6a85794fc!2s6010%20S%2066th%20E%20Ave%20b%2C%20Tulsa%2C%20OK%2074145!5e0!3m2!1sen!2sus!4v1757022457525!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '450px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Quotely Office Location"
            />
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-gray-50 rounded-lg p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Platform Support</h3>
              <p className="text-gray-600">
                Technical support available for all platform users
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Custom Token Packages</h3>
              <p className="text-gray-600">
                Volume pricing available for high-volume agencies
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Partner Network</h3>
              <p className="text-gray-600">
                Integrated with TurboRater, Momentum AMP, and GAIL AI
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;