import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      className="glass-effect border-t border-white/10 mt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">TrafficAI</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Advanced traffic volume prediction using machine learning. 
              Helping cities and organizations make data-driven transportation decisions.
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-semibold text-gray-800 mb-4">Features</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Real-time traffic prediction</li>
              <li>• Weather impact analysis</li>
              <li>• Seasonal pattern recognition</li>
              <li>• Global coverage support</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold text-gray-800 mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Github className="h-5 w-5 text-gray-600" />
              </a>
              <a href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Linkedin className="h-5 w-5 text-gray-600" />
              </a>
              <a href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Mail className="h-5 w-5 text-gray-600" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-600 flex items-center justify-center space-x-1">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>for smarter transportation</span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;