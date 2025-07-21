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
    <div className="min-h-screen bg-ro-black text-white">
      <ScrollToTop />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ro-dark via-ro-purple to-ro-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-ro-accent max-w-3xl mx-auto">
              Comprehensive influencer marketing solutions designed to elevate your brand and drive exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-ro-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ro-accent mb-4">
              Core Services
            </h2>
            <p className="text-xl text-ro-accent max-w-3xl mx-auto">
              Everything you need to launch, manage, and optimize successful influencer marketing campaigns.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="bg-ro-gray p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-ro-dark"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-ro-accent mb-4">
                  {service.title}
                </h3>
                <p className="text-ro-accent mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-ro-accent">
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
      <section className="py-20 bg-ro-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ro-accent mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-ro-accent">
              Specialized services to complement your core influencer marketing strategy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-ro-dark p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group text-center border border-ro-gray"
              >
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-ro-accent mb-3">
                  {service.title}
                </h3>
                <p className="text-ro-accent">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-ro-purple via-ro-violet to-ro-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-ro-accent max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your influencer marketing goals with our comprehensive services.
          </p>
          <Link
            to="/contact"
            className="relative overflow-hidden bg-ro-accent text-ro-dark px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-ro-gray hover:text-ro-accent transition-all duration-300 transform hover:scale-105 inline-flex items-center group shadow-2xl"
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