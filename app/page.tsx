'use client'

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
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

      {/* Main Content */}
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text Content */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-700">
                  ARE YOU LOSING HAIR?
                </h2>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                  Reverse Hair Loss & See Thicker Growth In Weeks
                </h1>
                
                {/* Benefits List */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      Addresses the underlying cause of thinning, not just the symptoms.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      Scientifically validated to work against genetic hair loss, DHT buildup, stress, nutrition gaps, and age-related thinning
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      Gentle, painless application in 1 minute.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      Supports long-term follicle health for denser, stronger hair.
                    </p>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="pt-4">
                  <a 
                    href="https://www.onefixlabs.com/products/onefix%E2%84%A2-advanced-micro-infusion-hair-regrowth-kit?variant=55476048822607" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-8 py-4 rounded-lg transition-colors duration-200 inline-block text-lg"
                  >
                    Start Your Hair Regrowth Journey
                  </a>
                </div>
              </div>
              
              {/* Right Side - Product Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <img 
                    src="/images/product1.png" 
                    alt="Man holding ONEFIX Hair Growth Serum" 
                    className="w-full max-w-md h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gray-100 rounded-lg p-6 mb-8">
              <p className="text-2xl font-bold text-gray-900">
                ✨ 55981+ Men Love OneFix Labs ✨
              </p>
            </div>
            <p className="text-lg text-gray-700 mb-8">
              As seen in:
            </p>
            {/* Add logos here when available */}
          </div>
        </section>

        {/* Additional Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-900">
              Why Choose OneFix™?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Clinically Proven</h3>
                <p className="text-gray-600">
                  Backed by scientific research and clinical studies showing significant hair regrowth results.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Fast Results</h3>
                <p className="text-gray-600">
                  See visible improvements in as little as 8-10 weeks with consistent use.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Easy to Use</h3>
                <p className="text-gray-600">
                  Simple application process that fits seamlessly into your daily routine.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-900">
              What Our Customers Say
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-lg italic text-gray-700 mb-6">
                  &ldquo;After trying countless products, OneFix™ finally delivered the results I was looking for. My hair is thicker and stronger than ever!&rdquo;
                </p>
                <p className="font-bold text-blue-700">- Michael R., Verified Customer</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-lg italic text-gray-700 mb-6">
                  &ldquo;The difference is incredible. I started seeing results within weeks, and now my confidence is back!&rdquo;
                </p>
                <p className="font-bold text-blue-700">- David L., Verified Customer</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-br from-blue-700 to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Transform Your Hair?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have already experienced the OneFix™ difference.
            </p>
            <a 
              href="https://www.onefixlabs.com/products/onefix%E2%84%A2-advanced-micro-infusion-hair-regrowth-kit?variant=55476048822607" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-10 py-5 rounded-lg transition-colors duration-200 inline-block text-xl"
            >
              Get Started Today
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
