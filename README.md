# Modern Portfolio Website

A stunning, modern portfolio website built with **Next.js 15**, **Tailwind CSS**, and **Framer Motion**. This portfolio showcases cutting-edge frontend development skills with smooth animations, responsive design, and interactive elements.

## ✨ Features

- **🎨 Modern Design**: Clean, professional, and visually striking interface
- **🌙 Dark/Light Mode**: Seamless theme switching with system preference detection
- **📱 Responsive**: Mobile-first design that looks perfect on all devices
- **🚀 Smooth Animations**: Framer Motion powered animations and microinteractions
- **⚡ Performance**: Optimized for speed with Next.js 15 and Turbopack
- **♿ Accessible**: Built with accessibility best practices
- **🎯 SEO Optimized**: Comprehensive metadata and Open Graph tags

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Typography**: Inter & Fira Code fonts
- **Icons**: Lucide React + Tabler Icons
- **Theme**: next-themes for dark/light mode
- **Development**: TypeScript, ESLint

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` (or the port shown in terminal)

## 🎨 Customization Guide

### 1. Personal Information

**Update `src/app/layout.tsx`** for SEO metadata:
```typescript
export const metadata: Metadata = {
  title: "Your Name - Frontend Developer Portfolio",
  description: "Your custom description here...",
  // Update all metadata fields
};
```

**Update `src/components/hero-section.tsx`**:
- Change name, title, and description
- Update social media links
- Customize the hero content

### 2. About Section (`src/components/about-section.tsx`)

- Update the personal story and background
- Modify the statistics (projects completed, experience, etc.)
- Customize the highlights and achievements

### 3. Skills Section (`src/components/skills-section.tsx`)

- Update skill levels and categories
- Add/remove technologies
- Customize the tech stack icons

### 4. Projects Section (`src/components/projects-section.tsx`)

Replace the sample projects with your real projects:
```typescript
const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Project description...",
    image: "your-project-image-url",
    liveUrl: "https://your-live-site.com",
    githubUrl: "https://github.com/yourusername/project",
    technologies: ["React", "Next.js", "TypeScript"],
    category: "Full Stack",
    featured: true,
    year: "2024",
    status: "Live"
  },
  // Add more projects...
];
```

### 5. Contact Information

Update contact details in `src/app/page.tsx` and throughout components:
- Email address
- Phone number
- Location
- Social media links

### 6. Colors & Branding

The color scheme is defined in `src/app/globals.css`. Customize the CSS variables:
```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96%;
  /* Customize other colors */
}
```

### 7. Images & Assets

- Add your professional photos to `public/` folder
- Update project images with your actual screenshots
- Add your logo/favicon

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles & theme
│   │   ├── layout.tsx           # Root layout & metadata
│   │   └── page.tsx             # Main portfolio page
│   ├── components/
│   │   ├── about-section.tsx    # About me section
│   │   ├── hero-section.tsx     # Hero/landing section
│   │   ├── navigation.tsx       # Navigation component
│   │   ├── projects-section.tsx # Projects showcase
│   │   ├── skills-section.tsx   # Skills & technologies
│   │   ├── theme-provider.tsx   # Theme context provider
│   │   └── theme-toggle.tsx     # Dark/light mode toggle
│   └── lib/
│       └── utils.ts             # Utility functions
├── public/                      # Static assets
└── package.json
```

## 🎯 Key Components

### Navigation
- Smooth scroll navigation
- Mobile-responsive menu
- Active section highlighting
- Glass morphism effects

### Hero Section
- Animated gradient background
- Floating geometric shapes
- Interactive mouse tracking
- Call-to-action buttons

### About Section
- Personal story and background
- Achievement statistics
- Interactive highlight cards
- Animated elements on scroll

### Skills Section
- Animated progress bars
- Technology icons
- Categorized skill display
- Interactive hover effects

### Projects Section
- Project filtering
- Modal previews
- Live demo links
- Technology tags

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

### Other Platforms
- **Netlify**: Drag and drop the `out` folder after `npm run build`
- **GitHub Pages**: Use `next export` for static export

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Animation Features

- **Scroll-triggered animations** - Elements animate as they enter viewport
- **Hover microinteractions** - Buttons, cards, and links have subtle animations
- **Page transitions** - Smooth navigation between sections
- **Loading states** - Animated loading indicators
- **Theme transitions** - Smooth dark/light mode switching

## 🌟 Performance Features

- **Image optimization** - Next.js automatic image optimization
- **Code splitting** - Automatic code splitting for optimal loading
- **Font optimization** - Optimized Google Fonts loading
- **SEO optimization** - Comprehensive metadata and structured data

## 🐛 Troubleshooting

**Port already in use?**
- The dev server will automatically use an available port (3001, 3002, etc.)

**Module not found errors?**
- Run `npm install` to ensure all dependencies are installed
- Check import paths are correct

**Styling issues?**
- Ensure Tailwind CSS is properly configured
- Check for any CSS conflicts

## 📞 Support

If you need help customizing your portfolio:
1. Check the component comments for guidance
2. Refer to the official documentation:
   - [Next.js Docs](https://nextjs.org/docs)
   - [Tailwind CSS Docs](https://tailwindcss.com/docs)
   - [Framer Motion Docs](https://www.framer.com/motion/)

## 📄 License

This project is open source and available under the MIT License.

---

**Made with ❤️ using Next.js, Tailwind CSS, and Framer Motion**

Ready to showcase your frontend expertise! 🚀
