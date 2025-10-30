// Load and render data from data.json
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('data.json');
        const data = await response.json();

        renderProfile(data);
        renderAbout(data);
        renderEducation(data);
        renderExperience(data);
        renderPublications(data);
        renderConferences(data);
        renderAwards(data);
        renderAlbum(data);
        renderFooter(data);

        // Setup mobile menu toggle
        setupMobileMenu();

        // Setup smooth scrolling
        setupSmoothScroll();

    } catch (error) {
        console.error('Error loading data:', error);
        document.body.innerHTML = '<div style="text-align: center; padding: 50px;">Error loading website data. Please check data.json file.</div>';
    }
});

function renderProfile(data) {
    // Update navigation brand
    document.getElementById('nav-name').textContent = data.navBrand || data.name;

    // Update hero section
    const profilePhoto = document.getElementById('profile-photo');
    if (data.profilePhoto) {
        profilePhoto.src = data.profilePhoto;
        profilePhoto.alt = `${data.name} - Profile Photo`;
    } else {
        profilePhoto.style.display = 'none';
    }

    document.getElementById('hero-name').textContent = data.name;
    document.getElementById('hero-title').textContent = data.title;

    // Render social links
    const socialLinksContainer = document.getElementById('social-links');
    socialLinksContainer.innerHTML = data.social.map(social =>
        `<a href="${social.url}" target="_blank" rel="noopener noreferrer" aria-label="${social.platform}">
            <i class="${social.icon}"></i>
        </a>`
    ).join('');
}

function renderAbout(data) {
    const aboutContent = document.getElementById('about-content');
    aboutContent.innerHTML = data.about.map(paragraph =>
        `<p>${paragraph}</p>`
    ).join('');
}

function renderEducation(data) {
    const educationTimeline = document.getElementById('education-timeline');
    educationTimeline.innerHTML = data.education.map(edu => `
        <div class="timeline-item">
            <div class="timeline-header">
                <h3 class="timeline-title">${edu.degree}</h3>
                <span class="timeline-date">${edu.date}</span>
            </div>
            <div class="timeline-subtitle">${edu.institution}</div>
            <div class="timeline-description">${edu.description}</div>
        </div>
    `).join('');
}

function renderExperience(data) {
    const experienceTimeline = document.getElementById('experience-timeline');
    experienceTimeline.innerHTML = data.experience.map(exp => {
        const description = Array.isArray(exp.description)
            ? `<ul>${exp.description.map(item => `<li>${item}</li>`).join('')}</ul>`
            : exp.description;

        return `
            <div class="timeline-item">
                <div class="timeline-header">
                    <h3 class="timeline-title">${exp.title}</h3>
                    <span class="timeline-date">${exp.date}</span>
                </div>
                <div class="timeline-subtitle">${exp.company}</div>
                <div class="timeline-description">${description}</div>
            </div>
        `;
    }).join('');
}

function renderPublications(data) {
    const publicationsList = document.getElementById('publications-list');
    publicationsList.innerHTML = data.publications.map(pub => `
        <div class="publication-item">
            <div class="publication-title">${pub.title}</div>
            <div class="publication-authors">${pub.authors}</div>
            <div class="publication-venue">${pub.venue}</div>
            ${pub.links && pub.links.length > 0 ? `
                <div class="publication-links">
                    ${pub.links.map(link =>
                        `<a href="${link.url}" class="publication-link" target="_blank" rel="noopener noreferrer">${link.text}</a>`
                    ).join('')}
                </div>
            ` : ''}
        </div>
    `).join('');
}

function renderConferences(data) {
    const conferencesList = document.getElementById('conferences-list');
    conferencesList.innerHTML = data.conferences.map(conf => `
        <div class="publication-item">
            <div class="publication-title">${conf.title}</div>
            <div class="publication-venue">${conf.venue} (${conf.year})</div>
        </div>
    `).join('');
}

function renderAwards(data) {
    const awardsList = document.getElementById('awards-list');
    awardsList.innerHTML = data.awards.map(award => `
        <div class="publication-item">
            <div class="publication-title">${award.title}</div>
            <div class="publication-venue">${award.issuer} (${award.year})</div>
        </div>
    `).join('');
}

function renderAlbum(data) {
    if (data.album) {
        document.getElementById('album-title').textContent = data.album.title;
        document.getElementById('album-description').textContent = data.album.description;

        const photoGallery = document.getElementById('photo-gallery');
        photoGallery.innerHTML = data.album.photos.map(photo => `
            <div class="photo-item">
                <img src="${photo.src}" alt="${photo.alt}" loading="lazy">
                <div class="photo-caption">${photo.caption}</div>
            </div>
        `).join('');
    }
}

function renderFooter(data) {
    document.getElementById('footer-text').innerHTML = data.footer;
}

function setupMobileMenu() {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}
