const projects = [
  {
    title: "To-Do List App",
    description: "An intuitive task manager allowing users to add, mark as complete, and delete tasks. Built with JavaScript and stored in localStorage for persistent tracking."
  },
  {
    title: "Weather Forecast App",
    description: "This app fetches real-time weather data using the OpenWeatherMap API. It showcases temperature, humidity, and live weather icons based on user location or search."
  },
  {
    title: "Responsive Blog Site",
    description: "A modern, mobile-first blog layout using Flexbox and Grid. It demonstrates responsive typography, card layouts, and clean navigation structure."
  },
  {
    title: "Image Gallery with Popups",
    description: "A gallery layout with dynamic modal popups, CSS transitions, and JavaScript to enlarge and view images on click. Focused on performance and UX."
  }
];

// Generate dynamic cards
const container = document.getElementById("projectContainer");
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeModal = document.getElementById("closeModal");

projects.forEach((proj) => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `<h3>${proj.title}</h3><p>${proj.description.substring(0, 60)}...</p>`;
  
  card.addEventListener("click", () => {
    modalTitle.textContent = proj.title;
    modalDesc.textContent = proj.description;
    modal.style.display = "flex";
  });

  container.appendChild(card);
});

// Modal functionality
closeModal.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };

// Scroll animation effect
const fadeEls = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("appear");
  });
});
fadeEls.forEach(el => observer.observe(el));

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  themeToggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
});
