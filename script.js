// script.js - Andria Gagoshashvili Portfolio
// All content is loaded from the CV data below

const cvData = {
  name: "Andro G.",
  title: "Full-Stack Laravel Developer",
  tagline: "PHP, JS, SQL, Python | Custom Web Apps",
  summary: `Technology isn't just my profession — it's my passion. With a background rooted in computer science and a mindset wired for problem-solving, I bring both creativity and logic to every project I touch.\n\nI'm a full-stack developer with a strong command of modern web technologies. My current skill set includes: Backend: PHP, Laravel, SQL, Python.`,
  contact: {
    // ...existing code...
    phone: "+995 571 500 592",
    email: "agagosha58@gmail.com",
    nationality: "Georgian",
    dob: "10 August 1998"
  },
  experience: [
    {
      role: "Full-Stack Developer (Middle)",
      company: "Autotechno",
      date: "February 2023 - February 2025",
      desc: [
        "Developed a comprehensive management system tailored for the company's needs.",
        "Continuously added new modules and maintained existing ones."
      ],
      tech: ["PHP", "Laravel", "JavaScript", "MySQL", "MSSQL"]
    },
    {
      role: "Full-Stack Developer (Junior)",
      company: "PSP Pharmacy",
      date: "August 2021 - August 2022",
      desc: [
        "Contributed to the development and support of internal consumer systems and services."
      ],
      tech: ["PHP", "Laravel", "JavaScript", "MySQL", "MSSQL"]
    },
    {
      role: "Full-Stack Developer (Intern)",
      company: "Fidus Soft",
      date: "October 2020 - August 2021",
      desc: [
        "Participated in creating internal systems for various clients."
      ],
      tech: ["PHP", "Laravel", "JavaScript", "MSSQL", "CentOS"]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Information Technology",
      school: "Modusi College",
      date: "2021-2022"
    },
    {
      degree: "Bachelor of Computer Science (BCompSc), Computer science",
      school: "Caucasus University",
      date: "2017-2021"
    }
  ],
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Georgian", level: "Basic" }
  ],
  skills: [
    { name: "Python", percent: 90 },
    { name: "Bootstrap", percent: 90 },
    { name: "HTML", percent: 98 },
    { name: "Laravel", percent: 95 },
    { name: "CSS", percent: 95 },
    { name: "PHP", percent: 97 },
    { name: "SQL", percent: 92 },
    { name: "C++", percent: 80 },
    { name: "JavaScript", percent: 90 }
  ],
  projects: [
    {
      title: "Imperial Tours – Luxury Travel & Tours Website",
      img: "assets/project1.png",
      desc: "A modern website for a luxury travel and tours company in Georgia, featuring booking, destination showcases, and custom CMS.",
      tags: ["PHP", "Laravel", "Bootstrap", "HTML", "CSS"],
      type: "Portfolio"
    },
    {
      title: "Autotechno – Complete HR & Company Management System (Private system)",
      img: "assets/project2.png",
      desc: "A comprehensive HR and company management platform for Autotechno, including real-time dashboards and modular architecture.",
      tags: ["PHP", "Laravel", "JavaScript", "MySQL", "MSSQL"],
      type: "Work"
    },
    {
      title: "Geo Auto Rent – Car Rental Service Website",
      img: "assets/project3.png",
      desc: "A car rental service website with booking, fleet management, and payment integration.",
      tags: ["PHP", "Laravel", "Bootstrap", "HTML", "CSS"],
      type: "Portfolio"
    },
    {
      title: "Petrolhead – Automotive News & Car Community Platform",
      img: "assets/project4.png",
      desc: "A platform for automotive news, reviews, and a car enthusiast community.",
      tags: ["PHP", "Laravel", "JavaScript", "MySQL"],
      type: "Portfolio"
    },
    {
      title: "Areon – Official Distributor Website for Car Fragrances",
      img: "assets/project5.png",
      desc: "Official distributor e-commerce website for Areon car fragrances in Georgia.",
      tags: ["PHP", "Laravel", "Bootstrap", "HTML", "CSS"],
      type: "Portfolio"
    },
    {
      title: "LitKid – E-commerce Website for Kids' Books & Stationery",
      img: "assets/project6.png",
      desc: "An e-commerce platform for children's books and stationery, with user-friendly navigation and secure checkout.",
      tags: ["PHP", "Laravel", "Bootstrap", "HTML", "CSS"],
      type: "Portfolio"
    }
  ]
};

// Typed.js for animated name
new Typed('#typed-name', {
  strings: [cvData.name],
  typeSpeed: 60,
  showCursor: false
});

document.getElementById('about-text').textContent = cvData.summary;

// Responsive Navigation
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  navToggle.classList.toggle('open');
});
// Close nav on link click (mobile)
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.classList.remove('open');
  });
});

// Skills section
function renderSkills() {
  const skillsList = document.getElementById('skills-list');
  skillsList.innerHTML = '';
  cvData.skills.forEach(skill => {
    const bar = document.createElement('div');
    bar.className = 'skill-bar';
    bar.innerHTML = `
      <span class="label">${skill.name}</span>
      <div class="bar" style="width:0"></div>
      <span class="percent">${skill.percent}%</span>
    `;
    skillsList.appendChild(bar);
  });
}
renderSkills();

// Animate skill bars on scroll
function animateSkillBars() {
  document.querySelectorAll('.skill-bar .bar').forEach((bar, i) => {
    bar.style.width = cvData.skills[i].percent + '%';
  });
}
AOS.init({ duration: 900, once: true });

document.addEventListener('aos:in', ({ detail }) => {
  if (detail.id === 'skills-list') animateSkillBars();
});

// Timeline (Experience & Education)
function renderTimeline() {
  const timeline = document.getElementById('timeline-list');
  timeline.innerHTML = '';
  cvData.experience.forEach(exp => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.innerHTML = `
      <h3>${exp.role} <span class="at">@ ${exp.company}</span></h3>
      <div class="date">${exp.date}</div>
      <div class="desc">${exp.desc.join('<br>')}</div>
      <div class="tags">${exp.tech.map(t => `<span class='tag'>${t}</span>`).join(' ')}</div>
    `;
    timeline.appendChild(item);
  });
  cvData.education.forEach(edu => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.innerHTML = `
      <h3>${edu.degree} <span class="at">@ ${edu.school}</span></h3>
      <div class="date">${edu.date}</div>
    `;
    timeline.appendChild(item);
  });
}
renderTimeline();

// Projects
function renderProjects(filter = 'All') {
  const list = document.getElementById('projects-list');
  list.innerHTML = '';
  let filtered = filter === 'All' ? cvData.projects : cvData.projects.filter(p => p.type === filter);
  filtered.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-tilt', '');
    card.innerHTML = `
      <img src="${project.img}" alt="${project.title}" />
      <div class="card-content">
        <h4>${project.title}</h4>
        <div class="desc">${project.desc}</div>
        <div class="tags">${project.tags.map(t => `<span class='tag'>${t}</span>`).join(' ')}</div>
      </div>
    `;
    card.addEventListener('click', () => openLightbox(project.img, project.title));
    list.appendChild(card);
  });
  VanillaTilt.init(document.querySelectorAll('.project-card'), { max: 12, speed: 400, glare: true, 'max-glare': 0.18 });
}

// Project filter
function renderProjectFilter() {
  const filterDiv = document.getElementById('projects-filter');
  const types = ['All', ...new Set(cvData.projects.map(p => p.type))];
  filterDiv.innerHTML = types.map(type => `<button>${type}</button>`).join('');
  filterDiv.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', e => {
      filterDiv.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.textContent);
    });
  });
  filterDiv.querySelector('button').classList.add('active');
}
renderProjectFilter();
renderProjects();

// Lightbox for project images
function openLightbox(img, title) {
  let overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = `<div class='lightbox'><img src='${img}' alt='${title}' /><span class='close'>&times;</span></div>`;
  document.body.appendChild(overlay);
  overlay.querySelector('.close').onclick = () => overlay.remove();
  overlay.onclick = e => { if (e.target === overlay) overlay.remove(); };
}

// Contact form
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = document.getElementById('send-btn');
  btn.classList.add('sending');
  btn.textContent = 'Sending...';
  setTimeout(() => {
    btn.classList.remove('sending');
    btn.textContent = 'Send';
    alert('Thank you for reaching out! I will get back to you soon.');
    form.reset();
  }, 1200);
});

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const setTheme = theme => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
};
themeToggle.onclick = () => {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  setTheme(current === 'light' ? 'dark' : 'light');
};
(function initTheme() {
  const saved = localStorage.getItem('theme');
  setTheme(saved || 'light');
})();

// Smooth scroll
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Particles.js
particlesJS.load('particles-js', 'assets/particles.json', function(){});

// GSAP ScrollTrigger animations
window.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray('.section').forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 60,
      duration: 1.1,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  });
});
