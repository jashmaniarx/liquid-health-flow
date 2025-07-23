import { Footprints, Target, Flame } from 'lucide-react';
import { ActivityCard } from './ActivityCard';
import { ProgressRing } from './ProgressRing';

export const ActivitySummary = () => {
  const todayStats = {
    steps: { current: 8547, goal: 10000 },
    distance: { current: 6.2, goal: 8.0 },
    calories: { current: 420, goal: 600 }
  };

  const stepsProgress = (todayStats.steps.current / todayStats.steps.goal) * 100;
  const distanceProgress = (todayStats.distance.current / todayStats.distance.goal) * 100;
  const caloriesProgress = (todayStats.calories.current / todayStats.calories.goal) * 100;

  return (
    <div className="space-y-6">
      {/* Main activity rings */}
      <div className="glass-panel rounded-3xl p-6 slide-up">
        <h2 className="text-glass text-xl font-bold mb-6">Today's Activity</h2>
        
        <div className="flex items-center justify-center mb-6">
          <div className="relative">
            {/* Outer ring - Steps */}
            <ProgressRing
              progress={stepsProgress}
              size={160}
              strokeWidth={8}
              color="coral"
            >
              {/* Middle ring - Distance */}
              <ProgressRing
                progress={distanceProgress}
                size={120}
                strokeWidth={6}
                color="mint"
              >
                {/* Inner ring - Calories */}
                <ProgressRing
                  progress={caloriesProgress}
                  size={80}
                  strokeWidth={5}
                  color="lavender"
                >
                  <div className="text-center">
                    <div className="text-glass text-sm font-bold">Active</div>
                    <div className="text-glass-muted text-xs">Today</div>
                  </div>
                </ProgressRing>
              </ProgressRing>
            </ProgressRing>
          </div>
        </div>

        {/* Activity legend */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="w-3 h-3 bg-coral rounded-full mx-auto mb-1" />
            <div className="text-glass-muted text-xs">Steps</div>
            <div className="text-glass text-sm font-medium">{todayStats.steps.current.toLocaleString()}</div>
          </div>
          <div className="text-center">
            <div className="w-3 h-3 bg-mint rounded-full mx-auto mb-1" />
            <div className="text-glass-muted text-xs">Distance</div>
            <div className="text-glass text-sm font-medium">{todayStats.distance.current} km</div>
          </div>
          <div className="text-center">
            <div className="w-3 h-3 bg-lavender rounded-full mx-auto mb-1" />
            <div className="text-glass-muted text-xs">Calories</div>
            <div className="text-glass text-sm font-medium">{todayStats.calories.current}</div>
          </div>
        </div>
      </div>

      {/* Individual activity cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ActivityCard
          title="Steps"
          value={todayStats.steps.current.toLocaleString()}
          unit="steps"
          icon={Footprints}
          progress={stepsProgress}
          color="coral"
          delay="0.1s"
        />
        <ActivityCard
          title="Distance"
          value={todayStats.distance.current.toString()}
          unit="km"
          icon={Target}
          progress={distanceProgress}
          color="mint"
          delay="0.2s"
        />
        <ActivityCard
          title="Calories"
          value={todayStats.calories.current.toString()}
          unit="kcal"
          icon={Flame}
          progress={caloriesProgress}
          color="lavender"
          delay="0.3s"
        />
      </div>
    </div>
  );
};