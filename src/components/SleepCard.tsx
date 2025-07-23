import { Moon, Clock } from 'lucide-react';

export const SleepCard = () => {
  const sleepData = {
    totalSleep: '7h 23m',
    sleepScore: 85,
    bedtime: '10:30 PM',
    wakeup: '6:15 AM',
    phases: [
      { name: 'Deep', duration: '1h 45m', percentage: 25, color: 'lavender' },
      { name: 'REM', duration: '2h 10m', percentage: 30, color: 'mint' },
      { name: 'Light', duration: '3h 28m', percentage: 45, color: 'sky-blue' }
    ]
  };

  return (
    <div className="glass-panel rounded-3xl p-6 slide-up slide-up-delay-2 hover:scale-105 transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl backdrop-blur-light border border-white/20 text-lavender glow-lavender">
            <Moon size={24} />
          </div>
          <div>
            <h3 className="text-glass-muted text-sm font-medium">Sleep</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-glass text-2xl font-bold">{sleepData.totalSleep}</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-glass text-lg font-bold">{sleepData.sleepScore}</div>
          <div className="text-glass-muted text-xs">Sleep Score</div>
        </div>
      </div>

      {/* Sleep phases breakdown */}
      <div className="space-y-3 mb-4">
        {sleepData.phases.map((phase, index) => (
          <div key={phase.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div 
                className={`w-3 h-3 rounded-full`}
                style={{ backgroundColor: `hsl(var(--${phase.color}))` }}
              />
              <span className="text-glass-muted text-sm">{phase.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-glass text-sm">{phase.duration}</span>
              <div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-1000`}
                  style={{ 
                    width: `${phase.percentage}%`,
                    backgroundColor: `hsl(var(--${phase.color}))`,
                    animationDelay: `${index * 200 + 800}ms`
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sleep schedule */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-glass-muted" />
          <span className="text-glass-muted text-sm">Bedtime</span>
          <span className="text-glass text-sm font-medium">{sleepData.bedtime}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-glass-muted text-sm">Wake up</span>
          <span className="text-glass text-sm font-medium">{sleepData.wakeup}</span>
        </div>
      </div>
    </div>
  );
};