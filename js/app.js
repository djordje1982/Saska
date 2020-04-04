window.onload = (event) => {
    const animation = anime({
        targets: '.load-container',
        opacity: 0,
        easing: 'easeInOutQuad',
        duration: 1500
    });

    animation.finished.then(function () {
        document.getElementById('onload').style.display = 'none';
        document.getElementById('onload').style.zIndex = '-1';
    })
    privredno.style.backgroundImage = 'linear-gradient(to right bottom, rgb(187, 180, 150), rgba(15, 15, 15, 1)'
    privredno.style.color = 'black'

    privrednoTekst.style.opacity = '1'
    ugovornoTekst.style.opacity = '0'
    stvarnoTekst.style.opacity = '0'
    intelektualnoTekst.style.opacity = '0'
    porodicnoTekst.style.opacity = '0'
    radnoTekst.style.opacity = '0'
    naknadaTekst.style.opacity = '0'
    krivicnoTekst.style.opacity = '0'


};

const output = document.querySelector("#poruke");

const poruka = [
    'Qui tacet consentire non videtur<br>– Ko ćuti ne saglašava se.',
    'Error (ignorantia) iuris nocet, facti non nocet (Paulus – D. 22, 6, 9, pr.)<br>– Zabluda o pravu (neznanje prava) škodi, a zabluda o činjenicama ne škodi.',
    'Forma dat esse rei<br>– Forma daje suštinu stvar.',
    'Contractus contrahentibus lex esto (Sec. Papinianus – D. 16,3,24)<br>– Ugovor neka bude stranama zakon (Pacta sunt servanda).',
    'Quod ab initio vitiosum est, non producit effectum (Sec. Lifinus – D. 50,17,210)<br>– Što je ništavo od početka ne proizvodi posledice kao da nikada nije ni postojalo. Varijantu ove poslovice izrekao je poznati pravnik Valtazar Bogišić “Što se grbo rodi vrijeme ne ispravi.”'
]

function vrtiPoruku() {
    switch (output.innerHTML) {
        case poruka[0]:
            const animacija0 = anime({
                targets: output,
                opacity: 0,
                easing: 'easeInOutQuad',
                duration: 2000
            });
            animacija0.finished.then(() => {
                output.innerHTML = poruka[1];
                anime({
                    targets: output,
                    opacity: 1,
                    easing: 'easeInOutQuad',
                    duration: 2000
                });
            })

            break;
        case poruka[1]:
            const animacija1 = anime({
                targets: output,
                opacity: 0,
                easing: 'easeInOutQuad',
                duration: 2000
            });
            animacija1.finished.then(() => {
                output.innerHTML = poruka[2];
                anime({
                    targets: output,
                    opacity: 1,
                    easing: 'easeInOutQuad',
                    duration: 2000
                });
            })
            break;
        case poruka[2]:
            const animacija2 = anime({
                targets: output,
                opacity: 0,
                easing: 'easeInOutQuad',
                duration: 2000
            });
            animacija2.finished.then(() => {
                output.innerHTML = poruka[3];
                anime({
                    targets: output,
                    opacity: 1,
                    easing: 'easeInOutQuad',
                    duration: 2000
                });
            })
            break;
        case poruka[3]:
            const animacija3 = anime({
                targets: output,
                opacity: 0,
                easing: 'easeInOutQuad',
                duration: 2000
            });
            animacija3.finished.then(() => {
                output.innerHTML = poruka[4];
                anime({
                    targets: output,
                    opacity: 1,
                    easing: 'easeInOutQuad',
                    duration: 2000
                });
            })
            break;
        case poruka[4]:
            const animacija4 = anime({
                targets: output,
                opacity: 0,
                easing: 'easeInOutQuad',
                duration: 2000
            });
            animacija4.finished.then(() => {
                output.innerHTML = poruka[0];
                anime({
                    targets: output,
                    opacity: 1,
                    easing: 'easeInOutQuad',
                    duration: 2000
                });
            })
            break;

    }
}

setInterval(vrtiPoruku, 9000)




/*const elOnama = document.getElementById('onama');
const strelica = document.getElementById('strelica');

strelica.addEventListener('click', () => {
    window.scrollTo(0, 680)
})

window.onscroll = function () {
    myFunction()
};

function myFunction() {
    if (window.pageYOffset > 600) {
        anime({
            targets: strelica,
            opacity: 0,
            duration: 500
        });
    } else {
        anime({
            targets: strelica,
            opacity: 1,
            duration: 500
        });
    }
}*/

/*const onamaLevo = document.querySelector('#onama-levo');
const onamaDesno = document.querySelector('#onama-desno');

const options = {
    threshold: 0.75
};

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = "animLevo 2s forwards";
        } else {
            entry.target.style.animation = "none"
        }
    });
}, options);

observer.observe(onamaLevo);

const observer1 = new IntersectionObserver(function (entries, observer1) {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = "animDesno 2s forwards";
        } else {
            entry.target.style.animation = "none"
        }
    });
}, options);

observer1.observe(onamaDesno);*/

// AIzaSyCfDJTgxmfmYXsGSxQU90gYNriVrNMLexc

// function initMap() {
//     const location = {
//         lat: 44.773838,
//         lng: 20.408450
//     };
//     const map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 4,
//         center: location
//     })
// }

// initMap();

const meni = document.querySelector('#burger-oko');
const menu = document.getElementById('menu');
meni.addEventListener('click', () => {

    meni.classList.toggle('open');
    if (meni.classList.contains('open')) {
        menu.style.display = 'grid'
        anime({
            targets: menu,
            opacity: 1,
            easing: 'easeInOutQuad',
            duration: 750

        })
    } else {

        const animation = anime({
            targets: menu,
            opacity: 0,
            easing: 'easeInOutQuad',
            duration: 750
        })
        animation.finished.then(function () {
            menu.style.display = 'none'
        })
    }

})

const privredno = document.getElementById('privrednoA');
const ugovorno = document.getElementById('ugovornoA');
const stvarno = document.getElementById('stvarnoA');
const intelektualno = document.getElementById('intelektualnoA');
const porodicno = document.getElementById('porodicnoA');
const radno = document.getElementById('radnoA');
const naknada = document.getElementById('naknadaA');
const krivicno = document.getElementById('krivicnoA');

const privrednoTekst = document.getElementById('privredno');
const ugovornoTekst = document.getElementById('ugovorno');
const stvarnoTekst = document.getElementById('stvarno');
const intelektualnoTekst = document.getElementById('intelektualno');
const porodicnoTekst = document.getElementById('porodicno');
const radnoTekst = document.getElementById('radno');
const naknadaTekst = document.getElementById('naknada');
const krivicnoTekst = document.getElementById('krivicno');

const maska = document.getElementById('maska');
const nosac = document.getElementById('nosac');
const maskaX = document.getElementById('maskaX');



const oblastiArr = [{
        oblastId: 'privrednoA',
        tekstId: 'privredno',
        meta: privredno
    },
    {
        oblastId: 'ugovornoA',
        tekstId: 'ugovorno',
        meta: ugovorno
    },
    {
        oblastId: 'stvarnoA',
        tekstId: 'stvarno',
        meta: stvarno
    },
    {
        oblastId: 'intelektualnoA',
        tekstId: 'intelektualno',
        meta: intelektualno
    },
    {
        oblastId: 'porodicnoA',
        tekstId: 'porodicno',
        meta: porodicno
    },
    {
        oblastId: 'radnoA',
        tekstId: 'radno',
        meta: radno
    },
    {
        oblastId: 'naknadaA',
        tekstId: 'naknada',
        meta: naknada
    },
    {
        oblastId: 'krivicnoA',
        tekstId: 'krivicno',
        meta: krivicno
    }
]

document.addEventListener('click', (e) => {
    const trajanje = 1250;
    const klik = e.target.id;
    const brisanjeArr = oblastiArr.filter((item) => {
        return item.oblastId !== klik
    })

    const ostajeArr = oblastiArr.filter((item) => {
        return item.oblastId === klik
    })

    if (ostajeArr.length > 0) {

        ostajeArr.forEach((o) => {
            anime({
                targets: document.getElementById(o.tekstId),
                opacity: 1,
                easing: 'easeInOutQuad',
                duration: trajanje
            });
            anime({
                targets: document.getElementById(o.oblastId),
                backgroundImage: 'linear-gradient(to right bottom, rgb(187, 180, 150), rgba(15, 15, 15, 1)',
                color: '#000000',
                easing: 'linear',
                duration: trajanje - 800
            });
        })


        brisanjeArr.forEach((a) => {
            anime({
                targets: document.getElementById(a.tekstId),
                opacity: 0,
                easing: 'easeInOutQuad',
                duration: trajanje
            });
            anime({
                targets: document.getElementById(a.oblastId),
                backgroundImage: 'linear-gradient(to right bottom, rgb(15, 15, 15, 1), rgba(15, 15, 15, 1)',
                color: '#bbb496',
                easing: 'linear',
                duration: trajanje - 800
            });

        })
    }

})

/********* MAPA *************/

const centarMape = [20.409192, 44.772022]
const map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        }),


    ],

    view: new ol.View({
        center: ol.proj.fromLonLat(centarMape),
        zoom: 16,
        maxZoom: 21,
        minZoom: 6

    })
});

var marker = new ol.Feature({
    geometry: new ol.geom.Point(
        ol.proj.fromLonLat(centarMape)
    ), // Cordinates of New York's Town Hall
});
var vectorSource = new ol.source.Vector({
    features: [marker]
});
var markerVectorLayer = new ol.layer.Vector({
    source: vectorSource,
});

marker.setStyle(new ol.style.Style({
    image: new ol.style.Icon(({
        crossOrigin: 'anonymous',
        src: '../img/004-32.png'
    }))
}));

map.addLayer(markerVectorLayer);