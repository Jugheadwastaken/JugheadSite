// script.js
document.addEventListener('DOMContentLoaded', function() {
    const themeButton = document.getElementById('theme-button');
    const body = document.body;

    // Функция для переключения темы
    function toggleTheme() {
        if (body.classList.contains('light')) {
            body.classList.remove('light');
            body.classList.add('dark');
        } else {
            body.classList.remove('dark');
            body.classList.add('light');
        }
    }

    // Загрузка последней темы из localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    } else {
        body.classList.add('light'); // По умолчанию светлая тема
    }

    // Событие по клику на кнопку
    themeButton.addEventListener('click', function() {
        toggleTheme();
        // Сохранение текущей темы в localStorage
        localStorage.setItem('theme', body.classList.contains('light') ? 'light' : 'dark');
    });
});