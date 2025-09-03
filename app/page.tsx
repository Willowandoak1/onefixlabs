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

      {/* Main Content Area */}
      <main className="pt-16 sm:pt-20 py-2 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-16 items-start">
            {/* Left Column - Text Content */}
            <div className="flex flex-col justify-center py-8 lg:py-16">
              <p className="text-sm sm:text-base text-gray-600 font-semibold mb-2">ARE YOU LOSING HAIR?</p>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                Reverse Hair Loss & See <span className="text-blue-700">Thicker Growth</span> In Weeks
              </h1>
              <ul className="space-y-4 text-base text-gray-700 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Addresses the underlying cause of thinning, not just the symptoms.
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Scientifically validated to work against genetic hair loss, DHT buildup,
                  stress, nutrition gaps, and age-related thinning
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Gentle, painless application in 1 minute.
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Supports long-term follicle health for denser, stronger hair.
                </li>
              </ul>
            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center items-center lg:justify-end">
              <img
                src="/images/hero-product-man.png" // Assuming this is the correct path for the image
                alt="Man holding OneFix Hair Growth Serum"
                className="w-full max-w-md lg:max-w-none h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Social Proof Bar */}
          <div className="mt-8 mb-12 bg-gray-100 rounded-lg p-4 text-center shadow-sm">
            <p className="text-lg font-semibold text-gray-800">✨ 55981+ Men Love OneFix Labs ✨</p>
          </div>

          {/* As Seen In Section */}
          <section className="py-8 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-xl font-semibold text-gray-600 mb-6">As seen in:</h2>
              <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16">
                <img src="/images/logo-forbes.png" alt="Forbes" className="h-8 sm:h-10 w-auto opacity-75 hover:opacity-100 transition-opacity duration-200" />
                <img src="/images/logo-menshealth.png" alt="Men's Health" className="h-8 sm:h-10 w-auto opacity-75 hover:opacity-100 transition-opacity duration-200" />
                <img src="/images/logo-gq.png" alt="GQ" className="h-8 sm:h-10 w-auto opacity-75 hover:opacity-100 transition-opacity duration-200" />
                <img src="/images/logo-techcrunch.png" alt="TechCrunch" className="h-8 sm:h-10 w-auto opacity-75 hover:opacity-100 transition-opacity duration-200" />
                <img src="/images/logo-vogue.png" alt="Vogue" className="h-8 sm:h-10 w-auto opacity-75 hover:opacity-100 transition-opacity duration-200" />
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-10">Why Choose OneFix™?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Feature Card 1 */}
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                  <div className="bg-blue-100 rounded-full p-3 mb-4">
                    <svg className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Clinically Proven Results</h3>
                  <p className="text-gray-600">Backed by science, our formula is proven to reactivate dormant follicles and promote new hair growth.</p>
                </div>
                {/* Feature Card 2 */}
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                  <div className="bg-green-100 rounded-full p-3 mb-4">
                    <svg className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Fast & Easy Application</h3>
                  <p className="text-gray-600">Just 1 minute a day for visible results in weeks, not months.</p>
                </div>
                {/* Feature Card 3 */}
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                  <div className="bg-purple-100 rounded-full p-3 mb-4">
                    <svg className="h-8 w-8 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Natural & Safe Ingredients</h3>
                  <p className="text-gray-600">Formulated with powerful, natural extracts to nourish your scalp without harsh chemicals.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-10">What Our Customers Say</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Testimonial Card 1 */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md text-left">
                  <p className="text-gray-700 italic mb-4">&ldquo;I was skeptical, but OneFix™ truly delivered! My hair feels thicker and I&apos;ve noticed significant regrowth in just a few weeks. Highly recommend!&rdquo;</p>
                  <p className="font-semibold text-gray-900">- Mark T.</p>
                  <p className="text-sm text-gray-600">Verified Buyer</p>
                </div>
                {/* Testimonial Card 2 */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md text-left">
                  <p className="text-gray-700 italic mb-4">&ldquo;Finally, a product that works! My receding hairline is filling in, and I feel so much more confident. Thank you, OneFix Labs!&rdquo;</p>
                  <p className="font-semibold text-gray-900">- David S.</p>
                  <p className="text-sm text-gray-600">Verified Buyer</p>
                </div>
                {/* Testimonial Card 3 */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md text-left">
                  <p className="text-gray-700 italic mb-4">&ldquo;Easy to use and no side effects. My hair loss has stopped, and new growth is clearly visible. This is a game-changer!&rdquo;</p>
                  <p className="font-semibold text-gray-900">- Chris L.</p>
                  <p className="text-sm text-gray-600">Verified Buyer</p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-12 bg-blue-700 text-white text-center rounded-lg shadow-lg mt-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Ready to Transform Your Hair?</h2>
              <p className="text-lg mb-8">Join thousands of men who have reversed hair loss and regained their confidence with OneFix™.</p>
              <a
                href="https://www.onefixlabs.com/products/onefix%E2%84%A2-advanced-micro-infusion-hair-regrowth-kit?variant=55476048822607"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-8 py-4 rounded-lg text-xl transition-colors duration-200 inline-block"
              >
                Get Started Today
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} ONEFIX LABS. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="text-blue-300 hover:underline mx-2">Privacy Policy</a> |
            <a href="#" className="text-blue-300 hover:underline mx-2">Terms of Service</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
