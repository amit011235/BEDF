document.addEventListener('DOMContentLoaded', function() {
    // Get all the section elements
    const sections = document.querySelectorAll('section');

    // Attach a click event listener to each section
    sections.forEach(section => {
        section.addEventListener('click', function() {
            // Change the background color on click
            this.style.backgroundColor = getRandomColor();
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleBtn');
    const introSection = document.getElementById('introSection');
    const detailsSection = document.getElementById('detailsSection');

    toggleBtn.addEventListener('click', function() {
        introSection.classList.add('hidden');
        detailsSection.classList.remove('hidden');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const tabsNav = document.getElementById('tabsNav');
    const toggleBtn = document.getElementById('toggleBtn');

    toggleBtn.addEventListener('click', function() {
        tabsNav.classList.toggle('show-tabs');
    });
});

    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
