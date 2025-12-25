import { useState } from 'react';

// ============ PAGE COMPONENTS ============

// Home/Landing Page Component
const HomePage = ({ navigateToPage }) => (
  <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
    <div className="max-w-6xl mx-auto text-center space-y-12 py-20">
      {/* Hero Section */}
      <div className="space-y-6 animate-slideInBounce">
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 bg-linear-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/50 transform hover:scale-110 transition-all duration-300 animate-float">
            <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-blue-300 to-purple-300 leading-tight drop-shadow-2xl">
          Land Area Calculator
        </h1>

        <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-emerald-300 to-cyan-300">
          ভূমি ক্ষেত্রফল ক্যালকুলেটর
        </p>

        <p className="text-xl sm:text-2xl text-blue-200/90 max-w-3xl mx-auto leading-relaxed font-medium">
          Professional land area calculation tool supporting 6 different shapes with accurate formulas and instant results
        </p>

        <p className="text-lg sm:text-xl text-emerald-300/80 max-w-2xl mx-auto font-medium">
          পেশাদার ভূমি পরিমাপ সিস্টেম - ৬ ধরনের আকৃতি সমর্থন সহ সঠিক হিসাব
        </p>
      </div>

      {/* Main CTA Button */}
      <div className="flex flex-col items-center space-y-6">
        <button
          onClick={() => navigateToPage('shapeSelector')}
          className="group relative px-12 py-6 bg-linear-to-r from-cyan-500 via-blue-600 to-purple-600 text-white text-2xl font-black rounded-2xl shadow-2xl shadow-blue-500/50 hover:shadow-blue-400/70 transform hover:scale-105 transition-all duration-300 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.3)_50%,transparent_75%)] bg-size-[250%_250%] group-hover:animate-shimmer"></div>
          <div className="relative flex items-center space-x-4">
            <span>Start Calculating</span>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </button>

        <p className="text-lg text-purple-300 font-semibold">হিসাব শুরু করুন</p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
          <div className="text-5xl mb-4">📐</div>
          <h3 className="text-xl font-bold text-cyan-300 mb-2">6 Shape Types</h3>
          <p className="text-blue-200 text-sm">Irregular, Rectangle, Square, Triangle, Circle, Trapezoid</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
          <div className="text-5xl mb-4">⚡</div>
          <h3 className="text-xl font-bold text-green-300 mb-2">Instant Results</h3>
          <p className="text-blue-200 text-sm">Get area in Square Feet and Shotok instantly</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
          <div className="text-5xl mb-4">🌍</div>
          <h3 className="text-xl font-bold text-purple-300 mb-2">Bilingual</h3>
          <p className="text-blue-200 text-sm">Full support for English and Bengali</p>
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

// Smart Land Architect Page Component
const SmartLandArchitectPage = ({ goBack }) => (
  <div className="relative z-10 min-h-screen px-4 py-12">
    <div className="max-w-5xl mx-auto">
      {/* Back Button */}
      <button
        onClick={goBack}
        className="mb-8 flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-xl border border-white/20 text-white font-semibold transition-all duration-300 hover:scale-105 text-sm sm:text-base"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span>Back to Home</span>
      </button>

      {/* Page Header */}
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-blue-300 to-purple-300">
          Smart Land Architect
        </h2>
        <p className="text-2xl sm:text-3xl text-emerald-300 font-bold">স্মার্ট ভূমি স্থপতি</p>
        <p className="text-base sm:text-lg text-blue-200/80 max-w-2xl mx-auto">
          Intelligent land planning and optimization system for modern architecture
        </p>
      </div>

      {/* Content Cards */}
      <div className="space-y-6 sm:space-y-8">
        {/* AI-Powered Planning */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
          <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-linear-to-br from-cyan-400 to-blue-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shrink-0">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-cyan-300">AI-Powered Planning</h3>
          </div>
          <p className="text-sm sm:text-lg text-blue-200 leading-relaxed mb-3 sm:mb-4">
            Our Smart Land Architect uses advanced algorithms to help you optimize land usage. Whether you're planning residential, commercial, or agricultural projects, get intelligent suggestions for the best layout and utilization.
          </p>
          <p className="text-sm sm:text-lg text-emerald-300 leading-relaxed font-medium">
            আমাদের স্মার্ট ভূমি স্থপতি উন্নত অ্যালগরিদম ব্যবহার করে আপনার জমির সর্বোত্তম ব্যবহার নিশ্চিত করে।
          </p>
        </div>

        {/* Features Grid */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 hover:border-green-400/50 transition-all duration-300">
          <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-linear-to-br from-green-400 to-emerald-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shrink-0">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-green-300">Smart Features</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-black/30 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10">
              <h4 className="text-base sm:text-xl font-bold text-white mb-2">📐 Optimal Layout</h4>
              <p className="text-blue-200 text-xs sm:text-sm">Automatically suggests the best layout based on land shape and dimensions.</p>
            </div>
            <div className="bg-black/30 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10">
              <h4 className="text-base sm:text-xl font-bold text-white mb-2">🏗️ Construction Planning</h4>
              <p className="text-blue-200 text-xs sm:text-sm">Get recommendations for building placement and orientation.</p>
            </div>
            <div className="bg-black/30 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10">
              <h4 className="text-base sm:text-xl font-bold text-white mb-2">🌳 Green Space Design</h4>
              <p className="text-blue-200 text-xs sm:text-sm">Optimize garden, lawn, and green area distribution.</p>
            </div>
            <div className="bg-black/30 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10">
              <h4 className="text-base sm:text-xl font-bold text-white mb-2">🚗 Access & Parking</h4>
              <p className="text-blue-200 text-xs sm:text-sm">Smart suggestions for driveways, pathways, and parking areas.</p>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
          <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-linear-to-br from-purple-400 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shrink-0">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-purple-300">Use Cases</h3>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <div className="bg-black/30 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-white/10">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2">🏘️ Residential Projects</h4>
              <p className="text-sm sm:text-base text-blue-200">Design optimal layouts for single homes, duplex houses, or multi-unit residential complexes with proper spacing and amenities.</p>
            </div>
            <div className="bg-black/30 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-white/10">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2">🏢 Commercial Development</h4>
              <p className="text-sm sm:text-base text-blue-200">Plan shopping centers, office buildings, or mixed-use developments with efficient space utilization and accessibility.</p>
            </div>
            <div className="bg-black/30 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-white/10">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2">🌾 Agricultural Planning</h4>
              <p className="text-sm sm:text-base text-blue-200">Optimize farm layouts, irrigation systems, and crop distribution based on land topography and soil conditions.</p>
            </div>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="bg-linear-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-blue-400/50">
          <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-linear-to-br from-blue-400 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shrink-0 animate-pulse">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-blue-300">Coming Soon!</h3>
          </div>
          <p className="text-sm sm:text-lg text-blue-200 text-center leading-relaxed mb-3 sm:mb-4">
            The Smart Land Architect module is currently under development. Stay tuned for advanced 3D visualization, cost estimation, and AI-powered recommendations!
          </p>
          <p className="text-sm sm:text-base text-emerald-300 text-center font-medium">
            স্মার্ট ভূমি স্থপতি মডিউল শীঘ্রই আসছে। থাকুন আমাদের সাথে!
          </p>
        </div>
      </div>
    </div>
  </div>
);



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
