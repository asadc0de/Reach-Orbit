import React from 'react';
import { Users, Award, Globe, Heart } from 'lucide-react';
import ScrollToTop from '../components/SrollToTop';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-rose-500" />,
      title: "Authenticity First",
      description: "We believe in genuine connections between brands and influencers that create authentic content and meaningful relationships."
    },
    {
      icon: <Award className="h-8 w-8 text-amber-500" />,
      title: "Excellence Driven",
      description: "We're committed to delivering exceptional results through innovative strategies and meticulous attention to detail."
    },
    {
      icon: <Globe className="h-8 w-8 text-emerald-500" />,
      title: "Global Reach",
      description: "Our network spans across continents, connecting brands with influencers from diverse backgrounds and audiences worldwide."
    },
    {
      icon: <Users className="h-8 w-8 text-violet-500" />,
      title: "Partnership Focus",
      description: "We're not just an agency - we're your strategic partner in building lasting relationships and achieving long-term success."
    }
  ];

  const team = [
    {
      name: "Alexandra Rivera",
      role: "Founder & CEO",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Former VP of Marketing at major tech companies with 10+ years in digital marketing."
    },
    {
      name: "Marcus Thompson",
      role: "Head of Partnerships",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Expert in influencer relations with a network of 15,000+ content creators worldwide."
    },
    {
      name: "Sofia Chen",
      role: "Creative Director",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Award-winning creative strategist specializing in viral content and brand storytelling."
    },
    {
      name: "David Wilson",
      role: "Data Analytics Lead",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Data scientist and performance marketing expert with expertise in campaign optimization."
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
              About Reach Orbit
            </h1>
            <p className="text-xl md:text-2xl text-ro-accent max-w-3xl mx-auto">
              We're passionate about connecting brands with the perfect influencers to create campaigns that drive real impact and lasting relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-ro-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ro-accent mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-ro-accent">
                <p>
                  Reach Orbit emerged from a simple observation: the influencer marketing landscape was fragmented, with brands struggling to find authentic partnerships and influencers seeking meaningful collaborations.
                </p>
                <p>
                  We build a platform that prioritizes quality over quantity, authenticity over reach, and long-term partnerships over one-off campaigns.
                </p>
                <p>
                  Today, we're proud to be the trusted partner for brands worldwide, having facilitated millions of authentic connections between creators and companies that share common values and visions.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl border-4 border-ro-accent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-ro-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ro-accent mb-4">
              Our Values
            </h2>
            <p className="text-xl text-ro-accent max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we approach every partnership and campaign.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-ro-dark p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center group border border-ro-gray"
              >
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-ro-accent mb-3">
                  {value.title}
                </h3>
                <p className="text-ro-accent">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-ro-purple to-ro-violet text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-xl md:text-2xl text-ro-accent max-w-4xl mx-auto mb-8">
            To revolutionize influencer marketing by creating authentic, data-driven partnerships that deliver exceptional results for brands while empowering creators to build meaningful careers.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;