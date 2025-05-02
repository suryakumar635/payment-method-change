const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// banner Selection start//
    document.addEventListener('DOMContentLoaded', () => {
      const slides = document.querySelectorAll('.slide');
      const dots = document.querySelectorAll('.nav-dot');
      const prevBtn = document.querySelector('.prev-btn');
      const nextBtn = document.querySelector('.next-btn');
      
      let currentSlide = 0;
      let slideInterval;
      
      // Function to show a specific slide
      function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
          slide.classList.remove('active');
        });
        
        // Remove active class from all dots
        dots.forEach(dot => {
          dot.classList.remove('active');
        });
        
        // Show the selected slide
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        currentSlide = index;
      }
      
      // Set up automatic slideshow
      function startSlideshow() {
        slideInterval = setInterval(() => {
          let nextIndex = (currentSlide + 1) % slides.length;
          showSlide(nextIndex);
        }, 6000); // Change slide every 6 seconds
      }
      
      // Stop slideshow
      function stopSlideshow() {
        clearInterval(slideInterval);
      }
      
      // Previous button click
      prevBtn.addEventListener('click', () => {
        stopSlideshow();
        let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
        startSlideshow();
      });
      
      // Next button click
      nextBtn.addEventListener('click', () => {
        stopSlideshow();
        let nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
        startSlideshow();
      });
      
      // Dot navigation
      dots.forEach(dot => {
        dot.addEventListener('click', () => {
          stopSlideshow();
          let index = parseInt(dot.getAttribute('data-index'));
          showSlide(index);
          startSlideshow();
        });
      });
      
      // Start the slideshow
      startSlideshow();
    });
  

// banner Selection end //

// donate section start 
function chooseAmount(amount) {
  document.querySelectorAll('.give-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  document.getElementById('giveAmount').value = amount;
}

function enableCustom() {
  document.querySelectorAll('.give-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById('giveAmount').focus();
}

function redirectToPayment() {
  const amount = document.getElementById('giveAmount').value;
  if (amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }
  window.location.href = `payment.html?amount=${amount}`;
}
document.getElementById('scrollDonate').addEventListener('click', function () {
  document.getElementById('giveNow').scrollIntoView({ behavior: 'smooth' });
});

//  donate section end 

// payment stat
// payment end
// causes start
// Animated Counter
let counter = document.getElementById('counter');
let target = 4; //4M+
let count = 0;
let speed = 0; // smaller = faster

function updateCounter() {
  if (count < target) {
    count += 0.1;
    counter.innerText = count.toFixed(1) + 'M+';
    setTimeout(updateCounter, speed);
  } else {
    counter.innerText = target + 'M+';
  }
}

window.addEventListener('scroll', () => {
  const sectionTop = counter.getBoundingClientRect().top;
  if (sectionTop < window.innerHeight) {
    updateCounter();
  }
}, { once: true });

// causes end

// causes2 start
// Simple animation when cards enter viewport
const cards = document.querySelectorAll('.mission-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => {
  observer.observe(card);
});
// causes2 end

// events start
// Animation on scroll
const section = document.querySelector('.events-container');

constobserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      section.classList.add('show');
    }
  });
}, {
  threshold: 0.3
});

observer.observe(section);


// events end
// portfolio start
// Simple hover animation or future donation interactions
document.querySelectorAll('.donate-btn').forEach(button => {
  button.addEventListener('click', () => {
    alert('Thank you for your support!');
  });
});

// portfolio end

// donate valantear start
document.querySelectorAll('.event-nav').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Navigation button clicked!');
  });
});
// donate valantear end

// program start
// Toggle lock/unlock icon on button click
const lockBtn = document.getElementById('lockToggle');

lockBtn.addEventListener('click', () => {
  if (lockBtn.textContent.trim() === '🔒') {
    lockBtn.textContent = '🔓';
  } else {
    lockBtn.textContent = '🔒';
  }
});

// program end

// feeding number start
// For future animations like filling circles dynamically
// Currently, this is just setup for future animations if needed

document.addEventListener('DOMContentLoaded', () => {
  const circles = document.querySelectorAll('.circle-progress');

  circles.forEach(circle => {
    const value = circle.getAttribute('data-value');
    circle.textContent = value;
  });
});

// feeding numaber end

// JS ready for future animations, like fade-in or counter effects
document.addEventListener('DOMContentLoaded', () => {
  console.log('Meal info section loaded');
});

// team start
const teamCarousel = document.getElementById('teamCarousel');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let scrollAmount = 0;

nextBtn.addEventListener('click', () => {
  teamCarousel.scrollBy({ left: 270, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  teamCarousel.scrollBy({ left: -270, behavior: 'smooth' });
});

// team start
// Questions start

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    question.classList.toggle('active');
    const answer = question.nextElementSibling;

    if (question.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      answer.style.padding = '0 20px 20px 20px';
    } else {
      answer.style.maxHeight = 0;
      answer.style.padding = '0 20px';
    }
  });
});

// Questions end

// post secion start
const categoryButtons = document.querySelectorAll('.category');
const postCards = document.querySelectorAll('.post-card');

categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.category.active').classList.remove('active');
    button.classList.add('active');

    const selectedCategory = button.getAttribute('data-category');

    postCards.forEach(card => {
      const cardCategories = card.getAttribute('data-category');
      if (selectedCategory === 'all' || cardCategories.includes(selectedCategory)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// post secion end

// Basic confirmation
console.log("Blog grid loaded successfully!");
// end

// about page start
document.addEventListener('DOMContentLoaded', () => {
  const emailElement = document.getElementById('email-info');
  const phoneElement = document.getElementById('phone-info');
  const organizationName = document.querySelector('.org-name');
  const highlightTexts = document.querySelectorAll('.highlight-text');

  function changeContactInfo() {
      emailElement.textContent = 'contact@alone7foundation.org';
      phoneElement.textContent = '(+91) 9876543210';
  }

  function emphasizeOrganizationName() {
      organizationName.style.fontSize = '1.2em';
      organizationName.style.fontWeight = 'bold';
      setTimeout(() => {
          organizationName.style.fontSize = '1em';
          organizationName.style.fontWeight = 'normal';
      }, 1500);
  }

  function animateHighlightText() {
      highlightTexts.forEach((text, index) => {
          setTimeout(() => {
              text.classList.add('animated-highlight');
              setTimeout(() => {
                  text.classList.remove('animated-highlight');
              }, 2000);
          }, index * 1000); // ஒவ்வொரு வார்த்தைக்கும் தாமதம்
      });
  }

  // செயல்பாடுகளை அழைக்கவும்
  // changeContactInfo(); // தேவைப்பட்டால், பக்கம் ஏற்றும்போது தொடர்புத் தகவலை மாற்ற uncomment செய்யவும்
  emphasizeOrganizationName();
  animateHighlightText();

  // பயனர் ஊடாடும்போது இந்த செயல்பாடுகளைத் தூண்ட event listeners ஐ சேர்க்கலாம்
  // எடுத்துக்காட்டாக:
  // document.querySelector('.footer-title').addEventListener('mouseover', changeContactInfo);
  // document.querySelector('.bottom-center').addEventListener('click', emphasizeOrganizationName);
});

// about page end