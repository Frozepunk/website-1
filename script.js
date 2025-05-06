document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("launchButton");
    if (button) {
      button.addEventListener("click", () => {
        document.body.classList.add("fade-out");
        setTimeout(() => {
          window.location.href = "landing.html";
        }, 600);
      });
    }
  });

// Typewriter Effect
const text = "WELCOME TO CODING CLUB - CodeRise";
let index = 0;
const speed = 100;

function type() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(type, speed);
  }
}

// Particles Effect
const particles = [];
const numParticles = 50;
const particleContainer = document.querySelector('.particles');

function createParticle() {
  const particle = document.createElement('div');
  particle.className = 'particle';
  
  // Random position
  particle.style.left = Math.random() * 100 + 'vw';
  particle.style.top = Math.random() * 100 + 'vh';
  
  // Random size and color
  const size = Math.random() * 2 + 1;
  particle.style.width = size + 'px';
  particle.style.height = size + 'px';
  particle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  
  // Random animation duration
  particle.style.animationDuration = Math.random() * 3 + 2 + 's';
  
  particleContainer.appendChild(particle);
  particles.push(particle);
}

// Create particles
for (let i = 0; i < numParticles; i++) {
  createParticle();
}

// Remove particles that go out of bounds
function manageParticles() {
  particles.forEach((particle, index) => {
    const rect = particle.getBoundingClientRect();
    if (rect.top > window.innerHeight || rect.left > window.innerWidth) {
      particle.remove();
      particles.splice(index, 1);
      createParticle();
    }
  });
}

// Update particles on scroll
window.addEventListener('scroll', manageParticles);

// Button Hover Effects
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'scale(1.05)';
  });
  
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Initialize typewriter effect
window.onload = type;