import { useState } from 'react';

const LandCalculator = () => {
  const [measurements, setMeasurements] = useState({
    north: '',
    south: '',
    east: '',
    west: ''
  });
  
  const [results, setResults] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setMeasurements(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const calculateArea = () => {
    const { north, south, east, west } = measurements;
    
    if (!north || !south || !east || !west) {
      alert('Please fill in all measurements');
      return;
    }

    const northValue = parseFloat(north);
    const southValue = parseFloat(south);
    const eastValue = parseFloat(east);
    const westValue = parseFloat(west);

    const avgNorthSouth = (northValue + southValue) / 2;
    const avgEastWest = (eastValue + westValue) / 2;
    const totalSquareFeet = avgNorthSouth * avgEastWest;
    const shotok = totalSquareFeet / 435.6;

    setResults({
      totalSquareFeet: totalSquareFeet.toFixed(2),
      shotok: shotok.toFixed(2)
    });
  };

  const resetForm = () => {
    setMeasurements({
      north: '',
      south: '',
      east: '',
      west: ''
    });
    setResults(null);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-950 via-purple-900 to-blue-950 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-125 h-125 bg-linear-to-br from-blue-400 to-cyan-500 rounded-full filter blur-[100px] animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-150 h-150 bg-linear-to-br from-green-400 to-emerald-500 rounded-full filter blur-[120px] animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 w-100 h-100 bg-linear-to-br from-purple-400 to-pink-500 rounded-full filter blur-[100px] animate-float-slow"></div>
          <div className="absolute bottom-1/4 left-1/3 w-75 h-75 bg-linear-to-br from-yellow-400 to-orange-500 rounded-full filter blur-[80px] animate-pulse"></div>
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[50px_50px]"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white/5 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl shadow-blue-500/50 transform hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <div>
                <h1 className="text-base sm:text-xl md:text-2xl font-black text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-blue-300 to-purple-300 leading-tight">
                  Land Area Calculator
                </h1>
                <p className="text-[10px] sm:text-xs md:text-sm text-blue-200 font-medium">Professional Land Calculator

</p>
              </div>
            </div>
            
            {/* Desktop - Right side text */}
            <div className="hidden md:flex items-center space-x-4">
              <span className="text-sm font-semibold text-transparent bg-clip-text bg-linear-to-r from-emerald-300 to-cyan-300">ভূমি ব্যবস্থাপনা সিস্টেম</span>
            </div>

            {/* Mobile - Hamburger Menu Button */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 sm:p-2.5 rounded-xl bg-linear-to-br from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 border border-white/10 transition-all duration-300 shadow-lg"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {sidebarOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-20 left-0 h-[calc(100vh-5rem)] w-80 bg-linear-to-br from-indigo-950/98 via-purple-900/98 to-blue-950/98 backdrop-blur-2xl border-r border-white/10 z-40 transform transition-transform duration-500 ease-out md:hidden overflow-y-auto shadow-2xl ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 space-y-4">
          <div className="bg-linear-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-2xl hover:border-white/20 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-linear-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-300 to-cyan-300">About</h3>
            </div>
            <p className="text-sm text-blue-200/90 leading-relaxed">
              This professional land area calculator uses the Average Method, a standard approach in South Asian land measurement systems for calculating irregular plot areas.
            </p>
          </div>

          <div className="bg-linear-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-2xl hover:border-white/20 transition-all duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-linear-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/30">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-transparent bg-clip-text bg-linear-to-r from-green-300 to-emerald-300">Formula</h3>
            </div>
            <div className="space-y-3 text-sm text-green-200/90">
              <div className="font-mono bg-black/30 p-4 rounded-xl text-center border border-white/10 text-base font-semibold">
                ((N + S) / 2) × ((E + W) / 2)
              </div>
              <p className="text-xs text-center bg-linear-to-r from-yellow-200 to-orange-200 text-gray-900 px-3 py-2 rounded-lg font-semibold">
                Conversion: 1 Shotok = 435.6 sq ft
              </p>
            </div>
          </div>

          <div className="bg-linear-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-2xl hover:border-white/20 transition-all duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-linear-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-300 to-pink-300">Features</h3>
            </div>
            <ul className="space-y-3 text-sm text-purple-200/90">
              <li className="flex items-center space-x-3 bg-white/5 px-3 py-2 rounded-lg">
                <span className="text-green-400 text-xl">✓</span>
                <span className="font-medium">Accurate calculations</span>
              </li>
              <li className="flex items-center space-x-3 bg-white/5 px-3 py-2 rounded-lg">
                <span className="text-green-400 text-xl">✓</span>
                <span className="font-medium">Bilingual support</span>
              </li>
              <li className="flex items-center space-x-3 bg-white/5 px-3 py-2 rounded-lg">
                <span className="text-green-400 text-xl">✓</span>
                <span className="font-medium">Real-time validation</span>
              </li>
              <li className="flex items-center space-x-3 bg-white/5 px-3 py-2 rounded-lg">
                <span className="text-green-400 text-xl">✓</span>
                <span className="font-medium">Mobile responsive</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative min-h-[calc(100vh-5rem)] p-4 sm:p-6 lg:p-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Desktop Left Sidebar - Hidden on mobile */}
            <div className="hidden md:block lg:col-span-1 space-y-4">
              <div className="bg-linear-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl hover:shadow-blue-500/20 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-linear-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-300 to-cyan-300">About</h3>
                </div>
                <p className="text-sm text-blue-200/90 leading-relaxed">
                  This professional land area calculator uses the Average Method, a standard approach in South Asian land measurement systems for calculating irregular plot areas.
                </p>
              </div>

              <div className="bg-linear-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl hover:shadow-green-500/20 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-linear-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/30">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-transparent bg-clip-text bg-linear-to-r from-green-300 to-emerald-300">Formula</h3>
                </div>
                <div className="space-y-3 text-sm text-green-200/90">
                  <div className="font-mono bg-black/30 p-4 rounded-xl text-center border border-white/10 text-base font-semibold">
                    ((N + S) / 2) × ((E + W) / 2)
                  </div>
                  <p className="text-xs text-center bg-linear-to-r from-yellow-200 to-orange-200 text-gray-900 px-3 py-2 rounded-lg font-semibold">
                    Conversion: 1 Shotok = 435.6 sq ft
                  </p>
                </div>
              </div>

              <div className="bg-linear-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl hover:shadow-purple-500/20 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-linear-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-300 to-pink-300">Features</h3>
                </div>
                <ul className="space-y-3 text-sm text-purple-200/90">
                  <li className="flex items-center space-x-3 bg-white/5 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="font-medium">Accurate calculations</span>
                  </li>
                  <li className="flex items-center space-x-3 bg-white/5 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="font-medium">Bilingual support</span>
                  </li>
                  <li className="flex items-center space-x-3 bg-white/5 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="font-medium">Real-time validation</span>
                  </li>
                  <li className="flex items-center space-x-3 bg-white/5 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="font-medium">Mobile responsive</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Main Calculator Card */}
            <div className="lg:col-span-3">
              <div className="bg-white/98 backdrop-blur-sm rounded-3xl shadow-2xl shadow-blue-900/50 overflow-hidden border border-white/20 hover:shadow-blue-500/30 transition-all duration-300">
                {/* Card Header */}
                <div className="bg-linear-to-r from-cyan-500 via-blue-600 to-purple-600 px-3 sm:px-8 py-6 sm:py-10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%)] bg-size-[250%_250%] animate-shimmer"></div>
                  <div className="relative z-10 flex items-center justify-center space-x-2 sm:space-x-3">
                    <svg className="w-7 h-7 sm:w-10 sm:h-10 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h2 className="text-xl sm:text-3xl md:text-4xl font-black text-white text-center drop-shadow-lg leading-tight">
                        Land Area Calculator
                      </h2>
                      <p className="text-blue-50 text-center text-sm sm:text-base font-medium">
                        Professional Land Calculator
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                </div>

                <div className="p-3 sm:p-8 bg-linear-to-br from-blue-50 via-white to-purple-50">
                  {/* Compass Layout */}
                  <div className="relative grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 mb-8">
                    {/* North */}
                    <div className="col-start-2">
                      <label className="block text-xs font-black text-gray-700 mb-2 text-center uppercase tracking-wider">
                        <span className="hidden sm:inline">North / </span>উত্তর
                      </label>
                      <div className="relative group">
                        <input
                          type="text"
                          name="north"
                          value={measurements.north}
                          onChange={handleInputChange}
                          placeholder="0.00"
                          className="w-full px-2 sm:px-4 py-2 sm:py-4 text-sm sm:text-lg border-3 border-blue-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/50 focus:border-blue-600 text-center font-bold transition-all shadow-lg hover:shadow-xl group-hover:border-blue-400 bg-white"
                        />
                        <span className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">ft</span>
                      </div>
                    </div>

                    {/* West */}
                    <div className="col-start-1 row-start-2 flex flex-col justify-center">
                      <label className="block text-xs font-black text-gray-700 mb-2 text-center uppercase tracking-wider">
                        <span className="hidden sm:inline">West / </span>পশ্চিম
                      </label>
                      <div className="relative group">
                        <input
                          type="text"
                          name="west"
                          value={measurements.west}
                          onChange={handleInputChange}
                          placeholder="0.00"
                          className="w-full px-2 sm:px-4 py-2 sm:py-4 text-sm sm:text-lg border-3 border-green-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-500/50 focus:border-green-600 text-center font-bold transition-all shadow-lg hover:shadow-xl group-hover:border-green-400 bg-white"
                        />
                        <span className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">ft</span>
                      </div>
                    </div>

                    {/* Center Compass */}
                    <div className="col-start-2 row-start-2 flex items-center justify-center">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-linear-to-br from-cyan-400 to-purple-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                        <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-linear-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/50 transform group-hover:scale-105 transition-all duration-300">
                          <svg className="w-8 h-8 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                          </svg>
                        </div>
                        {/* Enhanced Compass indicators */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-1 sm:w-1.5 h-5 sm:h-6 bg-linear-to-b from-blue-500 to-transparent rounded-full"></div>
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 sm:w-1.5 h-5 sm:h-6 bg-linear-to-t from-green-500 to-transparent rounded-full"></div>
                        <div className="absolute top-1/2 -translate-y-1/2 -left-3 w-5 sm:w-6 h-1 sm:h-1.5 bg-linear-to-r from-green-500 to-transparent rounded-full"></div>
                        <div className="absolute top-1/2 -translate-y-1/2 -right-3 w-5 sm:w-6 h-1 sm:h-1.5 bg-linear-to-l from-purple-500 to-transparent rounded-full"></div>
                      </div>
                    </div>

                    {/* East */}
                    <div className="col-start-3 row-start-2 flex flex-col justify-center">
                      <label className="block text-xs font-black text-gray-700 mb-2 text-center uppercase tracking-wider">
                        <span className="hidden sm:inline">East / </span>পূর্ব
                      </label>
                      <div className="relative group">
                        <input
                          type="text"
                          name="east"
                          value={measurements.east}
                          onChange={handleInputChange}
                          placeholder="0.00"
                          className="w-full px-2 sm:px-4 py-2 sm:py-4 text-sm sm:text-lg border-3 border-purple-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-500/50 focus:border-purple-600 text-center font-bold transition-all shadow-lg hover:shadow-xl group-hover:border-purple-400 bg-white"
                        />
                        <span className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-purple-600 bg-purple-100 px-2 py-1 rounded">ft</span>
                      </div>
                    </div>

                    {/* South */}
                    <div className="col-start-2 row-start-3">
                      <label className="block text-xs font-black text-gray-700 mb-2 text-center uppercase tracking-wider">
                        <span className="hidden sm:inline">South / </span>দক্ষিণ
                      </label>
                      <div className="relative group">
                        <input
                          type="text"
                          name="south"
                          value={measurements.south}
                          onChange={handleInputChange}
                          placeholder="0.00"
                          className="w-full px-2 sm:px-4 py-2 sm:py-4 text-sm sm:text-lg border-3 border-orange-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-500/50 focus:border-orange-600 text-center font-bold transition-all shadow-lg hover:shadow-xl group-hover:border-orange-400 bg-white"
                        />
                        <span className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded">ft</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                    <button
                      onClick={calculateArea}
                      className="relative bg-linear-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 text-white font-black py-4 sm:py-5 px-4 sm:px-8 rounded-2xl shadow-2xl shadow-blue-500/50 transform transition-all duration-300 hover:scale-105 hover:shadow-blue-600/60 focus:outline-none focus:ring-4 focus:ring-blue-400 active:scale-95 flex items-center justify-center space-x-2 overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm sm:text-base relative z-10">Calculate</span>
                    </button>
                    <button
                      onClick={resetForm}
                      className="relative bg-linear-to-r from-gray-700 via-gray-800 to-gray-900 hover:from-gray-800 hover:via-gray-900 hover:to-black text-white font-black py-4 sm:py-5 px-4 sm:px-8 rounded-2xl shadow-2xl shadow-gray-500/50 transform transition-all duration-300 hover:scale-105 hover:shadow-gray-600/60 focus:outline-none focus:ring-4 focus:ring-gray-400 active:scale-95 flex items-center justify-center space-x-2 overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      <span className="text-sm sm:text-base relative z-10">Reset</span>
                    </button>
                  </div>

                  {/* Results Section */}
                  {results && (
                    <div className="bg-linear-to-br from-blue-100 via-purple-50 to-green-100 rounded-2xl p-4 sm:p-8 border-4 border-blue-300 shadow-2xl animate-slideInBounce relative overflow-hidden">
                      <div className="absolute inset-0 bg-linear-to-br from-blue-200/20 via-transparent to-green-200/20"></div>
                      <div className="flex items-center justify-center mb-6 relative z-10">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mr-4 shadow-lg shadow-green-500/50 animate-bounce-slow">
                          <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-green-600">
                          Results / ফলাফল
                        </h3>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 relative z-10">
                        <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-xl border-l-8 border-blue-600 hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                          <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-transparent opacity-50"></div>
                          <div className="flex items-center justify-between mb-3 relative z-10">
                            <p className="text-xs sm:text-sm font-black text-gray-700 uppercase tracking-wider">Total Area</p>
                            <div className="w-10 h-10 bg-linear-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                              </svg>
                            </div>
                          </div>
                          <p className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-800 mb-2 relative z-10">
                            {results.totalSquareFeet}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-600 font-bold relative z-10">Square Feet / বর্গফুট</p>
                        </div>

                        <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-xl border-l-8 border-green-600 hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                          <div className="absolute inset-0 bg-linear-to-br from-green-50 to-transparent opacity-50"></div>
                          <div className="flex items-center justify-between mb-3 relative z-10">
                            <p className="text-xs sm:text-sm font-black text-gray-700 uppercase tracking-wider">Final Area</p>
                            <div className="w-10 h-10 bg-linear-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                          </div>
                          <p className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-green-600 to-emerald-800 mb-2 relative z-10">
                            {results.shotok}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-600 font-bold relative z-10">Shotok / শতক</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInBounce {
          0% {
            opacity: 0;
            transform: translateY(-30px) scale(0.9);
          }
          50% {
            transform: translateY(10px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(30px, -30px) rotate(120deg);
          }
          66% {
            transform: translate(-20px, 20px) rotate(240deg);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(-40px, 30px) rotate(-120deg);
          }
          66% {
            transform: translate(30px, -20px) rotate(-240deg);
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-20px, -20px) scale(1.1);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -250% 0;
          }
          100% {
            background-position: 250% 0;
          }
        }
        
        .animate-slideInBounce {
          animation: slideInBounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 30s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LandCalculator;
