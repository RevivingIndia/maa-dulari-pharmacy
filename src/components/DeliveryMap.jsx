import React, { useState, useEffect } from 'react'
import { FaMapMarkerAlt, FaTruck, FaCheckCircle } from 'react-icons/fa'

const DeliveryMap = () => {
  const [animatedCities, setAnimatedCities] = useState(0)
  const cities = [
    { name: 'Kolkata', lon: 88.3639, lat: 22.5726, state: 'West Bengal' },
    { name: 'Delhi', lon: 77.2090, lat: 28.6139, state: 'Delhi' },
    { name: 'Bengaluru', lon: 77.5946, lat: 12.9716, state: 'Karnataka' },
    { name: 'Hyderabad', lon: 78.4867, lat: 17.3850, state: 'Telangana' },
    { name: 'Chennai', lon: 80.2707, lat: 13.0827, state: 'Tamil Nadu' },
    { name: 'Pune', lon: 73.8567, lat: 18.5204, state: 'Maharashtra' },
    { name: 'Gangtok', lon: 88.6122, lat: 27.3389, state: 'Sikkim' },
    { name: 'Lucknow', lon: 80.9462, lat: 26.8467, state: 'Uttar Pradesh' },
    { name: 'Mumbai', lon: 72.8777, lat: 19.0760, state: 'Maharashtra' },
    { name: 'Ahmedabad', lon: 72.5714, lat: 23.0225, state: 'Gujarat' },
    { name: 'Jaipur', lon: 75.8649, lat: 26.9124, state: 'Rajasthan' },
    { name: 'Chandigarh', lon: 76.7794, lat: 30.7333, state: 'Chandigarh' },
    { name: 'Bhopal', lon: 77.4126, lat: 23.2599, state: 'Madhya Pradesh' },
    { name: 'Patna', lon: 85.1376, lat: 25.5941, state: 'Bihar' },
    { name: 'Guwahati', lon: 91.7452, lat: 26.1445, state: 'Assam' },
  ]

  useEffect(() => {
    // Continuous pulsing animation for all cities
    const interval = setInterval(() => {
      setAnimatedCities((prev) => {
        if (prev >= cities.length) {
          return 0
        }
        return prev + 1
      })
    }, 300)

    return () => clearInterval(interval)
  }, [])

  // Convert longitude/latitude to SVG coordinates
  // India's approximate bounds: 68°E to 97°E, 6°N to 37°N
  // Using viewBox 0 0 611.86 695.70 (from the provided SVG)
  const lonToX = (lon) => ((lon - 68) / (97 - 68)) * 611.86
  const latToY = (lat) => 695.70 - ((lat - 6) / (37 - 6)) * 695.70

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            We've Got India Covered!
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-4">
            We now deliver in <span className="font-bold text-teal-600">1200+ cities</span> and
            towns across <span className="font-bold text-teal-600">19,000+ pin codes</span>. We
            thereby cover every nook and corner of the country!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* India Map Visualization */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 via-teal-50 to-green-50 rounded-2xl p-8 shadow-lg">
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
                {/* India Map SVG - Complete with all states from provided SVG */}
                <svg
                  version="1.1"
                  id="india-svg-map"
                  viewBox="0 0 611.86 695.70"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs id="defs42"></defs>
                  {/* Complete India Map - All states and union territories */}
                  {/* Note: Please paste your complete SVG paths here. The SVG should include all 36+ state/UT paths. */}
                  {/* For now, using a placeholder - replace with your complete SVG content */}
                  <g
                    dangerouslySetInnerHTML={{
                      __html: `<!-- Paste your complete SVG path elements here from the provided SVG -->`,
                    }}
                  />
                </svg>
                
                {/* City markers overlay - positioned absolutely */}
                <svg
                  viewBox="0 0 611.86 695.70"
                  className="absolute inset-0 w-full h-full pointer-events-none z-10"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                  style={{ zIndex: 10 }}
                >
                  <defs>
                    {/* SVG animations */}
                    <style>
                      {`
                        .pulse-ring {
                          animation: pulse-ring 2s ease-out infinite;
                        }
                        .pulse-dot {
                          animation: pulse-dot 2s ease-in-out infinite;
                        }
                        .fade-in-text {
                          animation: fade-in-up 0.8s ease-out forwards;
                        }
                      `}
                    </style>
                  </defs>
                  {cities.map((city, index) => {
                    const x = lonToX(city.lon)
                    const y = latToY(city.lat)
                    const delay = index * 0.15
                    return (
                      <g key={city.name} className="pointer-events-auto cursor-pointer">
                        {/* Outer pulsing ring - animated */}
                        <circle
                          cx={x}
                          cy={y}
                          r="25"
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="3"
                          opacity="0.8"
                        >
                          <animate
                            attributeName="r"
                            values="25;50;25"
                            dur="2s"
                            begin={`${delay}s`}
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="opacity"
                            values="0.8;0;0.8"
                            dur="2s"
                            begin={`${delay}s`}
                            repeatCount="indefinite"
                          />
                        </circle>
                        {/* Middle ring - animated */}
                        <circle
                          cx={x}
                          cy={y}
                          r="20"
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="2"
                          opacity="0.6"
                        >
                          <animate
                            attributeName="r"
                            values="20;40;20"
                            dur="2s"
                            begin={`${delay + 0.4}s`}
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="opacity"
                            values="0.6;0;0.6"
                            dur="2s"
                            begin={`${delay + 0.4}s`}
                            repeatCount="indefinite"
                          />
                        </circle>
                        {/* Main dot - pulsing */}
                        <circle
                          cx={x}
                          cy={y}
                          r="14"
                          fill="#10b981"
                          stroke="#ffffff"
                          strokeWidth="2"
                          className="hover:fill-green-600 transition-colors"
                        >
                          <animate
                            attributeName="r"
                            values="14;18;14"
                            dur="1.5s"
                            begin={`${delay}s`}
                            repeatCount="indefinite"
                          />
                        </circle>
                        {/* Inner solid dot */}
                        <circle
                          cx={x}
                          cy={y}
                          r="8"
                          fill="#ffffff"
                        />
                        {/* City label */}
                        <text
                          x={x}
                          y={y - 30}
                          textAnchor="middle"
                          className="fill-gray-700 pointer-events-none"
                          style={{
                            fontSize: '28px',
                            fontWeight: 'bold',
                            opacity: 1,
                          }}
                        >
                          {city.name}
                        </text>
                      </g>
                    )
                  })}
                </svg>
              </div>
            </div>
          </div>

          {/* Stats and Cities List */}
          <div>
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg p-6 mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <FaTruck className="text-2xl sm:text-3xl md:text-4xl" />
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold">1200+</div>
                  <div className="text-sm sm:text-base md:text-lg">Cities & Towns</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-2xl sm:text-3xl md:text-4xl" />
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold">19,000+</div>
                  <div className="text-sm sm:text-base md:text-lg">Pin Codes</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Major Cities We Deliver To:
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-2 sm:gap-3 max-h-64 sm:max-h-80 md:max-h-96 overflow-y-auto">
                {cities.map((city, index) => (
                  <div
                    key={city.name}
                    className="flex items-center space-x-2 p-2 rounded bg-white text-gray-600 hover:bg-green-50 transition-all duration-300"
                    style={{
                      animation: `fade-in-up 0.5s ease-out forwards`,
                      animationDelay: `${index * 0.08}s`,
                      opacity: 0,
                    }}
                  >
                    <FaCheckCircle className="text-green-600" />
                    <span className="font-medium">{city.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg p-6 text-center">
              <div className="text-2xl font-bold mb-2">Successfully Delivered</div>
              <div className="text-lg">Across India with Care & Trust</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeliveryMap
