# 3DIMLI Hero Section Recreation

A pixel-perfect recreation of the hero section from [3dimli.com](https://www.3dimli.com/) built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Live Demo

[View Live Demo on Vercel](#) *(Deploy and add your link here)*

## 📋 Project Overview

This project recreates the hero section of 3DIMLI's website with:
- **Responsive Design**: Fully responsive across all device sizes
- **Smooth Animations**: Sequential bubble animations and content fade effects
- **Performance Optimized**: Fast loading and smooth 60fps animations
- **Accessibility**: Semantic HTML and keyboard navigation support

## 🛠️ Tech Stack

- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Text Effects**: React Type Animation

## ✨ Features

### Hero Section
- **Animated Bubbles**: 12 interactive floating bubbles with icons
- **Sequential Animations**: Bubbles disappear sequentially based on scroll progress
- **Dynamic Content**: Typewriter effect for main heading
- **Smooth Transitions**: Content fades out as user scrolls
- **Sticky Positioning**: Hero stays fixed while scrolling through extended viewport

### CTA Section
- **Sequential Entry**: Content animates in order (heading → subheading → description → button → video)
- **Smooth Transitions**: Vertical slide-up animations with easeOut easing
- **Video Integration**: Autoplay background video with fallback poster
- **Responsive Layout**: Grid-based layout adapts to screen sizes

## 🎨 Key Implementation Details

### Scroll-Based Animations
- Custom scroll progress tracking using `useEffect` and scroll events
- Progress calculated from parent container height (0-1 scale)
- Bubbles animate based on index with staggered timing
- Special handling for bottom bubbles (Heart & Headphones) that move upward

### Animation Timing
```typescript
// Bubble animation timing
- Bubbles 0-9: Start at index * 0.05 (0%, 5%, 10%... 45%)
- Bubble 10 (Heart): Starts at 50% scroll progress
- Bubble 11 (Headphones): Starts at 60% scroll progress

// CTA animation timing
- Meet 3DIMLI: 0s delay
- Main heading: 0.2s delay  
- Description: 0.4s delay
- CTA Button: 0.6s delay
- Video: 0.8s delay
```

### Responsive Breakpoints
- Mobile: < 768px (single column, adjusted bubble sizes)
- Tablet: 768px - 1024px (sticky positioning engaged)
- Desktop: > 1024px (full hero scroll experience with h-[300vh])

## 📁 Project Structure

```
assignment/
├── src/
│   ├── app/
│   │   ├── component/
│   │   │   ├── Hero.tsx           # Main hero section with scroll logic
│   │   │   ├── FloatingBubble.tsx # Individual bubble component
│   │   │   ├── CTAPage.tsx        # CTA section below hero
│   │   │   └── NavBar.tsx         # Sticky navigation bar
│   │   ├── globals.css            # Global styles and Tailwind imports
│   │   ├── layout.tsx             # Root layout
│   │   └── page.tsx               # Home page composition
│   ├── components/ui/             # Reusable UI components
│   └── lib/
│       └── utils.ts               # Utility functions
├── public/                        # Static assets
├── tailwind.config.js             # Tailwind configuration
├── tsconfig.json                  # TypeScript configuration
└── package.json                   # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd assignment
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📦 Dependencies

```json
{
  "next": "16.0.1",
  "react": "19.2.0",
  "react-dom": "19.2.0",
  "framer-motion": "^12.23.24",
  "lucide-react": "^0.548.0",
  "react-type-animation": "^3.2.0",
  "tailwindcss": "^4",
  "typescript": "^5"
}
```

## 🎯 Key Features Implemented

### ✅ Scroll Animations
- [x] Sequential bubble disappearance based on scroll progress
- [x] Smooth fade-out for hero content
- [x] Upward movement animation for heading/subheading
- [x] Special animations for Heart & Headphones bubbles

### ✅ Responsive Design
- [x] Mobile-first approach
- [x] Adaptive layouts for all screen sizes
- [x] Touch-friendly interactions
- [x] Optimized typography scaling

### ✅ Performance
- [x] Passive scroll listeners for better performance
- [x] Optimized re-renders with proper React hooks
- [x] Lazy loading for video content
- [x] Efficient animation calculations

### ✅ Accessibility
- [x] Semantic HTML structure
- [x] ARIA labels for interactive elements
- [x] Keyboard navigation support
- [x] Reduced motion support (respects user preferences)

## 🎨 Design Decisions

1. **Framer Motion over GSAP**: Chose Framer Motion for better React integration and simpler API while maintaining smooth 60fps animations

2. **Scroll Progress Tracking**: Implemented custom scroll tracking instead of IntersectionObserver for more precise animation control based on scroll position

3. **Sequential Timing**: Used index-based delays for bubbles to create natural staggered animation effect

4. **Sticky Positioning**: Used CSS sticky instead of fixed positioning for better browser compatibility and simpler scroll handling

5. **Extended Viewport Height**: Set hero container to `h-[300vh]` to provide sufficient scroll space for complete fade-out before CTA appears

## 📝 Notes

- All animations are GPU-accelerated for optimal performance
- Video includes poster image for faster initial load
- Bubble positions carefully calculated to match original design
- Color scheme matches 3DIMLI brand colors
- Smooth easing functions (easeOut) for natural motion

## 🔧 Environment Variables

No environment variables required for this project.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---


