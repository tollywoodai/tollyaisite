# GitHub Package Guide for TollywoodAI.com

## Overview
This guide helps you package and upload the TollywoodAI website to GitHub for version control, collaboration, and deployment.

## Project Structure
```
tollywoodai-website/
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── robots.txt
│   └── placeholder.svg
├── src/                    # Source code
│   ├── assets/            # Images and media
│   ├── components/        # React components
│   ├── hooks/             # Custom hooks
│   ├── lib/               # Utilities
│   ├── pages/             # Page components
│   ├── App.tsx            # Main app component
│   ├── index.css          # Global styles
│   └── main.tsx           # Entry point
├── package.json           # Dependencies
├── vite.config.ts         # Vite configuration
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## Files to Include in GitHub Package

### Essential Files
- All files in `src/` directory
- `public/` directory (except auto-generated files)
- `package.json` and `package-lock.json`
- Configuration files:
  - `vite.config.ts`
  - `tailwind.config.ts`
  - `tsconfig.json`
  - `tsconfig.app.json`
  - `tsconfig.node.json`
  - `postcss.config.js`
  - `components.json`
  - `eslint.config.js`
- Documentation:
  - `README.md`
  - `DNS_SETUP_INSTRUCTIONS.md`
  - `PUBLISH_AND_DNS_INSTRUCTIONS.md`
  - `GITHUB_PACKAGE_GUIDE.md`

### Files to Exclude (.gitignore)
```
# Dependencies
node_modules/
/.pnp
.pnp.js

# Production build
/build
/dist

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE files
.vscode/
.idea/
*.swp
*.swo

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/
*.lcov

# Dependency directories
node_modules/
jspm_packages/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Microbundle cache
.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# Next.js build output
.next

# Nuxt.js build / generate output
.nuxt
dist

# Storybook build outputs
.out
.storybook-out

# Temporary folders
tmp/
temp/
```

## Step-by-Step Upload Process

### Method 1: Using GitHub Web Interface

1. **Create Repository**
   - Go to GitHub.com and sign in
   - Click "New repository"
   - Name: `tollywoodai-website`
   - Description: "AI-powered Tollywood film industry website"
   - Set to Public or Private
   - Initialize with README (optional)

2. **Prepare Files**
   - Download all project files from Lovable
   - Create folder structure as shown above
   - Ensure all files are properly organized

3. **Upload Files**
   - In GitHub repository, click "uploading an existing file"
   - Drag and drop all files (GitHub will maintain folder structure)
   - Or upload folders individually:
     - Upload `src/` folder
     - Upload `public/` folder
     - Upload configuration files
     - Upload documentation files

4. **Commit Changes**
   - Add commit message: "Initial commit - TollywoodAI website"
   - Click "Commit changes"

### Method 2: Using Git Command Line

1. **Initialize Repository**
   ```bash
   git init
   git remote add origin https://github.com/yourusername/tollywoodai-website.git
   ```

2. **Add Files**
   ```bash
   git add .
   git commit -m "Initial commit - TollywoodAI website"
   ```

3. **Push to GitHub**
   ```bash
   git branch -M main
   git push -u origin main
   ```

### Method 3: Using GitHub Desktop

1. **Download GitHub Desktop**
   - Install from desktop.github.com

2. **Create Repository**
   - File → New Repository
   - Name: `tollywoodai-website`
   - Local path: Choose folder with project files

3. **Publish**
   - Click "Publish repository"
   - Choose visibility (public/private)

## Post-Upload Setup

### 1. Repository Settings
- Add repository description
- Add website URL: `https://tollywoodai.com`
- Add topics: `react`, `typescript`, `tollywood`, `ai`, `film`

### 2. Branch Protection
- Go to Settings → Branches
- Add rule for `main` branch
- Require pull request reviews
- Require status checks

### 3. GitHub Pages (Optional)
- Go to Settings → Pages
- Source: Deploy from a branch
- Branch: `main` / `docs` (if using docs folder)

### 4. Collaborators
- Go to Settings → Manage access
- Add team members with appropriate permissions

## Deployment Options

### 1. Vercel (Recommended)
- Connect GitHub repository
- Auto-deploy on push to main
- Custom domain support

### 2. Netlify
- Connect GitHub repository
- Continuous deployment
- Form handling included

### 3. GitHub Pages
- Free hosting for public repositories
- Custom domain support
- SSL certificate included

## Environment Variables

### Development (.env.local)
```
VITE_APP_NAME=TollywoodAI
VITE_APP_URL=https://tollywoodai.com
VITE_CONTACT_EMAIL=tollywoodaics@gmail.com
```

### Production
- Set environment variables in deployment platform
- Never commit sensitive data to repository

## Maintenance

### Regular Updates
- Update dependencies monthly
- Monitor security vulnerabilities
- Backup repository regularly

### Version Control Best Practices
- Use meaningful commit messages
- Create feature branches for new development
- Use pull requests for code review
- Tag releases with semantic versioning

## Support

- **GitHub Documentation**: https://docs.github.com
- **Git Tutorial**: https://git-scm.com/docs/gittutorial
- **GitHub Desktop**: https://desktop.github.com
- **Vercel Deployment**: https://vercel.com/docs

## Contact
For technical support: tollywoodaics@gmail.com