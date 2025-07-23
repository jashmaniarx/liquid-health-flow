import { useEffect, useState } from 'react';

interface ProgressRingProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  children?: React.ReactNode;
  animated?: boolean;
}

export const ProgressRing = ({ 
  progress, 
  size = 120, 
  strokeWidth = 8, 
  color = 'coral',
  children,
  animated = true 
}: ProgressRingProps) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = circumference - (animatedProgress / 100) * circumference;

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => setAnimatedProgress(progress), 300);
      return () => clearTimeout(timer);
    } else {
      setAnimatedProgress(progress);
    }
  }, [progress, animated]);

  const colorClasses = {
    coral: 'stroke-coral',
    mint: 'stroke-mint',
    lavender: 'stroke-lavender',
    'sky-blue': 'stroke-sky-blue',
    'soft-pink': 'stroke-soft-pink'
  };

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        className="progress-ring"
        width={size}
        height={size}
      >
        <circle
          stroke="rgba(255,255,255,0.1)"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className={colorClasses[color as keyof typeof colorClasses]}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          style={{ strokeDashoffset }}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
};