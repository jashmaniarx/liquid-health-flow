import { Droplets, Plus } from 'lucide-react';
import { ProgressRing } from './ProgressRing';
import { useState } from 'react';

export const HydrationTracker = () => {
  const [currentIntake, setCurrentIntake] = useState(6);
  const dailyGoal = 8;
  const progress = (currentIntake / dailyGoal) * 100;

  const addWater = () => {
    if (currentIntake < dailyGoal) {
      setCurrentIntake(prev => prev + 1);
    }
  };

  return (
    <div className="glass-panel rounded-3xl p-6 slide-up slide-up-delay-3 hover:scale-105 transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl backdrop-blur-light border border-white/20 text-mint glow-mint">
            <Droplets size={24} />
          </div>
          <div>
            <h3 className="text-glass-muted text-sm font-medium">Hydration</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-glass text-2xl font-bold">{currentIntake}</span>
              <span className="text-glass-muted text-sm">/ {dailyGoal} cups</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <ProgressRing
          progress={progress}
          size={100}
          strokeWidth={6}
          color="mint"
        >
          <div className="text-center">
            <div className="text-glass text-lg font-bold">{Math.round(progress)}%</div>
            <div className="text-glass-muted text-xs">Complete</div>
          </div>
        </ProgressRing>

        <button
          onClick={addWater}
          className="glass-secondary rounded-2xl p-4 hover:scale-110 transition-all duration-300 border border-white/15 text-mint"
          disabled={currentIntake >= dailyGoal}
        >
          <Plus size={24} />
        </button>
      </div>

      {/* Water intake timeline */}
      <div className="mt-6 pt-4 border-t border-white/10">
        <div className="flex justify-between items-center mb-3">
          <span className="text-glass-muted text-sm">Today's intake</span>
          <span className="text-glass-muted text-xs">{currentIntake * 250}ml</span>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: dailyGoal }, (_, i) => (
            <div
              key={i}
              className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                i < currentIntake 
                  ? 'bg-mint shadow-glow-mint' 
                  : 'bg-white/10'
              }`}
              style={{ animationDelay: `${i * 100 + 1200}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};