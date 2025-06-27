import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Cloud, Thermometer, Droplets, Snowflake, Clock, TrendingUp } from 'lucide-react';
import PredictionResult from './PredictionResult';
import { FormData, PredictionResponse } from '../types';
import { predictTrafficVolume } from '../utils/prediction';

const TrafficEstimator: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    holiday: '7',
    temp: '',
    rain: '',
    snow: '',
    weather: '1',
    year: new Date().getFullYear().toString(),
    month: (new Date().getMonth() + 1).toString(),
    day: new Date().getDate().toString(),
    hours: new Date().getHours().toString(),
    minutes: new Date().getMinutes().toString(),
    seconds: '0'
  });

  const [prediction, setPrediction] = useState<PredictionResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const result = predictTrafficVolume(formData);
      setPrediction(result);
    } catch (error) {
      console.error('Prediction error:', error);
      setPrediction({
        volume: 0,
        confidence: 0,
        category: 'Error',
        factors: []
      });
    } finally {
      setIsLoading(false);
    }
  };

  const holidays = [
    { value: '7', label: 'None' },
    { value: '1', label: 'Columbus Day' },
    { value: '10', label: 'Veterans Day' },
    { value: '9', label: 'Thanksgiving Day' },
    { value: '0', label: 'Christmas Day' },
    { value: '6', label: "New Year's Day" },
    { value: '11', label: "Washington's Birthday" },
    { value: '5', label: 'Memorial Day' },
    { value: '2', label: 'Independence Day' },
    { value: '8', label: 'State Fair' },
    { value: '3', label: 'Labor Day' },
    { value: '4', label: 'Martin Luther King Jr Day' }
  ];

  const weatherConditions = [
    { value: '1', label: 'Clouds' },
    { value: '0', label: 'Clear' },
    { value: '4', label: 'Rain' },
    { value: '2', label: 'Drizzle' },
    { value: '5', label: 'Mist' },
    { value: '3', label: 'Haze' },
    { value: '10', label: 'Thunderstorm' },
    { value: '8', label: 'Snow' },
    { value: '9', label: 'Squall' },
    { value: '7', label: 'Smoke' }
  ];

  return (
    <div className="space-y-8">
      <motion.div 
        className="glass-effect rounded-3xl p-8 shadow-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Holiday Selection */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                <Calendar className="h-4 w-4 text-primary-500" />
                <span>Holiday</span>
              </label>
              <select
                name="holiday"
                value={formData.holiday}
                onChange={handleInputChange}
                className="select-field"
              >
                {holidays.map(holiday => (
                  <option key={holiday.value} value={holiday.value}>
                    {holiday.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Temperature */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                <Thermometer className="h-4 w-4 text-red-500" />
                <span>Temperature (°F)</span>
              </label>
              <input
                type="number"
                name="temp"
                value={formData.temp}
                onChange={handleInputChange}
                placeholder="e.g., 72.5"
                step="0.1"
                required
                className="input-field"
              />
            </div>

            {/* Rain */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                <Droplets className="h-4 w-4 text-blue-500" />
                <span>Rain (mm)</span>
              </label>
              <input
                type="number"
                name="rain"
                value={formData.rain}
                onChange={handleInputChange}
                placeholder="e.g., 0.0"
                step="0.1"
                min="0"
                required
                className="input-field"
              />
            </div>

            {/* Snow */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                <Snowflake className="h-4 w-4 text-cyan-500" />
                <span>Snow (mm)</span>
              </label>
              <input
                type="number"
                name="snow"
                value={formData.snow}
                onChange={handleInputChange}
                placeholder="e.g., 0.0"
                step="0.1"
                min="0"
                required
                className="input-field"
              />
            </div>

            {/* Weather */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                <Cloud className="h-4 w-4 text-gray-500" />
                <span>Weather Condition</span>
              </label>
              <select
                name="weather"
                value={formData.weather}
                onChange={handleInputChange}
                className="select-field"
              >
                {weatherConditions.map(condition => (
                  <option key={condition.value} value={condition.value}>
                    {condition.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Year */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                <Calendar className="h-4 w-4 text-purple-500" />
                <span>Year</span>
              </label>
              <input
                type="number"
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                min="2012"
                max="2030"
                required
                className="input-field"
              />
            </div>

            {/* Month */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Month</label>
              <input
                type="number"
                name="month"
                value={formData.month}
                onChange={handleInputChange}
                min="1"
                max="12"
                required
                className="input-field"
              />
            </div>

            {/* Day */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Day</label>
              <input
                type="number"
                name="day"
                value={formData.day}
                onChange={handleInputChange}
                min="1"
                max="31"
                required
                className="input-field"
              />
            </div>

            {/* Hours */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                <Clock className="h-4 w-4 text-indigo-500" />
                <span>Hours (24h)</span>
              </label>
              <input
                type="number"
                name="hours"
                value={formData.hours}
                onChange={handleInputChange}
                min="0"
                max="23"
                required
                className="input-field"
              />
            </div>

            {/* Minutes */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Minutes</label>
              <input
                type="number"
                name="minutes"
                value={formData.minutes}
                onChange={handleInputChange}
                min="0"
                max="59"
                required
                className="input-field"
              />
            </div>

            {/* Seconds */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Seconds</label>
              <input
                type="number"
                name="seconds"
                value={formData.seconds}
                onChange={handleInputChange}
                min="0"
                max="59"
                required
                className="input-field"
              />
            </div>
          </div>

          <div className="flex justify-center pt-6">
            <motion.button
              type="submit"
              disabled={isLoading}
              className="btn-primary flex items-center space-x-2 min-w-[200px] justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Analyzing...</span>
                </>
              ) : (
                <>
                  <TrendingUp className="h-5 w-5" />
                  <span>Predict Traffic Volume</span>
                </>
              )}
            </motion.button>
          </div>
        </form>
      </motion.div>

      {prediction && <PredictionResult prediction={prediction} />}
    </div>
  );
};

export default TrafficEstimator;