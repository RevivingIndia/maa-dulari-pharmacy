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
  // Using viewBox 0 0 1000 1200 for better precision
  const lonToX = (lon) => ((lon - 68) / (97 - 68)) * 1000
  const latToY = (lat) => 1200 - ((lat - 6) / (37 - 6)) * 1200

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            We've Got India Covered!
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We now deliver in <span className="font-bold text-blue-600">1200+ cities</span> and
            towns across <span className="font-bold text-blue-600">19,000+ pin codes</span>. We
            thereby cover every nook and corner of the country!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* India Map Visualization */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 shadow-lg">
              <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
                {/* Complete India Map - Embedded from Wikimedia Commons */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/India_map_en.svg/1000px-India_map_en.svg.png"
                  alt="India Map"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback to SVG if image fails to load
                    e.target.style.display = 'none'
                    const svgContainer = e.target.nextElementSibling
                    if (svgContainer) svgContainer.style.display = 'block'
                  }}
                />
                {/* Fallback SVG Map */}
                <svg
                  viewBox="0 0 1000 1200"
                  className="w-full h-full hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                  style={{ display: 'none' }}
                >
                  {/* India map outline - More accurate representation */}
                  <path
                    d="M 50 1100 
                      L 80 1080 L 120 1050 L 180 1020 L 250 990 L 320 960 
                      L 390 930 L 460 900 L 530 870 L 600 840 L 670 810 
                      L 740 780 L 810 750 L 880 720 L 950 690 L 980 660 
                      L 990 630 L 995 600 L 995 570 L 990 540 L 980 510 
                      L 960 480 L 940 450 L 920 420 L 900 390 L 880 360 
                      L 860 330 L 840 300 L 820 270 L 800 240 L 780 210 
                      L 760 180 L 740 150 L 720 120 L 700 90 L 680 60 
                      L 660 40 L 640 30 L 620 25 L 600 20 L 580 18 
                      L 560 17 L 540 18 L 520 20 L 500 25 L 480 30 
                      L 460 40 L 440 50 L 420 65 L 400 80 L 380 100 
                      L 360 120 L 340 145 L 320 170 L 300 200 L 280 230 
                      L 260 265 L 240 300 L 220 340 L 200 380 L 180 425 
                      L 160 475 L 140 530 L 120 590 L 100 655 L 80 725 
                      L 60 800 L 50 880 L 45 960 L 50 1040 L 50 1100 Z"
                    fill="#e0f2fe"
                    stroke="#3b82f6"
                    strokeWidth="3"
                  />
                  {/* Southern tip */}
                  <path
                    d="M 450 1100 
                      L 480 1120 L 500 1130 L 520 1135 L 540 1138 
                      L 560 1140 L 580 1138 L 600 1135 L 620 1130 
                      L 640 1120 L 660 1105 L 680 1085 L 700 1060 
                      L 720 1030 L 740 995 L 760 955 L 780 910 L 800 860 
                      L 820 805 L 840 745 L 860 680 L 880 610 L 900 535 
                      L 920 455 L 940 370 L 960 280 L 980 185 L 990 85 
                      L 985 50 L 970 40 L 950 35 L 930 33 L 910 32 
                      L 890 33 L 870 35 L 850 40 L 830 50 L 810 65 
                      L 790 85 L 770 110 L 750 140 L 730 175 L 710 215 
                      L 690 260 L 670 310 L 650 365 L 630 425 L 610 490 
                      L 590 560 L 570 635 L 550 715 L 530 800 L 510 890 
                      L 490 985 L 470 1085 L 450 1100 Z"
                    fill="#e0f2fe"
                    stroke="#3b82f6"
                    strokeWidth="3"
                  />
                  {/* Northeast region */}
                  <path
                    d="M 950 200 
                      L 970 180 L 980 160 L 985 140 L 985 120 
                      L 980 100 L 970 85 L 955 75 L 940 70 L 925 68 
                      L 910 70 L 895 75 L 880 85 L 865 100 L 850 120 
                      L 835 145 L 820 175 L 805 210 L 790 250 L 775 295 
                      L 760 345 L 745 400 L 730 460 L 715 525 L 700 595 
                      L 685 670 L 670 750 L 655 835 L 640 925 L 625 1020 
                      L 610 1120 L 600 1180 L 610 1185 L 630 1188 
                      L 650 1190 L 670 1188 L 690 1185 L 710 1180 
                      L 730 1170 L 750 1155 L 770 1135 L 790 1110 
                      L 810 1080 L 830 1045 L 850 1005 L 870 960 
                      L 890 910 L 910 855 L 930 795 L 950 730 L 970 660 
                      L 985 585 L 995 505 L 1000 420 L 995 330 L 980 235 
                      L 950 200 Z"
                    fill="#e0f2fe"
                    stroke="#3b82f6"
                    strokeWidth="3"
                  />
                  
                  {/* Animated city markers */}
                  {cities.map((city, index) => {
                    const x = lonToX(city.lon)
                    const y = latToY(city.lat)
                    return (
                      <g key={city.name} className="cursor-pointer">
                        <circle
                          cx={x}
                          cy={y}
                          r="20"
                          fill="#10b981"
                          className={index < animatedCities ? 'animate-ping' : 'opacity-50'}
                          style={{ animationDuration: '2s' }}
                        />
                        <circle
                          cx={x}
                          cy={y}
                          r="12"
                          fill="#10b981"
                          className="hover:fill-green-600 transition-colors"
                        />
                        <text
                          x={x}
                          y={y - 30}
                          textAnchor="middle"
                          className="fill-gray-700 pointer-events-none"
                          style={{ fontSize: '28px', fontWeight: 'bold' }}
                        >
                          {city.name}
                        </text>
                      </g>
                    )
                  })}
                </svg>
                
                {/* City markers overlay - positioned absolutely */}
                <svg
                  viewBox="0 0 1000 1200"
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
            <div className="bg-blue-600 text-white rounded-lg p-6 mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <FaTruck className="text-4xl" />
                <div>
                  <div className="text-3xl font-bold">1200+</div>
                  <div className="text-lg">Cities & Towns</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-4xl" />
                <div>
                  <div className="text-3xl font-bold">19,000+</div>
                  <div className="text-lg">Pin Codes</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Major Cities We Deliver To:
              </h3>
              <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto">
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
