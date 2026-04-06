# Quick Start Guide - Modular Portfolio Website

## ✅ What Has Been Done

Your HTML portfolio has been successfully broken down into modules:

### 📂 New Structure:
```
portfolio-modular/
├── index.html              ← Main HTML (links to external files)
├── assets/
│   ├── css/
│   │   └── styles.css      ← All your CSS (extracted from <style> tags)
│   ├── js/
│   │   └── main.js         ← All JavaScript (extracted from <script> tags)
│   └── images/
│       ├── profile-placeholder.svg  ← Placeholder image
│       └── README.md
├── blogs/
│   ├── microservices-spring-boot-lambda.md           ← Blog 1
│   ├── monolith-to-microservices-migration.md      ← Blog 2
│   ├── terraform-jenkins-automation.md              ← Blog 3
│   └── fullstack-enterprise-best-practices.md       ← Blog 4
├── data/
│   ├── projects.json       ← Project data (4 projects)
│   └── blogs.json          ← Blog metadata
└── README.md               ← Complete documentation
```

## 🚀 How to Use

### Step 1: Extract the Files
Download the `portfolio-modular` folder from the link below.

### Step 2: Run Locally
Open a terminal in the `portfolio-modular` folder and run:

```bash
# Using Python 3 (easiest)
python3 -m http.server 8000

# Or using Python 2
python -m SimpleHTTPServer 8000

# Or using Node.js
npx http-server -p 8000
```

Then open your browser to: **http://localhost:8000**

### Step 3: Customize

**Change Colors:**
- Edit `assets/css/styles.css`
- Find the `:root` section at the top
- Change color values

**Add New Project:**
- Open `data/projects.json`
- Add your project data
- Add a project card in `index.html`

**Add New Blog Post:**
1. Create `.md` file in `blogs/` folder
2. Add entry to `data/blogs.json`
3. Add blog card in `index.html`

**Replace Profile Photo:**
- Add your image to `assets/images/`
- Update `index.html` to reference it

## 📝 Benefits of This Structure

✅ **Separation of Concerns:**
- CSS in one place (`styles.css`)
- JavaScript in one place (`main.js`)
- Content in data files (`projects.json`, `blogs.json`)
- Blog posts as markdown files

✅ **Easy Maintenance:**
- Update styles without touching HTML
- Add blogs without editing large HTML file
- Version control friendly

✅ **Scalability:**
- Easy to add new projects, blogs, sections
- Can add build tools later (Webpack, etc.)
- Ready for frameworks if needed

✅ **Performance:**
- CSS and JS can be cached by browsers
- Images organized in assets folder
- Ready for optimization

## 🎨 What You Can Do Next

1. **Replace Placeholder Image** with your real photo
2. **Update Content** in `data/projects.json` with your actual projects
3. **Write New Blogs** in the `blogs/` folder
4. **Customize Colors** in `styles.css`
5. **Add Real Images** for projects in `assets/images/`
6. **Deploy** to GitHub Pages, Netlify, or Vercel

## ⚠️ Important Notes

1. **Must Use Local Server**: Opening `index.html` directly in browser won't work for blogs (CORS restriction). Always use a local server.

2. **File Paths**: All paths are relative (`./assets/css/...`), so keep the folder structure intact.

3. **Blog Loading**: Blogs are loaded dynamically from `.md` files. If not working, check console for errors.

## 📚 Resources

- **Full Documentation**: See `README.md` in the portfolio-modular folder
- **CSS Variables**: Edit colors in `assets/css/styles.css` (lines 19-32)
- **JavaScript Functions**: All in `assets/js/main.js`

## 🆘 Troubleshooting

**Q: Styles not showing?**
- Check if `assets/css/styles.css` exists
- Clear browser cache (Ctrl+F5)

**Q: Blogs not loading?**
- Make sure you're using a local server
- Check browser console for errors

**Q: How do I deploy?**
- GitHub Pages: Push to GitHub, enable Pages in settings
- Netlify: Drag and drop the folder
- Vercel: Use Vercel CLI

---

## 🎉 You're All Set!

Your portfolio is now modular, organized, and ready for customization. Check the README.md for detailed instructions!
