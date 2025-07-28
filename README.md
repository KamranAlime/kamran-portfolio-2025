# Kamran's Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🌓 Dark/Light theme toggle
- 📱 Fully responsive design
- 🎨 Custom pixel cursor
- ⚡ Fast and optimized
- 🎯 Interactive animations
- 🔗 Company logo hover effects

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd kamran-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Replace Images

The portfolio currently uses placeholder images. Replace these URLs in `src/App.tsx`:

```javascript
const images = {
  logo: 'path/to/your/logo.png',
  profile: 'path/to/your/profile.jpg',
  tally100Logo: 'path/to/tally100-logo.png',
  // ... other image paths
};
```

### Update Content

1. **Personal Information**: Edit the hero content in the `HeroContent` component
2. **Company Links**: Update the URLs in the company links
3. **Navigation**: Modify the `navItems` array to change navigation items

### Styling

The project uses Tailwind CSS. You can customize:
- Colors in the CSS variables
- Responsive breakpoints
- Component styling

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (for icons)

## License

MIT License - feel free to use this code for your own portfolio!