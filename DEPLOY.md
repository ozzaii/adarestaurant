# Deploy to GitHub Pages

## Steps to deploy:

1. **Create GitHub repository**
   - Go to https://github.com/new
   - Name: `adarestaurant`
   - Make it public
   - Don't initialize with README

2. **Push code**
   ```bash
   git remote add origin https://github.com/pzzaii/adarestaurant.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Source: GitHub Actions
   - The workflow will auto-deploy when you push

4. **Wait for deployment**
   - Check Actions tab for build status
   - Site will be at: https://pzzaii.github.io/adarestaurant

## GitHub Actions Workflow

Already configured in `.github/workflows/deploy.yml`:
- Builds on every push to main
- Exports static site
- Deploys to GitHub Pages

## Manual Build

To build locally:
```bash
npm run build
```

Static files will be in `out/` directory.