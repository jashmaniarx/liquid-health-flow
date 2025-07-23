import { LucideIcon } from 'lucide-react';

interface ActivityCardProps {
  title: string;
  value: string;
  unit: string;
  icon: LucideIcon;
  progress?: number;
  color?: 'coral' | 'mint' | 'lavender' | 'sky-blue' | 'soft-pink';
  delay?: string;
}

export const ActivityCard = ({ 
  title, 
  value, 
  unit, 
  icon: Icon, 
  progress = 0,
  color = 'coral',
  delay = '0s'
}: ActivityCardProps) => {
  const colorClasses = {
    coral: 'text-coral glow-coral',
    mint: 'text-mint glow-mint',
    lavender: 'text-lavender glow-lavender',
    'sky-blue': 'text-sky-blue',
    'soft-pink': 'text-soft-pink'
  };

  return (
    <div 
      className="glass-panel rounded-3xl p-6 slide-up hover:scale-105 transition-all duration-300"
      style={{ animationDelay: delay }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-2xl backdrop-blur-light border border-white/20 ${colorClasses[color]}`}>
          <Icon size={24} />
        </div>
        {progress > 0 && (
          <div className="text-right">
            <div className="text-glass-muted text-sm">{progress}%</div>
            <div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
              <div 
                className={`h-full bg-gradient-to-r transition-all duration-1000 delay-500`}
                style={{ 
                  width: `${progress}%`,
                  background: `hsl(var(--${color}))`
                }}
              />
            </div>
          </div>
        )}
      </div>
      
      <div className="space-y-1">
        <h3 className="text-glass-muted text-sm font-medium">{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-glass text-2xl font-bold">{value}</span>
          <span className="text-glass-muted text-sm">{unit}</span>
        </div>
      </div>
    </div>
  );
};