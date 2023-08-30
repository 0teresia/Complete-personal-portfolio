let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let header = document.querySelector('header');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Smooth scrolling for navigation links
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    let targetId = link.getAttribute('href');
    let targetSection = document.querySelector(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    }

    // Close the menu when a navigation link is clicked
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  });
});

// Scroll animations and sticky header
window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
      });
      sec.classList.add('show-animate');
    } else {
      sec.classList.remove('show-animate');
    }
  });

  header.classList.toggle('sticky', window.scrollY > 100);
});

// Scroll to Home section when Home link is clicked
const homeLink = document.querySelector('header nav a[href="#home"]');
homeLink.addEventListener('click', event => {
  event.preventDefault();
  window.scrollTo({
    top: 0, // Scroll to the top of the page (home section)
    behavior: 'smooth'
  });
});

function scrollToContact() {
  var contactSection = document.getElementById("contact");
  contactSection.scrollIntoView({ behavior: "smooth" });
}


document.addEventListener("DOMContentLoaded", function () {
  const linkedinUrl = "https://www.linkedin.com/in/teresia-muthoni";
  const githubUrl = "https://github.com/0teresia";
  const twitterUrl = "https://twitter.com/Teresia69526780";

  const linkedinLink = document.getElementById("linkedin");
  const githubLink = document.getElementById("github");
  const twitterLink = document.getElementById("twitter");

  linkedinLink.addEventListener("click", () => {
      window.location.href = linkedinUrl;
  });

  githubLink.addEventListener("click", () => {
      window.location.href = githubUrl;
  });

  twitterLink.addEventListener("click", () => {
      window.location.href = twitterUrl;
  });
});



// Projects section
const scrollToProjects = () => {
  const projectsSection = document.getElementById("projects");
  projectsSection.scrollIntoView({ behavior: "smooth" });
};

const viewProjectButtons = document.querySelectorAll(".view-project-button");
viewProjectButtons.forEach(button => {
  button.addEventListener("click", function(event) {
    event.preventDefault();
    scrollToProjects();
  });
});



