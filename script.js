// script.js

// Функция для установки темы
function setTheme(theme) {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
}

// Функция для переключения темы
function toggleTheme() {
    if (document.documentElement.classList.contains('light-theme')) {
        setTheme('dark-theme');
        document.getElementById('themeText').textContent = 'Текущая тема: Темная';
    } else {
        setTheme('light-theme');
        document.getElementById('themeText').textContent = 'Текущая тема: Светлая';
    }
}

// Обработчик события для кнопки смены темы
document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);

// Проверяем, если у пользователя уже сохранена тема в localStorage
const savedTheme = localStorage.getItem('theme');

// Если тема сохранена, устанавливаем её
if (savedTheme) {
    setTheme(savedTheme);
} else {
    // По умолчанию устанавливаем светлую тему
    setTheme('light-theme');
}
