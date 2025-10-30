# Personal Website

A clean, modern, and easy-to-manage personal website for showcasing your profile, education, work experience, and publications.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Easy Content Management**: All content is managed through a single `data.json` file
- **Clean Sections**: About, Education, Work Experience, Publications, and Contact
- **Social Media Integration**: Link to your GitHub, LinkedIn, Twitter, and more
- **Modern UI**: Professional design with smooth animations and transitions
- **No Build Process**: Simple HTML/CSS/JS - just edit and deploy

## Quick Start

### 1. Edit Your Information

Open [data.json](data.json) and update all the fields with your personal information:

#### Profile Section
```json
{
  "name": "Your Name",
  "title": "Your Title / Profession",
  "profilePhoto": "url-to-your-photo.jpg"
}
```

#### About Section
Update the `about` array with paragraphs describing yourself:
```json
"about": [
  "Your first paragraph here...",
  "Second paragraph if needed..."
]
```

#### Social Links
Add or remove social media links:
```json
"social": [
  {
    "platform": "github",
    "url": "https://github.com/yourusername",
    "icon": "fab fa-github"
  }
]
```

Available icons (from Font Awesome):
- GitHub: `fab fa-github`
- LinkedIn: `fab fa-linkedin`
- Twitter/X: `fab fa-twitter` or `fab fa-x-twitter`
- Email: `fas fa-envelope`
- Google Scholar: `fas fa-graduation-cap`
- ResearchGate: `fab fa-researchgate`
- ORCID: `fab fa-orcid`

#### Education
Add your educational background:
```json
"education": [
  {
    "degree": "Ph.D. in Computer Science",
    "institution": "University Name",
    "date": "2020 - 2024",
    "description": "Your description here"
  }
]
```

#### Work Experience
Add your work history (descriptions can be text or bullet points):
```json
"experience": [
  {
    "title": "Senior Software Engineer",
    "company": "Company Name",
    "date": "2023 - Present",
    "description": [
      "First responsibility",
      "Second responsibility"
    ]
  }
]
```

#### Publications
Add your publications with links:
```json
"publications": [
  {
    "title": "Your Paper Title",
    "authors": "Author1, Author2, Author3",
    "venue": "Conference/Journal Name 2024",
    "links": [
      {"text": "PDF", "url": "https://..."},
      {"text": "Code", "url": "https://github.com/..."}
    ]
  }
]
```

#### Contact Information
```json
"contact": {
  "email": "your.email@example.com",
  "location": "City, Country",
  "phone": "+1 (234) 567-8900"
}
```

### 2. Add Your Profile Photo

Option 1: Use an external URL
- Host your photo somewhere (GitHub, Imgur, etc.)
- Update `profilePhoto` in `data.json` with the URL

Option 2: Use a local file
- Add your photo to the repository (e.g., `profile.jpg`)
- Update `profilePhoto` to `"profile.jpg"`

### 3. Deploy to GitHub Pages

1. Make sure your repository is named `username.github.io` (replace `username` with your GitHub username)
2. Push your changes:
   ```bash
   git add .
   git commit -m "Update personal website"
   git push
   ```
3. Go to your repository settings on GitHub
4. Navigate to "Pages" section
5. Under "Source", select "main" branch
6. Your site will be available at `https://username.github.io`

## Customization

### Changing Colors

Edit [style.css](style.css) and modify the CSS variables at the top:

```css
:root {
    --primary-color: #2c3e50;      /* Main dark color */
    --secondary-color: #3498db;     /* Accent color */
    --accent-color: #e74c3c;        /* Highlight color */
    --text-color: #333;             /* Text color */
    --light-bg: #f8f9fa;            /* Light background */
}
```

### Adding/Removing Sections

To hide a section, add `display: none;` to that section in the CSS:

```css
#publications {
    display: none;
}
```

To add a new section:
1. Add the HTML in [index.html](index.html)
2. Add the data structure in [data.json](data.json)
3. Add a render function in [script.js](script.js)
4. Add navigation link in the navbar

### Testing Locally

Simply open `index.html` in your web browser. For better testing with CORS (if needed), use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## File Structure

```
.
├── index.html          # Main HTML structure
├── style.css           # All styling and responsive design
├── script.js           # JavaScript for loading and rendering data
├── data.json           # Your personal data (EDIT THIS!)
└── README.md           # This file
```

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Tips

- Keep your `about` section concise (2-3 paragraphs)
- List publications in reverse chronological order (newest first)
- Use high-quality, professional profile photo (square aspect ratio works best)
- Test your changes locally before pushing to GitHub
- Validate your JSON at [jsonlint.com](https://jsonlint.com) if you encounter errors

## Troubleshooting

**Website shows "Loading..." everywhere**
- Check that `data.json` is in the same directory as `index.html`
- Validate your JSON syntax at jsonlint.com
- Check browser console for errors (F12)

**Profile photo not showing**
- Verify the image URL is accessible
- Check that the URL is correct in `data.json`
- If using a local file, ensure it's in the repository

**Mobile menu not working**
- Clear your browser cache
- Make sure `script.js` is loaded correctly

## License

Feel free to use this template for your personal website!
