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
      quote: "The team at Reach Orbit was friendly and helpful throughout our campaign. We appreciated their support.",
      author: "Sarah Chen",
      rating: 5
    },
    {
      quote: "Working with Reach Orbit was a smooth experience. They listened to our needs and communicated well.",
      author: "Michael Rodriguez",
      rating: 5
    },
    {
      quote: "We enjoyed collaborating with Reach Orbit. Looking forward to seeing how the company grows.",
      author: "Emily Johnson",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-ro-black text-white">
      <ScrollToTop />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-ro-dark via-ro-purple to-ro-black text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-ro-purple/10 to-ro-violet/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Launch Your Brand to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400"> New Heights</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-ro-accent max-w-3xl mx-auto">
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
      <section className="py-20 bg-ro-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ro-accent mb-4">
              Why Choose Reach Orbit?
            </h2>
            <p className="text-xl text-ro-accent max-w-3xl mx-auto">
              We combine cutting-edge technology with human expertise to deliver campaigns that exceed expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-ro-dark p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-ro-gray"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-ro-accent mb-3">
                  {feature.title}
                </h3>
                <p className="text-ro-accent">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-ro-purple to-ro-violet text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
              <div className="text-ro-accent">Verified Influencers</div>
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
      <section className="py-20 bg-ro-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ro-accent mb-4">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-ro-gray p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-ro-dark"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-ro-accent mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-semibold text-ro-accent">
                    {testimonial.author}
                  </div>
                  <div className="text-ro-accent text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-ro-purple via-ro-violet to-ro-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Launch Your Next Campaign?
          </h2>
          <p className="text-xl mb-8 text-ro-accent max-w-2xl mx-auto">
            Join hundreds of brands who trust Reach Orbit to connect them with the perfect influencers.
          </p>
          <Link
            to="/contact"
            className="relative overflow-hidden bg-ro-accent text-ro-dark px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-ro-gray hover:text-ro-accent transition-all duration-300 transform hover:scale-105 inline-flex items-center group shadow-2xl"
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