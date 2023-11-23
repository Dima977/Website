// script.js


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

function toggleTheme() {
    if (document.documentElement.classList.contains('light-theme')) {
        setTheme('dark-theme');
    } else {
        setTheme('light-theme');
    }
}

document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);
document.getElementById('themeToggleBtn1').addEventListener('click', toggleTheme);




document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector(".navbar");
    var intro = document.querySelector(".intro");
    var popap = document.getElementById("y8");
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

    updateNavbar();
    window.addEventListener("scroll", updateNavbar);
    if (intro.classList.contains('dark-theme')) {
        intro.style.backgroundImage = "url('img/img2.jpg')";
        localStorage.setItem('backgroundImage', 'img/img2.jpg');
    } else {
        intro.style.backgroundImage = "url('img/img1.jpg')";
        localStorage.setItem('backgroundImage', 'img/img1.jpg');
    }
   
    const savedImage = localStorage.getItem('backgroundImage');

    if (savedImage) {
        intro.style.backgroundImage = `url('${savedImage}')`;
    }
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme('light-theme');
    }
});

