import React from 'react';
import { motion } from 'framer-motion';
import TrafficEstimator from './components/TrafficEstimator';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen traffic-bg">
      <div className="min-h-screen bg-gradient-to-br from-slate-900/20 via-blue-900/10 to-indigo-900/20">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Global Traffic Volume
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Estimator
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Predict traffic volume using advanced machine learning algorithms. 
                Get accurate estimates based on weather conditions, time, and seasonal patterns.
              </motion.p>
            </div>

            <TrafficEstimator />
          </motion.div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;