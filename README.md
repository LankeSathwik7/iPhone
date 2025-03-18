# 📱 Animated iPhone 15 Website

A stunning interactive 3D showcase of the iPhone 15 featuring smooth animations, responsive design, and immersive user experience. This project recreates Apple's iPhone 15 Pro website using React.js, Three.js, and GSAP animations.

[View Live Demo](https://animated-iphone15.netlify.app/)

## ✨ Features

- **Interactive 3D Models** - Explore the iPhone 15 Pro from every angle with dynamic Three.js rendering
- **Smooth Animation Effects** - Captivating transitions and scroll animations powered by GSAP
- **Custom Video Carousel** - Interactive video showcase highlighting iPhone features
- **Color Customization** - View the iPhone in different color variants (Black, Blue, White, Yellow)
- **Fully Responsive Design** - Optimized experience across all devices (mobile, tablet, desktop)
- **Performance Optimized** - Fast loading and smooth interactions even with complex 3D elements

## 🛠️ Technical Architecture

- **Frontend Framework**: React.js
- **3D Rendering**: Three.js with React Three Fiber & Drei
- **Animations**: GSAP (GreenSock Animation Platform)
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: TailwindCSS for utility-first responsive design
- **Error Tracking**: Sentry integration for real-time monitoring

## 📦 Installation

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/LankeSathwik7/iPhone.git
   cd iPhone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:5173 in your browser to view the application

## 🚀 Usage

Navigate through the website to experience:
- Rotating 3D iPhone model that responds to scroll events
- Smooth section transitions with GSAP animations
- Interactive color selection for the iPhone model
- Responsive video showcases highlighting key features
- Detailed product information with animated reveals

## 🗂️ Project Structure

```
.
├── README.md
├── index.html
├── package.json
├── postcss.config.js
├── public
│   ├── assets
│   │   ├── images
│   │   │   └── [image files]
│   │   └── videos
│   │       └── [video files]
│   └── models
│       └── scene.glb
├── src
│   ├── App.jsx
│   ├── components
│   │   ├── ErrorButton.jsx
│   │   ├── Features.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Highlights.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── IPhone.jsx
│   │   ├── Lights.jsx
│   │   ├── Loader.jsx
│   │   ├── Model.jsx
│   │   ├── ModelView.jsx
│   │   ├── Navbar.jsx
│   │   └── VideoCarousel.jsx
│   ├── constants
│   │   └── index.js
│   ├── index.css
│   ├── main.jsx
│   └── utils
│       ├── animations.js
│       └── index.js
├── tailwind.config.js
└── vite.config.js
```

## 🔍 Key Components

### 3D Model Rendering
The project uses Three.js with React Three Fiber to render and manipulate the 3D iPhone model, allowing users to view it from different angles.

### GSAP Animations
GSAP powers the smooth animations, including scroll-triggered effects, section transitions, and interactive elements throughout the site.

### Video Carousel
A custom video carousel showcases iPhone features with smooth transitions and playback controls.

### Responsive Design
TailwindCSS ensures the website looks and functions perfectly across all device sizes.

## 🌟 Animation Techniques

- **Parallax Effects**: Creating depth with elements moving at different speeds
- **Scroll Triggers**: Animations triggered based on scroll position
- **Model Rotations**: 3D iPhone model that rotates in response to user interaction
- **Fade Transitions**: Smooth opacity transitions between sections
- **Color Changes**: Seamless transitions when changing iPhone color variants

## 💻 Development

### Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run preview` - Previews the built app locally
- `npm run lint` - Runs ESLint to check code quality

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Three.js](https://threejs.org/) for 3D rendering capabilities
- [GSAP](https://greensock.com/gsap/) for powerful animation tools
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) for React rendering with Three.js
- [TailwindCSS](https://tailwindcss.com/) for utility-first CSS
- [Vite](https://vitejs.dev/) for fast development experience
- [JavaScript Mastery](https://www.jsmastery.pro/) for the complete tutorial that was followed to create this project

---

Made with ❤️ by [LankeSathwik7](https://github.com/LankeSathwik7)