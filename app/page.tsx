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
        <div className="w-10 h-10 bg-[#1a5cff] rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-lg">C</span>
        </div>
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
                      <div className="h-full flex flex-col items-center justify-center p-8 space-y-6">
                        <h3 className="text-xl font-bold text-gray-900">Lag en gruppe</h3>
                        <div className="grid grid-cols-4 gap-3">
                          {['⚽', '🏀', '🎓', '💼', '🎸', '🏃', '🍕', '🎮'].map((emoji, i) => (
                            <div key={i} className={`w-12 h-12 flex items-center justify-center rounded-xl text-2xl ${i === 0 ? 'bg-blue-100 ring-2 ring-blue-500' : 'bg-gray-100'}`}>
                              {emoji}
                            </div>
                          ))}
                        </div>
                        <input
                          type="text"
                          placeholder="Tippeligaen 2026"
                          readOnly
                          className="w-full px-4 py-3 bg-gray-100 rounded-xl text-center font-semibold text-gray-900"
                        />
                      </div>
                    </div>

                    {/* Screen 2: Share Code */}
                    <div className={`absolute inset-0 transition-all duration-700 ${currentScreen === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                      <div className="h-full flex flex-col items-center justify-center p-8 space-y-6">
                        <h3 className="text-xl font-bold text-gray-900">Del invitasjon</h3>
                        <div className="w-32 h-32 bg-gray-900 rounded-2xl flex items-center justify-center">
                          <div className="w-28 h-28 bg-white rounded-xl grid grid-cols-4 gap-1 p-2">
                            {Array.from({ length: 16 }).map((_, i) => (
                              <div key={i} className="bg-gray-900 rounded-sm" />
                            ))}
                          </div>
                        </div>
                        <div className="bg-gray-100 px-6 py-4 rounded-2xl">
                          <p className="text-3xl font-bold tracking-wider text-gray-900">AB3X9K</p>
                        </div>
                        <button className="bg-[#1a5cff] text-white px-6 py-2 rounded-lg text-sm font-semibold">
                          Kopier kode
                        </button>
                      </div>
                    </div>

                    {/* Screen 3: Joining */}
                    <div className={`absolute inset-0 transition-all duration-700 ${currentScreen === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                      <div className="h-full flex flex-col items-center justify-center p-8 space-y-6">
                        <h3 className="text-xl font-bold text-gray-900">Nye medlemmer</h3>
                        <div className="flex gap-4">
                          {[
                            { name: 'Ole', delay: 0 },
                            { name: 'Kari', delay: 200 },
                            { name: 'Per', delay: 400 }
                          ].map((person, i) => (
                            <div key={i} className="flex flex-col items-center gap-2 animate-bounce-in" style={{ animationDelay: `${person.delay}ms` }}>
                              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                {person.name[0]}
                              </div>
                              <span className="text-xs font-semibold text-gray-700">{person.name}</span>
                            </div>
                          ))}
                        </div>
                        <p className="text-sm text-gray-600">3 personer ble med</p>
                      </div>
                    </div>

                    {/* Screen 4: Group List */}
                    <div className={`absolute inset-0 transition-all duration-700 ${currentScreen === 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                      <div className="h-full p-6 space-y-4 overflow-hidden">
                        <h3 className="text-lg font-bold text-gray-900">Tippeligaen 2026</h3>
                        <div className="space-y-2">
                          {[
                            { name: 'Ole Hansen', role: 'Trener', phone: true },
                            { name: 'Kari Nordmann', role: 'Lagkaptein', phone: true },
                            { name: 'Per Olsen', role: 'Spiller', phone: false },
                            { name: 'Lisa Berg', role: 'Spiller', phone: true }
                          ].map((person, i) => (
                            <div key={i} className="bg-gray-50 p-3 rounded-xl flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                  {person.name[0]}
                                </div>
                                <div>
                                  <p className="text-sm font-semibold text-gray-900">{person.name}</p>
                                  <p className="text-xs text-gray-500">{person.role}</p>
                                </div>
                              </div>
                              {person.phone && (
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                  </svg>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Screen 5: Clean Exit */}
                    <div className={`absolute inset-0 transition-all duration-700 ${currentScreen === 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                      <div className="h-full p-6 space-y-4 overflow-hidden">
                        <h3 className="text-lg font-bold text-gray-900">Tippeligaen 2026</h3>
                        <div className="space-y-2">
                          {[
                            { name: 'Ole Hansen', role: 'Trener', phone: true, active: true },
                            { name: 'Kari Nordmann', role: 'Lagkaptein', phone: true, active: true },
                            { name: 'Per Olsen', role: 'Spiller', phone: false, active: false }, // This one is leaving
                            { name: 'Lisa Berg', role: 'Spiller', phone: true, active: true }
                          ].map((person, i) => (
                            <div 
                              key={i} 
                              className={`bg-gray-50 p-3 rounded-xl flex items-center justify-between transition-all duration-1000 ${
                                !person.active ? 'opacity-30 blur-sm scale-95' : ''
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                  {person.name[0]}
                                </div>
                                <div>
                                  <p className="text-sm font-semibold text-gray-900">{person.name}</p>
                                  <p className="text-xs text-gray-500">{person.active ? person.role : 'Forlatt gruppe'}</p>
                                </div>
                              </div>
                              {person.phone && person.active && (
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                  </svg>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                        <p className="text-xs text-center text-gray-500 pt-2">Kontaktinfo forsvinner når du forlater gruppen</p>
                      </div>
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