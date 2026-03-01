// Function to load HTML components
function loadComponent(id, file, callback) {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to load ${file}`);
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
            if (callback) callback(); 
        })
        .catch(error => console.error('Error loading component:', error));
}

// Logic for Navbar functionality
function initializeNavbar() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-item');
    const navbar = document.getElementById('main-navbar');
    
    if(hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        navItems.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (navLinks && navLinks.classList.contains('active')) return; 

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.classList.add('navbar-hidden');
        } else {
            navbar.classList.remove('navbar-hidden');
        }
        lastScrollTop = scrollTop;
    });
}

// Logic for EmailJS Form Submission
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const btn = document.getElementById('submit-btn');
            btn.innerText = 'Sending...';

            // Replace with your Service ID and Template ID
            emailjs.sendForm('service_6zsblsu', 'template_ia9a6d4', this)
                .then(() => {
                    btn.innerText = 'Send Inquiry';
                    alert('Inquiry Sent Successfully! We will contact you soon.');
                    contactForm.reset();
                }, (error) => {
                    btn.innerText = 'Send Inquiry';
                    alert('Failed to send inquiry. Please try again later.');
                    console.error('EmailJS Error:', error);
                });
        });
    }
}

// Load all components on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("navbar-placeholder", "components/navbar.html", initializeNavbar);
    loadComponent("contact-placeholder", "components/contact.html", initializeContactForm);
    
    // Load static components
    loadComponent("hero-placeholder", "components/hero.html");
    loadComponent("about-placeholder", "components/about.html");
    loadComponent("services-placeholder", "components/services.html");
    loadComponent("awards-placeholder", "components/awards.html");
    loadComponent("gallery-placeholder", "components/gallery.html");
    loadComponent("blogs-placeholder", "components/blogs.html");
    loadComponent("events-placeholder", "components/events.html");
    loadComponent("customers-placeholder", "components/customers.html");
    loadComponent("footer-placeholder", "components/footer.html");
});