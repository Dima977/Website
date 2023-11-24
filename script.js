// Функция для установки темы
function setTheme(theme) {
    document.documentElement.className = theme;
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
    if (burger && burgerPopup && navbar) {
        burger.classList.toggle('active');
        burgerPopup.classList.toggle('active');
        navbar.classList.toggle('active');
    }
}

// Функция для обновления навбара
function updateNavbar() {
    var scrollPosition = window.scrollY || window.pageYOffset;
    var navbar = document.querySelector(".navbar");

    if (navbar) {
        if (scrollPosition === 0) {
            navbar.style.backgroundColor = "rgba(51, 51, 51, 0)";
        } else {
            navbar.style.backgroundColor = "rgba(51, 51, 51, 0.5)"; // Измените цвет по необходимости
        }
    }
}

// Функция для обновления темы на основе сохраненной в localStorage
function updateTheme() {
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark-theme') {
        setTheme('dark-theme');
    } else {
        setTheme('light-theme');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var themeToggleBtn = document.getElementById('themeToggleBtn');
    var themeToggleBtn1 = document.getElementById('themeToggleBtn1');
    var burger = document.getElementById('burger');
    var commentForm = document.getElementById('commentForm');

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }

    if (themeToggleBtn1) {
        themeToggleBtn1.addEventListener('click', toggleTheme);
    }

    if (burger) {
        burger.addEventListener('click', burgerClick);
    }

    if (commentForm) {
        commentForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Отключаем кнопку отправки сразу
            document.getElementById('submitBtn').disabled = true;

            const username = document.getElementById('username').value;
            const comment = document.getElementById('comment').value;

            // Проверяем, что поля не пусты
            if (!username.trim() || !comment.trim()) {
                console.error('Имя пользователя и комментарий обязательны');

                // Включаем кнопку отправки в случае ошибки
                document.getElementById('submitBtn').disabled = false;

                return;
            }

            // Отправляем данные на бэкенд (замените URL на ваш бэкенд)
            fetch('http://localhost:5500/api/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, comment }),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Ошибка при отправке комментария: ${response.status}`);
                }
                return response.json();
            })
            .then(newComment => {
                // Очищаем форму
                document.getElementById('username').value = '';
                document.getElementById('comment').value = '';

                // Включаем кнопку отправки после успешной отправки
                document.getElementById('submitBtn').disabled = false;

                // Отображаем новый комментарий
                const commentsContainer = document.getElementById('commentsContainer');
                const commentElement = document.createElement('div');
                commentElement.innerHTML = `<strong>${newComment.username}:</strong> ${newComment.comment}<hr>`;
                commentsContainer.appendChild(commentElement);
            })
            .catch(error => {
                console.error(error);

                // Включаем кнопку отправки в случае ошибки
                document.getElementById('submitBtn').disabled = false;
            });

            // Возвращаем false, чтобы предотвратить стандартное поведение формы (перезагрузку страницы)
            return false;
        });
    }

    // Функции setTheme, toggleTheme, burgerClick, updateNavbar, и updateTheme остаются без изменений
    // ...
});
