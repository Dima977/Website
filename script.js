// script.js
  document.addEventListener("DOMContentLoaded", function () {
    var navbarToggleBtn = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector(".navbar-collapse");
  
    navbarToggleBtn.addEventListener("click", function () {
      navbarCollapse.classList.toggle("show");
    });
  });

function setTheme(theme) {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
}
function burgerClick(){
    var navbar = document.getElementById("navbar");
    var burger = document.getElementById("burger");
    var burgerPopup =document.getElementById("burger-popup");
    if (burger.classList.contains('active')) {
       burger.classList.remove('active')
       burgerPopup.classList.remove('active')
       navbar.classList.remove('active')
      } else {
        burger.classList.add('active')
        
       burgerPopup.classList.add('active')
       navbar.classList.add('active')
      }
}
document.getElementById('burger').addEventListener('click',burgerClick)
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
document.getElementById('themeToggleBtn1').addEventListener('click', toggleTheme);

// Проверяем, если у пользователя уже сохранена тема в localStorage
const savedTheme = localStorage.getItem('theme');

// Если тема сохранена, устанавливаем её
if (savedTheme) {
    setTheme(savedTheme);
} else {
    // По умолчанию устанавливаем светлую тему
    setTheme('light-theme');
}

document.addEventListener('DOMContentLoaded', function () {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeToggleBtn1 = document.getElementById('themeToggleBtn1');

    const intro = document.querySelector('.intro');

    themeToggleBtn.addEventListener('click', function () {
        intro.classList.toggle('dark-theme');
        
        // Проверяем, какая тема активна и меняем фон .intro соответственно
        if (intro.classList.contains('dark-theme')) {
            intro.style.backgroundImage = "url('img/img2.jpg')";
        } else {
            intro.style.backgroundImage = "url('img/img1.jpg')";
        }
    });
    themeToggleBtn1.addEventListener('click', function () {
        intro.classList.toggle('dark-theme');
        
        // Проверяем, какая тема активна и меняем фон .intro соответственно
        if (intro.classList.contains('dark-theme')) {
            intro.style.backgroundImage = "url('img/img2.jpg')";
        } else {
            intro.style.backgroundImage = "url('img/img1.jpg')";
        }
    });
});

// script.js

document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector(".navbar");
    var intro = document.querySelector(".intro");
    var popap = document.getElementById("y8")

    function updateNavbar() {
        var scrollPosition = window.scrollY || window.pageYOffset;

        if (scrollPosition === 0) {
            popap.style.opacity=0
            navbar.style.backgroundColor = "rgba(51, 51, 51, 0)";
        } else {
            navbar.style.backgroundColor = "rgba(51, 51, 51, 1)";
            popap.style.opacity=1
        }
    }

    // Обновляем состояние шапки при загрузке и прокрутке
    updateNavbar();
    window.addEventListener("scroll", updateNavbar);

    const themeToggleBtn = document.getElementById('themeToggleBtn');
    
    const themeToggleBtn1 = document.getElementById('themeToggleBtn1');

    themeToggleBtn.addEventListener('click', function () {
        intro.classList.toggle('dark-theme');

        // Проверяем, какая тема активна и меняем фон .intro соответственно
        if (intro.classList.contains('dark-theme')) {
            intro.style.backgroundImage = "url('img/img2.jpg')";
        } else {
            intro.style.backgroundImage = "url('img/img1.jpg')";
        }
    });

    themeToggleBtn1.addEventListener('click', function () {
        intro.classList.toggle('dark-theme');

        // Проверяем, какая тема активна и меняем фон .intro соответственно
        if (intro.classList.contains('dark-theme')) {
            intro.style.backgroundImage = "url('img/img2.jpg')";
        } else {
            intro.style.backgroundImage = "url('img/img1.jpg')";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var navbarToggleBtn = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector(".navbar-collapse");

    navbarToggleBtn.addEventListener("click", function () {
        navbarCollapse.classList.toggle("show");
    });
});
