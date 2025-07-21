import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, TrendingUp, Target, Star, CheckCircle } from 'lucide-react';
import ScrollToTop from '../components/SrollToTop';

const Home = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-violet-600" />,
      title: "Expert Network",
      description: "Access to 10,000+ verified influencers across all major platforms and niches."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-violet-600" />,
      title: "Data-Driven Results",
      description: "Advanced analytics and AI-powered insights to maximize campaign performance."
    },
    {
      icon: <Target className="h-8 w-8 text-violet-600" />,
      title: "Targeted Campaigns",
      description: "Precision targeting to reach your ideal audience with authentic content."
    }
  ];

  const testimonials = [
    {
      quote: "Reach Orbit transformed our brand's social presence. We saw a 300% increase in engagement within the first month.",
      author: "Sarah Chen",
      role: "Marketing Director, TechCorp",
      rating: 5
    },
    {
      quote: "The team's expertise in influencer partnerships is unmatched. They delivered results beyond our expectations.",
      author: "Michael Rodriguez",
      role: "Brand Manager, StyleCo",
      rating: 5
    },
    {
      quote: "Professional, results-driven, and incredibly easy to work with. Reach Orbit is our go-to agency.",
      author: "Emily Johnson",
      role: "CEO, FitnessPro",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-violet-900 to-purple-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Launch Your Brand to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400"> New Heights</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-3xl mx-auto">
              Connect with top-tier influencers and create authentic campaigns that drive real results for your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="relative overflow-hidden bg-gradient-to-r from-cyan-500 to-violet-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-cyan-600 hover:to-violet-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center group shadow-2xl hover:shadow-cyan-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Start Your Campaign
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                to="/services"
                className="relative overflow-hidden border-2 border-slate-300 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105 group shadow-xl"
              >
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Reach Orbit?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with human expertise to deliver campaigns that exceed expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-slate-100"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
              <div className="text-violet-200">Verified Influencers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-violet-200">Successful Campaigns</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50M+</div>
              <div className="text-violet-200">Total Reach</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-violet-200">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-600">
              Don't just take our word for it - hear from brands who've achieved amazing results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-semibold text-slate-900">
                    {testimonial.author}
                  </div>
                  <div className="text-slate-600 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 via-violet-600 to-fuchsia-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Launch Your Next Campaign?
          </h2>
          <p className="text-xl mb-8 text-cyan-100 max-w-2xl mx-auto">
            Join hundreds of brands who trust Reach Orbit to connect them with the perfect influencers.
          </p>
          <Link
            to="/contact"
            className="relative overflow-hidden bg-white text-violet-600 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center group shadow-2xl"
          >
            <span className="relative z-10 flex items-center">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;