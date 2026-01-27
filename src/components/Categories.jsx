import React from 'react'
import {
  FaPills,
  FaHeartbeat,
  FaBaby,
  FaFlask,
  FaStethoscope,
  FaCapsules,
  FaSyringe,
  FaBandAid,
  FaEye,
  FaLungs,
  FaBrain,
  FaBone,
} from 'react-icons/fa'

const Categories = () => {
  const categories = [
    { name: 'Prescription Medicines', icon: <FaPills />, color: 'bg-blue-600' },
    { name: 'Heart Care', icon: <FaHeartbeat />, color: 'bg-teal-600' },
    { name: 'Baby Care', icon: <FaBaby />, color: 'bg-cyan-500' },
    { name: 'Vitamins & Supplements', icon: <FaFlask />, color: 'bg-teal-500' },
    { name: 'Diabetes Care', icon: <FaStethoscope />, color: 'bg-green-600' },
    { name: 'Pain Relief', icon: <FaCapsules />, color: 'bg-blue-500' },
    { name: 'First Aid', icon: <FaBandAid />, color: 'bg-cyan-600' },
    { name: 'Eye Care', icon: <FaEye />, color: 'bg-teal-500' },
    { name: 'Respiratory Care', icon: <FaLungs />, color: 'bg-cyan-600' },
    { name: 'Mental Wellness', icon: <FaBrain />, color: 'bg-blue-500' },
    { name: 'Bone & Joint Care', icon: <FaBone />, color: 'bg-teal-600' },
    { name: 'Injection Supplies', icon: <FaSyringe />, color: 'bg-cyan-500' },
  ]

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 px-4">Shop by Categories</h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg px-4">Find all your healthcare needs in one place</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer transform hover:-translate-y-2 transition-transform"
            >
              <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl`}>
                {category.icon}
              </div>
              <h3 className="text-center text-sm font-semibold text-gray-800">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
