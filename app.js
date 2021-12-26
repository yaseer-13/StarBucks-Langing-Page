function imgSlider(anything) {
    // we need to get the image that is clicked on
    document.querySelector('.starbucks').src = anything;
}

function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    const button = document.querySelector('.button');
    const Home = document.querySelector('.Home');
    const Menu = document.querySelector('.Menu');
    const New = document.querySelector('.New');
    const Contact = document.querySelector('.Contact');
    const textStarbucks = document.querySelector('.textStarbucks');

    circle.style.background = color;
    button.style.background = color;
    textStarbucks.style.color = color;
    Home.style.color = color;
    Menu.style.color = color;
    New.style.color = color;
    Contact.style.color = color;
}

function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}