document.addEventListener('DOMContentLoaded', function() {
    var allSections = document.querySelectorAll('.content section');

    // Function to handle click on a section link
    function handleSectionClick(sectionId) {
        // Remove highlighted class from all sections
        clearHighlightedSections();

        // Hide all sections
        allSections.forEach(function(sec) {
            sec.classList.add('hidden');
        });

        // Show the selected section
        var selectedSection = document.getElementById(sectionId);
        selectedSection.classList.remove('hidden');

        // Apply rainbow glow effect
        selectedSection.classList.add('highlighted');

        // Scroll to the selected section
        selectedSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Function to remove highlighted class from all sections
    function clearHighlightedSections() {
        allSections.forEach(function(sec) {
            sec.classList.remove('highlighted');
        });
    }

    // Add click event listeners for each section link
    document.getElementById('profile-link').addEventListener('click', function() {
        handleSectionClick('profile-section');
    });

    document.getElementById('resume-link').addEventListener('click', function() {
        handleSectionClick('resume-section');
    });

    document.getElementById('linkedin-link').addEventListener('click', function() {
        handleSectionClick('linkedin-section');
    });

    document.getElementById('github-link').addEventListener('click', function() {
        handleSectionClick('github-section');
    });

    document.getElementById('contact-link').addEventListener('click', function() {
        handleSectionClick('contact-section');
    });

    document.getElementById('projects-link').addEventListener('click', function() {
        handleSectionClick('projects-section');
    });

    // Add click event listeners for each section title to toggle visibility
    allSections.forEach(function(section) {
        var sectionTitle = section.querySelector('h2');
        sectionTitle.addEventListener('click', function() {
            section.classList.toggle('active');
            clearHighlightedSections(); // Remove highlighted class on click
            section.classList.add('highlighted'); // Reapply highlighted class
        });
    });
});
