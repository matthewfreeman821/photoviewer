var navSelection = '[data-navImage]';
var imgView = '[data-mainImage]';

var navClick = document.querySelectorAll(navSelection);
var imgLarge = document.querySelector(imgView);

navClick.forEach(function (nav) {
    nav.addEventListener('click', function (event) {
        event.preventDefault();
        imgLarge.setAttribute('src', nav.getAttribute('href'));
    })
});