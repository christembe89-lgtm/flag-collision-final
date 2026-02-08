---
description: how to deploy the application to Vercel
---

# Deploying to Vercel

The easiest way to deploy this Next.js app is by connecting your GitHub/GitLab/Bitbucket repository to Vercel.

## Option 1: Git Integration (Recommended)

1. **Push your code to GitHub**:
   - Create a new repository on [GitHub](https://github.com/new).
   - Run these commands in your console:
     ```powershell
     git init
     git add .
     git commit -m "initial commit"
     git branch -M main
     git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
     git push -u origin main
     ```
2. **Import to Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new).
   - Find your repository and click **Import**.
   - Vercel will automatically detect Next.js and apply the correct build settings.
   - Click **Deploy**.

## Option 2: Vercel CLI

1. **Install Vercel CLI**:
   ```powershell
   npm install -g vercel
   ```
2. **Login and Deploy**:
   - Run `vercel` in the project root.
   - Follow the interactive prompts to link and deploy your project.
