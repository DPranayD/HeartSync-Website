document.addEventListener("DOMContentLoaded", function() {
    // Get the current URL path
    var path = window.location.pathname;

    // Get the filename from the path
    var page = path.split("/").pop();

    // Remove the query string if it exists
    page = page.split("?")[0];

    // Define the mapping between page filenames and navigation IDs
    var navMapping = {
        "index.html": "nav-home",
        "about.html": "nav-about",
        "reviews.html": "nav-reviews",
        "gallery.html": "nav-gallery",
        "sponsors.html": "nav-sponsors",
        "newsletter.html": "nav-newsletter",
        "contact.html": "nav-contact"
    };

    // Get the navigation ID for the current page
    var navId = navMapping[page];

    // Add the active class to the corresponding navigation item
    if (navId) {
        var navItem = document.getElementById(navId);
        if (navItem) {
            navItem.classList.add("active");
        }
    }
});

// Update the year dynamically
document.getElementById("year").textContent = new Date().getFullYear();
