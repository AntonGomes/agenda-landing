import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-primary-100/20 to-accent-100/20"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-primary-600 font-semibold text-lg tracking-wide uppercase">
              Redefining Business Operations with AI
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Tomorrow's platform
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
                Built tonight
              </span>
            </h1>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Tell Agenda what you need,
            </p>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              It learns from today's data,
            </p>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              rebuilds itself while you sleep,
            </p>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              and ships a smarter system at dawn -
            </p>
            <p className="text-xl md:text-2xl font-semibold text-primary-700">
              keeping you always a step ahead.
            </p>
          </div>

          <div className="pt-8">
            <button className="bg-gradient-to-r from-primary-600 to-accent-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2">
              <span>Transform Your Business</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;