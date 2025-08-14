# FLL Quickstart Website

A modern, responsive website built with React and Tailwind CSS that provides comprehensive guidance for FIRST LEGO League (FLL) teams. This website transforms the markdown content into an engaging, interactive learning experience.

## 🚀 Features

- **Modern Design**: Beautiful, responsive UI with smooth animations and gradients
- **Interactive Navigation**: Smooth scrolling navigation with mobile-friendly menu
- **Comprehensive Content**: Covers all aspects of FLL robotics from the markdown
- **Visual Learning**: Icons, cards, and visual elements to enhance understanding
- **Mobile Optimized**: Fully responsive design that works on all devices
- **Performance**: Optimized with modern React practices and efficient CSS

## 📚 Content Sections

1. **Hero Section** - Welcome and overview
2. **Innovation Challenge** - 2025-2026 UNEARTHED™ theme details
3. **Engineering Process** - 6-step design process with visual cards
4. **Mechanical Principles** - Gear ratios, motion transfer, and linkages
5. **Resources** - Official FLL resources and community guides
6. **Tips** - Advice for new teams and common pitfalls to avoid

## 🛠️ Technology Stack

- **React 18** - Modern React with hooks and functional components
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Lucide React** - Beautiful, customizable icons
- **CSS Animations** - Smooth transitions and hover effects
- **Responsive Design** - Mobile-first approach with breakpoint optimization

## 📦 Installation

1. **Clone the repository** (if applicable) or navigate to the project directory
2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

This will create an optimized build in the `build/` folder that you can deploy to any static hosting service.

## 🎨 Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- Primary: Blue shades for main elements
- Secondary: Red shades for secondary actions
- Accent: Green shades for success states

### Styling
- Custom CSS classes are defined in `src/index.css`
- Component-specific styles use Tailwind utility classes
- Animations and transitions are built with CSS and Tailwind

### Content
- All content is sourced from the original markdown file
- Components are modular and easy to update
- Links to external resources are maintained

## 📱 Responsive Design

The website is designed with a mobile-first approach:
- **Mobile**: Single column layout with collapsible navigation
- **Tablet**: Two-column grid layouts for better space utilization
- **Desktop**: Full three-column layouts with enhanced spacing

## 🔧 Development

### Project Structure
```
src/
├── components/          # React components
│   ├── Header.js       # Navigation header
│   ├── Hero.js         # Hero section
│   ├── InnovationProject.js

│   ├── MechanicalPrinciples.js
│   ├── Resources.js    # Resource links
│   ├── Tips.js         # Team tips
│   └── Footer.js       # Site footer
├── App.js              # Main app component
├── index.js            # React entry point
└── index.css           # Global styles and Tailwind imports
```

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add it to `App.js`
3. Update navigation in `Header.js`
4. Add corresponding styles and animations

## 🌐 Deployment

The website can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `build/` folder
- **Vercel**: Connect your repository for automatic deployments
- **GitHub Pages**: Use the `gh-pages` package
- **AWS S3**: Upload the `build/` folder to an S3 bucket

## 📖 Content Sources

All content is based on the original `fll_quickstart_simplified.md` file, which includes:
- Official FIRST LEGO League information

- Mechanical principles for LEGO robotics
- Resource links and community guides
- Tips for new FLL teams

## 🤝 Contributing

To contribute to this project:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 🆘 Support

For questions or issues:
1. Check the existing documentation
2. Review the component structure
3. Ensure all dependencies are properly installed
4. Verify your Node.js version (recommended: 16+)

---

**Built with ❤️ for the FLL community**

git push https://jackieb108:YOUR_PAT@github.com/jackieb108/fflrobotics.git main