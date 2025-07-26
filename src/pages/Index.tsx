import { ActivitySummary } from '@/components/ActivitySummary';
import { HeartRateChart } from '@/components/HeartRateChart';
import { SleepCard } from '@/components/SleepCard';
import { HydrationTracker } from '@/components/HydrationTracker';
import { BottomNavigation } from '@/components/BottomNavigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-primary relative overflow-x-hidden">
      {/* Background animated gradient */}
      <div className="fixed inset-0 bg-gradient-secondary opacity-50 animate-pulse" />
      
      {/* Main content */}
      <div className="relative z-10 pb-24">
        {/* Header */}
        <header className="pt-16 pb-8 px-6">
          <div className="max-w-md mx-auto">
            <div className="glass-panel rounded-3xl p-6 text-center slide-up">
              <h1 className="text-glass text-2xl font-bold mb-2">Good Morning Jash Maniar!</h1>
              <p className="text-glass-muted">Ready to crush your health goals today?</p>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="px-6">
          <div className="max-w-md mx-auto space-y-6">
            {/* Activity Summary */}
            <ActivitySummary />
            
            {/* Health metrics grid */}
            <div className="grid grid-cols-1 gap-6">
              <HeartRateChart />
              <SleepCard />
              <HydrationTracker />
            </div>
          </div>
        </main>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default Index;
