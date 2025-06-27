export interface FormData {
  holiday: string;
  temp: string;
  rain: string;
  snow: string;
  weather: string;
  year: string;
  month: string;
  day: string;
  hours: string;
  minutes: string;
  seconds: string;
}

export interface PredictionResponse {
  volume: number;
  confidence: number;
  category: string;
  factors: string[];
}