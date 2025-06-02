
# Jigyanshu Mohapatra - Netflix-Style Interactive CV

A modern, Netflix-inspired interactive CV showcasing growth marketing expertise with 4.5+ years of experience.

## 🚀 Live Demo

- **GitHub Pages**: [https://jigyanshu.github.io/jms-netflix-cv-showcase/](https://jigyanshu.github.io/jms-netflix-cv-showcase/)
- **Custom Domain**: [https://jigyanshu.com](https://jigyanshu.com)

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript, Vite
- **UI Library**: shadcn/ui, Tailwind CSS
- **State Management**: @tanstack/react-query
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Charts**: Recharts
- **Deployment**: GitHub Pages

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

## 🏃‍♂️ Local Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/jigyanshu/jms-netflix-cv-showcase.git
cd jms-netflix-cv-showcase
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:8080`

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

## 🚀 Deployment

### Automatic Deployment (Recommended)

This project uses GitHub Actions for automatic deployment to GitHub Pages:

1. **Push to main branch** - Automatically triggers deployment
2. **Manual deployment** - Go to Actions tab and run "Deploy to GitHub Pages" workflow

### Manual Deployment

If you prefer manual deployment:

```bash
npm run build
npm run deploy
```

## 🌐 Custom Domain Setup

### For GitHub Pages:

1. **Add CNAME file**: Already included in `/public/CNAME` with `jigyanshu.com`
2. **Configure DNS**: Point your domain to GitHub Pages:
   - For apex domain (jigyanshu.com): Create A records pointing to:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - For www subdomain: Create CNAME record pointing to `jigyanshu.github.io`

3. **Enable in GitHub**: Go to repository Settings > Pages > Custom domain

### DNS Configuration Example:

```
Type    Name    Value
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
CNAME   www     jigyanshu.github.io
```

## 🔧 Configuration

### Vite Configuration

The project is configured for GitHub Pages deployment with:
- Base path: `/jms-netflix-cv-showcase/`
- Asset optimization
- React SWC for fast builds

### React Router Configuration

- Basename set to `/jms-netflix-cv-showcase` for GitHub Pages
- 404.html for client-side routing support
- Single Page Application (SPA) configuration

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── ExperienceSection.tsx
│   └── ...
├── pages/              # Page components
│   ├── Index.tsx
│   └── NotFound.tsx
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── App.tsx             # Main application component
```

## 🐛 Troubleshooting

### Blank Page on GitHub Pages

1. Check that `base` is correctly set in `vite.config.ts`
2. Verify `basename` in React Router configuration
3. Ensure 404.html is present for client-side routing
4. Clear browser cache and try again

### Build Errors

1. Check Node.js version (requires v18+)
2. Delete `node_modules` and run `npm install` again
3. Check for TypeScript errors: `npm run type-check`

### Deployment Issues

1. Verify GitHub Pages is enabled in repository settings
2. Check that GitHub Actions has proper permissions
3. Ensure the workflow file is in `.github/workflows/`

### Cache Issues

- Hard refresh: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
- Clear browser cache completely
- Try incognito/private browsing mode

## 📊 Performance

- Lighthouse Score: 95+ on all metrics
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Optimized images and assets
- Code splitting and lazy loading

## 🔒 Security

- Content Security Policy (CSP) headers
- XSS protection
- HTTPS enforcement
- Secure external links
- Input sanitization

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Jigyanshu Mohapatra**
- Email: jigyanshu@example.com
- LinkedIn: [linkedin.com/in/jigyanshu](https://linkedin.com/in/jigyanshu)
- Website: [jigyanshu.com](https://jigyanshu.com)

---

Built with ❤️ using React, TypeScript, and Vite. Deployed on GitHub Pages.
