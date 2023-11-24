// Функция для установки темы
function setTheme(theme) {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
    const intro = document.querySelector('.intro');
    intro.style.backgroundImage = theme === 'dark-theme' ? "url('img/img2.jpg')" : "url('img/img1.jpg')";
}

// Функция для переключения темы
function toggleTheme() {
    const intro = document.querySelector('.intro');
    if (document.documentElement.classList.contains('light-theme')) {
        setTheme('dark-theme');
    } else {
        setTheme('light-theme');
    }
}

// Функция для обработки клика на бургер-меню
function burgerClick() {
    var navbar = document.getElementById("navbar");
    var burger = document.getElementById("burger");
    var burgerPopup = document.getElementById("burger-popup");
    burger.classList.toggle('active');
    burgerPopup.classList.toggle('active');
    navbar.classList.toggle('active');
}

// Функция для обновления навбара
function updateNavbar() {
    var scrollPosition = window.scrollY || window.pageYOffset;
    var navbar = document.querySelector(".navbar");

    if (scrollPosition === 0) {
        navbar.style.backgroundColor = "rgba(51, 51, 51, 0)";
    } else {
        navbar.style.backgroundColor = "rgba(51, 51, 51, 0.5)"; // Измените цвет по необходимости
    }
}

// Обработчик события для кнопки смены темы
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);
    document.getElementById('themeToggleBtn1').addEventListener('click', toggleTheme);
    document.getElementById('burger').addEventListener('click', burgerClick);

    var navbarToggleBtn = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector(".navbar-collapse");
    var intro = document.querySelector('.intro');
    var savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark-theme') {
        document.documentElement.classList.add("dark-theme");
        intro.style.backgroundImage = "url('img/img2.jpg')";
    } else {
        intro.style.backgroundImage = "url('img/img1.jpg')";
        document.documentElement.classList.add("light-theme");
    }

    navbarToggleBtn.addEventListener("click", function () {
        navbarCollapse.classList.toggle("show");
    });

    updateNavbar();
    window.addEventListener("scroll", updateNavbar);

    navbarToggleBtn.addEventListener("click", function () {
        navbarCollapse.classList.toggle("show");
    });
});

// Пример использования fetch для отправки комментария на бэкенд
const commentData = {
    username: 'John Doe',
    comment: 'Замечательный сайт!',
};

fetch('https://your-backend-url/api/comments', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(commentData),
})
.then(response => response.json())
.then(newComment => {
    console.log('Новый комментарий:', newComment);
})
.catch(error => {
    console.error('Ошибка при отправке комментария:', error);
});
