// --- 1.*Smooth Scrolling for Internal Links ---*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behaviour: 'smooth'
        });

        // Close the navbar on mobile after clicking a link
        const navbarCollapse = document.getElementById('navbarCollapse');
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false});
        if (navbarCollapse.classList.contains('show')) {
            bsCollapse.hide();
        }
    });
});

// --- 2. Scroll-Based Animations (Intersection Observer) ---

// Setup the observer
const animateOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // When the element is in the viewport
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            // Stop observing once animated
            observer.unobserve(entry.target);
        }
    });
}, {
    // Options for the observer
    root: null, // viewport as the root
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the element is visible
});

// Target all elements with the 'animate-on-scroll' class
document.querySelectorAll('.animate-on-scroll').forEach(element => {
    animateOnScroll.observe(element);
});


// --- 3. Contact Form UI (Basic Frontend Validation/Message) ---
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulate form submission success (no backend needed)
    alert('Thank you for your message! I will get back to you shortly.');
    
    // Reset the form after success simulation
    this.reset();
});

    const observerOptions = {
  threshold: 0.5 // Trigger when 50% of the bar is visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progressBar = entry.target.querySelector('span');
      const targetWidth = entry.target.getAttribute('data-progress');
      
      // Apply the width from data attribute
      progressBar.style.width = targetWidth;
      
      // Stop observing once animated (optional)
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Select all progress lines and start observing
document.querySelectorAll('.progress-line').forEach(line => {
  observer.observe(line);
});


    /*FAQ*/
        function toggleFAQ(id) {
        const content = document.getElementById(`faq-${id}`);
        const icon = document.getElementById(`icon-${id}`);
        
        // Close other open FAQs (Optional)
        // document.querySelectorAll('[id^="faq-"]').forEach(el => {
        //     if(el.id !== `faq-${id}`) el.classList.add('hidden');
        // });

        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            icon.style.transform = 'rotate(45deg)';
        } else {
            content.classList.add('hidden');
            icon.style.transform = 'rotate(0deg)';
        }
    }
