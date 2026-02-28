// Function to load HTML components
function loadComponent(id, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to load ${file}`);
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

// Load all components on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("navbar-placeholder", "components/navbar.html");
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