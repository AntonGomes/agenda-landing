import React from 'react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Join forward-thinking companies that are already using Agenda to automate their workflows and unlock their team's potential.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-primary-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 hover:shadow-lg transition-all duration-300 inline-flex items-center space-x-2">
              <span>Start Free Trial</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-primary-700 transition-all duration-300 inline-flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Schedule Demo</span>
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-primary-500">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-primary-100">Agent Operation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10x</div>
              <div className="text-primary-100">Faster Workflows</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-primary-100">Less Manual Work</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;