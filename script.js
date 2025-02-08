// Dark Mode Toggle
document.getElementById('modeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Scroll-Based Navigation Highlighting
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100; // Adjusted for better accuracy
            

            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });

    
});
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        const skills = document.querySelectorAll('.progress');
        skills.forEach(skill => {
            skill.style.width = skill.classList.contains('p90') ? '90%' :
                               skill.classList.contains('p85') ? '85%' :
                               skill.classList.contains('p75') ? '75%' :
                               skill.classList.contains('p80') ? '80%' :
                               skill.classList.contains('p100') ? '100%' :
                               skill.classList.contains('p70') ? '70%' :
                               skill.classList.contains('p50') ? '50%' : '0';
        });
    }, 500);
});


    // Highlight active navigation link
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });








