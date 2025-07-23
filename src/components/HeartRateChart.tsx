import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface HeartRateData {
  time: string;
  bpm: number;
}

export const HeartRateChart = () => {
  const [currentBpm, setCurrentBpm] = useState(72);
  
  // Simulated heart rate data
  const heartRateData: HeartRateData[] = [
    { time: '6AM', bpm: 65 },
    { time: '9AM', bpm: 78 },
    { time: '12PM', bpm: 82 },
    { time: '3PM', bpm: 95 },
    { time: '6PM', bpm: 88 },
    { time: '9PM', bpm: 72 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBpm(prev => prev + (Math.random() - 0.5) * 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Create SVG path for the heart rate line
  const createPath = (data: HeartRateData[]) => {
    const width = 280;
    const height = 100;
    const maxBpm = Math.max(...data.map(d => d.bpm));
    const minBpm = Math.min(...data.map(d => d.bpm));
    
    const points = data.map((point, index) => {
      const x = (index / (data.length - 1)) * width;
      const y = height - ((point.bpm - minBpm) / (maxBpm - minBpm)) * height;
      return `${x},${y}`;
    });
    
    return `M ${points.join(' L ')}`;
  };

  return (
    <div className="glass-panel rounded-3xl p-6 slide-up slide-up-delay-1 hover:scale-105 transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl backdrop-blur-light border border-white/20 text-soft-pink glow-coral">
            <Heart size={24} className="animate-pulse" />
          </div>
          <div>
            <h3 className="text-glass-muted text-sm font-medium">Heart Rate</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-glass text-2xl font-bold">{Math.round(currentBpm)}</span>
              <span className="text-glass-muted text-sm">BPM</span>
            </div>
          </div>
        </div>
        <div className="text-glass-muted text-xs">Today</div>
      </div>

      <div className="relative h-24 mb-4">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 280 100"
          className="overflow-visible"
        >
          {/* Grid lines */}
          <defs>
            <linearGradient id="heartRateGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--soft-pink))" stopOpacity="0.1" />
              <stop offset="50%" stopColor="hsl(var(--coral))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--soft-pink))" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          {/* Area under curve */}
          <path
            d={`${createPath(heartRateData)} L 280,100 L 0,100 Z`}
            fill="url(#heartRateGradient)"
            className="animate-pulse"
          />
          
          {/* Heart rate line */}
          <path
            d={createPath(heartRateData)}
            fill="none"
            stroke="hsl(var(--soft-pink))"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-sm"
          />
          
          {/* Data points */}
          {heartRateData.map((point, index) => {
            const x = (index / (heartRateData.length - 1)) * 280;
            const maxBpm = Math.max(...heartRateData.map(d => d.bpm));
            const minBpm = Math.min(...heartRateData.map(d => d.bpm));
            const y = 100 - ((point.bpm - minBpm) / (maxBpm - minBpm)) * 100;
            
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="3"
                fill="hsl(var(--soft-pink))"
                className="drop-shadow-md"
              />
            );
          })}
        </svg>
      </div>

      <div className="flex justify-between text-xs text-glass-muted">
        {heartRateData.map((point, index) => (
          <span key={index}>{point.time}</span>
        ))}
      </div>
    </div>
  );
};