let navNone = document.getElementById('nav-none');
let navBat = document.getElementById('nav-bat');
navBat.addEventListener('click' , () => {
    navNone.style.display = 'none';

    let batmanFirst = document.getElementById('batman-first');
    batmanFirst.style.display = 'block';

    let batHome = document.getElementById('bat-home');
    batHome.addEventListener('click' , () => {
        location.href = 'index.html';
    });

    let batMovie = document.getElementById('bat-movie');
    batMovie.addEventListener('click' , () => {
        let batmanMovie = document.getElementById('batman-movie');
        batmanMovie.style.display = 'block';
        batmanFirst.style.display = 'none';
    });


    let homeBat = window.document.getElementById('home-bat');
    homeBat.addEventListener('click', () => {
    location.href = 'index.html';

    });
  
});


let navWol = document.getElementById('nav-wol');
navWol.addEventListener('click' , () => {
    navNone.style.display = 'none';

    let wolverineFirst = document.getElementById('wolverine-first');
    wolverineFirst.style.display = 'block';

    let wolHome = document.getElementById('wol-home-1');
    wolHome.addEventListener('click' , () => {
        location.href = 'index.html';
    });

    let wolMovie = document.getElementById('wol-movie');
    wolMovie.addEventListener('click' , () => {
        let wolverineMovie = document.getElementById('wolverine-movie');
        wolverineMovie.style.display = 'block';
        wolverineFirst.style.display = 'none';
    }); 

    let wolHome2 = document.getElementById('wol-home-2');
    wolHome2.addEventListener('click' , () => {
        location.href = 'index.html';
    });
});

