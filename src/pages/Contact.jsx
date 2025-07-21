import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
} from "lucide-react";
import ScrollToTop from "../components/SrollToTop";

const Contact = () => {

  const [result, setResult] = React.useState("");
  const [sending, setSending] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    const formData = new FormData(event.target);

    // formData.append("access_key", "ed7d7f38-6426-4976-b248-349ad921e484");
    formData.append("access_key", "2c8a95c4-9413-4514-b74b-ab53b37e98f0");

// 
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
      });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    setTimeout(() => setSending(false), 3000);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-violet-600" />,
      title: "Email Us",
      details: "abdullah@reachorbitt.com",
      description: "Send us an email anytime",
    },
    {
      icon: <Phone className="h-6 w-6 text-violet-600" />,
      title: "Call Us",
      details: "+1 (973) 253-3800",
      description: "Call us any time",
    },
    {
      icon: <MapPin className="h-6 w-6 text-violet-600" />,
      title: "Visit Us",
      details: "New Jersey, United States",
      description: "473 Mundet Place, Ste US706632 Hillside",
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: "How quickly can we start a campaign?",
      answer:
        "Typically, we can have your campaign live within 2-3 weeks after onboarding and strategy development.",
    },
    {
      question: "What's included in campaign management?",
      answer:
        "Full-service management includes strategy, influencer vetting, content approval, timeline management, and performance reporting.",
    },
    {
      question: "Do you work with micro-influencers?",
      answer:
        "Yes! We work with creators of all sizes, from micro-influencers (1K-100K) to mega-influencers (1M+), depending on your goals.",
    },
  ];
  const [openFaq, setOpenFaq] = useState(null);

  return (
    
    <div className="min-h-screen bg-ro-black text-white">
      <ScrollToTop />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ro-dark via-ro-purple to-ro-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-ro-accent max-w-3xl mx-auto">
              Ready to launch your next influencer campaign? Let's discuss how
              we can help you achieve your marketing goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-ro-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-ro-gray p-8 rounded-2xl border border-ro-dark">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-ro-accent mb-4">
                  Let's Start a Conversation
                </h2>
                <p className="text-ro-accent">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-ro-accent mb-2">
                    Thank You!
                  </h3>
                  <p className="text-ro-accent">
                    Your message has been sent successfully. We'll get back to
                    you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  <input type="hidden" name="from_name" value="Reach Orbit" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-ro-accent mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="outline-none w-full px-4 py-3 border border-ro-gray rounded-xl focus:ring-2 focus:ring-ro-accent focus:border-transparent transition-all duration-200 bg-ro-dark text-white"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-ro-accent mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="outline-none w-full px-4 py-3 border border-ro-gray rounded-xl focus:ring-2 focus:ring-ro-accent focus:border-transparent transition-all duration-200 bg-ro-dark text-white"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label
                        htmlFor="brand_or_influencer"
                        className="block text-sm font-medium text-ro-accent mb-2"
                      >
                        Are you a Brand or Influencer *
                      </label>
                      <input
                        type="text"
                        id="brand_or_influencer"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="outline-none w-full px-4 py-3 border border-ro-gray rounded-xl focus:ring-2 focus:ring-ro-accent focus:border-transparent transition-all duration-200 bg-ro-dark text-white"
                        placeholder="Brand - Influencer"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-ro-accent mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="outline-none w-full px-4 py-3 border border-ro-gray rounded-xl focus:ring-2 focus:ring-ro-accent focus:border-transparent transition-all duration-200 bg-ro-dark text-white"
                      placeholder="Tell us about your project and goals..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-ro-purple to-ro-violet text-white px-6 py-4 rounded-xl font-semibold hover:from-ro-violet hover:to-ro-accent transition-all duration-300 transform hover:scale-105 flex items-center justify-center group shadow-lg hover:shadow-xl"
                  >
                    <span className="flex items-center">
                      {sending ? "Sending..." : "Send Message"}
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                    <span className="text-2 text-center"></span>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-ro-accent mb-4">
                  Contact Information
                </h2>
                <p className="text-ro-accent">
                  We're here to help you succeed. Reach out to us through any of
                  these channels.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-ro-gray p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group border border-ro-dark"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-ro-accent mb-1">
                          {info.title}
                        </h3>
                        <p className="text-ro-accent font-medium mb-1">
                          {info.details}
                        </p>
                        <p className="text-ro-accent text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQ Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-ro-accent mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-ro-gray p-6 rounded-2xl border border-ro-dark cursor-pointer transition-all duration-300"
                    >
                      <div
                        className="flex items-center justify-between"
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      >
                        <h4 className="font-semibold text-ro-accent mb-2 select-none">
                          {faq.question}
                        </h4>
                        <span className="ml-4 text-ro-accent text-xl">
                          {openFaq === idx ? "▲" : "▼"}
                        </span>
                      </div>
                      {openFaq === idx && (
                        <p className="text-ro-accent mt-2 transition-all duration-300">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
