// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Form Validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields!");
    } else {
        alert("Message sent successfully!");
        this.reset();
    }
});


