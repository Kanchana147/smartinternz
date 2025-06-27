import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, AlertCircle, CheckCircle, Activity, BarChart3 } from 'lucide-react';
import { PredictionResponse } from '../types';

interface PredictionResultProps {
  prediction: PredictionResponse;
}

const PredictionResult: React.FC<PredictionResultProps> = ({ prediction }) => {
  const getTrafficIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'low':
        return <CheckCircle className="h-8 w-8 text-green-500" />;
      case 'moderate':
        return <Activity className="h-8 w-8 text-yellow-500" />;
      case 'high':
        return <AlertCircle className="h-8 w-8 text-red-500" />;
      default:
        return <BarChart3 className="h-8 w-8 text-blue-500" />;
    }
  };

  const getTrafficColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'low':
        return 'from-green-500 to-emerald-600';
      case 'moderate':
        return 'from-yellow-500 to-orange-600';
      case 'high':
        return 'from-red-500 to-pink-600';
      default:
        return 'from-blue-500 to-indigo-600';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="prediction-card"
    >
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          {getTrafficIcon(prediction.category)}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Traffic Volume Prediction</h3>
          <div className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r ${getTrafficColor(prediction.category)} text-white font-bold text-3xl shadow-lg`}>
            {prediction.volume.toLocaleString()} vehicles/hour
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white/50 rounded-xl p-4">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <TrendingUp className="h-5 w-5 text-primary-500" />
              <span className="font-semibold text-gray-700">Traffic Category</span>
            </div>
            <div className={`text-2xl font-bold bg-gradient-to-r ${getTrafficColor(prediction.category)} bg-clip-text text-transparent`}>
              {prediction.category} Traffic
            </div>
          </div>

          <div className="bg-white/50 rounded-xl p-4">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <BarChart3 className="h-5 w-5 text-green-500" />
              <span className="font-semibold text-gray-700">Confidence</span>
            </div>
            <div className="text-2xl font-bold text-green-600">
              {prediction.confidence}%
            </div>
          </div>
        </div>

        {prediction.factors && prediction.factors.length > 0 && (
          <div className="mt-8">
            <h4 className="text-lg font-semibold text-gray-700 mb-4">Key Influencing Factors</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {prediction.factors.map((factor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/40 rounded-lg p-3 text-sm text-gray-700 font-medium"
                >
                  {factor}
                </motion.div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 p-4 bg-blue-50/50 rounded-xl">
          <p className="text-sm text-gray-600 leading-relaxed">
            This prediction is based on machine learning analysis of historical traffic patterns, 
            weather conditions, and temporal factors. Results are estimates and actual traffic may vary.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default PredictionResult;