
document.querySelectorAll(".dropdown-menu").forEach((menu) => {
  menu.style.display = "none";
});

const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

dropdownToggles.forEach((toggle) => {
  toggle.addEventListener("click", (event) => {
    event.preventDefault();

    
    const dropdownMenu = toggle.nextElementSibling;

    if (dropdownMenu.style.display === "block") {
      dropdownMenu.style.display = "none";
    } else {
      
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        menu.style.display = "none";
      });

      dropdownMenu.style.display = "block";
    }
  });
});


document.addEventListener("click", (event) => {
  if (!event.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown-menu").forEach((menu) => {
      menu.style.display = "none";
    });
  }
});

  

const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");
const cancel = document.getElementById("cancel");


hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active"); 
  hamburger.classList.toggle("active"); 
  cancel.classList.toggle("active"); 
});


cancel.addEventListener("click", () => {
  navbar.classList.remove("active"); 
  hamburger.classList.remove("active"); 
  cancel.classList.remove("active"); 
});



const slides = document.querySelectorAll('.carousel-slide');
let currentIndex = 0;
const slideInterval = 5000; 


function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? '1' : '0';
    });
}


showSlide(currentIndex);


function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

let autoSlide = setInterval(nextSlide, slideInterval);


document.querySelector('.next-slide').addEventListener('click', () => {
    clearInterval(autoSlide); 
    nextSlide();
    autoSlide = setInterval(nextSlide, slideInterval); 
});

document.querySelector('.prev-slide').addEventListener('click', () => {
    clearInterval(autoSlide); 
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
    autoSlide = setInterval(nextSlide, slideInterval); 
});



document.getElementById("project-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const formData = {
      firstName: document.getElementById("first-name").value,
      lastName: document.getElementById("last-name").value,
      email: document.getElementById("email").value,
      companyName: document.getElementById("company-name").value,
      country: document.getElementById("country").value,
      city: document.getElementById("city").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value,
    };
  
    console.log("Form Data Submitted:", formData);
  
    
    const successMessage = document.getElementById("success-message");
    successMessage.style.display = "block";
  
    
    document.getElementById("project-form").reset();
  
  
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 3000);
  });
  

  
function isVisible(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}


function handleScroll() {
  const sections = document.querySelectorAll('.fade-in-section');
  sections.forEach((section) => {
    if (isVisible(section)) {
      section.classList.add('visible'); 
    } else {
      section.classList.remove('visible'); 
    }
  });
}


window.addEventListener('scroll', handleScroll);


document.addEventListener('DOMContentLoaded', handleScroll);
