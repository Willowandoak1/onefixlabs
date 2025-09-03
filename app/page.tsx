'use client'

import { useState } from 'react'

export default function Page() {
  const [studyDropdownOpen, setStudyDropdownOpen] = useState(false)
  const [studyDropdownOpen2, setStudyDropdownOpen2] = useState(false)
  const [studyDropdownOpen3, setStudyDropdownOpen3] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Banner - Dark Blue */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-blue-700 text-white py-0 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-between">
            {/* Left - Logo Only */}
            <div className="flex items-center">
              <img 
                src="/images/whitelogo.png" 
                alt="ONEFIX LABS Logo" 
                className="h-12 sm:h-16 w-auto"
              />
            </div>
            
            {/* Center - Promotional Offer */}
            <div className="hidden sm:block text-lg sm:text-2xl font-bold text-center">
              Up to 70% off!
            </div>
            
            {/* Right - CTA Button */}
            <a 
              href="https://www.onefixlabs.com/products/onefix%E2%84%A2-advanced-micro-infusion-hair-regrowth-kit?variant=55476048822607" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-3 sm:px-6 py-1 sm:py-2 rounded-lg transition-colors duration-200 inline-block text-xs sm:text-base whitespace-nowrap"
            >
              Try OneFix Today
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="pt-16 sm:pt-20 py-2 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-16 items-start">
            
            {/* Left Column - Text Content */}
            <div className="space-y-2 sm:space-y-6">
              {/* Question/Category */}
              <div className="text-lg font-medium text-gray-700 mt-2 sm:mt-4">
                ARE YOU LOSING HAIR?
              </div>
              
              {/* Main Headline */}
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Reverse Hair Loss & See Thicker Growth In Weeks
              </h1>
              
              {/* Benefits List */}
              <div className="space-y-2 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 leading-relaxed">
                    Addresses the underlying cause of thinning, not just the symptoms.
                  </span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 leading-relaxed">
                    Scientifically validated to work against genetic hair loss, DHT buildup, stress, nutrition gaps, and age-related thinning
                  </span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 leading-relaxed">
                    Gentle, painless application in 1 minute. 
                  
                  </span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 leading-relaxed">
                    Supports long-term follicle health for denser, stronger hair.
                  </span>
                </div>
              </div>
            </div>
            
            {/* Right Column - Hero Image */}
            <div className="text-center">
              {/* Hero Image */}
              <div className="relative mb-6">
                <img 
                  src="/images/main1.png" 
                  alt="ONEFIX LABS Hair Regrowth System"
                  className="w-[500px] h-[500px] object-cover rounded-lg shadow-lg"
                />
              </div>
              
              {/* Customer Satisfaction Callout */}
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-6 py-3 rounded-lg transition-colors duration-200">
                ✨ 55981+ Men Love OneFix Labs ✨
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* "As seen in:" Section */}
      <section className="py-6 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-lg font-medium text-gray-700 mb-8">As seen in:</h2>
            <div className="flex items-center justify-center space-x-4 sm:space-x-8 lg:space-x-12 opacity-80 flex-wrap">
              {/* Forbes Logo */}
              <img 
                src="/images/3.png" 
                alt="Forbes" 
                className="h-16 sm:h-20 lg:h-28 w-auto object-contain"
              />
              
              {/* Men's Health Logo */}
              <img 
                src="/images/4.png" 
                alt="Men's Health" 
                className="h-16 sm:h-20 lg:h-28 w-auto object-contain"
              />
              
              {/* SPY Logo */}
              <img 
                src="/images/5.png" 
                alt="SPY" 
                className="h-16 sm:h-20 lg:h-28 w-auto object-contain"
              />
              
              {/* Rolling Stone Logo */}
              <img 
                src="/images/6.png" 
                alt="Rolling Stone" 
                className="h-16 sm:h-20 lg:h-28 w-auto object-contain"
              />
              
              {/* GQ Logo */}
              <img 
                src="/images/9.png" 
                alt="GQ" 
                className="h-16 sm:h-20 lg:h-28 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Hair Loss Confidence Section */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* Main Headline */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Say Goodbye to Hair Loss and Hello to Confidence
            </h2>
            
            {/* Introductory Text */}
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Did You Know? <span className="font-bold">86% of Men</span> experience <span className="font-bold">thinning hair</span>, a <span className="font-bold">receding hairline</span>, and <span className="font-bold">bald
                   spots</span> before their 30s...
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                ...The daily anxiety of seeing your <span className="font-bold">hairline fade away</span>, feeling inesecure about your <span className="font-bold">thinning strands</span> and <span className="font-bold">exposed scalp</span>, and watching your hair lose thickness <span className="font-bold"></span> and <span className="font-bold">fullness</span> with every glance in the mirror.
              </p>
            </div>
            
            {/* Single Editable Image */}
            <div className="mt-12">
              <div className="relative max-w-4xl mx-auto">
                <img 
                  src="/images/comparison2.png" 
                  alt="Hair Loss Comparison" 
                  className="w-full max-w-3xl h-auto rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Research on DHT Section */}
      <section className="py-2 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-0">
            {/* Main Title */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
              New Scientific Findings Uncover the Root Cause of Hair Loss
            </h2>
            
            {/* Introductory Paragraphs */}
            <div className="max-w-4xl mx-auto space-y-6 text-left">
              <p className="text-lg text-gray-700 leading-relaxed">
              Top hair loss experts have identified the leading cause of hair loss: <span className="font-bold">DHT (Dihydrotestosterone)</span> This hormone is silently attacking your hair follicles right now, as you read this.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
              DHT creates a suffocating “stranglehold” on your follicles, cutting off the vital nutrients they need to stay strong. Over time, this starvation causes your follicles to shrink, <span className="font-bold">weakening them until they eventually die.</span>
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
              The signs are clear and visible: <span className="font-bold">daily hair shedding, a retreating hairline, thinning strands,</span> and patches of exposed scalp—<span className="font-bold">each one a warning that your follicles are under attack.</span>
              </p>
            </div>
            
            {/* Highlighted Warning Box */}
            <div className="mt-12 max-w-3xl mx-auto">
              <div className="bg-pink-100 border border-pink-200 rounded-lg p-8 text-center mx-4 my-4">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <p className="text-lg text-gray-800 leading-relaxed">
                  Research reveals that <span className="font-bold">8 out of 10 men</span> have dangerously high levels of DHT, a hormone that&apos;s suffocating their hair follicles and preventing them from getting the nutrients they need to thrive.
                </p>
              </div>
            </div>
            
            {/* Consequences/Symptoms List */}
            <div className="mt-12 max-w-4xl mx-auto text-left">
              <p className="text-lg text-gray-700 mb-6">
              Your hair is being deprived of essential nutrients, resulting in:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                  Noticeable thinning patches that make you appear older than you feel
                  </span>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                  Constant shedding, with strands left behind on your pillow and in the shower
                  </span>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                  A receding hairline that becomes harder to cover or conceal
                  </span>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                  Accumulating DHT buildup, gradually suffocating and weakening your follicles
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DHT Percentage Chart Section */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            {/* Chart Title */}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              PERCENTAGE OF DHT IN THE SCALP
            </h2>
            
            {/* DHT Chart Image */}
            <div className="mt-4">
              <div className="relative max-w-4xl mx-auto">
                <img 
                  src="/images/chart1.png" 
                  alt="DHT Percentage Chart" 
                  className="w-full max-w-xl h-auto rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
            
            {/* Description Text */}
            <div className="mt-8 max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
              This chart illustrates how DHT levels rise with age, highlighting the gradual attack on hair follicles and the increasing impact over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Breakthrough Discovery Section */}
      <section className="py-4 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* Main Title */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            The Truth Behind Hair Loss Treatments: Why 99% Are Ineffective
            </h2>
            
            {/* Warning/Information Box */}
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="bg-pink-100 border border-pink-200 rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div className="space-y-4 text-left">
                  <p className="text-lg text-gray-800 leading-relaxed">
                    <span className="font-bold">Harvard Health</span> reports that our hair follicles can absorb <span className="font-bold">just 15%</span> of the ingredients applied topically to the scalp, and <span className="font-bold">up to 25%</span> when taken orally. But when it comes to hair loss shampoos? The absorption rate is <span className="font-bold">zero!</span>
                  </p>
                  <p className="text-lg text-gray-800 leading-relaxed">
                  This means the majority of the active ingredients are <span className="font-bold">lost</span>—never reaching the DHT buildup where the real damage to your follicles occurs.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Subsequent Text Content */}
            <div className="mt-12 max-w-4xl mx-auto space-y-6 text-left">
              <p className="text-lg text-gray-700 leading-relaxed">
              The problem with 99% of &quot;<span className="font-bold">hair thickening</span>&quot; and &quot;<span className="font-bold">restoring</span>&quot; treatments treatments is that they never target the root cause. These products are designed to sit on the surface of your scalp, leaving the real issue unaddressed.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Serums? They barely penetrate deep enough.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Supplements? They don’t absorb enough to make a noticeable difference.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
              Hair loss shampoos? You <span className="font-bold">wash them out</span> before they can do anything!
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-bold">It’s almost unbelievable, isn’t it?!</span>
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
              As a result, these treatments have <span className="font-bold">little to no impact.</span>. No thickening. No regrowth. No restoration. Simply put, they don’t work.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Meanwhile, <span className="font-bold">DHT levels keep rising</span>, worsening hair loss day by day. And by the time most men notice, it’s often already too late.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editable Scientific Illustration Section */}
      <section className="py-4 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* Scientific Illustration GIF */}
            <div className="mt-8 flex justify-center">
              <div className="relative">
                <img 
                  src="/images/gif2.gif" 
                  alt="Scientific Illustration" 
                  className="w-[35rem] h-[35rem] object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            {/* Description Text */}
            <div className="mt-4 max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
              This scientific illustration shows how traditional topical treatments fail to penetrate deep enough to target the hair follicles, where DHT causes the most damage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DANGER: Every Day You Delay Section */}
      <section className="py-4 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* Main Title */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              WARNING: Every Day You Wait, DHT Tightens its Hold
            </h2>
            
            {/* Subtitle */}
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Your Hair Loss Worsens As You Read This...
            </h3>
            
            {/* Introductory Paragraph */}
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                At the International Hair Science Symposium, experts uncovered a startling truth — once DHT begins to attack your hair follicles, without swift intervention:
              </p>
            </div>
            
            {/* Consequences List */}
            <div className="mt-12 max-w-4xl mx-auto space-y-4 text-left">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-xl">✕</span>
                </div>
                <span className="text-lg text-gray-700 leading-relaxed">
                Your follicles may shut down completely, making regrowth nearly impossible
                </span>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-xl">✕</span>
                </div>
                <span className="text-lg text-gray-700 leading-relaxed">
                Thinning accelerates, causing your hair to weaken more each day
                </span>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-xl">✕</span>
                </div>
                <span className="text-lg text-gray-700 leading-relaxed">
                The vibrant, youthful hair you once had will fade away
                </span>
              </div>
            </div>
            
            {/* Before & After Image */}
            <div className="mt-6">
              <div className="relative max-w-5xl mx-auto">
                <img 
                  src="/images/comparison3.png" 
                  alt="Before and After Hair Loss Comparison" 
                  className="w-full max-w-3xl h-auto rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Micro-Infusion Hair System Section */}
      <section className="py-2 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2">
            {/* Main Title */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            The First Real Solution for Hair Regrowth: Proven, Faster, and Stronger Than Ever
            </h2>
            
            {/* Introductory Paragraph */}
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
              The International Journal of Hair Restoration Reveals a Game-Changing Solution to End Hair Loss: <span className="font-bold">The Clinically Proven Micro-Infusion Hair System</span>
              </p>
            </div>
            
            {/* First Image - Microneedle GIF */}
            <div className="mt-0">
              <div className="relative max-w-4xl mx-auto">
                <img 
                  src="/images/microneedle1.gif" 
                  alt="Microneedle Technology" 
                  className="w-full max-w-2xl h-auto rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
            
            {/* Second Image - News Articles */}
            <div className="mt-0">
              <div className="relative max-w-2xl mx-auto">
                <img 
                  src="/images/news.png" 
                  alt="News Articles" 
                  className="w-full max-w-2xl h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Micro-Infusion & AlphaInfuse™ Results Section */}
      <section className="py-4 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* Light Green Banner with Checkmark */}
            <div className="bg-green-100 rounded-lg p-8 max-w-5xl mx-auto">
              <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </div>
              <p className="text-lg text-gray-800 leading-relaxed">
                The secret lies in a <span className="font-bold">cutting-edge</span> high-absorption delivery system called <span className="font-bold">Micro-Infusion</span>, combined with a clinically proven formula that deeply penetrates the scalp. This powerful system neutralizes DHT and delivers essential nutrients directly to your hair follicles, restoring their health and vitality.
              </p>
            </div>
            
            {/* Results Introduction */}
            <div className="mt-8">
              <p className="text-xl text-gray-700 font-medium">
                And the results speak for themselves:
              </p>
            </div>
            
            {/* Bulleted List of Benefits/Results */}
            <div className="mt-8 max-w-4xl mx-auto space-y-4 text-left">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-bold">300% increase</span> Formula Absorption for deeper, more effective results
                </span>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-bold">5X faster</span> Hair Growth thanks to powerful micro-needle stimulation
                </span>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-bold">75% boost</span> in Hair Thickness, visibly fuller and healthier strands
                </span>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-lg text-gray-700 leading-relaxed">
                Neutralizes DHT to protect and revitalize your hair follicles
                </span>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-lg text-gray-700 leading-relaxed">
                Dramatic Improvement in Hair Density, for a fuller, thicker look
                </span>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-lg text-gray-700 leading-relaxed">
                Restores Receding Hairlines and Fills Thin Spots with strong, new growth
                </span>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-lg text-gray-700 leading-relaxed">
                Transforms Fragile, Lifeless Strands into thick, vibrant hair
                </span>
              </div>
            </div>
            
            {/* Concluding Paragraph */}
            <div className="mt-12 max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
              Thanks to this groundbreaking discovery, the <span className="font-bold">OneFix™ Lab&apos;s Hair Regrowth System</span> has helped thousands of men restore the hair they believed was lost forever. It’s undeniably the most powerful and effective hair restoration solution ever created.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced 3 Scientific Innovations Section with Images */}
      <section className="pt-8 pb-2 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2">
            {/* Main Header */}
            <div className="mb-2">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Unlock Thicker, More Attractive Hair Fast
              </h2>
              <p className="text-xl text-gray-600">
                The 3 scientific innovations behind Onefix™ Hair Regrowth System
              </p>
            </div>

            {/* Innovation 1: Advanced Delivery System */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              {/* Left Column - Text Content */}
              <div className="space-y-6 text-left">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  1. Advanced Delivery System
                </h3>
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                  To effectively address the root cause of hair loss, surface-level application simply isn&apos;t enough.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <span className="font-bold">Micro-Infusion Technology</span> creates <span className="font-bold">microscopic channels</span>in the scalp, enhancing ingredient absorption by up to <span className="font-bold">300%</span> and delivering <span className="font-bold">10-15x more active compounds</span> directly to the follicles
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                  This revolutionary breakthrough not only <span className="font-bold">halts hair loss instantly</span> but also accelerates <span className="font-bold">hair growth for visible results</span>.
                  </p>
                </div>
                <div className="relative">
                  <button 
                    onClick={() => setStudyDropdownOpen(!studyDropdownOpen)}
                    className="inline-flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors duration-200"
                  >
                    <span>LINKED STUDY</span>
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${studyDropdownOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  
                  {/* Dropdown Menu */}
                  {studyDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-96 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Study</h4>
                      <div className="space-y-3 text-sm text-gray-700">
                        <p className="italic">
                          &ldquo;It doesn&apos;t matter how powerful your formula is if it can&apos;t reach the root of the problem.&rdquo; This is the conclusion drawn from recent studies conducted by leading trichologists and dermatologists.
                        </p>
                        <p>
                        A study published in the Journal of Trichology and Cosmetology confirms that micro-needles significantly enhance absorption, far outperforming conventional hair loss treatments.
                        </p>
                        <p>
                        This innovative delivery system is clinically proven to neutralize DHT buildup, nourish the scalp with essential nutrients, and reactivate dormant follicles—making it vastly more effective than traditional approaches.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Right Column - Video */}
              <div className="relative">
                <video 
                  src="/images/UGC1.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Innovation 2: Dual-Action Formula */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              {/* Left Column - Video */}
              <div className="relative">
                <video 
                  src="/images/hair1.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              {/* Right Column - Text Content */}
              <div className="space-y-6 text-left">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  2. Dual-Action Formula
                </h3>
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The <span className="font-bold">OneFix™ Hair Regrowth System</span> combines a clinically proven natural blend, delivering real results without any side effects.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <span className="font-bold">Apigenin -</span> interrupts PGD2. <span className="font-bold">Saw Palmetto -</span> the enzyme that converts testosterone into DHT and, <span className="font-bold">Caffeine -</span> Stimulates hair follicles and counteract the effects of DHT.
                  </p>
                </div>
                <div className="relative">
                  <button
                    onClick={() => setStudyDropdownOpen2(!studyDropdownOpen2)}
                    className="inline-flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors duration-200"
                  >
                    <span>LINKED STUDY</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${studyDropdownOpen2 ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {studyDropdownOpen2 && (
                    <div className="absolute top-full left-0 mt-2 w-96 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Study</h4>
                      <div className="space-y-3 text-sm text-gray-700">
                        <p className="italic">
                          A comprehensive review published in the Journal of Trichology confirms that Apigenin enhances scalp circulation, promoting a steady supply of oxygen and essential nutrients to hair follicles, which may support healthier hair growth.
                        </p>
                        <p>
                        Studies show that Saw Palmetto helps accelerate the hair growth cycle by reducing DHT levels, leading to faster regrowth. This effect outperforms traditional treatments like 2% Minoxidil in promoting stronger, thicker hair.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Innovation 3: Micro-Needle Stimulation */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-6 text-left">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  3. Micro-Needle Stimulation
                </h3>
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                  Micro-needles do more than enhance absorption—they actively stimulate the scalp to boost hair growth.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The <span className="font-bold">tiny punctures</span> trigger the body’s natural healing process, directing <span className="font-bold">more nutrients</span> to the affected areas <span className="font-bold">accelerating regeneration</span>. Clinical studies have shown that this process can lead to hair growth <span className="font-bold">up to 5x faster</span>.
                  </p>
                </div>
                <div className="relative">
                  <button
                    onClick={() => setStudyDropdownOpen3(!studyDropdownOpen3)}
                    className="inline-flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors duration-200"
                  >
                    <span>LINKED STUDY</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${studyDropdownOpen3 ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {studyDropdownOpen3 && (
                    <div className="absolute top-full left-0 mt-2 w-96 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Study</h4>
                      <div className="space-y-3 text-sm text-gray-700">
                        <p className="italic">
                        A peer-reviewed study in the Journal of Dermatological Science reveals that micro-needles induce controlled micro-injuries to the scalp, prompting the body’s natural wound-healing response.
                        </p>
                        <p>
                        This process enhances blood flow, delivering more nutrients to hair follicles while stimulating the production of key growth factors like VEGF (Vascular Endothelial Growth Factor), which is essential for follicle regeneration.
                        </p>
                        <p>
                          
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Right Column - Before/After Image */}
              <div className="relative">
                <img 
                  src="/images/comparison5.png" 
                  alt="Before and After Hair Loss Comparison" 
                  className="w-full max-w-md h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maximum Results with Minimal Effort Section */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            {/* Main Headline */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Simple, Effective, Proven Results
            </h2>
            
            {/* Introductory Paragraph */}
            <p className="text-xl text-gray-600">
            Achieve maximum results without the hassle.
            </p>
            
            {/* Three Steps with Checkmarks */}
            <div className="max-w-4xl mx-auto space-y-3 text-left">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-lg">✔</span>
                </div>
                <span className="text-lg text-gray-700 leading-relaxed">
                Simply load the formula into the micro-infusion device—no prep, no mess.
                </span>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-lg">✔</span>
                </div>
                <span className="text-lg text-gray-700 leading-relaxed">
                Gently stamp the device onto thinning areas. It takes less than <span className="font-bold">1 minute</span> and feels like a light tap, <span className="font-bold">completely painless</span>. That’s it. Let it absorb, then get on with your day.
                </span>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-lg">✔</span>
                </div>
                <span className="text-lg text-gray-700 leading-relaxed">
                Experience visible results in just 1 week, with remarkable growth in 8-10 weeks.
                This system is designed for men who want real regrowth—without the hassle.
                </span>
              </div>
            </div>
            
            {/* Concluding Paragraph */}
            <p className="text-lg text-gray-600">
              Built for <span className="font-bold">real</span> men who want <span className="font-bold">real results</span> without the complicated routines.
            </p>
            
            {/* Central Product Image */}
            <div className="mt-6">
              <div className="relative max-w-4xl mx-auto">
                <img 
                  src="/images/UGC1.png" 
                  alt="Product Image" 
                  className="w-full max-w-xl h-auto rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
            

          </div>
        </div>
      </section>

      {/* Benefits and Product Comparison Section */}
      <section className="py-0 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-1">
            {/* Top Section - Headline and Benefits */}
            <div className="space-y-2">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                The Ultimate Solution for Hair Regrowth
              </h2>
              
              <p className="text-lg text-gray-700">
                55,981+ customers Rely on OneFix Labs Every Day!
              </p>
              
              {/* Benefits List */}
              <div className="max-w-4xl mx-auto space-y-1 text-left">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-lg">✔</span>
                  </div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Fills in bald patches for a <span className="font-bold">fuller, denser</span> hairline
                  </span>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-lg">✔</span>
                  </div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Restore your hairline to its <span className="font-bold">natural shape and thickness</span>
                  </span>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-lg">✔</span>
                  </div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Stops hair loss while promoting <span className="font-bold">noticeable regrowth</span>
                  </span>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-lg">✔</span>
                  </div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    <span className="font-bold">Made in the US</span> - with a safe natural formula and no side effects.
                  </span>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-lg">✔</span>
                  </div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    <span className="font-bold">Fast,</span> painless <span className="font-bold">and simple -</span> Just 1 minute a day
                  </span>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-lg">✔</span>
                  </div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    <span className="font-bold">Enjoy Long-Term Results</span> that you can rely on
                  </span>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-lg">✔</span>
                  </div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                  Full Satisfaction of your money back - <span className="font-bold">120-Day Money-Back Guarantee</span>
                  </span>
                </div>
              </div>
            </div>
            
            {/* Middle Section - Single Image */}
            <div className="mt-3">
              <div className="relative max-w-4xl mx-auto">
                <img 
                  src="/images/compare1.png" 
                  alt="Comparison Image" 
                  className="w-full max-w-4xl h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            {/* Bottom Section - Product Comparison */}
            <div className="mt-3">
              <div className="relative max-w-5xl mx-auto">
                <div className="grid grid-cols-2 gap-8">
                  {/* Competitors - Red X */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg overflow-hidden border-2 border-dashed border-red-400 h-64 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-bold text-2xl">✕</span>
                        </div>
                        <p className="text-red-700 font-medium mb-2">Competitors</p>
                        <p className="text-red-600 text-sm">Minoxidil, Derma-roller, Supplements</p>
                        <div className="mt-3 text-xs text-red-500">
                          <p>Various hair loss products</p>
                          <p>Not recommended</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Alpha Product - Green Checkmark */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg overflow-hidden border-2 border-dashed border-green-400 h-64 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-bold text-2xl">✔</span>
                        </div>
                        <p className="text-green-700 font-medium mb-2">ONEFIX LABS</p>
                        <p className="text-green-600 text-sm">Microneedle Infusion Solution</p>
                        <div className="mt-3 text-xs text-green-500">
                          <p>Recommended solution</p>
                          <p>Eight vials included</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            

          </div>
        </div>
      </section>

      {/* Risk-Free Guarantee and Product Showcase Section */}
      <section className="py-0 bg-white -mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Banner */}
          <div className="bg-amber-600 text-white py-3 text-center mb-6 mt-6 shadow-xl rounded-lg transform hover:scale-105 transition-all duration-300">
            <a 
              href="https://www.onefixlabs.com/products/onefix%E2%84%A2-advanced-micro-infusion-hair-regrowth-kit?variant=55476048822607" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg font-bold uppercase tracking-wide hover:underline cursor-pointer"
            >
              TRY TODAY
            </a>
          </div>
          
          <div className="text-center space-y-2">
            {/* Main Headline */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              No Pressure – Try It Risk-Free for 120 days. See the results before making any final decision. 

            </h2>
            
            {/* Main Content Area */}
            <div className="grid lg:grid-cols-2 gap-0 items-center mt-4">
              {/* Left Column - Before/After Image with Guarantee Badge */}
              <div className="relative">
                <div className="relative">
                  <img 
                    src="/images/120day.png" 
                    alt="Before and After Hair Loss Comparison" 
                    className="w-80 h-80 rounded-lg object-cover mx-auto"
                  />
                  

                </div>
              </div>
              
              {/* Right Column - Guarantee Explanation */}
              <div className="space-y-3 text-left -ml-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  The Deal is Simple:
                </h3>
                
                <div className="space-y-1">
                  <p className="text-lg text-gray-700 leading-tight">
                  We believe in OneFix™ so much that we won&apos;t charge you a dime until you&apos;re 100% sure it works for you.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-tight">
                    <span className="font-bold">With our 120-Day Money-Back Guarantee, you have nothing to lose.</span>
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-tight">
                  If you don’t experience the results you’re expecting, we’ll refund your purchase—no questions, no hassle.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-tight">
                  You only pay if it works, and we’re certain it will based on the incredible results we’ve seen.
                  </p>
                </div>
              </div>
            </div>
            

            
            {/* Product Image - ONEFIX™ System */}
            <div className="mt-8">
              <div className="relative max-w-4xl mx-auto">
                <img 
                  src="/images/product1.png" 
                  alt="ONEFIX™ Hair Regrowth System Product" 
                  className="w-2/3 h-auto rounded-lg object-cover mx-auto"
                />
              </div>
            </div>
            
            {/* Bottom Section Title */}
            <div className="mt-8">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight uppercase tracking-wide">
                ONEFIX™ Hair Regrowth System
              </h3>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA Button */}
        <div className="mt-8 mb-12 text-center">
          <a 
            href="https://www.onefixlabs.com/products/onefix%E2%84%A2-advanced-micro-infusion-hair-regrowth-kit?variant=55476048822607" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-12 rounded-lg text-lg uppercase tracking-wide transition-colors duration-200 inline-block"
          >
            TRY TODAY
          </a>
        </div>
      </section>

      {/* Footer Section - Dark Blue Background */}
      <footer className="bg-blue-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          
          {/* Upper Middle Section - Reviews and Statistics */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 pb-8 border-b border-white">
            {/* Google Reviews */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="text-2xl font-bold text-blue-400">G</div>
                <div className="text-2xl font-bold text-red-500">o</div>
                <div className="text-2xl font-bold text-yellow-500">o</div>
                <div className="text-2xl font-bold text-blue-400">g</div>
                <div className="text-2xl font-bold text-green-500">l</div>
                <div className="text-2xl font-bold text-red-500">e</div>
              </div>
              <p className="text-white mb-2">REVIEWS</p>
              <div className="flex items-center justify-center space-x-1 mb-2">
                <span className="text-2xl font-bold text-white">4.82</span>
                <div className="flex space-x-1">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Satisfied Customers */}
            <div className="text-center">
              <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd"></path>
                </svg>
              </div>
              <p className="text-white mb-1">Satisfied Customers</p>
              <p className="text-2xl font-bold text-white">55,981+</p>
            </div>
            
            {/* 5 Star Reviews */}
            <div className="text-center">
              <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
              </div>
              <p className="text-white mb-1">5 Star Reviews</p>
              <p className="text-2xl font-bold text-white">14,988+</p>
            </div>
          </div>
          
          {/* Lower Middle Section - Links and Company Branding */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 pb-8 border-b border-white">
            {/* Links */}
            <div className="space-y-3">
              <a href="https://www.onefixlabs.com/policies/contact-information" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-gray-300 transition-colors duration-200">Contact Us</a>
              <a href="https://www.onefixlabs.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-gray-300 transition-colors duration-200">Privacy Policy</a>
              <a href="https://www.onefixlabs.com/policies/terms-of-service" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-gray-300 transition-colors duration-200">Terms and Conditions</a>
              <a href="https://www.onefixlabs.com/policies/refund-policy" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-gray-300 transition-colors duration-200">Returns and Refunds Policy</a>
              <a href="https://www.onefixlabs.com/products/onefix%E2%84%A2-advanced-micro-infusion-hair-regrowth-kit?variant=55476048822607" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-gray-300 transition-colors duration-200">Shipping Policy</a>
            </div>
            
            {/* Company Branding */}
            <div className="text-right">
              <p className="text-white mb-2">info@onefixlabs.com</p>
              <h3 className="text-3xl font-bold text-white">ONEFIX LABS</h3>
            </div>
          </div>
          
          {/* Bottom Section - Guarantees and Support */}
          <div className="grid md:grid-cols-4 gap-8">
            {/* Money Back Guarantee */}
            <div className="text-center">
              <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
              </div>
              <h4 className="font-bold text-white mb-2">120-DAYS MONEY BACK GUARANTEE</h4>
                                <p className="text-sm text-white">If you&apos;re not satisfied with the purchase within 120 days, we&apos;ll give you a full refund.</p>
            </div>
            
            {/* Customer Service */}
            <div className="text-center">
              <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </div>
              <h4 className="font-bold text-white mb-2">CUSTOMER SERVICE</h4>
              <p className="text-sm text-white">We are available from monday to friday to answer your questions.</p>
            </div>
            
            {/* Secure Payment */}
            <div className="text-center">
              <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h4 className="text-white mb-2">SECURE PAYMENT</h4>
              <p className="text-sm text-white">Your payment information is processed securely.</p>
            </div>
            
            {/* Contact Us */}
            <div className="text-center">
              <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h4 className="font-bold text-white mb-2">CONTACT US</h4>
              <p className="text-sm text-white">Need to contact us ? Just send us an e-mail at <span className="underline">info@onefixlabs.com</span></p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
