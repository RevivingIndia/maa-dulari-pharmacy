# Dulari Healthcare - Online Pharmacy Website

A modern, responsive React-based online pharmacy website similar to PharmEasy, Truemeds, and PillO.

## Features

- ✅ **Header with Search Bar** - Search for medicines with a prominent search bar
- ✅ **Hero Section with Slider** - Animated carousel showcasing key features
- ✅ **Medicine Categories** - 12+ healthcare categories with icons
- ✅ **WhatsApp Ordering** - Direct WhatsApp integration for easy ordering
- ✅ **E-commerce Features** - Online shopping capabilities
- ✅ **India Map with Delivery Coverage** - Animated map showing 1200+ cities and 19,000+ pin codes
- ✅ **Taglines Section** - Three key brand messages:
  - ❤️ Emotion: Dawa Bhi • Dua Bhi
  - 🤝 Trust: Bharosa Har Dawa Mein
  - 🏥 Professional: Trusted Medicines with Care
- ✅ **Responsive Design** - Works on all devices (mobile, tablet, desktop)
- ✅ **Modern UI/UX** - Built with Tailwind CSS for beautiful, modern design

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Swiper** - Modern slider/carousel library
- **React Icons** - Beautiful icon library

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Project Structure

```
dulari-healthcare/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Header with search and navigation
│   │   ├── Hero.jsx            # Hero section with slider
│   │   ├── Taglines.jsx       # Brand taglines section
│   │   ├── Categories.jsx     # Medicine categories grid
│   │   ├── DeliveryMap.jsx    # India map with delivery coverage
│   │   └── WhatsAppOrder.jsx  # WhatsApp ordering section
│   ├── App.jsx                # Main app component
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles with Tailwind
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Customization

### Update WhatsApp Number
Edit `src/components/WhatsAppOrder.jsx` and change the `phoneNumber` state:
```javascript
const [phoneNumber] = useState('919876543210') // Your WhatsApp number
```

### Update Contact Information
Edit the contact details in `src/components/WhatsAppOrder.jsx`:
- Phone number
- Email address
- WhatsApp number

### Modify Categories
Edit `src/components/Categories.jsx` to add, remove, or modify medicine categories.

### Change Hero Slides
Edit the `slides` array in `src/components/Hero.jsx` to customize the carousel content.

## Features in Detail

### Header Component
- Responsive navigation menu
- Search bar with submit button
- Shopping cart icon
- User login button
- Mobile-friendly hamburger menu

### Hero Section
- Auto-playing carousel (4 slides)
- Navigation arrows and pagination dots
- Responsive design
- Call-to-action buttons

### Delivery Map
- Animated India map visualization
- City markers with animation
- Delivery statistics (1200+ cities, 19,000+ pin codes)
- List of major cities with checkmarks

### WhatsApp Ordering
- Direct WhatsApp integration
- Custom message input
- Step-by-step ordering process
- Contact options (Phone, WhatsApp, Email)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for Dulari Healthcare.
