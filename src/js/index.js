let navNone = document.getElementById('nav-none');
let navBat = document.getElementById('nav-bat');
let boxBatman = document.getElementById('box-batman');
navBat.addEventListener('click' , () => {
    navNone.style.display = 'none';
    boxBatman.style.display = 'block';

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
let boxWolverine = document.getElementById('box-wolverine');
navWol.addEventListener('click' , () => {
    navNone.style.display = 'none';
    boxWolverine.style.display ='block';

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

let navRors = document.getElementById('nav-rors');
let boxRorschach = document.getElementById('box-rorschach');
navRors.addEventListener('click' , () => {
    navNone.style.display = 'none';
    boxRorschach.style.display ='block';

    let rorschachFirst = document.getElementById('rorschach-first');
    rorschachFirst.style.display = 'block';

    let rorsHome = document.getElementById('rors-home-1');
    rorsHome.addEventListener('click' , () => {
        location.href = 'index.html';
    });

    let rorsMovie = document.getElementById('rors-movie');
    rorsMovie.addEventListener('click' , () => {
        let rorschachMovie = document.getElementById('rorschach-movie');
        rorschachMovie.style.display = 'block';
        rorschachFirst.style.display = 'none';
    }); 

    let rorsHome2 = document.getElementById('rors-home-2');
    rorsHome2.addEventListener('click' , () => {
        location.href = 'index.html';
    });
});