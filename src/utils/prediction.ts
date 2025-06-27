import { FormData, PredictionResponse } from '../types';

export function predictTrafficVolume(formData: FormData): PredictionResponse {
  // Convert form data to numbers
  const features = {
    holiday: parseInt(formData.holiday),
    temp: parseFloat(formData.temp),
    rain: parseFloat(formData.rain),
    snow: parseFloat(formData.snow),
    weather: parseInt(formData.weather),
    year: parseInt(formData.year),
    month: parseInt(formData.month),
    day: parseInt(formData.day),
    hours: parseInt(formData.hours),
    minutes: parseInt(formData.minutes),
    seconds: parseInt(formData.seconds)
  };

  // Simplified prediction algorithm (replace with actual ML model)
  let baseVolume = 2000;
  const factors: string[] = [];

  // Time-based adjustments
  if (features.hours >= 7 && features.hours <= 9) {
    baseVolume += 1500;
    factors.push('Morning rush hour');
  } else if (features.hours >= 17 && features.hours <= 19) {
    baseVolume += 1800;
    factors.push('Evening rush hour');
  } else if (features.hours >= 22 || features.hours <= 5) {
    baseVolume -= 1200;
    factors.push('Late night/early morning');
  }

  // Day of week (simplified - assuming day represents day of week)
  if (features.day % 7 === 0 || features.day % 7 === 6) {
    baseVolume -= 800;
    factors.push('Weekend traffic pattern');
  }

  // Weather adjustments
  if (features.rain > 0) {
    baseVolume -= Math.min(features.rain * 50, 500);
    factors.push('Rain impact');
  }
  
  if (features.snow > 0) {
    baseVolume -= Math.min(features.snow * 100, 800);
    factors.push('Snow impact');
  }

  // Temperature adjustments
  if (features.temp < 32) {
    baseVolume -= 300;
    factors.push('Cold weather');
  } else if (features.temp > 85) {
    baseVolume -= 200;
    factors.push('Hot weather');
  }

  // Holiday adjustments
  if (features.holiday !== 7) {
    baseVolume -= 600;
    factors.push('Holiday effect');
  }

  // Seasonal adjustments
  if (features.month >= 6 && features.month <= 8) {
    baseVolume += 200;
    factors.push('Summer season');
  } else if (features.month === 12 || features.month <= 2) {
    baseVolume -= 300;
    factors.push('Winter season');
  }

  // Ensure minimum volume
  const finalVolume = Math.max(baseVolume, 500);

  // Determine category
  let category: string;
  if (finalVolume < 1500) {
    category = 'Low';
  } else if (finalVolume < 3000) {
    category = 'Moderate';
  } else {
    category = 'High';
  }

  // Calculate confidence (simplified)
  const confidence = Math.min(85 + Math.random() * 10, 95);

  return {
    volume: Math.round(finalVolume),
    confidence: Math.round(confidence),
    category,
    factors
  };
}