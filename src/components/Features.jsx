import React from 'react';

const Features = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Lightning Fast Automation",
      description: "Deploy AI agents that handle your workflows 10x faster than manual processes. From data analysis to report generation, watch your productivity soar."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Self-Improving Intelligence",
      description: "Your agents learn from every interaction and feedback. They continuously optimize their performance, becoming smarter and more efficient over time."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2 2z" />
        </svg>
      ),
      title: "Complete Historical Tracking",
      description: "View every agent run, track performance metrics, and analyze trends. Full transparency into your automated workflows with detailed execution logs."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      ),
      title: "Custom Agent Builder",
      description: "Tell us your workflow and we'll build a custom agent tailored to your exact needs. No coding required - just describe what you want automated."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Enterprise Ready",
      description: "Scale from single workflows to enterprise-wide automation. Secure, reliable, and built for teams of any size with advanced collaboration features."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Feedback-Driven Learning",
      description: "Rate agent performance and provide feedback. Your input directly shapes how agents improve, ensuring they align perfectly with your expectations."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            The "Busy" Challenge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your best people now spend just 38% of their day on real work. The other 62% vanishes into copy-pasting, spreadsheet wrangling, and status checks—tasks that stall growth and drain morale.
          </p>
        </div>

        <div className="mb-20">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-center mb-6 text-gray-800">Productivity Loss Funnel</h3>
            <p className="text-sm text-center text-gray-600 mb-4">Where working hours actually go</p>
            
            <div className="relative">
              <div className="w-full h-64 mx-auto relative">
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-red-400 to-red-500 rounded-t-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold">62%</div>
                    <div className="text-sm">Busy Work</div>
                  </div>
                </div>
                <div className="absolute inset-x-4 bottom-0 h-32 bg-gradient-to-b from-accent-400 to-accent-500 rounded-b-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold">38%</div>
                    <div className="text-sm">Real Work</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Powerful Features for Modern Teams
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with AI agents that work 24/7, learn continuously, and deliver results that exceed expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-primary-50 hover:from-primary-50 hover:to-accent-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="text-primary-600 mb-4 group-hover:text-accent-600 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;