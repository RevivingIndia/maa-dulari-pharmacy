import React from 'react'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Delhi',
      rating: 5,
      english: 'Excellent service! Got my medicines delivered within 2 hours. The staff is very helpful and professional.',
      hindi: 'बहुत बढ़िया सेवा! मुझे 2 घंटे के अंदर दवाएं मिल गईं। स्टाफ बहुत मददगार और पेशेवर है।',
      image: '👨‍💼',
      color: 'from-blue-600 to-teal-600',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      english: 'Trustworthy pharmacy with authentic medicines. Fast delivery and great customer support. Highly recommended!',
      hindi: 'विश्वसनीय फार्मेसी जिसमें असली दवाएं मिलती हैं। तेज़ डिलीवरी और बेहतरीन ग्राहक सहायता। अत्यधिक अनुशंसित!',
      image: '👩‍💼',
      color: 'from-teal-600 to-cyan-600',
    },
    {
      id: 3,
      name: 'Amit Patel',
      location: 'Ahmedabad',
      rating: 5,
      english: 'Best pharmacy in town! They have all medicines available and deliver on time. Very satisfied with their service.',
      hindi: 'शहर की सबसे अच्छी फार्मेसी! उनके पास सभी दवाएं उपलब्ध हैं और समय पर डिलीवरी करते हैं। उनकी सेवा से बहुत संतुष्ट हूं।',
      image: '👨‍🔬',
      color: 'from-cyan-600 to-teal-600',
    },
    {
      id: 4,
      name: 'Sunita Devi',
      location: 'Patna',
      rating: 5,
      english: 'Very caring staff. They helped me understand my prescription and suggested the best medicines. Thank you!',
      hindi: 'बहुत देखभाल करने वाला स्टाफ। उन्होंने मुझे मेरी दवा समझने में मदद की और सबसे अच्छी दवाएं सुझाईं। धन्यवाद!',
      image: '👩‍⚕️',
      color: 'from-blue-600 to-teal-600',
    },
    {
      id: 5,
      name: 'Vikram Singh',
      location: 'Jaipur',
      rating: 5,
      english: 'Quick delivery and genuine products. The WhatsApp ordering system is very convenient. Great experience!',
      hindi: 'तेज़ डिलीवरी और असली उत्पाद। व्हाट्सएप ऑर्डरिंग सिस्टम बहुत सुविधाजनक है। बेहतरीन अनुभव!',
      image: '👨‍💻',
      color: 'from-teal-600 to-cyan-600',
    },
    {
      id: 6,
      name: 'Meera Joshi',
      location: 'Pune',
      rating: 5,
      english: 'Professional service with authentic medicines. They care about their customers. Will definitely order again!',
      hindi: 'असली दवाओं के साथ पेशेवर सेवा। वे अपने ग्राहकों की परवाह करते हैं। निश्चित रूप से फिर से ऑर्डर करूंगी!',
      image: '👩‍🏫',
      color: 'from-cyan-600 to-blue-600',
    },
  ]

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white medical-bg-cross relative">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 px-4">
            What Our Customers Have to Say
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Real feedback from our valued customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative"
              style={{
                animation: `fade-in-up 0.6s ease-out forwards`,
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
            >
              {/* Quote Icon */}
              <div className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white opacity-20`}>
                <FaQuoteLeft className="text-2xl" />
              </div>

              {/* Customer Info */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-3xl shadow-lg`}>
                  {review.image}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-lg" />
                ))}
              </div>

              {/* English Review */}
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed italic">
                  "{review.english}"
                </p>
              </div>

              {/* Hindi Review */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed italic">
                  "{review.hindi}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-50 via-teal-50 to-cyan-50 rounded-full border-2 border-gray-200">
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-400 text-2xl" />
              <span className="text-2xl font-bold text-gray-800">4.9</span>
            </div>
            <div className="h-8 w-px bg-gray-300"></div>
            <div>
              <div className="text-sm text-gray-600">Average Rating</div>
              <div className="text-xs text-gray-500">Based on 10,000+ reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerReviews
