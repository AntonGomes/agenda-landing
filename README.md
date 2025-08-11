# Agenda Landing Page

A modern React landing page for Agenda - an AI platform that builds custom workflow automation agents for businesses.

## Features

- 🎨 Modern, responsive design with light theme and teal/green accents
- ⚡ Built with React, Vite, and Tailwind CSS
- 📱 Mobile-first responsive design
- 🚀 Optimized for production deployment
- 🎯 Clear value proposition and feature presentation

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd agenda-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Building for Production

```bash
npm run build
```

This creates a `dist` folder with the production build.

### Preview Production Build

```bash
npm run preview
```

## Deployment to Vercel

### Option 1: Vercel CLI

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel --prod
```

### Option 2: Vercel Dashboard

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect the React app and deploy it

### Option 3: Deploy from GitHub

1. Connect your GitHub repository to Vercel
2. Set up automatic deployments on push to main branch
3. Every commit to main will trigger a new deployment

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── Features.jsx    # Features showcase
│   ├── HowItWorks.jsx  # Process explanation
│   ├── CTA.jsx         # Call-to-action section
│   └── Footer.jsx      # Footer
├── App.jsx             # Main app component
├── main.jsx            # React entry point
└── index.css           # Global styles with Tailwind
```

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Vercel** - Deployment platform

## Design

The landing page features:
- Clean, modern design with light theme
- Teal and green accent colors (inspired by the reference design)
- Professional typography using Inter font
- Smooth hover animations and transitions
- Mobile-responsive layout
- Clear hierarchy and call-to-actions

## License

This project is licensed under the MIT License.
