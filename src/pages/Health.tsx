import { ArrowLeft, Heart, Activity, Thermometer, Droplets, Brain, Eye } from 'lucide-react';
import { ProgressRing } from '@/components/ProgressRing';
import { ActivityCard } from '@/components/ActivityCard';
import { HeartRateChart } from '@/components/HeartRateChart';
import { BottomNavigation } from '@/components/BottomNavigation';
import { useNavigate } from 'react-router-dom';

const Health = () => {
  const navigate = useNavigate();

  const vitalSigns = {
    heartRate: { value: 72, unit: 'BPM', status: 'Normal', color: 'soft-pink' },
    bloodPressure: { value: '120/80', unit: 'mmHg', status: 'Optimal', color: 'coral' },
    temperature: { value: 98.6, unit: '°F', status: 'Normal', color: 'sky-blue' },
    oxygenSat: { value: 98, unit: '%', status: 'Excellent', color: 'mint' }
  };

  const healthMetrics = [
    { title: 'Blood Glucose', value: '95', unit: 'mg/dL', trend: '+2%', color: 'lavender' },
    { title: 'BMI', value: '22.5', unit: 'kg/m²', trend: '-0.1', color: 'coral' },
    { title: 'Body Fat', value: '18.2', unit: '%', trend: '-1.2%', color: 'mint' },
    { title: 'Muscle Mass', value: '45.8', unit: 'kg', trend: '+0.5%', color: 'sky-blue' }
  ];

  return (
    <div className="min-h-screen bg-gradient-primary relative overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-secondary opacity-50 animate-pulse" />
      
      <div className="relative z-10 pb-24">
        {/* Header */}
        <header className="pt-16 pb-8 px-6">
          <div className="max-w-md mx-auto">
            <div className="glass-panel rounded-3xl p-6 slide-up">
              <div className="flex items-center gap-4 mb-4">
                <button 
                  onClick={() => navigate('/')}
                  className="p-2 rounded-xl backdrop-blur-light border border-white/20 text-glass hover:text-lavender transition-colors"
                >
                  <ArrowLeft size={20} />
                </button>
                <div>
                  <h1 className="text-glass text-2xl font-bold">Health Overview</h1>
                  <p className="text-glass-muted">Comprehensive health monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="px-6">
          <div className="max-w-md mx-auto space-y-6">
            {/* Vital Signs */}
            <div className="glass-panel rounded-3xl p-6 slide-up slide-up-delay-1">
              <h2 className="text-glass text-xl font-bold mb-6 flex items-center gap-3">
                <div className="p-2 rounded-xl backdrop-blur-light border border-white/20 text-soft-pink">
                  <Heart size={20} />
                </div>
                Vital Signs
              </h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-secondary rounded-2xl p-4 text-center">
                  <div className="text-soft-pink text-2xl font-bold">{vitalSigns.heartRate.value}</div>
                  <div className="text-glass-muted text-sm">{vitalSigns.heartRate.unit}</div>
                  <div className="text-mint text-xs mt-1">{vitalSigns.heartRate.status}</div>
                </div>
                
                <div className="glass-secondary rounded-2xl p-4 text-center">
                  <div className="text-coral text-2xl font-bold">{vitalSigns.bloodPressure.value}</div>
                  <div className="text-glass-muted text-sm">{vitalSigns.bloodPressure.unit}</div>
                  <div className="text-mint text-xs mt-1">{vitalSigns.bloodPressure.status}</div>
                </div>
                
                <div className="glass-secondary rounded-2xl p-4 text-center">
                  <div className="text-sky-blue text-2xl font-bold">{vitalSigns.temperature.value}</div>
                  <div className="text-glass-muted text-sm">{vitalSigns.temperature.unit}</div>
                  <div className="text-mint text-xs mt-1">{vitalSigns.temperature.status}</div>
                </div>
                
                <div className="glass-secondary rounded-2xl p-4 text-center">
                  <div className="text-mint text-2xl font-bold">{vitalSigns.oxygenSat.value}</div>
                  <div className="text-glass-muted text-sm">{vitalSigns.oxygenSat.unit}</div>
                  <div className="text-mint text-xs mt-1">{vitalSigns.oxygenSat.status}</div>
                </div>
              </div>
            </div>

            {/* Heart Rate Chart */}
            <HeartRateChart />

            {/* Health Metrics */}
            <div className="glass-panel rounded-3xl p-6 slide-up slide-up-delay-2">
              <h2 className="text-glass text-xl font-bold mb-6 flex items-center gap-3">
                <div className="p-2 rounded-xl backdrop-blur-light border border-white/20 text-lavender">
                  <Activity size={20} />
                </div>
                Health Metrics
              </h2>
              
              <div className="grid grid-cols-2 gap-4">
                {healthMetrics.map((metric, index) => (
                  <div key={metric.title} className="glass-secondary rounded-2xl p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="text-glass-muted text-sm">{metric.title}</div>
                      <div className={`text-xs ${metric.trend.startsWith('+') ? 'text-mint' : metric.trend.startsWith('-') ? 'text-coral' : 'text-glass-muted'}`}>
                        {metric.trend}
                      </div>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-${metric.color} text-xl font-bold`}>{metric.value}</span>
                      <span className="text-glass-muted text-sm">{metric.unit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-panel rounded-3xl p-6 slide-up slide-up-delay-3">
              <h2 className="text-glass text-xl font-bold mb-6">Quick Actions</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <button className="glass-secondary rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="p-3 rounded-xl backdrop-blur-light border border-white/20 text-coral mx-auto mb-3 w-fit">
                    <Thermometer size={24} />
                  </div>
                  <div className="text-glass text-sm font-medium">Log Temperature</div>
                </button>
                
                <button className="glass-secondary rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="p-3 rounded-xl backdrop-blur-light border border-white/20 text-mint mx-auto mb-3 w-fit">
                    <Droplets size={24} />
                  </div>
                  <div className="text-glass text-sm font-medium">Blood Test</div>
                </button>
                
                <button className="glass-secondary rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="p-3 rounded-xl backdrop-blur-light border border-white/20 text-lavender mx-auto mb-3 w-fit">
                    <Brain size={24} />
                  </div>
                  <div className="text-glass text-sm font-medium">Mental Health</div>
                </button>
                
                <button className="glass-secondary rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="p-3 rounded-xl backdrop-blur-light border border-white/20 text-sky-blue mx-auto mb-3 w-fit">
                    <Eye size={24} />
                  </div>
                  <div className="text-glass text-sm font-medium">Vision Test</div>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Health;