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

let navVen = document.getElementById('nav-ven');
let boxVenom = document.getElementById('box-venom');
navVen.addEventListener('click' , () => {
    navNone.style.display = 'none';
    boxVenom.style.display ='block';

    let venomFirst = document.getElementById('venom-first');
    venomFirst.style.display = 'block';

    let venoHome = document.getElementById('veno-home-1');
    venoHome.addEventListener('click' , () => {
        location.href = 'index.html';
    });

    let venoMovie = document.getElementById('veno-movie');
    venoMovie.addEventListener('click' , () => {
        let venomMovie = document.getElementById('venom-movie');
        venomMovie.style.display = 'block';
        venomFirst.style.display = 'none';
    }); 

    let venoHome2 = document.getElementById('veno-home-2');
    venoHome2.addEventListener('click' , () => {
        location.href = 'index.html';
    });
});

let navDead = document.getElementById('nav-dead');
let boxDeadpool = document.getElementById('box-deadpool');
navDead.addEventListener('click' , () => {
    navNone.style.display = 'none';
    boxDeadpool.style.display ='block';

    let deadpoolFirst = document.getElementById('deadpool-first');
    deadpoolFirst.style.display = 'block';

    let deadHome = document.getElementById('dead-home-1');
    deadHome.addEventListener('click' , () => {
        location.href = 'index.html';
    });

    let deadMovie = document.getElementById('dead-movie');
    deadMovie.addEventListener('click' , () => {
        let deadpoolMovie = document.getElementById('deadpool-movie');
        deadpoolMovie.style.display = 'block';
        deadpoolFirst.style.display = 'none';
    }); 

    let deadHome2 = document.getElementById('dead-home-2');
    deadHome2.addEventListener('click' , () => {
        location.href = 'index.html';
    });
});