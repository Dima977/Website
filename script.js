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
    // Добавляем обработчики событий
    var themeToggleBtn = document.getElementById('themeToggleBtn');
    var themeToggleBtn1 = document.getElementById('themeToggleBtn1');
    var burger = document.getElementById('burger');
  
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', toggleTheme);
    }
  
    if (themeToggleBtn1) {
      themeToggleBtn1.addEventListener('click', toggleTheme);
    }
  
    if (burger) {
      burger.addEventListener('click', burgerClick);
    }
  
    // Получаем элементы
    var navbarToggleBtn = document.querySelector(".navbar-toggler");
  
    // Вызываем функцию обновления темы
    updateTheme();
  
    // Добавляем обработчики событий
    if (navbarToggleBtn) {
      navbarToggleBtn.addEventListener("click", function () {
        updateNavbar();
      });
    }
  
    // Вызываем функцию обновления навбара
    updateNavbar();
    // Добавляем обработчик события скролла
    window.addEventListener("scroll", updateNavbar);
  
    // Добавляем обработчик события для формы комментария
    var commentForm = document.getElementById('commentForm');
    if (commentForm) {
      commentForm.addEventListener('submit', function (event) {
        console.log('Форма отправлена');
        event.preventDefault();
  
        const username = document.getElementById('username').value;
        const comment = document.getElementById('comment').value;
  
        // Проверяем, что поля не пусты
        if (!username.trim() || !comment.trim()) {
          console.error('Имя пользователя и комментарий обязательны');
          return;
        }
  
        // Отключаем кнопку отправки, чтобы избежать множественных отправок
        document.getElementById('submitBtn').disabled = true;
  
        // Отправляем данные на бэкенд (замените URL на ваш бэкенд)
        fetch('https://eedf-134-195-196-178.ngrok-free.app/api/comments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Your-User-Agent-String',
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
  
            // Загружаем все комментарии после добавления нового
            loadAllComments();
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
  
    // Добавьте функцию для загрузки всех комментариев
    function loadAllComments() {
      fetch('https://eedf-134-195-196-178.ngrok-free.app/api/comments', {
        headers: {
          'User-Agent': 'Your-User-Agent-String',
        },
      })
        .then(response => response.json())
        .then(comments => {
          const commentsContainer = document.getElementById('commentsContainer');
          commentsContainer.innerHTML = ''; // Очищаем контейнер перед добавлением новых комментариев
          comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.innerHTML = `<strong>${comment.username}:</strong> ${comment.comment}<hr>`;
            commentsContainer.appendChild(commentElement);
          });
        })
        .catch(error => console.error('Error loading comments:', error));
    }
  
    // Вызываем функцию загрузки всех комментариев при загрузке страницы
    loadAllComments();
  });
  
