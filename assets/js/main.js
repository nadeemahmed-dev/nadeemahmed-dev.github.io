// Year
document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});

// Smooth scroll + active nav
const navLinks = document.querySelectorAll('.navlinks a');
const sections = [...document.querySelectorAll('section[id]')];

function setActive() {
  const y = window.scrollY + 100;
  let current = sections[0]?.id;
  sections.forEach(s => { if (y >= s.offsetTop) current = s.id; });
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
}
window.addEventListener('scroll', setActive); setActive();

navLinks.forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id && id.startsWith('#')) {
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({behavior: 'smooth'});
      history.pushState(null, '', id);
    }
  });
});

// Back to top button
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  if (!toTop) return;
  toTop.style.display = window.scrollY > 800 ? 'block' : 'none';
});
toTop?.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

// === Data (edit here) ===
const USERNAME = 'nadeemahmed-dev';

const CERTS = [
  { title: 'AWS Certified Solutions Architect – Associate', img: '/assets/img/certs/cert-aws-saa-600.png', url: 'https://www.credly.com/badges/16d97883-91d2-4d11-9e1b-7238f37c5daa?source=linked_in_profile', provider: 'Amazon Web Services' },
  { title: 'Complete Python Bootcamp',                     img: '/assets/img/certs/cert-python-bootcamp-600.png', url: 'https://ude.my/UC-509b1469-45c4-4d4b-a144-d89f1307ceec', provider: 'Udemy' },
  { title: 'DevSecOps Essentials',                         img: '/assets/img/certs/cert-devsecops-essentials-600.png', url: 'https://verify.acloud.guru/3722DBF29EB9', provider: 'A Cloud Guru' },
  { title: 'Complete Guide to Elasticsearch',              img: '/assets/img/certs/cert-elasticsearch-600.png', url: 'https://ude.my/UC-898f46c4-c211-4629-8197-d0e6d498b4f1', provider: 'Udemy' },
  { title: 'Kubernetes for Absolute Beginners',            img: '/assets/img/certs/cert-kubernetes-beginners-600.png', url: 'https://ude.my/UC-9a3f327d-bc00-446d-81b2-a08305a98896', provider: 'Udemy / KodeKloud' },
  { title: 'Ansible for the Absolute Beginner',            img: '/assets/img/certs/cert-ansible-beginner-600.png', url: 'https://ude.my/UC-923bad21-bee2-4818-b479-0fc61ceb661b', provider: 'Udemy / KodeKloud' },
  { title: 'DevOps Essentials',                            img: '/assets/img/certs/cert-devops-essentials-600.png', url: 'https://verify.acloud.guru/6A305116A8FA', provider: 'A Cloud Guru' },
  { title: 'Docker for Absolute Beginners',                img: '/assets/img/certs/cert-docker-beginners-600.png', url: 'https://ude.my/UC-eeb8039d-4449-4954-89b3-40372ebab64a', provider: 'Udemy / KodeKloud' },
  { title: 'Git Complete',                                 img: '/assets/img/certs/cert-git-complete-600.png', url: 'https://ude.my/UC-070e72d2-d2f0-4bcb-a748-a86fb892ae17', provider: 'Udemy' },
  { title: 'Data Visualization with Kibana',               img: '/assets/img/certs/cert-kibana-600.png', url: 'https://ude.my/UC-781d5fe5-8656-433c-8533-b84a1cf17325', provider: 'Udemy' },
];

const PROJECTS = [
  // Replace with your real repos
  { title: 'EKS Blue/Green Deployments', desc: 'GitOps with Argo CD, automated rollbacks, HPA; zero downtime.', link: `https://github.com/${USERNAME}/eks-bluegreen` },
  { title: 'Terraform AWS Baseline',     desc: 'VPC, subnets, IGW/NAT, ALB, ASG; opinionated security defaults.', link: `https://github.com/${USERNAME}/tf-aws-baseline` },
  { title: 'Observability Stack',        desc: 'Prometheus + Loki + Grafana on Kubernetes with alerting.', link: `https://github.com/${USERNAME}/obs-stack` }
];

// Render certifications
const certGrid = document.getElementById('certGrid');
if (certGrid) {
  CERTS.forEach(c => {
    const card = document.createElement('article');
    card.className = 'cert-card';
    card.innerHTML = `
      <img src="${c.img}" alt="${c.title} badge">
      <h4>${c.title}</h4>
      <p class="meta">${c.provider}</p>
      <a class="btn ghost" href="${c.url}" target="_blank" rel="noopener">Verify</a>
    `;
    certGrid.appendChild(card);
  });
}

// Render projects
const projectGrid = document.getElementById('projectGrid');
if (projectGrid) {
  PROJECTS.forEach(p => {
    const card = document.createElement('div');
    card.className = 'project';
    card.innerHTML = `<h4>${p.title}</h4><p>${p.desc}</p><a href="${p.link}" target="_blank" rel="noopener">Repo →</a>`;
    projectGrid.appendChild(card);
  });
}

// Contact form stub
document.getElementById('contactForm')?.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks! This demo form is client-side only. I can wire this to Formspree/Netlify when you’re ready.');
});

