// Function to load HTML components
function loadComponent(id, file, callback) {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to load ${file}`);
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
            if (callback) callback(); // Run specific code after component loads
        })
        .catch(error => console.error('Error loading component:', error));
}

// Logic for Navbar functionality (Hamburger & Smart Scroll)
function initializeNavbar() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-item');
    const navbar = document.getElementById('main-navbar');
    
    // 1. Hamburger Menu Toggle
    if(hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // 2. Smart Scroll (Hide on scroll down, show on scroll up)
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // If the mobile menu is open, don't hide the navbar
        if (navLinks && navLinks.classList.contains('active')) {
            return; 
        }

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down & past the hero top: Hide Navbar
            navbar.classList.add('navbar-hidden');
        } else {
            // Scrolling up: Show Navbar
            navbar.classList.remove('navbar-hidden');
        }
        lastScrollTop = scrollTop;
    });
}

// Load all components on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
    // Load navbar first, and trigger initializeNavbar when it's done
    loadComponent("navbar-placeholder", "components/navbar.html", initializeNavbar);
    
    // Load everything else
    loadComponent("hero-placeholder", "components/hero.html");
    loadComponent("about-placeholder", "components/about.html");
    loadComponent("services-placeholder", "components/services.html");
    loadComponent("awards-placeholder", "components/awards.html");
    loadComponent("gallery-placeholder", "components/gallery.html");
    loadComponent("blogs-placeholder", "components/blogs.html");
    loadComponent("events-placeholder", "components/events.html");
    loadComponent("customers-placeholder", "components/customers.html");
    loadComponent("contact-placeholder", "components/contact.html");
    loadComponent("footer-placeholder", "components/footer.html");
});