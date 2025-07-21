import React from 'react';
import { 
  Users, 
  BarChart3, 
  Target, 
  Video, 
  TrendingUp, 
  Shield,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../components/SrollToTop';

const Services = () => {
  const mainServices = [
    {
      icon: <Users className="h-12 w-12 text-violet-600" />,
      title: "Influencer Matching",
      description: "AI-powered matching system to connect your brand with the perfect influencers who align with your values and target audience.",
      features: [
        "Advanced audience analytics",
        "Brand safety verification",
        "Engagement quality assessment",
        "Niche expertise matching"
      ]
    },
    {
      icon: <Video className="h-12 w-12 text-purple-600" />,
      title: "Campaign Management",
      description: "End-to-end campaign management from strategy development to execution and optimization.",
      features: [
        "Creative brief development",
        "Content approval workflow",
        "Timeline management",
        "Quality assurance"
      ]
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-emerald-600" />,
      title: "Analytics & Reporting",
      description: "Comprehensive performance tracking with actionable insights to maximize your campaign ROI.",
      features: [
        "Real-time performance tracking",
        "Detailed ROI analysis",
        "Audience insights",
        "Competitive benchmarking"
      ]
    },
    {
      icon: <Target className="h-12 w-12 text-cyan-600" />,
      title: "Strategy Consulting",
      description: "Expert guidance to develop winning influencer marketing strategies tailored to your brand goals.",
      features: [
        "Market analysis",
        "Competitor research",
        "Platform recommendations",
        "Budget optimization"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <TrendingUp className="h-8 w-8 text-violet-600" />,
      title: "Content Strategy",
      description: "Develop compelling content strategies that resonate with your target audience."
    },
    {
      icon: <Shield className="h-8 w-8 text-violet-600" />,
      title: "Brand Safety",
      description: "Comprehensive brand safety measures to protect your reputation and ensure compliance."
    },
    {
      icon: <Users className="h-8 w-8 text-violet-600" />,
      title: "Talent Management",
      description: "Long-term influencer relationship management and exclusive partnership development."
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "$2,500",
      period: "/month",
      description: "Perfect for small businesses getting started with influencer marketing",
      features: [
        "Up to 5 influencer partnerships",
        "Basic campaign management",
        "Monthly performance reports",
        "Email support",
        "Content approval system"
      ],
      highlight: false
    },
    {
      name: "Professional",
      price: "$7,500",
      period: "/month",
      description: "Ideal for growing brands looking to scale their influencer presence",
      features: [
        "Up to 20 influencer partnerships",
        "Advanced campaign management",
        "Weekly performance reports",
        "Priority support",
        "A/B testing capabilities",
        "Dedicated account manager",
        "Custom analytics dashboard"
      ],
      highlight: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Comprehensive solution for large brands with complex needs",
      features: [
        "Unlimited influencer partnerships",
        "White-glove campaign management",
        "Real-time reporting",
        "24/7 support",
        "Advanced analytics & insights",
        "Dedicated team",
        "Custom integrations",
        "Strategic consulting"
      ],
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-violet-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-violet-200 max-w-3xl mx-auto">
              Comprehensive influencer marketing solutions designed to elevate your brand and drive exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Core Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to launch, manage, and optimize successful influencer marketing campaigns.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-slate-100"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-700">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-slate-600">
              Specialized services to complement your core influencer marketing strategy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group text-center border border-slate-100"
              >
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Choose Your Package
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your business needs and marketing goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 border ${
                  pkg.highlight
                    ? 'bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-2xl scale-105 border-violet-500'
                    : 'bg-slate-50 hover:shadow-xl border-slate-200'
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold mb-2 ${pkg.highlight ? 'text-white' : 'text-slate-900'}`}>
                    {pkg.name}
                  </h3>
                  <div className="mb-4">
                    <span className={`text-4xl font-bold ${pkg.highlight ? 'text-white' : 'text-slate-900'}`}>
                      {pkg.price}
                    </span>
                    <span className={`text-lg ${pkg.highlight ? 'text-violet-100' : 'text-slate-600'}`}>
                      {pkg.period}
                    </span>
                  </div>
                  <p className={`${pkg.highlight ? 'text-violet-100' : 'text-slate-600'}`}>
                    {pkg.description}
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className={`h-5 w-5 mr-3 flex-shrink-0 ${
                        pkg.highlight ? 'text-violet-200' : 'text-emerald-500'
                      }`} />
                      <span className={pkg.highlight ? 'text-white' : 'text-slate-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center group ${
                    pkg.highlight
                      ? 'bg-white text-violet-600 hover:bg-slate-100 shadow-lg'
                      : 'bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:from-violet-700 hover:to-purple-700 shadow-lg'
                  }`}
                >
                  <span className="flex items-center">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-slate-600">
              A streamlined approach that ensures campaign success from start to finish.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Strategy", description: "Define goals and target audience" },
              { step: "02", title: "Matching", description: "Find perfect influencer partners" },
              { step: "03", title: "Execution", description: "Launch and manage campaigns" },
              { step: "04", title: "Optimization", description: "Analyze and improve performance" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 via-violet-600 to-fuchsia-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-cyan-100 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your influencer marketing goals with our comprehensive services.
          </p>
          <Link
            to="/contact"
            className="relative overflow-hidden bg-white text-violet-600 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center group shadow-2xl"
          >
            <span className="relative z-10 flex items-center">
              Start Your Campaign
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;