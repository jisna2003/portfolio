document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;
    
    themeSwitch.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        themeSwitch.textContent = body.classList.contains('light-mode') ? '☀️' : '🌙';
    });

    const hireMeButton = document.getElementById('hire-me');
    const hireOptions = document.getElementById('hire-options');

    hireMeButton.addEventListener('click', () => {
        hireOptions.classList.toggle('hidden');
    });

    document.querySelectorAll('.option').forEach(button => {
        button.addEventListener('click', () => {
            alert(button.textContent);
        });
    });
});









