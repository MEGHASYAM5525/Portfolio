document.addEventListener('DOMContentLoaded', function() {
    var sectionTitles = document.querySelectorAll('.section-title');

    sectionTitles.forEach(function(title) {
        title.addEventListener('click', function() {
            var sectionContent = title.nextElementSibling;
            
            // Toggle the content visibility
            if (sectionContent.style.display === 'block') {
                sectionContent.style.display = 'none'; // Hide
            } else {
                sectionContent.style.display = 'block'; // Show
            }
        });
    });

    // Add click event listeners for the sections (Profile, Resume, LinkedIn, etc.)
    var links = document.querySelectorAll('.highlight');

    links.forEach(function(link) {
        link.addEventListener('click', function() {
            var sectionId = this.getAttribute('data-section');
            updateContent(sectionId);
        });
    });

    function updateContent(sectionId) {
        // Hide all sections
        var sections = document.querySelectorAll('.section');
        sections.forEach(function(section) {
            section.classList.add('hidden');
        });

        // Show the clicked section
        var activeSection = document.getElementById(sectionId);
        activeSection.classList.remove('hidden');

        // Change the section title (brown part)
        var sectionTitle = activeSection.querySelector('.section-title');
        sectionTitle.scrollIntoView({ behavior: 'smooth' });
    }

    var previewBtn = document.getElementById('preview-btn');
    var modal = document.getElementById('resumePreviewModal');
    var closeBtn = document.getElementById('closePreviewBtn');

    previewBtn.addEventListener('click', function() {
        modal.style.display = 'block';  // Show the modal
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';  // Hide the modal
        document.body.style.overflow = 'auto';
    });

    // Close the modal if clicked outside of it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };

    // New code to toggle project details visibility
    var projectTitles = document.querySelectorAll('.project-title');

    projectTitles.forEach(function(title) {
        title.addEventListener('click', function() {
            var projectDetails = title.nextElementSibling;

            // Toggle visibility
            if (projectDetails.classList.contains('hidden')) {
                projectDetails.classList.remove('hidden'); // Show
            } else {
                projectDetails.classList.add('hidden'); // Hide
            }
        });
    });
});
