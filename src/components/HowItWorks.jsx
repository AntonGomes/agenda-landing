import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Tell Us Your Workflow",
      description: "Describe the business process you want automated. Our AI understands complex workflows from simple descriptions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "We Build Your Agent",
      description: "Our team creates a custom AI agent tailored to your specific workflow. No coding required from your end.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Deploy & Monitor",
      description: "Watch your agent execute tasks automatically. Monitor performance, view historical runs, and track efficiency gains.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2 2z" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Continuous Improvement",
      description: "Provide feedback on agent performance. Your input helps the AI learn and optimize for even better results over time.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            How Agenda Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to automation in four simple steps. Our streamlined process gets your AI agents up and running quickly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary-200 to-accent-200 z-0" 
                     style={{ width: 'calc(100% - 2rem)' }}>
                </div>
              )}
              
              <div className="relative z-10 text-center space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-500 text-white rounded-full text-xl font-bold shadow-lg group-hover:shadow-xl transition-shadow">
                  {step.number}
                </div>
                
                <div className="text-primary-600 flex justify-center group-hover:text-accent-600 transition-colors">
                  {step.icon}
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Real Results, Real Fast
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <p className="text-gray-700">Average 10x speed improvement in workflow execution</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                  <p className="text-gray-700">95% reduction in manual, repetitive tasks</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <p className="text-gray-700">24/7 operation with continuous learning</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                  <p className="text-gray-700">Complete audit trail for compliance and optimization</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl p-6">
                <div className="text-center space-y-4">
                  <div className="text-4xl font-bold text-primary-700">
                    38% → 85%
                  </div>
                  <p className="text-gray-700 font-medium">
                    Time spent on high-value work
                  </p>
                  <p className="text-sm text-gray-600">
                    Agenda transforms your team's productivity by automating the busy work that consumes 62% of their day
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;