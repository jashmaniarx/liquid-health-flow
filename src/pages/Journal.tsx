import { ArrowLeft, Plus, Calendar, Smile, Cloud, Sun, CloudRain, Edit3, TrendingUp } from 'lucide-react';
import { BottomNavigation } from '@/components/BottomNavigation';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Journal = () => {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const moodOptions = [
    { emoji: '😊', label: 'Great', color: 'mint', value: 5 },
    { emoji: '🙂', label: 'Good', color: 'sky-blue', value: 4 },
    { emoji: '😐', label: 'Okay', color: 'lavender', value: 3 },
    { emoji: '🙁', label: 'Low', color: 'coral', value: 2 },
    { emoji: '😢', label: 'Sad', color: 'soft-pink', value: 1 }
  ];

  const journalEntries = [
    {
      date: 'Today',
      time: '2:30 PM',
      mood: '😊',
      title: 'Great workout session!',
      content: 'Completed a 5K run and felt amazing. Energy levels were high throughout.',
      tags: ['exercise', 'energy', 'accomplishment']
    },
    {
      date: 'Yesterday',
      time: '8:45 AM',
      mood: '😐',
      title: 'Feeling stressed about work',
      content: 'Had a challenging meeting but managed to stay calm. Need to work on better time management.',
      tags: ['work', 'stress', 'reflection']
    },
    {
      date: '2 days ago',
      time: '6:00 PM',
      mood: '🙂',
      title: 'Quality time with family',
      content: 'Enjoyed dinner with loved ones. These moments remind me what truly matters.',
      tags: ['family', 'gratitude', 'happiness']
    }
  ];

  const weeklyMoodData = [
    { day: 'Mon', mood: 4, weather: Sun },
    { day: 'Tue', mood: 3, weather: Cloud },
    { day: 'Wed', mood: 5, weather: Sun },
    { day: 'Thu', mood: 2, weather: CloudRain },
    { day: 'Fri', mood: 4, weather: Cloud },
    { day: 'Sat', mood: 5, weather: Sun },
    { day: 'Sun', mood: 4, weather: Sun }
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
                    <h1 className="text-glass text-2xl font-bold">Wellness Journal</h1>
                    <p className="text-glass-muted">Track your mental wellbeing</p>
                  </div>
                </div>
                <button className="p-3 rounded-xl backdrop-blur-light border border-white/20 text-mint hover:scale-110 transition-all duration-300">
                  <Plus size={20} />
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="px-6">
          <div className="max-w-md mx-auto space-y-6">
            {/* Quick Mood Check */}
            <div className="glass-panel rounded-3xl p-6 slide-up slide-up-delay-1">
              <h2 className="text-glass text-lg font-bold mb-4 flex items-center gap-3">
                <div className="p-2 rounded-xl backdrop-blur-light border border-white/20 text-lavender">
                  <Smile size={20} />
                </div>
                How are you feeling today?
              </h2>
              
              <div className="flex justify-between gap-2">
                {moodOptions.map((mood) => (
                  <button
                    key={mood.label}
                    onClick={() => setSelectedMood(mood.label)}
                    className={`glass-secondary rounded-2xl p-4 text-center hover:scale-110 transition-all duration-300 ${
                      selectedMood === mood.label ? `border-${mood.color} shadow-glow-${mood.color}` : ''
                    }`}
                  >
                    <div className="text-2xl mb-1">{mood.emoji}</div>
                    <div className="text-glass-muted text-xs">{mood.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Weekly Mood Trend */}
            <div className="glass-panel rounded-3xl p-6 slide-up slide-up-delay-2">
              <h2 className="text-glass text-lg font-bold mb-6 flex items-center gap-3">
                <div className="p-2 rounded-xl backdrop-blur-light border border-white/20 text-mint">
                  <TrendingUp size={20} />
                </div>
                Weekly Mood Trend
              </h2>
              
              <div className="flex justify-between items-end h-24 mb-4">
                {weeklyMoodData.map((day, index) => {
                  const WeatherIcon = day.weather;
                  return (
                    <div key={day.day} className="flex flex-col items-center gap-2">
                      <div 
                        className="w-6 bg-gradient-to-t from-lavender to-mint rounded-t-lg transition-all duration-700"
                        style={{ 
                          height: `${(day.mood / 5) * 60}px`,
                          animationDelay: `${index * 100 + 800}ms`
                        }}
                      />
                      <WeatherIcon size={14} className="text-glass-muted" />
                      <span className="text-glass-muted text-xs">{day.day}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recent Entries */}
            <div className="glass-panel rounded-3xl p-6 slide-up slide-up-delay-3">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-glass text-lg font-bold flex items-center gap-3">
                  <div className="p-2 rounded-xl backdrop-blur-light border border-white/20 text-coral">
                    <Edit3 size={20} />
                  </div>
                  Recent Entries
                </h2>
                <button className="text-glass-muted text-sm hover:text-glass transition-colors">
                  View All
                </button>
              </div>
              
              <div className="space-y-4">
                {journalEntries.map((entry, index) => (
                  <div key={index} className="glass-secondary rounded-2xl p-4 hover:scale-[1.02] transition-all duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{entry.mood}</span>
                        <div>
                          <h3 className="text-glass font-medium">{entry.title}</h3>
                          <div className="text-glass-muted text-xs">{entry.date} • {entry.time}</div>
                        </div>
                      </div>
                      <button className="p-1 rounded-lg text-glass-muted hover:text-glass transition-colors">
                        <Edit3 size={14} />
                      </button>
                    </div>
                    
                    <p className="text-glass-muted text-sm mb-3 line-clamp-2">{entry.content}</p>
                    
                    <div className="flex gap-2">
                      {entry.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 rounded-lg bg-white/5 text-glass-muted text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-panel rounded-3xl p-6 slide-up slide-up-delay-3">
              <h2 className="text-glass text-lg font-bold mb-4">Quick Actions</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <button className="glass-secondary rounded-2xl p-4 text-center hover:scale-105 transition-all duration-300">
                  <div className="p-3 rounded-xl backdrop-blur-light border border-white/20 text-sky-blue mx-auto mb-2 w-fit">
                    <Calendar size={20} />
                  </div>
                  <div className="text-glass text-sm font-medium">Daily Reflection</div>
                </button>
                
                <button className="glass-secondary rounded-2xl p-4 text-center hover:scale-105 transition-all duration-300">
                  <div className="p-3 rounded-xl backdrop-blur-light border border-white/20 text-mint mx-auto mb-2 w-fit">
                    <Smile size={20} />
                  </div>
                  <div className="text-glass text-sm font-medium">Gratitude Log</div>
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

export default Journal;