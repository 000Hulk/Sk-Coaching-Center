 // Mobile Menu Toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Subject Tab Functionality
        const tabBtns = document.querySelectorAll('.tab-btn');
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons and tabs
                tabBtns.forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(tab => {
                    tab.classList.remove('active');
                });

                // Add active class to clicked button and corresponding tab
                btn.classList.add('active');
                const tabId = btn.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });

        // Reviews Slider
        
            const slidesContainer = document.querySelector(".slides-container");
            const slide = document.querySelector(".review-slide");
            const nextBtn = document.querySelector(".next-btn");
            const prevBtn = document.querySelector(".prev-btn");
            const sliderBtns = document.querySelectorAll(".slider-btn");

            let currentIndex = 0;
            const totalSlides = document.querySelectorAll(".review-slide").length;

            function updateSlider() {
    const slideWidth = slide.clientWidth;
            slidesContainer.scrollLeft = slideWidth * currentIndex;

    // Dot indicator
    sliderBtns.forEach((btn, i) => {
                btn.classList.toggle("active", i === currentIndex);
    });
  }

  nextBtn.addEventListener("click", () => {
    if (currentIndex < totalSlides - 1) {
                currentIndex++;
            updateSlider();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
                currentIndex--;
            updateSlider();
    }
  });

  sliderBtns.forEach((btn, index) => {
                btn.addEventListener("click", () => {
                    currentIndex = index;
                    updateSlider();
                });
  });

            // Optional: Resize check to fix layout on window resize
            window.addEventListener("resize", updateSlider);
    

    // Form submission
    const contactForm = document.querySelector('.contact-form form');
    // contactForm.addEventListener('submit', (e) => {
    // e.preventDefault();
    // alert('Thank you for your message! We will contact you shortly.');
    // contactForm.reset();
    // });
     if (contactForm) {
    contactForm.addEventListener("submit", function () {
      setTimeout(() => {
        contactForm.reset();
      }, 500);
    });
}


     setTimeout(() => {
    document.getElementById("fireButton").style.display = "inline-block";
  }, 3000);


  // Select elements
const galleryBtn = document.getElementById('showGallery');
const galleryContainer = document.getElementById('photo-gallery');
const closeBtn = document.getElementById('closeGallery');

// Function to open gallery
galleryBtn.addEventListener('click', () => {
  galleryContainer.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // Prevents background scrolling
});

// Function to close gallery
closeBtn.addEventListener('click', () => {
  galleryContainer.classList.add('hidden');
  document.body.style.overflow = 'auto'; // Re-enables background scrolling
});

// Optional: Close on "Escape" key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    galleryContainer.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
});