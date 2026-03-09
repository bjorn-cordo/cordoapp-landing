"use client";

import { useState, useEffect } from "react";

export default function ComingSoon() {
  const [currentScreen, setCurrentScreen] = useState(0);

  // Auto-cycle through screens every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 overflow-x-hidden relative">
      {/* Animated gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/30 via-purple-400/30 to-indigo-400/30 rounded-full blur-3xl animate-pulse" />
      
      {/* Logo top left */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-sm px-6 py-4 flex items-center gap-2">
        <img
          src="/cordo-icon.png"
          alt="Cordo"
          className="w-10 h-10 rounded-xl shadow-lg"
        />
        <span className="text-2xl font-bold text-gray-900">Cordo</span>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Text content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-block">
              <span className="bg-blue-100 text-[#1a5cff] px-4 py-2 rounded-full text-sm font-semibold">
                🚀 Kommer snart
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Dine kontakter.<br />
              <span className="text-[#1a5cff]">Dine regler.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
              Hold kontaktlisten på telefonen <strong className="text-gray-900">privat</strong> – Del
              telefonnummer og kontaktinfo i <strong className="text-gray-900">grupper</strong>. Når du
              forlater gruppen, <strong className="text-[#1a5cff]">forsvinner</strong> din kontaktinfo
              fra de andre medlemmene i gruppen.
            </p>

            {/* Features list */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 text-xs sm:text-xs">Clean exit – kontaktinfo forsvinner når du forlater gruppen</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 text-xs sm:text-xs">GDPR-trygt - Bygget på EU-standarder</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 text-xs sm:text-xs">Én app, ulike profiler per gruppe</span>
              </div>
            </div>
          </div>

          {/* Right side - Animated phone mockup */}
          <div className="relative flex items-center justify-center">
            {/* Phone frame */}
            <div className="relative w-[280px] sm:w-[320px] lg:w-[360px]">
              {/* Phone shadow */}
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-gray-900/40 rounded-[3rem] blur-2xl translate-y-8" />
              
              {/* Phone device */}
              <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                {/* Screen */}
                <div className="bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19.5] relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl z-10" />
                  
                  {/* Screen content - Placeholder screens */}
                  <div className="relative w-full h-full bg-gradient-to-b from-gray-50 to-white">
                    
                    {/* Screen 1: Create Group */}
                    <div className={`absolute inset-0 transition-all duration-700 ${currentScreen === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                      <img
                        src="/screens/screen-1-create-group.png"
                        alt="Create group screen"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Screen 2: Share Code */}
                    <div className={`absolute inset-0 transition-all duration-700 ${currentScreen === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                      <img
                        src="/screens/screen-2-share-code.png"
                        alt="Share code screen"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Screen 3: Joining */}
                    <div className={`absolute inset-0 transition-all duration-700 ${currentScreen === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                      <img
                        src="/screens/screen-3-joining.png"
                        alt="Joining screen"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Screen 4: Group List */}
                    <div className={`absolute inset-0 transition-all duration-700 ${currentScreen === 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                      <img
                        src="/screens/screen-4-group-list.png"
                        alt="Group list screen"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Screen 5: Clean Exit */}
                    <div className={`absolute inset-0 transition-all duration-700 ${currentScreen === 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                      <img
                        src="/screens/screen-5-clean-exit.png"
                        alt="Clean exit screen"
                        className="w-full h-full object-cover"
                      />
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Screen indicator dots */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <button
                  key={i}
                  onClick={() => setCurrentScreen(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentScreen === i ? 'bg-[#1a5cff] w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Screen ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 pb-8 text-center">
        <p className="text-sm text-gray-500">© 2026 Cordo.</p>
        <p className="text-xs text-gray-500">Med fokus på sikkerhet og personvern.</p>
        <p className="text-xs text-gray-400">Contact: bjorn@cordoapp.com</p>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }

        @keyframes bounce-in {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}