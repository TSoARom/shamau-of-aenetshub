# Shamau of Aenetshub — GitHub Pages Deployment Guide

This guide walks you through publishing this website on **GitHub Pages**, a free static site hosting service provided by GitHub. No coding experience is required.

---

## Table of Contents

1. [What is GitHub Pages?](#1-what-is-github-pages)
2. [Create a GitHub Account](#2-create-a-github-account)
3. [Create a New Repository](#3-create-a-new-repository)
4. [Upload the Website Files](#4-upload-the-website-files)
5. [Enable GitHub Pages](#5-enable-github-pages)
6. [Add a Custom Domain (Optional)](#6-add-a-custom-domain-optional)
7. [Submit to Google Search Console](#7-submit-to-google-search-console)
8. [Submit to Bing Webmaster Tools](#8-submit-to-bing-webmaster-tools)

---

## 1. What is GitHub Pages?

GitHub Pages is a **free** service that lets you host static websites directly from a GitHub repository. It supports custom domains, HTTPS encryption, and is widely used for project pages, portfolios, documentation, and organizational websites.

**Key benefits:**
- Completely free hosting
- Built-in HTTPS/SSL
- Reliable uptime (powered by GitHub)
- Custom domain support
- Easy to update — just push new files to your repository

---

## 2. Create a GitHub Account

1. Go to [https://github.com](https://github.com)
2. Click **"Sign up"** in the top-right corner
3. Enter your email address, create a password, and choose a username
4. Complete the verification steps (email confirmation, CAPTCHA)
5. Select the free plan (you do not need a paid plan)

---

## 3. Create a New Repository

1. After logging in, click the **"+"** icon in the top-right and select **"New repository"**
2. Fill in the details:
   - **Repository name:** `shamau-of-aenetshub` (this will become your URL: `shamau-of-aenetshub.github.io`)
   - **Description:** "Official website of the Shamau of Aenetshub"
   - **Visibility:** Choose **Public** (required for free GitHub Pages)
   - **Do NOT** check "Add a README file"
   - **Do NOT** add a .gitignore or license
3. Click **"Create repository"**

---

## 4. Upload the Website Files

### Method A: Using the GitHub Website (Easiest)

1. On your new repository page, click **"uploading an existing file"**
2. Drag and drop all the following files and folders:
   - `index.html`
   - `style.css`
   - `script.js`
   - `robots.txt`
   - `sitemap.xml`
   - `images/` folder (containing `symbol.png`, `scroll-1.png`, `scroll-2.png`, `scroll-3.png`)
3. Add a commit message like "Initial website upload"
4. Click **"Commit changes"**

### Method B: Using Git (Advanced)

If you have Git installed on your computer:

```bash
# Navigate to the website folder
cd /path/to/shamau-of-aenetshub

# Initialize a git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial website upload"

# Add your GitHub repository as a remote
git remote add origin https://github.com/YOUR-USERNAME/shamau-of-aenetshub.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

---

## 5. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click the **"Settings"** tab (gear icon)
3. In the left sidebar, click **"Pages"**
4. Under **"Build and deployment" > "Source"**, select **"Deploy from a branch"**
5. Under **"Branch"**, select **"main"** and **"/ (root)"**
6. Click **"Save"**
7. Wait 1–3 minutes for deployment
8. Your website will be live at: **`https://YOUR-USERNAME.github.io/shamau-of-aenetshub/`**

> **Tip:** If you named your repository exactly `YOUR-USERNAME.github.io`, the site will be live at `https://YOUR-USERNAME.github.io/` (no subfolder).

---

## 6. Add a Custom Domain (Optional)

If you own a domain name (e.g., `shamau-of-aenetshub.org`):

1. Go to your repository **Settings > Pages**
2. Under **"Custom domain"**, enter your domain name
3. Check **"Enforce HTTPS"**
4. In your domain registrar's DNS settings, add the following records:
   - **CNAME** record: `www` pointing to `YOUR-USERNAME.github.io`
   - **A** records: Point your apex domain (root) to GitHub Pages IP addresses:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
5. Wait for DNS propagation (can take up to 48 hours, but usually much faster)

After setting a custom domain, update the following in your `index.html`:
- The `<link rel="canonical">` tag
- All `og:url` and `og:image` meta tags
- The sitemap URL in `robots.txt`
- The URL in `sitemap.xml`

---

## 7. Submit to Google Search Console

Getting your site indexed by Google is critical for SEO. Here's how:

1. Go to [https://search.google.com/search-console](https://search.google.com/search-console)
2. Sign in with a Google account
3. Click **"Add Property"**
4. Enter your website URL (e.g., `https://YOUR-USERNAME.github.io/shamau-of-aenetshub/`)
5. Choose a verification method:
   - **Recommended: HTML tag** — Copy the meta tag provided and add it to the `<head>` of your `index.html`, then upload the updated file
   - **Alternative: Google Analytics** — If you set up Google Analytics, you can verify through it
6. Click **"Verify"**
7. Once verified, submit your sitemap:
   - Go to **"Sitemaps"** in the left sidebar
   - Enter: `sitemap.xml`
   - Click **"Submit"**
8. Request indexing:
   - Go to **"URL Inspection"** in the left sidebar
   - Enter your homepage URL
   - Click **"Request Indexing"**

Google typically indexes new sites within a few days to a few weeks.

---

## 8. Submit to Bing Webmaster Tools

Bing powers Yahoo search as well, so submitting here covers two search engines:

1. Go to [https://www.bing.com/webmasters](https://www.bing.com/webmasters)
2. Sign in with a Microsoft account
3. Click **"Add my site"**
4. Enter your website URL
5. Choose a verification method (similar to Google — HTML tag is easiest)
6. Add the verification meta tag to your `index.html`
7. Click **"Verify"**
8. Submit your sitemap:
   - Go to **"Sitemaps"** in the dashboard
   - Enter: `sitemap.xml`
   - Click **"Submit"**

---

## Updating the Website

To update the website after making changes:

### Via GitHub Website:
1. Navigate to the file you want to edit in your repository
2. Click the pencil icon to edit
3. Make your changes and commit

### Via Git:
```bash
cd /path/to/shamau-of-aenetshub
git add .
git commit -m "Update website content"
git push
```

Changes are usually live within 1–3 minutes.

---

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Google Search Console Help](https://support.google.com/webmasters)
- [Bing Webmaster Help](https://www.bing.com/webmasters/help)

---

*Built for the Shamau of Aenetshub. May the Larrett's strings guide you.*
