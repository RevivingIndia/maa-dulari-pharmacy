export const blogPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop',
    alt: 'Pharmacy and healthcare',
    title: 'Order medicines online: 5 tips for safe and easy delivery',
    author: 'Dr. Priya Sharma',
    comments: 24,
    date: 'January 15, 2025',
    content: `
      <p>Ordering medicines online has never been easier. At Maa Dulari Pharmacy, we believe in making healthcare accessible while keeping safety at the forefront. Here are five simple tips to ensure your online medicine orders are safe and delivered smoothly.</p>
      <h3>1. Choose a licensed pharmacy</h3>
      <p>Always order from a licensed pharmacy like Maa Dulari Pharmacy. We source all medicines directly from approved manufacturers and maintain full traceability. Check for a valid license and contact details before placing an order.</p>
      <h3>2. Share your prescription</h3>
      <p>Send your prescription or medicine list via WhatsApp. Our team verifies every order against your prescription to ensure you receive the right medicines in the correct dosage. Never order prescription medicines without a valid prescription.</p>
      <h3>3. Confirm your address</h3>
      <p>Double-check your delivery address and phone number before confirming. A wrong address can delay delivery or cause your order to be returned. We deliver across India, so accurate details matter.</p>
      <h3>4. Track your order</h3>
      <p>Once your order is confirmed, you’ll receive updates via WhatsApp. Keep your phone handy so you don’t miss delivery. Our team will coordinate with you for a convenient delivery time.</p>
      <h3>5. Store medicines properly</h3>
      <p>When your medicines arrive, store them as directed—away from direct sunlight and moisture. Check expiry dates and keep them out of reach of children. If you have any doubts, ask our pharmacists.</p>
      <p>At Maa Dulari Pharmacy, we’re committed to safe, fast, and reliable delivery. Order via WhatsApp and get genuine medicines at your doorstep. Bharosa Har Dawa Mein.</p>
    `,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
    alt: 'Healthcare at home',
    title: 'How to manage your family’s medicines with WhatsApp ordering',
    author: 'Rajesh Kumar',
    comments: 18,
    date: 'January 10, 2025',
    content: `
      <p>Managing medicines for the whole family can be overwhelming. WhatsApp ordering with Maa Dulari Pharmacy makes it simple: one chat, one prescription, and medicines delivered to your door.</p>
      <h3>Why use WhatsApp for medicine orders?</h3>
      <p>No app to download, no complicated forms. Just send your prescription or medicine list on WhatsApp and our team takes care of the rest. You get confirmation, pricing, and delivery updates in the same chat.</p>
      <h3>Steps to order</h3>
      <p><strong>Step 1:</strong> Open WhatsApp and message us with your prescription (photo or list).<br>
      <strong>Step 2:</strong> We’ll confirm availability and send you the total amount.<br>
      <strong>Step 3:</strong> Share your delivery address and confirm the order.<br>
      <strong>Step 4:</strong> Pay when the order is delivered or as per our payment options.<br>
      <strong>Step 5:</strong> Receive your medicines at home, with full support if you have any questions.</p>
      <h3>Managing multiple family members</h3>
      <p>You can send prescriptions for different family members in one chat. Just label them (e.g. “For mother”, “For father”) and we’ll pack and deliver everything together. Many families use this for monthly refills and chronic medicines.</p>
      <p>Join thousands of families who trust Maa Dulari Pharmacy for their healthcare needs. Order now on WhatsApp and experience hassle-free medicine delivery.</p>
    `,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop',
    alt: 'Trusted pharmacy',
    title: 'Why choosing a trusted pharmacy matters for your health',
    author: 'Megha Singh',
    comments: 12,
    date: 'January 5, 2025',
    content: `
      <p>Your health depends on the quality of the medicines you take. Choosing a trusted pharmacy isn’t just about convenience—it’s about safety, authenticity, and peace of mind.</p>
      <h3>Risks of unverified sources</h3>
      <p>Medicines from unverified sellers can be counterfeit, expired, or incorrectly stored. They may not contain the right ingredients or dosage, which can harm your health or make your condition worse. Always buy from a licensed pharmacy.</p>
      <h3>What a trusted pharmacy offers</h3>
      <p>At Maa Dulari Pharmacy, we work only with licensed manufacturers and authorised distributors. Every medicine is stored and handled as per guidelines. Our team checks prescriptions and ensures you get the right product, every time.</p>
      <h3>Transparency and support</h3>
      <p>You can reach us easily via WhatsApp or phone. We share clear pricing, delivery timelines, and order details. If you have questions about dosage, storage, or side effects, our pharmacists are here to help.</p>
      <h3>Building long-term trust</h3>
      <p>Thousands of families rely on us for regular medicines. We offer flat 20% off, genuine products, and easy returns. When you choose a trusted pharmacy, you’re investing in your family’s health for the long run.</p>
      <p>Choose Maa Dulari Pharmacy—Bharosa Har Dawa Mein. Order via WhatsApp and get genuine medicines delivered to your doorstep across India.</p>
    `,
  },
]

export const getBlogPostById = (id) => {
  const numId = typeof id === 'string' ? parseInt(id, 10) : id
  return blogPosts.find((post) => post.id === numId)
}
