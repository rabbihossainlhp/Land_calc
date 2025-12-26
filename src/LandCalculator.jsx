import { useState, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// ============ PAGE COMPONENTS ============

// Home/Landing Page Component
const HomePage = ({ navigateToPage }) => (
  <div className="relative z-10 min-h-screen flex items-center justify-center px-3 sm:px-4">
    <div className="max-w-6xl mx-auto text-center space-y-6 sm:space-y-10 py-8 sm:py-16">
      {/* Hero Section */}
      <div className="space-y-3 sm:space-y-5 animate-slideInBounce">
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-linear-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/50 transform hover:scale-110 transition-all duration-300 animate-float">
            <svg className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-blue-300 to-purple-300 leading-tight drop-shadow-2xl px-2">
          Land Area Calculator
        </h1>

        <p className="text-xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-emerald-300 to-cyan-300">
          ভূমি ক্ষেত্রফল ক্যালকুলেটর
        </p>

        <p className="text-sm sm:text-lg md:text-xl text-blue-200/90 max-w-3xl mx-auto leading-relaxed font-medium px-2">
          Professional land area calculation tool supporting 6 different shapes with accurate formulas and instant results
        </p>

        <p className="text-xs sm:text-base md:text-lg text-emerald-300/80 max-w-2xl mx-auto font-medium px-2">
          পেশাদার ভূমি পরিমাপ সিস্টেম - ৬ ধরনের আকৃতি সমর্থন সহ সঠিক হিসাব
        </p>
      </div>

      {/* Main CTA Button */}
      <div className="flex flex-col items-center space-y-3 sm:space-y-4">
        <button
          onClick={() => navigateToPage('shapeSelector')}
          className="group relative px-6 py-3 sm:px-10 sm:py-5 bg-linear-to-r from-cyan-500 via-blue-600 to-purple-600 text-white text-lg sm:text-2xl font-black rounded-xl sm:rounded-2xl shadow-2xl shadow-blue-500/50 hover:shadow-blue-400/70 transform hover:scale-105 transition-all duration-300 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.3)_50%,transparent_75%)] bg-size-[250%_250%] group-hover:animate-shimmer"></div>
          <div className="relative flex items-center space-x-2 sm:space-x-3">
            <span>Start Calculating</span>
            <svg className="w-5 h-5 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </button>

        <p className="text-sm sm:text-base text-purple-300 font-semibold">হিসাব শুরু করুন</p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 mt-6 sm:mt-12 px-2">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
          <div className="text-3xl sm:text-5xl mb-2 sm:mb-4">📐</div>
          <h3 className="text-base sm:text-xl font-bold text-cyan-300 mb-1 sm:mb-2">6 Shape Types</h3>
          <p className="text-blue-200 text-xs sm:text-sm">Irregular, Rectangle, Square, Triangle, Circle, Trapezoid</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
          <div className="text-3xl sm:text-5xl mb-2 sm:mb-4">⚡</div>
          <h3 className="text-base sm:text-xl font-bold text-green-300 mb-1 sm:mb-2">Instant Results</h3>
          <p className="text-blue-200 text-xs sm:text-sm">Get area in Square Feet and Shotok instantly</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
          <div className="text-3xl sm:text-5xl mb-2 sm:mb-4">🌍</div>
          <h3 className="text-base sm:text-xl font-bold text-purple-300 mb-1 sm:mb-2">Bilingual</h3>
          <p className="text-blue-200 text-xs sm:text-sm">Full support for English and Bengali</p>
        </div>
      </div>

      {/* Quick Navigation Section */}
      <div className="mt-8 sm:mt-12">
        <h3 className="text-lg sm:text-2xl font-bold text-white mb-4 sm:mb-6">Explore More</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 px-2">
          {/* About Us */}
          <button
            onClick={() => navigateToPage('aboutUs')}
            className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-4 sm:p-5 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 text-left"
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-cyan-300">About Us</h4>
            </div>
            <p className="text-xs sm:text-sm text-blue-200/90">Learn about our mission and features</p>
          </button>

          {/* Smart Land Architect */}
          <button
            onClick={() => navigateToPage('smartArchitect')}
            className="bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 sm:p-5 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 text-left"
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-purple-300">Smart Architect</h4>
            </div>
            <p className="text-xs sm:text-sm text-purple-200/90">AI-powered land planning</p>
          </button>

          {/* Formula & Maths */}
          <button
            onClick={() => navigateToPage('formulaMaths')}
            className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 sm:p-5 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105 text-left"
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-green-300">Formula & Maths</h4>
            </div>
            <p className="text-xs sm:text-sm text-green-200/90">View all calculation formulas</p>
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Shape Selector Page Component
const ShapeSelectorPage = ({ goBack, shapes, handleShapeChange }) => (
  <div className="relative z-10 min-h-screen px-4 py-12">
    <div className="max-w-6xl mx-auto">
      {/* Back Button */}
      <button
        onClick={goBack}
        className="mb-8 flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-xl border border-white/20 text-white font-semibold transition-all duration-300 hover:scale-105"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span>Back to Home</span>
      </button>

      {/* Header */}
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-blue-300 to-purple-300">
          Select Land Shape
        </h2>
        <p className="text-2xl sm:text-3xl text-emerald-300 font-bold">
          জমির আকৃতি নির্বাচন করুন
        </p>
        <p className="text-lg text-blue-200/80 max-w-2xl mx-auto">
          Choose the shape that matches your land to get accurate area calculation
        </p>
      </div>

      {/* Shape Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {shapes.map((shape) => (
          <button
            key={shape.id}
            onClick={() => handleShapeChange(shape.id)}
            className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border-3 border-white/20 hover:border-cyan-400/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 transform"
          >
            <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative space-y-4">
              <div className="text-8xl text-center filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                {shape.icon}
              </div>

              <div className="text-center space-y-2">
                <h3 className="text-2xl font-black text-white group-hover:text-cyan-300 transition-colors">
                  {shape.name}
                </h3>
                <p className="text-xl font-bold text-emerald-300">
                  {shape.namebn}
                </p>
              </div>

              <div className="flex justify-center pt-4">
                <div className="px-6 py-2 bg-linear-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold rounded-full group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all">
                  Select
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  </div>
);

// About Us Page Component
const AboutUsPage = ({ goBack }) => (
  <div className="relative z-10 min-h-screen px-4 py-12">
    <div className="max-w-5xl mx-auto">
      {/* Back Button */}
      <button
        onClick={goBack}
        className="mb-8 flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-xl border border-white/20 text-white font-semibold transition-all duration-300 hover:scale-105"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span>Back to Home</span>
      </button>

      {/* Page Header */}
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-blue-300 to-purple-300">
          About Us
        </h2>
        <p className="text-3xl text-emerald-300 font-bold">আমাদের সম্পর্কে</p>
      </div>

      {/* Content Cards */}
      <div className="space-y-8">
        {/* Mission Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-linear-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-3xl font-black text-cyan-300">Our Mission</h3>
          </div>
          <p className="text-lg text-blue-200 leading-relaxed mb-4">
            To provide accurate, user-friendly, and professional land area calculation tools that serve the needs of South Asian communities. We understand the importance of precise land measurements in property transactions, agriculture, and construction planning.
          </p>
          <p className="text-lg text-emerald-300 leading-relaxed font-medium">
            আমাদের লক্ষ্য হল দক্ষিণ এশিয়ার সম্প্রদায়ের জন্য সঠিক, ব্যবহারকারী-বান্ধব এবং পেশাদার ভূমি ক্ষেত্রফল গণনার সরঞ্জাম প্রদান করা।
          </p>
        </div>

        {/* Features Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-300">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-linear-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-3xl font-black text-green-300">What We Offer</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-black/30 rounded-xl p-4 border border-white/10">
              <h4 className="text-xl font-bold text-white mb-2">✓ 6 Shape Types</h4>
              <p className="text-blue-200 text-sm">Support for Irregular Plot, Rectangle, Square, Triangle, Circle, and Trapezoid land shapes.</p>
            </div>
            <div className="bg-black/30 rounded-xl p-4 border border-white/10">
              <h4 className="text-xl font-bold text-white mb-2">✓ Accurate Formulas</h4>
              <p className="text-blue-200 text-sm">Using industry-standard mathematical formulas including the Average Method for irregular plots.</p>
            </div>
            <div className="bg-black/30 rounded-xl p-4 border border-white/10">
              <h4 className="text-xl font-bold text-white mb-2">✓ Dual Unit System</h4>
              <p className="text-blue-200 text-sm">Results in both Square Feet and Shotok for regional convenience.</p>
            </div>
            <div className="bg-black/30 rounded-xl p-4 border border-white/10">
              <h4 className="text-xl font-bold text-white mb-2">✓ Bilingual Interface</h4>
              <p className="text-blue-200 text-sm">Complete support for English and Bengali languages throughout the application.</p>
            </div>
          </div>
        </div>

        {/* Technology Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-linear-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-3xl font-black text-purple-300">Technology</h3>
          </div>
          <p className="text-lg text-blue-200 leading-relaxed mb-4">
            Built with modern web technologies including React, Vite, and Tailwind CSS v4 for a fast, responsive, and beautiful user experience. Our calculator works seamlessly across all devices - desktop, tablet, and mobile.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-400/50 rounded-full text-cyan-300 font-semibold text-sm">React 19</span>
            <span className="px-4 py-2 bg-blue-500/20 border border-blue-400/50 rounded-full text-blue-300 font-semibold text-sm">Vite</span>
            <span className="px-4 py-2 bg-purple-500/20 border border-purple-400/50 rounded-full text-purple-300 font-semibold text-sm">Tailwind CSS v4</span>
            <span className="px-4 py-2 bg-green-500/20 border border-green-400/50 rounded-full text-green-300 font-semibold text-sm">Responsive Design</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Formula & Maths Page Component
const FormulaMathsPage = ({ goBack }) => (
  <div className="relative z-10 min-h-screen px-4 py-12">
    <div className="max-w-5xl mx-auto">
      {/* Back Button */}
      <button
        onClick={goBack}
        className="mb-8 flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-xl border border-white/20 text-white font-semibold transition-all duration-300 hover:scale-105"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span>Back to Home</span>
      </button>

      {/* Page Header */}
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-blue-300 to-purple-300">
          Formula & Maths
        </h2>
        <p className="text-3xl text-emerald-300 font-bold">সূত্র এবং গণিত</p>
        <p className="text-lg text-blue-200/80 max-w-2xl mx-auto">
          Understanding the mathematical formulas behind land area calculations
        </p>
      </div>

      {/* Formula Cards */}
      <div className="space-y-6">
        {/* Irregular Plot */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-cyan-400/50 hover:border-cyan-400 transition-all duration-300">
          <div className="flex items-center space-x-4 mb-6">
            <div className="text-6xl">▱</div>
            <div>
              <h3 className="text-3xl font-black text-cyan-300">Irregular Plot</h3>
              <p className="text-xl text-emerald-300 font-semibold">অনিয়মিত জমি</p>
            </div>
          </div>
          <div className="bg-black/40 rounded-2xl p-6 border border-cyan-400/30 mb-4">
            <p className="text-2xl font-mono text-center text-white font-bold mb-2">
              Area = ((N + S) / 2) × ((E + W) / 2)
            </p>
            <p className="text-center text-blue-300 text-sm font-semibold">Average Method Formula</p>
          </div>
          <div className="space-y-3 text-blue-200">
            <p className="text-lg leading-relaxed">
              <strong className="text-white">The Average Method</strong> is commonly used in South Asia for calculating irregular four-sided land plots. It works by taking the average of opposite sides.
            </p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start space-x-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span><strong>N</strong> = North side length (feet)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span><strong>S</strong> = South side length (feet)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span><strong>E</strong> = East side length (feet)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span><strong>W</strong> = West side length (feet)</span>
              </li>
            </ul>
            <p className="text-emerald-300 italic pt-2">
              এই পদ্ধতিটি দক্ষিণ এশিয়ায় অনিয়মিত চার-পার্শ্বযুক্ত জমির ক্ষেত্রফল নির্ণয়ের জন্য ব্যবহৃত হয়।
            </p>
          </div>
        </div>

        {/* Rectangle */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-blue-400/50 hover:border-blue-400 transition-all duration-300">
          <div className="flex items-center space-x-4 mb-6">
            <div className="text-6xl">▭</div>
            <div>
              <h3 className="text-3xl font-black text-blue-300">Rectangle</h3>
              <p className="text-xl text-emerald-300 font-semibold">আয়তক্ষেত্র</p>
            </div>
          </div>
          <div className="bg-black/40 rounded-2xl p-6 border border-blue-400/30 mb-4">
            <p className="text-2xl font-mono text-center text-white font-bold">
              Area = Length × Width
            </p>
          </div>
          <div className="space-y-3 text-blue-200">
            <p className="text-lg leading-relaxed">
              For <strong className="text-white">perfect rectangles</strong> where all angles are 90 degrees, simply multiply the length by the width.
            </p>
            <p className="text-emerald-300 italic">
              নিখুঁত আয়তক্ষেত্রের জন্য দৈর্ঘ্য এবং প্রস্থ গুণ করুন।
            </p>
          </div>
        </div>

        {/* Square */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-green-400/50 hover:border-green-400 transition-all duration-300">
          <div className="flex items-center space-x-4 mb-6">
            <div className="text-6xl">□</div>
            <div>
              <h3 className="text-3xl font-black text-green-300">Square</h3>
              <p className="text-xl text-emerald-300 font-semibold">বর্গক্ষেত্র</p>
            </div>
          </div>
          <div className="bg-black/40 rounded-2xl p-6 border border-green-400/30 mb-4">
            <p className="text-2xl font-mono text-center text-white font-bold">
              Area = Side × Side = Side²
            </p>
          </div>
          <div className="space-y-3 text-blue-200">
            <p className="text-lg leading-relaxed">
              A <strong className="text-white">square</strong> has all four sides equal in length. Square the side length to get the area.
            </p>
            <p className="text-emerald-300 italic">
              বর্গক্ষেত্রের সব বাহু সমান। বাহুর দৈর্ঘ্যের বর্গ করুন।
            </p>
          </div>
        </div>

        {/* Triangle */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-purple-400/50 hover:border-purple-400 transition-all duration-300">
          <div className="flex items-center space-x-4 mb-6">
            <div className="text-6xl">△</div>
            <div>
              <h3 className="text-3xl font-black text-purple-300">Triangle</h3>
              <p className="text-xl text-emerald-300 font-semibold">ত্রিভুজ</p>
            </div>
          </div>
          <div className="bg-black/40 rounded-2xl p-6 border border-purple-400/30 mb-4">
            <p className="text-2xl font-mono text-center text-white font-bold">
              Area = (Base × Height) / 2
            </p>
          </div>
          <div className="space-y-3 text-blue-200">
            <p className="text-lg leading-relaxed">
              For <strong className="text-white">triangular</strong> land, multiply the base by the perpendicular height and divide by 2.
            </p>
            <p className="text-emerald-300 italic">
              ত্রিভুজাকার জমির জন্য ভিত্তি এবং উচ্চতা গুণ করে ২ দিয়ে ভাগ করুন।
            </p>
          </div>
        </div>

        {/* Circle */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-pink-400/50 hover:border-pink-400 transition-all duration-300">
          <div className="flex items-center space-x-4 mb-6">
            <div className="text-6xl">○</div>
            <div>
              <h3 className="text-3xl font-black text-pink-300">Circle</h3>
              <p className="text-xl text-emerald-300 font-semibold">বৃত্ত</p>
            </div>
          </div>
          <div className="bg-black/40 rounded-2xl p-6 border border-pink-400/30 mb-4">
            <p className="text-2xl font-mono text-center text-white font-bold">
              Area = π × Radius²
            </p>
            <p className="text-center text-blue-300 text-sm font-semibold mt-2">π ≈ 3.14159</p>
          </div>
          <div className="space-y-3 text-blue-200">
            <p className="text-lg leading-relaxed">
              For <strong className="text-white">circular</strong> land, use pi (π) multiplied by the radius squared. Radius is the distance from center to edge.
            </p>
            <p className="text-emerald-300 italic">
              বৃত্তাকার জমির জন্য পাই (π) এবং ব্যাসার্ধের বর্গ গুণ করুন।
            </p>
          </div>
        </div>

        {/* Trapezoid */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-orange-400/50 hover:border-orange-400 transition-all duration-300">
          <div className="flex items-center space-x-4 mb-6">
            <div className="text-6xl">⏢</div>
            <div>
              <h3 className="text-3xl font-black text-orange-300">Trapezoid</h3>
              <p className="text-xl text-emerald-300 font-semibold">ট্রাপিজিয়াম</p>
            </div>
          </div>
          <div className="bg-black/40 rounded-2xl p-6 border border-orange-400/30 mb-4">
            <p className="text-2xl font-mono text-center text-white font-bold">
              Area = ((Side1 + Side2) / 2) × Height
            </p>
          </div>
          <div className="space-y-3 text-blue-200">
            <p className="text-lg leading-relaxed">
              For <strong className="text-white">trapezoid</strong> (four-sided with two parallel sides), average the parallel sides and multiply by the perpendicular height.
            </p>
            <p className="text-emerald-300 italic">
              ট্রাপিজিয়ামের জন্য সমান্তরাল বাহু দুটির গড় এবং উচ্চতা গুণ করুন।
            </p>
          </div>
        </div>

        {/* Conversion Info */}
        <div className="bg-linear-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-xl rounded-3xl p-8 border-2 border-yellow-400/50">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-linear-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            </div>
            <h3 className="text-3xl font-black text-yellow-300">Unit Conversion</h3>
          </div>
          <div className="bg-black/40 rounded-2xl p-6 border border-yellow-400/30">
            <p className="text-2xl font-mono text-center text-white font-bold mb-4">
              1 Shotok = 435.6 Square Feet
            </p>
            <p className="text-lg text-blue-200 text-center leading-relaxed">
              Shotok (শতক) is a traditional unit of land measurement used in Bangladesh and parts of India. This calculator automatically converts your results to both Square Feet and Shotok for convenience.
            </p>
            <p className="text-emerald-300 text-center mt-4 font-medium">
              শতক বাংলাদেশ এবং ভারতের কিছু অংশে ব্যবহৃত একটি ঐতিহ্যবাহী ভূমি পরিমাপের একক।
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Smart Land Architect Page Component with Form and Map
const SmartLandArchitectPage = ({ goBack }) => {
  // Dummy data structure with multiple divisions
  const landData = {
    'Khulna': {
      name: 'Khulna',
      namebn: 'খুলনা',
      districts: {
        'Magura': {
          name: 'Magura',
          namebn: 'মাগুরা',
          upazilas: {
            'Magura Sadar': {
              name: 'Magura Sadar',
              namebn: 'মাগুরা সদর',
              unions: {
                'Magura Polytechnic Area': {
                  name: 'Magura Polytechnic Area',
                  namebn: 'মাগুরা পলিটেকনিক এলাকা',
                  lands: {
                    'LAND-001': {
                      landNumber: 'LAND-001',
                      owner: 'Magura Polytechnic Institute',
                      ownerbn: 'মাগুরা পলিটেকনিক ইনস্টিটিউট',
                      area: '15000',
                      unit: 'sq ft',
                      landType: 'Educational Institution',
                      landTypebn: 'শিক্ষা প্রতিষ্ঠান',
                      plotNumber: 'Plot-45/A',
                      roadAccess: 'Main Road Access - 40 feet',
                      roadAccessbn: 'প্রধান সড়ক - ৪০ ফুট',
                      electricity: 'Available',
                      electricitybn: 'উপলব্ধ',
                      waterSupply: 'Deep Tube Well',
                      waterSupplybn: 'গভীর নলকূপ',
                      nearbyFacilities: 'Hospital (2km), Bank (1.5km), Market (1km)',
                      nearbyFacilitiesbn: 'হাসপাতাল (২ কিমি), ব্যাংক (১.৫ কিমি), বাজার (১ কিমি)',
                      pricePerSqFt: '2500',
                      totalValue: '37500000',
                      registrationDate: '15 March 2020',
                      lastUpdated: '10 December 2024'
                    },
                    'LAND-002': {
                      landNumber: 'LAND-002',
                      owner: 'Rahman Trading Corporation',
                      ownerbn: 'রহমান ট্রেডিং কর্পোরেশন',
                      area: '8000',
                      unit: 'sq ft',
                      landType: 'Commercial',
                      landTypebn: 'বাণিজ্যিক',
                      plotNumber: 'Plot-47/B',
                      roadAccess: 'Secondary Road - 25 feet',
                      roadAccessbn: 'গৌণ সড়ক - ২৫ ফুট',
                      electricity: 'Available',
                      electricitybn: 'উপলব্ধ',
                      waterSupply: 'Municipality Supply',
                      waterSupplybn: 'পৌরসভা সরবরাহ',
                      nearbyFacilities: 'School (500m), Mosque (300m), Market (800m)',
                      nearbyFacilitiesbn: 'স্কুল (৫০০ মিটার), মসজিদ (৩০০ মিটার), বাজার (৮০০ মিটার)',
                      pricePerSqFt: '3000',
                      totalValue: '24000000',
                      registrationDate: '22 June 2021',
                      lastUpdated: '15 December 2024'
                    },
                    'LAND-003': {
                      landNumber: 'LAND-003',
                      owner: 'Karim Agricultural Farm',
                      ownerbn: 'করিম কৃষি খামার',
                      area: '12500',
                      unit: 'sq ft',
                      landType: 'Agricultural',
                      landTypebn: 'কৃষি',
                      plotNumber: 'Plot-52/D',
                      roadAccess: 'Village Road - 15 feet',
                      roadAccessbn: 'গ্রাম সড়ক - ১৫ ফুট',
                      electricity: 'Not Available',
                      electricitybn: 'অনুপলব্ধ',
                      waterSupply: 'Pond & Canal',
                      waterSupplybn: 'পুকুর ও খাল',
                      nearbyFacilities: 'Village Market (1.5km), Primary School (800m)',
                      nearbyFacilitiesbn: 'গ্রাম বাজার (১.৫ কিমি), প্রাথমিক বিদ্যালয় (৮০০ মিটার)',
                      pricePerSqFt: '1800',
                      totalValue: '22500000',
                      registrationDate: '05 January 2022',
                      lastUpdated: '20 December 2024'
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    'Dhaka': {
      name: 'Dhaka',
      namebn: 'ঢাকা',
      districts: {
        'Dhaka': {
          name: 'Dhaka',
          namebn: 'ঢাকা',
          upazilas: {
            'Mohammadpur': {
              name: 'Mohammadpur',
              namebn: 'মোহাম্মদপুর',
              unions: {
                'Mohammadpur Housing': {
                  name: 'Mohammadpur Housing',
                  namebn: 'মোহাম্মদপুর হাউজিং',
                  lands: {
                    'LAND-101': {
                      landNumber: 'LAND-101',
                      owner: 'Hossain Builders Ltd',
                      ownerbn: 'হোসেন বিল্ডার্স লিমিটেড',
                      area: '6500',
                      unit: 'sq ft',
                      landType: 'Residential',
                      landTypebn: 'আবাসিক',
                      plotNumber: 'Plot-23/C',
                      roadAccess: 'Main Road - 50 feet',
                      roadAccessbn: 'প্রধান সড়ক - ৫০ ফুট',
                      electricity: 'Available',
                      electricitybn: 'উপলব্ধ',
                      waterSupply: 'WASA Supply',
                      waterSupplybn: 'ওয়াসা সরবরাহ',
                      nearbyFacilities: 'Metro Station (500m), Shopping Mall (1km), Hospital (2km)',
                      nearbyFacilitiesbn: 'মেট্রো স্টেশন (৫০০ মিটার), শপিং মল (১ কিমি), হাসপাতাল (২ কিমি)',
                      pricePerSqFt: '8500',
                      totalValue: '55250000',
                      registrationDate: '12 August 2023',
                      lastUpdated: '18 December 2024'
                    },
                    'LAND-102': {
                      landNumber: 'LAND-102',
                      owner: 'City Shopping Complex',
                      ownerbn: 'সিটি শপিং কমপ্লেক্স',
                      area: '18000',
                      unit: 'sq ft',
                      landType: 'Commercial',
                      landTypebn: 'বাণিজ্যিক',
                      plotNumber: 'Plot-89/H',
                      roadAccess: 'Main Highway - 60 feet',
                      roadAccessbn: 'মূল মহাসড়ক - ৬০ ফুট',
                      electricity: 'Available',
                      electricitybn: 'উপলব্ধ',
                      waterSupply: 'WASA Supply',
                      waterSupplybn: 'ওয়াসা সরবরাহ',
                      nearbyFacilities: 'Bus Terminal (300m), Bank (200m), Market (Adjacent)',
                      nearbyFacilitiesbn: 'বাস টার্মিনাল (৩০০ মিটার), ব্যাংক (২০০ মিটার), বাজার (সংলগ্ন)',
                      pricePerSqFt: '12000',
                      totalValue: '216000000',
                      registrationDate: '28 September 2022',
                      lastUpdated: '22 December 2024'
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    'Chittagong': {
      name: 'Chittagong',
      namebn: 'চট্টগ্রাম',
      districts: {
        'Chittagong': {
          name: 'Chittagong',
          namebn: 'চট্টগ্রাম',
          upazilas: {
            'Patenga': {
              name: 'Patenga',
              namebn: 'পতেঙ্গা',
              unions: {
                'Patenga Sea Beach Area': {
                  name: 'Patenga Sea Beach Area',
                  namebn: 'পতেঙ্গা সমুদ্র সৈকত এলাকা',
                  lands: {
                    'LAND-201': {
                      landNumber: 'LAND-201',
                      owner: 'Ocean View Resort',
                      ownerbn: 'ওশান ভিউ রিসোর্ট',
                      area: '22000',
                      unit: 'sq ft',
                      landType: 'Tourism & Hospitality',
                      landTypebn: 'পর্যটন ও আতিথেয়তা',
                      plotNumber: 'Plot-67/P',
                      roadAccess: 'Beach Road - 45 feet',
                      roadAccessbn: 'সৈকত সড়ক - ৪৫ ফুট',
                      electricity: 'Available',
                      electricitybn: 'উপলব্ধ',
                      waterSupply: 'Deep Tube Well',
                      waterSupplybn: 'গভীর নলকূপ',
                      nearbyFacilities: 'Beach (100m), Naval Base (2km), Airport (8km)',
                      nearbyFacilitiesbn: 'সৈকত (১০০ মিটার), নৌ ঘাঁটি (২ কিমি), বিমানবন্দর (৮ কিমি)',
                      pricePerSqFt: '5500',
                      totalValue: '121000000',
                      registrationDate: '15 April 2021',
                      lastUpdated: '25 December 2024'
                    },
                    'LAND-202': {
                      landNumber: 'LAND-202',
                      owner: 'Port City Industries',
                      ownerbn: 'পোর্ট সিটি ইন্ডাস্ট্রিজ',
                      area: '35000',
                      unit: 'sq ft',
                      landType: 'Industrial',
                      landTypebn: 'শিল্প',
                      plotNumber: 'Plot-114/Z',
                      roadAccess: 'Industrial Highway - 80 feet',
                      roadAccessbn: 'শিল্প মহাসড়ক - ৮০ ফুট',
                      electricity: 'Available',
                      electricitybn: 'উপলব্ধ',
                      waterSupply: 'Industrial Supply',
                      waterSupplybn: 'শিল্প সরবরাহ',
                      nearbyFacilities: 'Port (5km), Railway (3km), Industrial Zone (Adjacent)',
                      nearbyFacilitiesbn: 'বন্দর (৫ কিমি), রেলওয়ে (৩ কিমি), শিল্প অঞ্চল (সংলগ্ন)',
                      pricePerSqFt: '4200',
                      totalValue: '147000000',
                      registrationDate: '03 November 2020',
                      lastUpdated: '24 December 2024'
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };

  const [selectedDivision, setSelectedDivision] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedUpazila, setSelectedUpazila] = useState('');
  const [selectedUnion, setSelectedUnion] = useState('');
  const [selectedLandNumber, setSelectedLandNumber] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [landInfo, setLandInfo] = useState(null);
  const [mapView, setMapView] = useState('dag'); // 'dag' or 'satellite'

  // Location coordinates for different areas in Bangladesh
  // Keys match: Division-District-Upazila pattern
  const locationCoordinates = {
    'Khulna-Magura-Magura Sadar': [23.4866, 89.4196],
    'Dhaka-Dhaka-Mohammadpur': [23.7694, 90.3594],
    'Chittagong-Chittagong-Patenga': [22.2396, 91.7997],
  };

  // Generate location key for map lookup
  const getLocationKey = () => {
    if (selectedDivision && selectedDistrict && selectedUpazila) {
      return `${selectedDivision}-${selectedDistrict}-${selectedUpazila}`;
    }
    return null;
  };

  const currentLocationCoords = getLocationKey() ? locationCoordinates[getLocationKey()] : null;

  // Map update component
  const MapUpdater = ({ center }) => {
    const map = useMap();
    map.setView(center, 15);
    return null;
  };

  // Generate particle positions once using useMemo to avoid React purity error
  const particles = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 10
    }));
  }, []);

  // Reset dependent dropdowns when parent changes
  const handleDivisionChange = (e) => {
    setSelectedDivision(e.target.value);
    setSelectedDistrict('');
    setSelectedUpazila('');
    setSelectedUnion('');
    setSelectedLandNumber('');
    setShowResults(false);
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
    setSelectedUpazila('');
    setSelectedUnion('');
    setSelectedLandNumber('');
    setShowResults(false);
  };

  const handleUpazilaChange = (e) => {
    setSelectedUpazila(e.target.value);
    setSelectedUnion('');
    setSelectedLandNumber('');
    setShowResults(false);
  };

  const handleUnionChange = (e) => {
    setSelectedUnion(e.target.value);
    setSelectedLandNumber('');
    setShowResults(false);
  };

  const handleLandNumberChange = (e) => {
    setSelectedLandNumber(e.target.value);
    setShowResults(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedDivision && selectedDistrict && selectedUpazila && selectedUnion && selectedLandNumber) {
      const info = landData[selectedDivision]?.districts[selectedDistrict]?.upazilas[selectedUpazila]?.unions[selectedUnion]?.lands[selectedLandNumber];
      if (info) {
        setLandInfo(info);
        setShowResults(true);
      }
    }
  };

  const closeResults = () => {
    setShowResults(false);
  };

  // Get available options based on selections
  const getDistricts = () => selectedDivision ? Object.keys(landData[selectedDivision]?.districts || {}) : [];
  const getUpazilas = () => selectedDistrict ? Object.keys(landData[selectedDivision]?.districts[selectedDistrict]?.upazilas || {}) : [];
  const getUnions = () => selectedUpazila ? Object.keys(landData[selectedDivision]?.districts[selectedDistrict]?.upazilas[selectedUpazila]?.unions || {}) : [];
  const getLandNumbers = () => selectedUnion ? Object.keys(landData[selectedDivision]?.districts[selectedDistrict]?.upazilas[selectedUpazila]?.unions[selectedUnion]?.lands || {}) : [];

  return (
  <div className="relative z-10 min-h-screen px-3 sm:px-4 py-6 sm:py-12">
      {/* Initial Bangladesh Map Background - Only show when no results */}
      {!showResults && (
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* More realistic Bangladesh Map with detailed geography */}
        <div className="absolute inset-0 bg-linear-to-br from-emerald-950 via-green-950 to-teal-950"></div>
        <svg className="w-full h-full opacity-25" viewBox="0 0 1000 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
          {/* More detailed Bangladesh map outline */}
          <defs>
            <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.5"/>
              <stop offset="100%" stopColor="#059669" stopOpacity="0.3"/>
            </linearGradient>
            <filter id="mapGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Main Bangladesh outline with more realistic shape */}
          <path 
            d="M320,120 L350,110 L390,115 L430,125 L470,140 L510,160 L550,185 L585,215 L615,250 L640,290 L660,335 L670,380 L675,425 L672,470 L660,515 L640,555 L610,590 L570,620 L525,645 L475,665 L425,675 L375,678 L325,672 L280,658 L240,635 L205,605 L175,570 L155,530 L142,485 L138,440 L142,395 L155,350 L175,310 L200,275 L230,245 L265,220 L290,195 L305,165 Z" 
            fill="url(#mapGradient)" 
            stroke="#10b981" 
            strokeWidth="4" 
            filter="url(#mapGlow)"
          />
          
          {/* Rivers (Padma, Meghna, Jamuna) */}
          <path d="M200,350 Q350,370 500,350 T800,320" stroke="#3b82f6" strokeWidth="3" fill="none" opacity="0.4"/>
          <path d="M450,150 Q460,300 480,450 T500,650" stroke="#3b82f6" strokeWidth="3" fill="none" opacity="0.4"/>
          <path d="M550,200 Q580,350 600,500" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.3"/>
          
          {/* Division boundaries - more detailed */}
          <g opacity="0.3" stroke="#6ee7b7" strokeWidth="1.5" fill="none">
            {/* Dhaka Division */}
            <path d="M380,250 L450,240 L490,270 L500,320 L480,370 L430,390 L380,370 Z"/>
            
            {/* Khulna Division - Southwest */}
            <path d="M240,400 L300,380 L350,400 L370,450 L350,510 L290,540 L230,520 Z"/>
            
            {/* Chittagong Division - Southeast */}
            <path d="M530,330 L600,320 L650,360 L670,420 L650,480 L600,520 L540,500 Z"/>
            
            {/* Rajshahi Division - Northwest */}
            <path d="M250,220 L320,210 L370,235 L380,280 L350,320 L290,330 Z"/>
            
            {/* Sylhet Division - Northeast */}
            <path d="M500,160 L570,150 L620,180 L630,230 L600,270 L540,280 Z"/>
            
            {/* Barisal Division */}
            <path d="M400,420 L460,410 L490,450 L480,500 L430,530 L390,510 Z"/>
            
            {/* Rangpur Division - North */}
            <path d="M320,120 L390,115 L440,140 L450,190 L420,230 L360,240 Z"/>
            
            {/* Mymensingh Division */}
            <path d="M460,180 L520,175 L560,210 L565,260 L530,295 L475,305 Z"/>
          </g>
          
          {/* Major Cities marked */}
          <g>
            <circle cx="430" cy="320" r="6" fill="#fbbf24" opacity="0.8"/>
            <text x="430" y="310" textAnchor="middle" fill="#fbbf24" fontSize="12" fontWeight="bold" opacity="0.7">Dhaka</text>
            
            <circle cx="590" cy="400" r="5" fill="#fbbf24" opacity="0.7"/>
            <text x="590" y="390" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold" opacity="0.6">Chittagong</text>
            
            <circle cx="300" cy="450" r="4" fill="#fbbf24" opacity="0.7"/>
            <text x="300" y="440" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold" opacity="0.6">Khulna</text>
            
            <circle cx="565" cy="210" r="4" fill="#fbbf24" opacity="0.7"/>
            <text x="565" y="200" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold" opacity="0.6">Sylhet</text>
          </g>
          
          {/* Map Title */}
          <text x="500" y="80" textAnchor="middle" fill="#10b981" fontSize="42" fontWeight="bold" opacity="0.6">
            Bangladesh
          </text>
          <text x="500" y="120" textAnchor="middle" fill="#6ee7b7" fontSize="32" fontWeight="bold" opacity="0.5">
            বাংলাদেশ
          </text>
          
          {/* Decorative border */}
          <rect x="50" y="50" width="900" height="700" fill="none" stroke="#10b981" strokeWidth="2" opacity="0.2" rx="10"/>
        </svg>

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map(particle => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-emerald-400 rounded-full animate-float"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
                opacity: 0.3
              }}
            />
          ))}
        </div>
      </div>
      )}

      {/* Dynamic Dag Number Map Background - Show when results are displayed */}
      {showResults && landInfo && (
      <div className="fixed inset-0 z-0 overflow-hidden animate-fadeIn">
        <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-emerald-900/30 to-gray-900"></div>
      </div>
      )}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Back Button */}
        <button
          onClick={goBack}
          className="mb-4 sm:mb-8 flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-xl border border-white/20 text-white font-semibold transition-all duration-300 hover:scale-105 text-sm sm:text-base"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Home</span>
        </button>

        {/* Page Header */}
        <div className="text-center mb-6 sm:mb-12 space-y-2 sm:space-y-4">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-emerald-300 via-green-300 to-teal-300">
            Smart Land Architect
          </h2>
          <p className="text-xl sm:text-3xl text-emerald-300 font-bold">স্মার্ট ভূমি স্থপতি</p>
          <p className="text-sm sm:text-lg text-green-200/80 max-w-2xl mx-auto px-2">
            Find detailed land information across Bangladesh
          </p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-white/20 shadow-2xl mb-6 sm:mb-8">
          <div className="flex items-center space-x-3 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-emerald-300">Land Information Search</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Division */}
            <div>
              <label className="block text-sm sm:text-base font-semibold text-white mb-2">
                Select Division (বিভাগ নির্বাচন করুন)
              </label>
              <select
                value={selectedDivision}
                onChange={handleDivisionChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-xl text-white text-sm sm:text-base focus:outline-none focus:border-emerald-400 transition-colors backdrop-blur-lg"
                required
              >
                <option value="" className="bg-gray-900">Select Division / বিভাগ নির্বাচন করুন</option>
                {Object.keys(landData).map(division => (
                  <option key={division} value={division} className="bg-gray-900">
                    {landData[division].name} / {landData[division].namebn}
                  </option>
                ))}
              </select>
            </div>

            {/* District */}
            {selectedDivision && (
              <div className="animate-slideIn">
                <label className="block text-sm sm:text-base font-semibold text-white mb-2">
                  Select District (জেলা নির্বাচন করুন)
                </label>
                <select
                  value={selectedDistrict}
                  onChange={handleDistrictChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-xl text-white text-sm sm:text-base focus:outline-none focus:border-emerald-400 transition-colors backdrop-blur-lg"
                  required
                >
                  <option value="" className="bg-gray-900">Select District / জেলা নির্বাচন করুন</option>
                  {getDistricts().map(district => {
                    const districtData = landData[selectedDivision].districts[district];
                    return (
                      <option key={district} value={district} className="bg-gray-900">
                        {districtData.name} / {districtData.namebn}
                      </option>
                    );
                  })}
                </select>
              </div>
            )}

            {/* Upazila */}
            {selectedDistrict && (
              <div className="animate-slideIn">
                <label className="block text-sm sm:text-base font-semibold text-white mb-2">
                  Select Upazila (উপজেলা নির্বাচন করুন)
                </label>
                <select
                  value={selectedUpazila}
                  onChange={handleUpazilaChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-xl text-white text-sm sm:text-base focus:outline-none focus:border-emerald-400 transition-colors backdrop-blur-lg"
                  required
                >
                  <option value="" className="bg-gray-900">Select Upazila / উপজেলা নির্বাচন করুন</option>
                  {getUpazilas().map(upazila => {
                    const upazilaData = landData[selectedDivision].districts[selectedDistrict].upazilas[upazila];
                    return (
                      <option key={upazila} value={upazila} className="bg-gray-900">
                        {upazilaData.name} / {upazilaData.namebn}
                      </option>
                    );
                  })}
                </select>
              </div>
            )}

            {/* Union */}
            {selectedUpazila && (
              <div className="animate-slideIn">
                <label className="block text-sm sm:text-base font-semibold text-white mb-2">
                  Select Union/Area (ইউনিয়ন/এলাকা নির্বাচন করুন)
                </label>
                <select
                  value={selectedUnion}
                  onChange={handleUnionChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-xl text-white text-sm sm:text-base focus:outline-none focus:border-emerald-400 transition-colors backdrop-blur-lg"
                  required
                >
                  <option value="" className="bg-gray-900">Select Union/Area / ইউনিয়ন/এলাকা নির্বাচন করুন</option>
                  {getUnions().map(union => {
                    const unionData = landData[selectedDivision].districts[selectedDistrict].upazilas[selectedUpazila].unions[union];
                    return (
                      <option key={union} value={union} className="bg-gray-900">
                        {unionData.name} / {unionData.namebn}
                      </option>
                    );
                  })}
                </select>
              </div>
            )}

            {/* Land Number */}
            {selectedUnion && (
              <div className="animate-slideIn">
                <label className="block text-sm sm:text-base font-semibold text-white mb-2">
                  Select Land Number (জমির নম্বর নির্বাচন করুন)
                </label>
                <select
                  value={selectedLandNumber}
                  onChange={handleLandNumberChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-xl text-white text-sm sm:text-base focus:outline-none focus:border-emerald-400 transition-colors backdrop-blur-lg"
                  required
                >
                  <option value="" className="bg-gray-900">Select Land Number / জমির নম্বর নির্বাচন করুন</option>
                  {getLandNumbers().map(landNum => (
                    <option key={landNum} value={landNum} className="bg-gray-900">
                      {landNum}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Submit Button */}
            {selectedLandNumber && (
              <div className="animate-slideIn">
                <button
                  type="submit"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-linear-to-r from-emerald-500 via-green-600 to-teal-600 text-white text-base sm:text-lg font-black rounded-xl shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-400/70 transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span>Get Land Information</span>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Results Modal */}
        {showResults && landInfo && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn" style={{ paddingTop: '5rem' }}>
            <div className="bg-linear-to-br from-gray-900 to-gray-800 rounded-3xl p-4 sm:p-6 border-2 border-emerald-400/50 shadow-2xl max-w-7xl w-full max-h-[calc(100vh-6rem)] overflow-y-auto my-4">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-4 sm:mb-6 sticky top-0 bg-gray-900/95 backdrop-blur-sm z-10 py-2 rounded-xl">
                <h3 className="text-xl sm:text-3xl font-black text-emerald-300">Land Information / ভূমি তথ্য</h3>
                <button
                  onClick={closeResults}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500/20 hover:bg-red-500/40 rounded-xl flex items-center justify-center transition-colors shrink-0"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Dag Number Map Section */}
              <div className="mb-6 bg-gray-950 rounded-2xl p-3 sm:p-4 border-2 border-emerald-500/30">
                {/* Toggle between DAG and Satellite View */}
                <div className="flex justify-center mb-4">
                  <div className="inline-flex rounded-lg border-2 border-emerald-500/40 bg-gray-900 p-1">
                    <button
                      onClick={() => setMapView('dag')}
                      className={`px-4 py-2 rounded-md font-semibold transition-all duration-300 ${
                        mapView === 'dag'
                          ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/50'
                          : 'text-emerald-300 hover:bg-emerald-500/20'
                      }`}
                    >
                      📋 DAG View
                    </button>
                    <button
                      onClick={() => setMapView('satellite')}
                      className={`px-4 py-2 rounded-md font-semibold transition-all duration-300 ${
                        mapView === 'satellite'
                          ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                          : 'text-blue-300 hover:bg-blue-500/20'
                      }`}
                    >
                      🛰️ Satellite View
                    </button>
                  </div>
                </div>

                <h4 className="text-base sm:text-xl font-bold text-emerald-300 mb-3 text-center">
                  {mapView === 'dag' ? 'দাগ নম্বর ম্যাপ (Dag Number Map)' : '🛰️ Satellite Map View'}
                </h4>
                
                {/* DAG Map View */}
                {mapView === 'dag' && (
                <>
                <div className="bg-gray-900 rounded-xl overflow-hidden border border-emerald-500/20">
                  <svg className="w-full h-auto" viewBox="0 0 1000 330" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                    {/* Grid Pattern */}
                    <defs>
                      <pattern id="plotGridModal" width="50" height="50" patternUnits="userSpaceOnUse">
                        <rect width="50" height="50" fill="none" stroke="#10b981" strokeWidth="0.5" opacity="0.2"/>
                      </pattern>
                      <linearGradient id="selectedPlotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.9"/>
                        <stop offset="100%" stopColor="#059669" stopOpacity="0.9"/>
                      </linearGradient>
                    </defs>
                    <rect width="1000" height="480" fill="#0a1628" />
                    <rect width="1000" height="480" fill="url(#plotGridModal)" />
                    
                    {/* Determine which plot to highlight based on plotNumber */}
                    {(() => {
                      // Map of plot positions - each land gets a different position
                      const plotPositions = {
                        'Plot-45/A': { label: 'DAG-045' },
                        'Plot-47/B': { label: 'DAG-047' },
                        'Plot-46/A': { label: 'DAG-046' },
                        'Plot-48/C': { label: 'DAG-048' },
                        'Plot-52/D': { label: 'DAG-052' },
                        'Plot-23/C': { label: 'DAG-023' },
                        'Plot-89/H': { label: 'DAG-089' },
                        'Plot-67/P': { label: 'DAG-067' },
                        'Plot-114/Z': { label: 'DAG-114' },
                      };
                      
                      const selectedPosition = plotPositions[landInfo.plotNumber] || { label: 'DAG-047' };
                      // Realistic organic scattered plot layout - NO rows, truly random like real dag map
                      const allPlots = [
                        // Scattered organically across the entire map area
                        { 
                          path: 'M45,50 L95,55 L90,100 L42,95 Z',
                          centerX: 68, centerY: 75,
                          label: 'DAG-001', owner: 'Private', area: '5,200', shape: 'Irregular'
                        },
                        { 
                          path: 'M110,35 L175,40 L180,85 L165,110 L108,105 Z',
                          centerX: 143, centerY: 73,
                          label: 'DAG-045', owner: 'Educational', area: '15,000', shape: 'Pentagon'
                        },
                        { 
                          path: 'M190,60 L240,58 L255,95 L245,125 L188,120 Z',
                          centerX: 224, centerY: 92,
                          label: 'DAG-046', owner: 'Residential', area: '7,200', shape: 'Pentagon'
                        },
                        { 
                          path: 'M70,110 L125,115 L145,145 L130,180 L68,175 Z',
                          centerX: 108, centerY: 145,
                          label: 'DAG-002', owner: 'Commercial', area: '6,800', shape: 'Pentagon'
                        },
                        { 
                          path: 'M265,45 L325,50 L330,92 L318,118 L262,112 Z',
                          centerX: 300, centerY: 83,
                          label: 'DAG-023', owner: 'Residential', area: '6,500', shape: 'Pentagon'
                        },
                        { 
                          path: 'M155,125 L210,130 L225,165 L215,195 L152,188 Z',
                          centerX: 191, centerY: 160,
                          label: 'DAG-003', owner: 'Private', area: '7,500', shape: 'Pentagon'
                        },
                        { 
                          path: 'M345,70 L405,75 L415,115 L408,145 L342,140 Z',
                          centerX: 383, centerY: 109,
                          label: 'DAG-044', owner: 'Agricultural', area: '9,800', shape: 'Pentagon'
                        },
                        { 
                          path: 'M235,135 L295,140 L310,175 L300,205 L232,198 Z',
                          centerX: 275, centerY: 170,
                          label: 'DAG-004', owner: 'Private', area: '5,400', shape: 'Pentagon'
                        },
                        { 
                          path: 'M50,190 L105,195 L122,225 L110,260 L48,255 Z',
                          centerX: 87, centerY: 225,
                          label: 'DAG-005', owner: 'Residential', area: '8,300', shape: 'Pentagon'
                        },
                        { 
                          path: 'M430,55 L485,60 L495,95 L488,125 L425,120 Z',
                          centerX: 465, centerY: 92,
                          label: 'DAG-006', owner: 'Commercial', area: '6,900', shape: 'Pentagon'
                        },
                        { 
                          path: 'M320,150 L378,155 L390,185 L380,215 L318,210 Z',
                          centerX: 357, centerY: 183,
                          label: 'DAG-007', owner: 'Private', area: '7,800', shape: 'Pentagon'
                        },
                        { 
                          path: 'M135,200 L190,205 L205,235 L195,265 L132,260 Z',
                          centerX: 171, centerY: 233,
                          label: 'DAG-048', owner: 'Residential', area: '12,300', shape: 'Pentagon'
                        },
                        { 
                          path: 'M510,80 L565,85 L578,115 L568,148 L505,143 Z',
                          centerX: 545, centerY: 114,
                          label: 'DAG-008', owner: 'Industrial', area: '9,200', shape: 'Pentagon'
                        },
                        { 
                          path: 'M400,165 L460,170 L475,200 L465,235 L395,228 Z',
                          centerX: 439, centerY: 201,
                          label: 'DAG-047', owner: 'Your Land', area: landInfo.area, shape: 'Pentagon'
                        },
                        { 
                          path: 'M215,215 L270,220 L282,250 L272,280 L210,275 Z',
                          centerX: 250, centerY: 248,
                          label: 'DAG-089', owner: 'Commercial', area: '18,000', shape: 'Pentagon'
                        },
                        { 
                          path: 'M585,105 L640,110 L655,140 L645,172 L582,167 Z',
                          centerX: 621, centerY: 139,
                          label: 'DAG-009', owner: 'Residential', area: '8,600', shape: 'Pentagon'
                        },
                        { 
                          path: 'M335,225 L390,230 L402,260 L392,290 L330,285 Z',
                          centerX: 370, centerY: 258,
                          label: 'DAG-010', owner: 'Private', area: '9,100', shape: 'Pentagon'
                        },
                        { 
                          path: 'M485,180 L545,185 L560,215 L548,248 L482,243 Z',
                          centerX: 524, centerY: 214,
                          label: 'DAG-052', owner: 'Agricultural', area: '12,500', shape: 'Pentagon'
                        },
                        { 
                          path: 'M665,125 L720,130 L732,160 L722,192 L660,187 Z',
                          centerX: 700, centerY: 159,
                          label: 'DAG-011', owner: 'Commercial', area: '10,200', shape: 'Pentagon'
                        },
                        { 
                          path: 'M130,270 L185,275 L198,305 L188,315 L125,310 Z',
                          centerX: 165, centerY: 295,
                          label: 'DAG-012', owner: 'Residential', area: '8,900', shape: 'Pentagon'
                        },
                        { 
                          path: 'M290,235 L340,240 L352,270 L342,300 L285,295 Z',
                          centerX: 322, centerY: 268,
                          label: 'DAG-049', owner: 'Private', area: '10,400', shape: 'Pentagon'
                        },
                        { 
                          path: 'M415,250 L470,255 L482,285 L472,315 L410,310 Z',
                          centerX: 450, centerY: 283,
                          label: 'DAG-050', owner: 'Residential', area: '11,600', shape: 'Pentagon'
                        },
                        { 
                          path: 'M570,195 L625,200 L638,230 L628,262 L565,257 Z',
                          centerX: 605, centerY: 229,
                          label: 'DAG-013', owner: 'Agricultural', area: '9,700', shape: 'Pentagon'
                        },
                        { 
                          path: 'M745,145 L800,150 L812,180 L802,210 L740,205 Z',
                          centerX: 780, centerY: 178,
                          label: 'DAG-014', owner: 'Private', area: '8,400', shape: 'Pentagon'
                        },
                        { 
                          path: 'M210,285 L265,290 L275,315 L265,318 L205,315 Z',
                          centerX: 244, centerY: 304,
                          label: 'DAG-067', owner: 'Tourism', area: '22,000', shape: 'Pentagon'
                        },
                        { 
                          path: 'M365,295 L418,300 L430,315 L420,320 L360,318 Z',
                          centerX: 399, centerY: 309,
                          label: 'DAG-114', owner: 'Industrial', area: '35,000', shape: 'Pentagon'
                        },
                        { 
                          path: 'M490,265 L545,270 L558,295 L548,320 L485,315 Z',
                          centerX: 525, centerY: 293,
                          label: 'DAG-051', owner: 'Commercial', area: '13,200', shape: 'Pentagon'
                        },
                        { 
                          path: 'M650,215 L705,220 L718,248 L708,278 L645,273 Z',
                          centerX: 685, centerY: 246,
                          label: 'DAG-015', owner: 'Residential', area: '7,600', shape: 'Pentagon'
                        },
                        { 
                          path: 'M825,165 L878,170 L888,198 L878,228 L820,223 Z',
                          centerX: 858, centerY: 196,
                          label: 'DAG-088', owner: 'Private', area: '9,500', shape: 'Pentagon'
                        },
                        { 
                          path: 'M570,285 L625,290 L638,312 L628,320 L565,318 Z',
                          centerX: 605, centerY: 305,
                          label: 'DAG-016', owner: 'Commercial', area: '11,300', shape: 'Pentagon'
                        },
                        { 
                          path: 'M730,235 L785,240 L798,268 L788,298 L725,293 Z',
                          centerX: 765, centerY: 266,
                          label: 'DAG-022', owner: 'Agricultural', area: '10,800', shape: 'Pentagon'
                        },
                        { 
                          path: 'M650,295 L705,300 L715,318 L705,322 L645,320 Z',
                          centerX: 684, centerY: 311,
                          label: 'DAG-024', owner: 'Private', area: '8,500', shape: 'Pentagon'
                        },
                        { 
                          path: 'M810,250 L865,255 L878,280 L868,310 L805,305 Z',
                          centerX: 845, centerY: 280,
                          label: 'DAG-017', owner: 'Private', area: '8,100', shape: 'Pentagon'
                        },
                        { 
                          path: 'M730,305 L782,310 L792,318 L782,322 L725,320 Z',
                          centerX: 762, centerY: 315,
                          label: 'DAG-018', owner: 'Agricultural', area: '9,600', shape: 'Pentagon'
                        },
                        { 
                          path: 'M890,215 L940,220 L948,248 L938,278 L885,273 Z',
                          centerX: 920, centerY: 246,
                          label: 'DAG-019', owner: 'Residential', area: '7,400', shape: 'Pentagon'
                        },
                        { 
                          path: 'M815,295 L868,300 L878,315 L868,322 L810,320 Z',
                          centerX: 848, centerY: 311,
                          label: 'DAG-020', owner: 'Private', area: '8,700', shape: 'Pentagon'
                        },
                        { 
                          path: 'M890,285 L942,290 L952,310 L942,320 L885,318 Z',
                          centerX: 922, centerY: 305,
                          label: 'DAG-021', owner: 'Commercial', area: '9,800', shape: 'Pentagon'
                        },
                      ];
                      
                      return (
                        <>
                          {allPlots.map((plot) => {
                            const isSelected = plot.label === selectedPosition.label;
                            
                            return (
                              <g key={plot.label}>
                                {!isSelected ? (
                                  // Regular plot with smaller text
                                  <>
                                    <path 
                                      d={plot.path}
                                      fill="#1e293b" 
                                      stroke="#059669" 
                                      strokeWidth="1.5" 
                                      opacity="0.7"
                                    />
                                    <path 
                                      d={plot.path}
                                      fill="url(#plotGridModal)" 
                                      opacity="0.3"
                                    />
                                    <text 
                                      x={plot.centerX} 
                                      y={plot.centerY - 6} 
                                      textAnchor="middle" 
                                      fill="#6ee7b7" 
                                      fontSize="9" 
                                      fontWeight="bold"
                                    >
                                      {plot.label}
                                    </text>
                                    <text 
                                      x={plot.centerX} 
                                      y={plot.centerY + 4} 
                                      textAnchor="middle" 
                                      fill="#94a3b8" 
                                      fontSize="6"
                                    >
                                      {plot.owner}
                                    </text>
                                    <text 
                                      x={plot.centerX} 
                                      y={plot.centerY + 12} 
                                      textAnchor="middle" 
                                      fill="#9ca3af" 
                                      fontSize="6" 
                                      fontWeight="600"
                                    >
                                      {plot.area} sq ft
                                    </text>
                                  </>
                                ) : (
                                  // Selected plot with compact highlight
                                  <>
                                    {/* Main plot area with gradient */}
                                    <path 
                                      d={plot.path}
                                      fill="url(#selectedPlotGradient)" 
                                      stroke="#fbbf24" 
                                      strokeWidth="3" 
                                      opacity="1"
                                    />
                                    
                                    {/* Animated border effect */}
                                    <path 
                                      d={plot.path}
                                      fill="none" 
                                      stroke="#fbbf24" 
                                      strokeWidth="2.5" 
                                      strokeDasharray="8,4" 
                                      opacity="0.9"
                                    >
                                      <animate attributeName="stroke-dashoffset" from="0" to="24" dur="2s" repeatCount="indefinite"/>
                                    </path>
                                    
                                    {/* Compact info panel */}
                                    <rect 
                                      x={plot.centerX - 45} 
                                      y={plot.centerY - 30} 
                                      width="90" 
                                      height="60"
                                      fill="#065f46" 
                                      rx="5" 
                                      opacity="0.98" 
                                      stroke="#10b981" 
                                      strokeWidth="1.5"
                                    />
                                    
                                    {/* "YOUR LAND" badge */}
                                    <rect 
                                      x={plot.centerX - 30} 
                                      y={plot.centerY - 26} 
                                      width="60" 
                                      height="12" 
                                      fill="#fbbf24" 
                                      rx="3"
                                    />
                                    <text 
                                      x={plot.centerX} 
                                      y={plot.centerY - 17} 
                                      textAnchor="middle" 
                                      fill="#0a1628" 
                                      fontSize="7" 
                                      fontWeight="bold"
                                    >
                                      YOUR LAND
                                    </text>
                                    
                                    {/* Land details - compact */}
                                    <text 
                                      x={plot.centerX} 
                                      y={plot.centerY - 4} 
                                      textAnchor="middle" 
                                      fill="white" 
                                      fontSize="10" 
                                      fontWeight="bold"
                                    >
                                      {landInfo.landNumber}
                                    </text>
                                    <text 
                                      x={plot.centerX} 
                                      y={plot.centerY + 6} 
                                      textAnchor="middle" 
                                      fill="#fbbf24" 
                                      fontSize="8" 
                                      fontWeight="bold"
                                    >
                                      {landInfo.plotNumber}
                                    </text>
                                    <text 
                                      x={plot.centerX} 
                                      y={plot.centerY + 15} 
                                      textAnchor="middle" 
                                      fill="#6ee7b7" 
                                      fontSize="7" 
                                      fontWeight="600"
                                    >
                                      {landInfo.area} sq ft
                                    </text>
                                    <text 
                                      x={plot.centerX} 
                                      y={plot.centerY + 23} 
                                      textAnchor="middle" 
                                      fill="#a7f3d0" 
                                      fontSize="6" 
                                      fontWeight="500"
                                    >
                                      ({(parseFloat(landInfo.area) / 435.6).toFixed(2)} Shotok)
                                    </text>
                                    
                                    {/* Compact pulsing ring */}
                                    <circle 
                                      cx={plot.centerX} 
                                      cy={plot.centerY} 
                                      r="40" 
                                      fill="none" 
                                      stroke="#10b981" 
                                      strokeWidth="2" 
                                      opacity="0.6"
                                    >
                                      <animate attributeName="r" from="35" to="45" dur="2s" repeatCount="indefinite"/>
                                      <animate attributeName="opacity" from="0.8" to="0" dur="2s" repeatCount="indefinite"/>
                                    </circle>
                                  </>
                                )}
                              </g>
                            );
                          })}
                        </>
                      );
                    })()}

                    {/* Roads - Organic paths through the map like real dag maps */}
                    <path 
                      d="M35,105 Q150,110 270,108 T500,112 T750,115 L960,118" 
                      stroke="#8B4513" 
                      strokeWidth="4" 
                      fill="none"
                      opacity="0.7"
                    />
                    <path 
                      d="M30,185 Q180,190 350,188 T620,192 T880,195 L970,198" 
                      stroke="#8B4513" 
                      strokeWidth="4" 
                      fill="none"
                      opacity="0.7"
                    />
                    <path 
                      d="M40,265 Q200,268 400,270 T680,273 T920,275 L965,278" 
                      stroke="#8B4513" 
                      strokeWidth="3.5" 
                      fill="none"
                      opacity="0.6"
                    />
                    
                    {/* Vertical connecting roads */}
                    <path 
                      d="M280,40 Q285,110 290,180 T295,270 L298,325" 
                      stroke="#8B4513" 
                      strokeWidth="3" 
                      fill="none"
                      opacity="0.5"
                    />
                    <path 
                      d="M550,50 Q555,120 560,185 T565,265 L568,325" 
                      stroke="#8B4513" 
                      strokeWidth="3" 
                      fill="none"
                      opacity="0.5"
                    />
                    <path 
                      d="M800,55 Q805,125 810,195 T815,275 L818,325" 
                      stroke="#8B4513" 
                      strokeWidth="2.5" 
                      fill="none"
                      opacity="0.5"
                    />

                    {/* North Direction Indicator */}
                    <g transform="translate(940, 60)">
                      <circle cx="0" cy="0" r="20" fill="white" stroke="#2563eb" strokeWidth="1.5" />
                      <path d="M0,-15 L5,10 L0,5 L-5,10 Z" fill="#2563eb" />
                      <text x="0" y="28" fontSize="9" fontWeight="bold" fill="#1e40af" textAnchor="middle">N</text>
                    </g>

                    {/* Scale Bar */}
                    <g transform="translate(40, 305)">
                      <text x="0" y="-10" fontSize="10" fontWeight="600" fill="#1e3a8a">Scale: 1:500</text>
                      <rect x="0" y="0" width="50" height="6" fill="white" stroke="#1e3a8a" strokeWidth="1" />
                      <rect x="0" y="0" width="25" height="6" fill="#1e3a8a" />
                      <rect x="25" y="0" width="25" height="6" fill="white" stroke="#1e3a8a" strokeWidth="1" />
                      <text x="0" y="18" fontSize="8" fill="#475569" textAnchor="middle">0</text>
                      <text x="25" y="18" fontSize="8" fill="#475569" textAnchor="middle">25m</text>
                      <text x="50" y="18" fontSize="8" fill="#475569" textAnchor="middle">50m</text>
                    </g>

                    {/* Location Info */}
                    <g transform="translate(500, 25)">
                      <text textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e3a8a">
                        DAG Number Map - {selectedUnion}, {selectedUpazila}, {selectedDistrict}
                      </text>
                    </g>

                    {/* Legend - Moved to top-left corner */}
                    <g transform="translate(30, 15)">
                      <rect x="0" y="0" width="140" height="78" fill="white" stroke="#cbd5e1" strokeWidth="1" rx="3" opacity="0.95" />
                      <text x="8" y="15" fontSize="10" fontWeight="600" fill="#1e3a8a">Legend</text>
                      
                      {/* Selected Plot - matching actual selected plot colors */}
                      <defs>
                        <linearGradient id="legendGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#10b981" stopOpacity="0.9"/>
                          <stop offset="100%" stopColor="#059669" stopOpacity="0.9"/>
                        </linearGradient>
                      </defs>
                      <rect x="8" y="22" width="16" height="12" fill="url(#legendGradient)" stroke="#fbbf24" strokeWidth="1.5" rx="1" />
                      <text x="28" y="31" fontSize="8" fill="#334155">Selected Plot</text>
                      
                      {/* Other Plots - matching actual other plot colors */}
                      <rect x="8" y="40" width="16" height="12" fill="#1e293b" stroke="#059669" strokeWidth="1.5" rx="1" opacity="0.7" />
                      <text x="28" y="49" fontSize="8" fill="#334155">Other Plots</text>
                      
                      {/* Road - curved line matching actual roads */}
                      <path d="M8,62 Q12,60 16,62 Q20,64 24,62" stroke="#8B4513" strokeWidth="2.5" fill="none" opacity="0.7" />
                      <text x="28" y="65" fontSize="8" fill="#334155">Road</text>
                    </g>
                  </svg>
                </div>
                <p className="text-center text-emerald-300 text-sm mt-3">
                  ⬆️ The highlighted green area shows your selected land plot location
                </p>
                </>
                )}

                {/* Satellite Map View using Leaflet.js */}
                {mapView === 'satellite' && (
                  <>
                  <div className="bg-gray-900 rounded-xl overflow-hidden border border-blue-500/20" style={{ height: '500px' }}>
                    <MapContainer
                      center={currentLocationCoords || [23.8103, 90.4125]} // Default to Dhaka
                      zoom={15}
                      style={{ height: '100%', width: '100%' }}
                      scrollWheelZoom={true}
                    >
                      {/* OpenStreetMap Tiles - Free satellite-like view */}
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      
                      {/* Marker for selected location */}
                      <Marker position={currentLocationCoords || [23.8103, 90.4125]}>
                        <Popup>
                          <div className="text-center">
                            <strong className="text-lg">{landInfo.landNumber}</strong><br />
                            <span className="text-blue-600">{landInfo.plotNumber}</span><br />
                            <span className="text-emerald-600">📍 {selectedUnion}, {selectedUpazila}</span><br />
                            <span className="text-purple-600">{selectedDistrict}, {selectedDivision}</span><br />
                            <span className="font-bold text-orange-600">{landInfo.area} sq ft</span><br />
                            <span className="text-sm text-gray-600">{landInfo.landType}</span>
                          </div>
                        </Popup>
                      </Marker>

                      {/* Draw approximate land boundary polygon */}
                      <Polygon
                        positions={[
                          [
                            (currentLocationCoords?.[0] || 23.8103) + 0.0005,
                            (currentLocationCoords?.[1] || 90.4125) - 0.0005
                          ],
                          [
                            (currentLocationCoords?.[0] || 23.8103) + 0.0005,
                            (currentLocationCoords?.[1] || 90.4125) + 0.0005
                          ],
                          [
                            (currentLocationCoords?.[0] || 23.8103) - 0.0005,
                            (currentLocationCoords?.[1] || 90.4125) + 0.0005
                          ],
                          [
                            (currentLocationCoords?.[0] || 23.8103) - 0.0005,
                            (currentLocationCoords?.[1] || 90.4125) - 0.0005
                          ],
                        ]}
                        pathOptions={{
                          color: '#10b981',
                          fillColor: '#10b981',
                          fillOpacity: 0.4,
                          weight: 3
                        }}
                      />

                      {/* MapUpdater to re-center when location changes */}
                      <MapUpdater center={currentLocationCoords || [23.8103, 90.4125]} />
                    </MapContainer>
                  </div>
                  <p className="text-center text-blue-300 text-sm mt-3">
                    🛰️ Real satellite view powered by OpenStreetMap | Green boundary shows your land area
                  </p>
                  </>
                )}
              </div>

              {/* Land Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* Basic Info */}
                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
                  <h4 className="text-base sm:text-lg font-bold text-cyan-300 mb-3 flex items-center space-x-2">
                    <span>📋</span>
                    <span>Basic Information</span>
                  </h4>
                  <div className="space-y-2 text-sm sm:text-base">
                    <p className="text-white"><strong>Land Number:</strong> <span className="text-emerald-300">{landInfo.landNumber}</span></p>
                    <p className="text-white"><strong>Plot Number:</strong> <span className="text-blue-300">{landInfo.plotNumber}</span></p>
                    <p className="text-white"><strong>Owner:</strong> <span className="text-yellow-300">{landInfo.owner}</span></p>
                    <p className="text-emerald-300 font-medium">{landInfo.ownerbn}</p>
                  </div>
                </div>

                {/* Area Info */}
                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
                  <h4 className="text-base sm:text-lg font-bold text-green-300 mb-3 flex items-center space-x-2">
                    <span>📐</span>
                    <span>Area Details</span>
                  </h4>
                  <div className="space-y-2 text-sm sm:text-base">
                    <p className="text-white"><strong>Total Area:</strong> <span className="text-emerald-300 text-xl sm:text-2xl font-bold">{landInfo.area} {landInfo.unit}</span></p>
                    <p className="text-white"><strong>Shotok:</strong> <span className="text-cyan-300 text-lg sm:text-xl font-semibold">{(parseFloat(landInfo.area) / 435.6).toFixed(2)}</span></p>
                    <p className="text-white"><strong>Land Type:</strong> <span className="text-purple-300">{landInfo.landType}</span></p>
                    <p className="text-emerald-300">{landInfo.landTypebn}</p>
                  </div>
                </div>

                {/* Infrastructure */}
                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
                  <h4 className="text-base sm:text-lg font-bold text-purple-300 mb-3 flex items-center space-x-2">
                    <span>🏗️</span>
                    <span>Infrastructure</span>
                  </h4>
                  <div className="space-y-2 text-sm sm:text-base">
                    <p className="text-white"><strong>Road Access:</strong> <span className="text-blue-300">{landInfo.roadAccess}</span></p>
                    <p className="text-emerald-300 text-sm">{landInfo.roadAccessbn}</p>
                    <p className="text-white"><strong>Electricity:</strong> <span className="text-yellow-300">{landInfo.electricity}</span></p>
                    <p className="text-white"><strong>Water Supply:</strong> <span className="text-cyan-300">{landInfo.waterSupply}</span></p>
                  </div>
                </div>

                {/* Nearby Facilities */}
                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
                  <h4 className="text-base sm:text-lg font-bold text-orange-300 mb-3 flex items-center space-x-2">
                    <span>🏪</span>
                    <span>Nearby Facilities</span>
                  </h4>
                  <div className="space-y-2 text-sm sm:text-base">
                    <p className="text-blue-200 leading-relaxed">{landInfo.nearbyFacilities}</p>
                    <p className="text-emerald-300 leading-relaxed text-sm">{landInfo.nearbyFacilitiesbn}</p>
                  </div>
                </div>

                {/* Valuation */}
                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 md:col-span-2">
                  <h4 className="text-base sm:text-lg font-bold text-yellow-300 mb-3 flex items-center space-x-2">
                    <span>💰</span>
                    <span>Valuation</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <p className="text-white text-sm"><strong>Price per Sq Ft:</strong></p>
                      <p className="text-yellow-300 text-xl sm:text-2xl font-bold">৳{parseInt(landInfo.pricePerSqFt).toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-white text-sm"><strong>Total Value:</strong></p>
                      <p className="text-emerald-300 text-xl sm:text-2xl font-bold">৳{parseInt(landInfo.totalValue).toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-white text-sm"><strong>Registration Date:</strong></p>
                      <p className="text-cyan-300 text-base sm:text-lg font-semibold">{landInfo.registrationDate}</p>
                    </div>
                  </div>
                </div>

                {/* Location Summary */}
                <div className="bg-linear-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-4 border border-emerald-400/30 md:col-span-2">
                  <h4 className="text-base sm:text-lg font-bold text-emerald-300 mb-3 flex items-center space-x-2">
                    <span>📍</span>
                    <span>Location</span>
                  </h4>
                  <p className="text-white text-sm sm:text-base leading-relaxed">
                    <strong>Full Address:</strong> {landInfo.owner}, {selectedUnion}, {selectedUpazila}, {selectedDistrict}, {selectedDivision} Division
                  </p>
                  <p className="text-emerald-300 text-sm mt-2">
                    Last Updated: {landInfo.lastUpdated}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <div className="mt-6">
                <button
                  onClick={closeResults}
                  className="w-full px-4 py-3 bg-linear-to-r from-red-500 to-pink-600 text-white font-bold rounded-xl hover:from-red-600 hover:to-pink-700 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};



const LandCalculator = () => {
  // Page Navigation State
  const [currentPage, setCurrentPage] = useState('home'); // home, shapeSelector, calculator, aboutUs, smartArchitect, formulaMaths
  const [selectedShape, setSelectedShape] = useState('irregular');
  const [measurements, setMeasurements] = useState({
    north: '',
    south: '',
    east: '',
    west: '',
    base: '',
    height: '',
    radius: '',
    sideA: '',
    sideB: '',
    sideC: '',
    length: '',
    width: '',
    parallelSide1: '',
    parallelSide2: ''
  });
  
  const [results, setResults] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Navigation functions
  const navigateToPage = (page) => {
    setCurrentPage(page);
    setSidebarOpen(false);
  };

  const goBack = () => {
    if (currentPage === 'calculator') {
      setCurrentPage('shapeSelector');
      setResults(null);
    } else if (currentPage === 'shapeSelector' || currentPage === 'aboutUs' || currentPage === 'smartArchitect' || currentPage === 'formulaMaths') {
      setCurrentPage('home');
    }
  };

  const shapes = [
    { id: 'irregular', name: 'Irregular Plot', icon: '▱', namebn: 'অনিয়মিত জমি' },
    { id: 'rectangle', name: 'Rectangle', icon: '▭', namebn: 'আয়তক্ষেত্র' },
    { id: 'square', name: 'Square', icon: '□', namebn: 'বর্গক্ষেত্র' },
    { id: 'triangle', name: 'Triangle', icon: '△', namebn: 'ত্রিভুজ' },
    { id: 'circle', name: 'Circle', icon: '○', namebn: 'বৃত্ত' },
    { id: 'trapezoid', name: 'Trapezoid', icon: '⏢', namebn: 'ট্রাপিজিয়াম' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setMeasurements(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleShapeChange = (shapeId) => {
    setSelectedShape(shapeId);
    setResults(null);
    setCurrentPage('calculator');
    // Reset measurements when changing shape
    setMeasurements({
      north: '',
      south: '',
      east: '',
      west: '',
      base: '',
      height: '',
      radius: '',
      sideA: '',
      sideB: '',
      sideC: '',
      length: '',
      width: '',
      parallelSide1: '',
      parallelSide2: ''
    });
  };

  const calculateArea = () => {
    let totalSquareFeet = 0;
    let formula = '';

    switch (selectedShape) {
      case 'irregular': {
        const { north, south, east, west } = measurements;
        if (!north || !south || !east || !west) {
          alert('Please fill in all measurements / সকল মাপ পূরণ করুন');
          return;
        }
        const avgNorthSouth = (parseFloat(north) + parseFloat(south)) / 2;
        const avgEastWest = (parseFloat(east) + parseFloat(west)) / 2;
        totalSquareFeet = avgNorthSouth * avgEastWest;
        formula = '((N + S) / 2) × ((E + W) / 2)';
        break;
      }

      case 'rectangle': {
        const { length, width } = measurements;
        if (!length || !width) {
          alert('Please fill in length and width / দৈর্ঘ্য এবং প্রস্থ পূরণ করুন');
          return;
        }
        totalSquareFeet = parseFloat(length) * parseFloat(width);
        formula = 'Length × Width';
        break;
      }

      case 'triangle': {
        const { base, height } = measurements;
        if (!base || !height) {
          alert('Please fill in base and height / ভিত্তি এবং উচ্চতা পূরণ করুন');
          return;
        }
        totalSquareFeet = (parseFloat(base) * parseFloat(height)) / 2;
        formula = '(Base × Height) / 2';
        break;
      }

      case 'circle': {
        const { radius } = measurements;
        if (!radius) {
          alert('Please fill in radius / ব্যাসার্ধ পূরণ করুন');
          return;
        }
        totalSquareFeet = Math.PI * Math.pow(parseFloat(radius), 2);
        formula = 'π × Radius²';
        break;
      }

      case 'square': {
        const { length } = measurements;
        if (!length) {
          alert('Please fill in side length / বাহুর দৈর্ঘ্য পূরণ করুন');
          return;
        }
        totalSquareFeet = Math.pow(parseFloat(length), 2);
        formula = 'Side × Side';
        break;
      }

      case 'trapezoid': {
        const { parallelSide1, parallelSide2, height: trapHeight } = measurements;
        if (!parallelSide1 || !parallelSide2 || !trapHeight) {
          alert('Please fill in all measurements / সকল মাপ পূরণ করুন');
          return;
        }
        totalSquareFeet = ((parseFloat(parallelSide1) + parseFloat(parallelSide2)) / 2) * parseFloat(trapHeight);
        formula = '((Side1 + Side2) / 2) × Height';
        break;
      }

      default:
        return;
    }

    const shotok = totalSquareFeet / 435.6;

    setResults({
      totalSquareFeet: totalSquareFeet.toFixed(2),
      shotok: shotok.toFixed(2),
      formula: formula,
      shape: shapes.find(s => s.id === selectedShape).name
    });
  };

  const resetForm = () => {
    setMeasurements({
      north: '',
      south: '',
      east: '',
      west: '',
      base: '',
      height: '',
      radius: '',
      sideA: '',
      sideB: '',
      sideC: '',
      length: '',
      width: '',
      parallelSide1: '',
      parallelSide2: ''
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
      <div className={`fixed top-20 left-0 h-[calc(100vh-5rem)] w-72 sm:w-80 bg-linear-to-br from-indigo-950/98 via-purple-900/98 to-blue-950/98 backdrop-blur-2xl border-r border-white/10 z-40 transform transition-transform duration-500 ease-out md:hidden overflow-y-auto shadow-2xl ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-3 sm:p-4 space-y-3">
          {/* About Us Button */}
          <button
            onClick={() => navigateToPage('aboutUs')}
            className="w-full text-left bg-linear-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/10 shadow-xl hover:shadow-2xl hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 transform"
          >
            <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-blue-400 to-cyan-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-300 to-cyan-300">About Us</h3>
            </div>
            <p className="text-xs sm:text-sm text-blue-200/90 leading-relaxed mb-2">
              Learn about our mission and features.
            </p>
            <div className="flex items-center space-x-1 sm:space-x-2 text-cyan-400 font-semibold text-xs sm:text-sm">
              <span>Read More</span>
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </button>

          {/* Smart Land Architect Button */}
          <button
            onClick={() => navigateToPage('smartArchitect')}
            className="w-full text-left bg-linear-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/10 shadow-xl hover:shadow-2xl hover:border-purple-400/50 transition-all duration-300 hover:scale-105 transform"
          >
            <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-purple-400 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30 shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-300 to-pink-300">Smart Land Architect</h3>
            </div>
            <p className="text-xs sm:text-sm text-purple-200/90 leading-relaxed mb-2">
              AI-powered land planning & optimization.
            </p>
            <div className="flex items-center space-x-1 sm:space-x-2 text-purple-400 font-semibold text-xs sm:text-sm">
              <span>Explore</span>
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </button>

          {/* Formula & Maths Button */}
          <button
            onClick={() => navigateToPage('formulaMaths')}
            className="w-full text-left bg-linear-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/10 shadow-xl hover:shadow-2xl hover:border-green-400/50 transition-all duration-300 hover:scale-105 transform"
          >
            <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-green-400 to-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-green-500/30 shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-transparent bg-clip-text bg-linear-to-r from-green-300 to-emerald-300">Formula & Maths</h3>
            </div>
            <p className="text-xs sm:text-sm text-green-200/90 leading-relaxed mb-2">
              Understand all calculation formulas.
            </p>
            <div className="flex items-center space-x-1 sm:space-x-2 text-green-400 font-semibold text-xs sm:text-sm">
              <span>View Formulas</span>
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </button>

          {/* Quick Info */}
          <div className="bg-linear-to-br from-orange-500/10 to-yellow-500/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/10 shadow-xl">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-orange-400 to-yellow-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30 shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-transparent bg-clip-text bg-linear-to-r from-orange-300 to-yellow-300">Quick Info</h3>
            </div>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-orange-200/90">
              <li className="flex items-center space-x-2">
                <span className="text-green-400 text-sm sm:text-base">✓</span>
                <span>6 Shape Types</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-400 text-sm sm:text-base">✓</span>
                <span>Bilingual Interface</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-400 text-sm sm:text-base">✓</span>
                <span>Instant Results</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-400 text-sm sm:text-base">✓</span>
                <span>Smart Planning</span>
              </li>
            </ul>
          </div>

          {/* Advertisement Section - Mobile */}
          <div className="bg-linear-to-br from-slate-800/95 to-gray-900/95 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10 shadow-2xl">
            <div className="flex items-center space-x-2 mb-3 pb-2 sm:pb-3 border-b border-white/10">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <h3 className="text-xs sm:text-sm font-bold text-yellow-300">Sponsored Products</h3>
            </div>
            
            {/* Ad 1 - Scientific Calculator */}
            <a 
              href="https://www.daraz.com.bd/casio-scientific-calculator/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg sm:rounded-xl p-2.5 sm:p-3 mb-2 sm:mb-3 shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group hover:scale-105 transform active:scale-95"
            >
              <div className="flex items-start space-x-2 sm:space-x-3">
                <div className="bg-white rounded-md sm:rounded-lg p-1.5 sm:p-2 shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-bold text-[10px] sm:text-xs mb-0.5 sm:mb-1 group-hover:text-yellow-300 transition-colors">CASIO FX-991EX Calculator</h4>
                  <p className="text-blue-100 text-[8px] sm:text-[10px] mb-1 sm:mb-1.5 leading-tight">HD Display • 552 Functions • Land Survey</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-yellow-300 font-bold text-xs sm:text-sm">৳2,950</span>
                      <span className="text-blue-200 text-[8px] sm:text-[9px] line-through ml-1">৳3,500</span>
                    </div>
                    <span className="bg-yellow-400 text-blue-900 px-1.5 sm:px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-bold">15% OFF</span>
                  </div>
                </div>
              </div>
            </a>

            {/* Ad 2 - Geometry Set */}
            <a 
              href="https://www.daraz.com.bd/geometry-set/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-emerald-600 to-green-700 rounded-lg sm:rounded-xl p-2.5 sm:p-3 mb-2 sm:mb-3 shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 group hover:scale-105 transform active:scale-95"
            >
              <div className="flex items-start space-x-2 sm:space-x-3">
                <div className="bg-white rounded-md sm:rounded-lg p-1.5 sm:p-2 shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-bold text-[10px] sm:text-xs mb-0.5 sm:mb-1 group-hover:text-yellow-300 transition-colors">Geometry Box Set</h4>
                  <p className="text-emerald-100 text-[8px] sm:text-[10px] mb-1 sm:mb-1.5 leading-tight">Compass, Protractor, Ruler • Metal</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-yellow-300 font-bold text-xs sm:text-sm">৳850</span>
                      <span className="text-emerald-200 text-[8px] sm:text-[9px] line-through ml-1">৳1,200</span>
                    </div>
                    <span className="bg-yellow-400 text-emerald-900 px-1.5 sm:px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-bold">FREE SHIP</span>
                  </div>
                </div>
              </div>
            </a>

            {/* Ad 3 - Digital Measuring Tape */}
            <a 
              href="https://www.daraz.com.bd/laser-distance-meter/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-orange-600 to-red-700 rounded-lg sm:rounded-xl p-2.5 sm:p-3 mb-2 sm:mb-3 shadow-lg hover:shadow-orange-500/50 transition-all duration-300 group hover:scale-105 transform active:scale-95"
            >
              <div className="flex items-start space-x-2 sm:space-x-3">
                <div className="bg-white rounded-md sm:rounded-lg p-1.5 sm:p-2 shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-bold text-[10px] sm:text-xs mb-0.5 sm:mb-1 group-hover:text-yellow-300 transition-colors">Laser Distance Meter 40M</h4>
                  <p className="text-orange-100 text-[8px] sm:text-[10px] mb-1 sm:mb-1.5 leading-tight">Area Calculator • ±2mm • Survey Tool</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-yellow-300 font-bold text-xs sm:text-sm">৳3,200</span>
                      <span className="text-orange-200 text-[8px] sm:text-[9px] line-through ml-1">৳4,500</span>
                    </div>
                    <span className="bg-yellow-400 text-orange-900 px-1.5 sm:px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-bold">HOT DEAL</span>
                  </div>
                </div>
              </div>
            </a>

            {/* Ad 4 - Surveying Compass */}
            <a 
              href="https://www.daraz.com.bd/surveying-compass/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-purple-600 to-pink-700 rounded-lg sm:rounded-xl p-2.5 sm:p-3 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 group hover:scale-105 transform active:scale-95"
            >
              <div className="flex items-start space-x-2 sm:space-x-3">
                <div className="bg-white rounded-md sm:rounded-lg p-1.5 sm:p-2 shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-bold text-[10px] sm:text-xs mb-0.5 sm:mb-1 group-hover:text-yellow-300 transition-colors">Survey Compass</h4>
                  <p className="text-purple-100 text-[8px] sm:text-[10px] mb-1 sm:mb-1.5 leading-tight">360° Rotation • Clinometer • Surveying</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-yellow-300 font-bold text-xs sm:text-sm">৳1,850</span>
                      <span className="text-purple-200 text-[8px] sm:text-[9px] line-through ml-1">৳2,400</span>
                    </div>
                    <span className="bg-yellow-400 text-purple-900 px-1.5 sm:px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-bold">BEST BUY</span>
                  </div>
                </div>
              </div>
            </a>

            {/* Disclaimer */}
            <p className="text-gray-400 text-[7px] sm:text-[8px] text-center mt-2 sm:mt-3 pt-1.5 sm:pt-2 border-t border-white/10">
              Advertisement • Prices may vary
            </p>
          </div>
        </div>
      </div>

      {/* ========== PAGE ROUTING SYSTEM ========== */}
      {/* Render different pages based on currentPage state */}
      {currentPage === 'home' && <HomePage navigateToPage={navigateToPage} />}
      {currentPage === 'shapeSelector' && <ShapeSelectorPage goBack={goBack} shapes={shapes} handleShapeChange={handleShapeChange} />}
      {currentPage === 'aboutUs' && <AboutUsPage goBack={goBack} />}
      {currentPage === 'smartArchitect' && <SmartLandArchitectPage goBack={goBack} />}
      {currentPage === 'formulaMaths' && <FormulaMathsPage goBack={goBack} />}
      
      {/* Calculator Page - Only show when currentPage === 'calculator' */}
      {currentPage === 'calculator' && (
      <>
      {/* Main Content */}
      <div className="relative min-h-[calc(100vh-5rem)] p-4 sm:p-6 lg:p-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Desktop Left Sidebar - Hidden on mobile */}
            <div className="hidden md:block lg:col-span-1 space-y-4">
              {/* About Us Button */}
              <button
                onClick={() => navigateToPage('aboutUs')}
                className="w-full text-left bg-linear-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-5 border border-white/10 shadow-2xl hover:shadow-blue-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 transform"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-linear-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-300 to-cyan-300">About Us</h3>
                </div>
                <p className="text-sm text-blue-200/90 leading-relaxed mb-3">
                  Learn more about our mission and features.
                </p>
                <div className="flex items-center space-x-2 text-cyan-400 font-semibold text-sm">
                  <span>Read More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </button>

              {/* Smart Land Architect Button */}
              <button
                onClick={() => navigateToPage('smartArchitect')}
                className="w-full text-left bg-linear-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-2xl p-5 border border-white/10 shadow-2xl hover:shadow-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 transform"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-linear-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30 shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-300 to-pink-300">Smart Land Architect</h3>
                </div>
                <p className="text-sm text-purple-200/90 leading-relaxed mb-3">
                  AI-powered land planning & optimization.
                </p>
                <div className="flex items-center space-x-2 text-purple-400 font-semibold text-sm">
                  <span>Explore</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </button>

              {/* Formula & Maths Button */}
              <button
                onClick={() => navigateToPage('formulaMaths')}
                className="w-full text-left bg-linear-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl rounded-2xl p-5 border border-white/10 shadow-2xl hover:shadow-green-500/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105 transform"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-linear-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/30 shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-transparent bg-clip-text bg-linear-to-r from-green-300 to-emerald-300">Formula & Maths</h3>
                </div>
                <p className="text-sm text-green-200/90 leading-relaxed mb-3">
                  Understand all calculation formulas.
                </p>
                <div className="flex items-center space-x-2 text-green-400 font-semibold text-sm">
                  <span>View Formulas</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </button>

              {/* Quick Info - Current Shape */}
              <div className="bg-linear-to-br from-orange-500/10 to-yellow-500/10 backdrop-blur-xl rounded-2xl p-5 border border-white/10 shadow-2xl">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-linear-to-br from-orange-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30 shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-transparent bg-clip-text bg-linear-to-r from-orange-300 to-yellow-300">Current Shape</h3>
                </div>
                <p className="text-white text-xl font-bold mb-1">
                  {shapes.find(s => s.id === selectedShape)?.name}
                </p>
                <p className="text-emerald-300 text-lg font-semibold">
                  {shapes.find(s => s.id === selectedShape)?.namebn}
                </p>
              </div>

              {/* Advertisement Section */}
              <div className="bg-linear-to-br from-slate-800/95 to-gray-900/95 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-2xl mt-4">
                <div className="flex items-center space-x-2 mb-4 pb-3 border-b border-white/10">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <h3 className="text-sm font-bold text-yellow-300">Sponsored Products</h3>
                </div>
                
                {/* Ad 1 - Scientific Calculator */}
                <a 
                  href="https://www.daraz.com.bd/casio-scientific-calculator/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-3 mb-3 shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group hover:scale-105 transform active:scale-95"
                >
                  <div className="flex items-start space-x-3">
                    <div className="bg-white rounded-lg p-2 shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-xs mb-1 group-hover:text-yellow-300 transition-colors">CASIO FX-991EX Scientific Calculator</h4>
                      <p className="text-blue-100 text-[10px] mb-1.5 leading-tight">ClassWiz with HD Display • 552 Functions • Ideal for Land Surveying</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-yellow-300 font-bold text-sm">৳2,950</span>
                          <span className="text-blue-200 text-[9px] line-through ml-1">৳3,500</span>
                        </div>
                        <span className="bg-yellow-400 text-blue-900 px-2 py-0.5 rounded text-[9px] font-bold">15% OFF</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center mt-2 text-blue-100 text-[9px] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Click to view product</span>
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>

                {/* Ad 2 - Geometry Set */}
                <a 
                  href="https://www.daraz.com.bd/geometry-set/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-gradient-to-br from-emerald-600 to-green-700 rounded-xl p-3 mb-3 shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 group hover:scale-105 transform active:scale-95"
                >
                  <div className="flex items-start space-x-3">
                    <div className="bg-white rounded-lg p-2 shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-xs mb-1 group-hover:text-yellow-300 transition-colors">Professional Geometry Box Set</h4>
                      <p className="text-emerald-100 text-[10px] mb-1.5 leading-tight">Compass, Protractor, Ruler, Set Squares • Metal Construction • Engineer Grade</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-yellow-300 font-bold text-sm">৳850</span>
                          <span className="text-emerald-200 text-[9px] line-through ml-1">৳1,200</span>
                        </div>
                        <span className="bg-yellow-400 text-emerald-900 px-2 py-0.5 rounded text-[9px] font-bold">FREE SHIP</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center mt-2 text-emerald-100 text-[9px] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Click to view product</span>
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>

                {/* Ad 3 - Digital Measuring Tape */}
                <a 
                  href="https://www.daraz.com.bd/laser-distance-meter/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-gradient-to-br from-orange-600 to-red-700 rounded-xl p-3 mb-3 shadow-lg hover:shadow-orange-500/50 transition-all duration-300 group hover:scale-105 transform active:scale-95"
                >
                  <div className="flex items-start space-x-3">
                    <div className="bg-white rounded-lg p-2 shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-xs mb-1 group-hover:text-yellow-300 transition-colors">Laser Distance Meter 40M</h4>
                      <p className="text-orange-100 text-[10px] mb-1.5 leading-tight">Digital Tape Measure • Area/Volume Calculator • ±2mm Accuracy • Land Survey Tool</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-yellow-300 font-bold text-sm">৳3,200</span>
                          <span className="text-orange-200 text-[9px] line-through ml-1">৳4,500</span>
                        </div>
                        <span className="bg-yellow-400 text-orange-900 px-2 py-0.5 rounded text-[9px] font-bold">HOT DEAL</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center mt-2 text-orange-100 text-[9px] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Click to view product</span>
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>

                {/* Ad 4 - Surveying Compass */}
                <a 
                  href="https://www.daraz.com.bd/surveying-compass/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-gradient-to-br from-purple-600 to-pink-700 rounded-xl p-3 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 group hover:scale-105 transform active:scale-95"
                >
                  <div className="flex items-start space-x-3">
                    <div className="bg-white rounded-lg p-2 shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-xs mb-1 group-hover:text-yellow-300 transition-colors">Professional Survey Compass</h4>
                      <p className="text-purple-100 text-[10px] mb-1.5 leading-tight">360° Rotation • Liquid Filled • Clinometer Included • Land Surveying Essential</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-yellow-300 font-bold text-sm">৳1,850</span>
                          <span className="text-purple-200 text-[9px] line-through ml-1">৳2,400</span>
                        </div>
                        <span className="bg-yellow-400 text-purple-900 px-2 py-0.5 rounded text-[9px] font-bold">BEST BUY</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center mt-2 text-purple-100 text-[9px] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Click to view product</span>
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>

                {/* Disclaimer */}
                <p className="text-gray-400 text-[8px] text-center mt-3 pt-2 border-t border-white/10">
                  Advertisement • Prices may vary
                </p>
              </div>
            </div>

            {/* Main Calculator Card */}
            <div className="lg:col-span-3">
              {/* Back Button */}
              <button
                onClick={goBack}
                className="mb-6 flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-xl border border-white/20 text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Back to Shape Selection / আকৃতি নির্বাচনে ফিরুন</span>
              </button>
              
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
                  {/* Shape Selector */}
                  <div className="mb-8">
                    <h3 className="text-center text-lg sm:text-xl font-bold text-gray-800 mb-4">
                      Select Land Shape / জমির আকৃতি নির্বাচন করুন
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
                      {shapes.map((shape) => (
                        <button
                          key={shape.id}
                          onClick={() => handleShapeChange(shape.id)}
                          className={`group relative p-4 rounded-2xl border-3 transition-all duration-300 transform hover:scale-105 ${
                            selectedShape === shape.id
                              ? 'bg-linear-to-br from-cyan-500 to-blue-600 border-blue-600 shadow-2xl shadow-blue-500/50'
                              : 'bg-white border-gray-300 hover:border-blue-400 shadow-lg hover:shadow-xl'
                          }`}
                        >
                          <div className="text-center">
                            <div className={`text-4xl mb-2 ${selectedShape === shape.id ? 'text-white' : 'text-blue-600'}`}>
                              {shape.icon}
                            </div>
                            <p className={`text-xs sm:text-sm font-bold ${selectedShape === shape.id ? 'text-white' : 'text-gray-700'}`}>
                              {shape.name}
                            </p>
                            <p className={`text-[10px] sm:text-xs ${selectedShape === shape.id ? 'text-blue-100' : 'text-gray-500'}`}>
                              {shape.namebn}
                            </p>
                          </div>
                          {selectedShape === shape.id && (
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dynamic Input Fields Based on Selected Shape */}
                  <div className="mb-8">
                    {selectedShape === 'irregular' && (
                      <div className="relative grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
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
                    )}

                    {selectedShape === 'rectangle' && (
                      <div className="max-w-md mx-auto space-y-4">
                        <div className="flex items-center justify-center mb-6">
                          <div className="text-8xl text-blue-600">▭</div>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">
                            Length / দৈর্ঘ্য (feet)
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="length"
                              value={measurements.length}
                              onChange={handleInputChange}
                              placeholder="0.00"
                              className="w-full px-4 py-4 text-lg border-3 border-blue-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/50 focus:border-blue-600 text-center font-bold transition-all shadow-lg hover:shadow-xl bg-white"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">ft</span>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">
                            Width / প্রস্থ (feet)
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="width"
                              value={measurements.width}
                              onChange={handleInputChange}
                              placeholder="0.00"
                              className="w-full px-4 py-4 text-lg border-3 border-green-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-500/50 focus:border-green-600 text-center font-bold transition-all shadow-lg hover:shadow-xl bg-white"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">ft</span>
                          </div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-xl border-2 border-blue-200">
                          <p className="text-xs text-center text-gray-600 font-semibold">
                            Formula: Length × Width
                          </p>
                        </div>
                      </div>
                    )}

                    {selectedShape === 'triangle' && (
                      <div className="max-w-md mx-auto space-y-4">
                        <div className="flex items-center justify-center mb-6">
                          <div className="text-8xl text-blue-600">△</div>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">
                            Base / ভিত্তি (feet)
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="base"
                              value={measurements.base}
                              onChange={handleInputChange}
                              placeholder="0.00"
                              className="w-full px-4 py-4 text-lg border-3 border-blue-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/50 focus:border-blue-600 text-center font-bold transition-all shadow-lg hover:shadow-xl bg-white"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">ft</span>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">
                            Height / উচ্চতা (feet)
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="height"
                              value={measurements.height}
                              onChange={handleInputChange}
                              placeholder="0.00"
                              className="w-full px-4 py-4 text-lg border-3 border-green-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-500/50 focus:border-green-600 text-center font-bold transition-all shadow-lg hover:shadow-xl bg-white"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">ft</span>
                          </div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-xl border-2 border-blue-200">
                          <p className="text-xs text-center text-gray-600 font-semibold">
                            Formula: (Base × Height) / 2
                          </p>
                        </div>
                      </div>
                    )}

                    {selectedShape === 'circle' && (
                      <div className="max-w-md mx-auto space-y-4">
                        <div className="flex items-center justify-center mb-6">
                          <div className="text-8xl text-blue-600">○</div>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">
                            Radius / ব্যাসার্ধ (feet)
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="radius"
                              value={measurements.radius}
                              onChange={handleInputChange}
                              placeholder="0.00"
                              className="w-full px-4 py-4 text-lg border-3 border-blue-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/50 focus:border-blue-600 text-center font-bold transition-all shadow-lg hover:shadow-xl bg-white"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">ft</span>
                          </div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-xl border-2 border-blue-200">
                          <p className="text-xs text-center text-gray-600 font-semibold">
                            Formula: π × Radius² (π ≈ 3.14159)
                          </p>
                        </div>
                      </div>
                    )}

                    {selectedShape === 'square' && (
                      <div className="max-w-md mx-auto space-y-4">
                        <div className="flex items-center justify-center mb-6">
                          <div className="text-8xl text-blue-600">□</div>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">
                            Side Length / বাহুর দৈর্ঘ্য (feet)
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="length"
                              value={measurements.length}
                              onChange={handleInputChange}
                              placeholder="0.00"
                              className="w-full px-4 py-4 text-lg border-3 border-blue-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/50 focus:border-blue-600 text-center font-bold transition-all shadow-lg hover:shadow-xl bg-white"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">ft</span>
                          </div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-xl border-2 border-blue-200">
                          <p className="text-xs text-center text-gray-600 font-semibold">
                            Formula: Side × Side
                          </p>
                        </div>
                      </div>
                    )}

                    {selectedShape === 'trapezoid' && (
                      <div className="max-w-md mx-auto space-y-4">
                        <div className="flex items-center justify-center mb-6">
                          <div className="text-8xl text-blue-600">⏢</div>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">
                            Parallel Side 1 / সমান্তরাল বাহু ১ (feet)
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="parallelSide1"
                              value={measurements.parallelSide1}
                              onChange={handleInputChange}
                              placeholder="0.00"
                              className="w-full px-4 py-4 text-lg border-3 border-blue-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/50 focus:border-blue-600 text-center font-bold transition-all shadow-lg hover:shadow-xl bg-white"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">ft</span>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">
                            Parallel Side 2 / সমান্তরাল বাহু ২ (feet)
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="parallelSide2"
                              value={measurements.parallelSide2}
                              onChange={handleInputChange}
                              placeholder="0.00"
                              className="w-full px-4 py-4 text-lg border-3 border-purple-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-500/50 focus:border-purple-600 text-center font-bold transition-all shadow-lg hover:shadow-xl bg-white"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-purple-600 bg-purple-100 px-2 py-1 rounded">ft</span>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">
                            Height / উচ্চতা (feet)
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="height"
                              value={measurements.height}
                              onChange={handleInputChange}
                              placeholder="0.00"
                              className="w-full px-4 py-4 text-lg border-3 border-green-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-500/50 focus:border-green-600 text-center font-bold transition-all shadow-lg hover:shadow-xl bg-white"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">ft</span>
                          </div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-xl border-2 border-blue-200">
                          <p className="text-xs text-center text-gray-600 font-semibold">
                            Formula: ((Side1 + Side2) / 2) × Height
                          </p>
                        </div>
                      </div>
                    )}
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

                      {/* Formula Display */}
                      <div className="mt-6 pt-6 border-t-4 border-blue-300 relative z-10">
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border-2 border-blue-200 shadow-lg">
                          <div className="flex items-center justify-center space-x-2 mb-2">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            <p className="text-sm font-bold text-gray-700">Shape Used / ব্যবহৃত আকৃতি:</p>
                          </div>
                          <p className="text-lg font-black text-blue-600 text-center mb-3">{results.shape}</p>
                          <div className="bg-linear-to-r from-yellow-100 to-orange-100 rounded-lg p-3 border border-orange-300">
                            <p className="text-xs sm:text-sm text-center text-gray-800 font-mono font-bold">
                              Formula: {results.formula}
                            </p>
                          </div>
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
      </>
      )}
      {/* ========== END CALCULATOR PAGE ========== */}

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
