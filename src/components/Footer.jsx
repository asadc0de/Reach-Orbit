import React from "react";
import { Link } from "react-router-dom";
import { Rocket, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ro-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Link to={"/"}>
                <img
                  src="/logo.jpeg"
                  className="w-10 md:rounded-xl rounded-lg"
                  alt="Logo"
                />
                <span className="text-xl font-bold text-ro-accent">Reach Orbit</span>
              </Link>
            </div>
            <p className="text-ro-accent mb-6 max-w-md">
              Connecting brands with top-tier influencers to create authentic,
              engaging campaigns that drive real results and build lasting
              relationships.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-ro-gray">
                <Mail className="h-4 w-4" />
                <span>abdullah@reachorbitt.com</span>
              </div>
              <div className="flex items-center space-x-2 text-ro-gray">
                <MapPin className="h-4 w-4" />
                <span>New Jersey, United States</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-ro-accent">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-ro-accent">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-slate-400">Influencer Marketing</span>
              </li>
              <li>
                <span className="text-slate-400">Campaign Management</span>
              </li>
              <li>
                <span className="text-slate-400">Content Strategy</span>
              </li>
              <li>
                <span className="text-slate-400">Analytics & Reporting</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2025 Reach Orbit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
