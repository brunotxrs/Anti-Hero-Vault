let navBat = document.getElementById('nav-bat');
let navNone = document.getElementById('nav-none');

navBat.addEventListener('click' , () => {
    navNone.style.display = 'none';

    let batmanFirst = document.getElementById('batman-first');
    batmanFirst.style.display = 'block';

    let home = document.getElementById('home');
    home.addEventListener('click' , () => {
        location.href = 'index.html';
    });

    let batMovie = document.getElementById('bat-movie');
    batMovie.addEventListener('click' , () => {
        let batmanMovie = document.getElementById('batman-movie');
        batmanMovie.style.display = 'block';
        batmanFirst.style.display = 'none';
    });

    let homeMovie = document.getElementById('home-movie');
    homeMovie.addEventListener('click' , () => {
        location.href = 'index.html';
    });
});