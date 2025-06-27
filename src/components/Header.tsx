import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Globe } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <motion.header 
      className="glass-effect border-b border-white/10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">TrafficAI</h2>
              <p className="text-sm text-gray-600">Smart Traffic Analytics</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-700">
            <Globe className="h-5 w-5" />
            <span className="text-sm font-medium">Global Coverage</span>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;