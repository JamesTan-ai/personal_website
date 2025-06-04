# Personal Website

A beautiful, modern React website for selling handcrafted phone straps with video landing page and responsive design.

## Features

- 🎥 Full-screen video landing page
- 📱 53 unique phone strap products
- 🛒 Shopping cart functionality
- 📱 Responsive design (mobile-friendly)
- ✨ Elegant muted pink theme
- 🔍 Category filtering (Beaded, Chain, Crystal)
- ⚡ Built with React + Vite for fast development and performance

## How to Run the Website

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/JamesTan-ai/personal_website.git
cd personal_website
```

### 2. Navigate to Website Directory
```bash
cd website
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start Development Server
```bash
npm run dev
```

The website will be available at [http://localhost:5173](http://localhost:5173)

### 5. Build for Production (Optional)
```bash
npm run build
```

### 6. Preview Production Build (Optional)
```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure
```
personal_website/
├── website/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   ├── styles/        # CSS stylesheets
│   │   ├── data/          # Product data
│   │   └── hooks/         # Custom React hooks
│   ├── public/            # Static files and product images
│   ├── dist/              # Production build (generated)
│   └── package.json       # Dependencies and scripts
└── README.md              # This file
```

## Tech Stack
- **Frontend**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Routing**: React Router DOM 7.6.1
- **Styling**: Vanilla CSS with responsive grid layout
- **Linting**: ESLint with React plugins

## Deployment
This website can be easily deployed to platforms like:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Simply run `npm run build` and deploy the `dist` folder.

---
Made with ❤️ by James Tan 