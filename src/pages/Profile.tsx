import { ArrowLeft, User, Settings, Shield, Bell, Moon, Smartphone, Award, Target, Calendar, Edit } from 'lucide-react';
import { BottomNavigation } from '@/components/BottomNavigation';
import { ProgressRing } from '@/components/ProgressRing';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const userProfile = {
    name: 'Alex Johnson',
    age: 28,
    height: '5\'8"',
    weight: '155 lbs',
    bloodType: 'O+',
    avatar: '👨‍💻'
  };

  const achievements = [
    { icon: '🏃‍♂️', title: '10K Steps', description: '7 days in a row', color: 'coral' },
    { icon: '💧', title: 'Hydration Hero', description: 'Met water goals 30 days', color: 'mint' },
    { icon: '😴', title: 'Sleep Master', description: 'Consistent sleep schedule', color: 'lavender' },
    { icon: '🎯', title: 'Goal Crusher', description: 'Completed 5 fitness goals', color: 'sky-blue' }
  ];

  const healthGoals = [
    { title: 'Lose 10 lbs', progress: 60, target: 'March 2024', color: 'coral' },
    { title: 'Run 5K', progress: 80, target: 'February 2024', color: 'mint' },
    { title: 'Meditate Daily', progress: 45, target: 'Ongoing', color: 'lavender' }
  ];

  const settingsItems = [
    { icon: Bell, title: 'Notifications', subtitle: 'Manage your alerts', action: true },
    { icon: Shield, title: 'Privacy & Security', subtitle: 'Control your data', action: true },
    { icon: Moon, title: 'Sleep Mode', subtitle: 'Do not disturb', action: false },
    { icon: Smartphone, title: 'Connected Devices', subtitle: '2 devices connected', action: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-primary relative overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-secondary opacity-50 animate-pulse" />
      
      <div className="relative z-10 pb-24">
        {/* Header */}
        <header className="pt-16 pb-8 px-6">
          <div className="max-w-md mx-auto">
            <div className="glass-panel rounded-3xl p-6 slide-up">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => navigate('/')}
                    className="p-2 rounded-xl backdrop-blur-light border border-white/20 text-glass hover:text-lavender transition-colors"
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <div>
                    <h1 className="text-glass text-2xl font-bold">Profile</h1>
                    <p className="text-glass-muted">Manage your health profile</p>
                  </div>
                </div>
                <button className="p-3 rounded-xl backdrop-blur-light border border-white/20 text-coral hover:scale-110 transition-all duration-300">
                  <Edit size={20} />
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="px-6">
          <div className="max-w-md mx-auto space-y-6">
            {/* User Profile Card */}
            <div className="glass-panel rounded-3xl p-6 slide-up slide-up-delay-1">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-lavender to-mint rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  {userProfile.avatar}
                </div>
                <h2 className="text-glass text-xl font-bold">{userProfile.name}</h2>
                <p className="text-glass-muted text-sm">Health Enthusiast</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-secondary rounded-2xl p-4 text-center">
                  <div className="text-glass text-lg font-bold">{userProfile.age}</div>
                  <div className="text-glass-muted text-sm">Years Old</div>
                </div>
                <div className="glass-secondary rounded-2xl p-4 text-center">
                  <div className="text-glass text-lg font-bold">{userProfile.height}</div>
                  <div className="text-glass-muted text-sm">Height</div>
                </div>
                <div className="glass-secondary rounded-2xl p-4 text-center">
                  <div className="text-glass text-lg font-bold">{userProfile.weight}</div>
                  <div className="text-glass-muted text-sm">Weight</div>
                </div>
                <div className="glass-secondary rounded-2xl p-4 text-center">
                  <div className="text-glass text-lg font-bold">{userProfile.bloodType}</div>
                  <div className="text-glass-muted text-sm">Blood Type</div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="glass-panel rounded-3xl p-6 slide-up slide-up-delay-2">
              <h2 className="text-glass text-lg font-bold mb-6 flex items-center gap-3">
                <div className="p-2 rounded-xl backdrop-blur-light border border-white/20 text-coral">
                  <Award size={20} />
                </div>
                Achievements
              </h2>
              
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={achievement.title} className="glass-secondary rounded-2xl p-4 text-center hover:scale-105 transition-all duration-300">
                    <div className="text-2xl mb-2">{achievement.icon}</div>
                    <div className="text-glass text-sm font-medium mb-1">{achievement.title}</div>
                    <div className="text-glass-muted text-xs">{achievement.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Health Goals */}
            <div className="glass-panel rounded-3xl p-6 slide-up slide-up-delay-2">
              <h2 className="text-glass text-lg font-bold mb-6 flex items-center gap-3">
                <div className="p-2 rounded-xl backdrop-blur-light border border-white/20 text-mint">
                  <Target size={20} />
                </div>
                Health Goals
              </h2>
              
              <div className="space-y-4">
                {healthGoals.map((goal, index) => (
                  <div key={goal.title} className="glass-secondary rounded-2xl p-4">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <h3 className="text-glass font-medium">{goal.title}</h3>
                        <div className="text-glass-muted text-xs flex items-center gap-1">
                          <Calendar size={12} />
                          {goal.target}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-${goal.color} font-bold`}>{goal.progress}%</div>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-1000`}
                        style={{ 
                          width: `${goal.progress}%`,
                          backgroundColor: `hsl(var(--${goal.color}))`,
                          animationDelay: `${index * 200 + 1000}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Settings */}
            <div className="glass-panel rounded-3xl p-6 slide-up slide-up-delay-3">
              <h2 className="text-glass text-lg font-bold mb-6 flex items-center gap-3">
                <div className="p-2 rounded-xl backdrop-blur-light border border-white/20 text-sky-blue">
                  <Settings size={20} />
                </div>
                Settings
              </h2>
              
              <div className="space-y-3">
                {settingsItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <button 
                      key={item.title}
                      className="w-full glass-secondary rounded-2xl p-4 flex items-center justify-between hover:scale-[1.02] transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl backdrop-blur-light border border-white/20 text-glass-muted">
                          <Icon size={18} />
                        </div>
                        <div className="text-left">
                          <div className="text-glass font-medium">{item.title}</div>
                          <div className="text-glass-muted text-sm">{item.subtitle}</div>
                        </div>
                      </div>
                      {item.action && (
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-mint" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Profile;