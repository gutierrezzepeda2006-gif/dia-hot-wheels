
// =========================================
// PARRILLA — ELEMENTOS
// =========================================

const auto = document.getElementById("auto");
const barra = document.getElementById("barra-progreso");
const porcentaje = document.getElementById("porcentaje");
const estado = document.getElementById("estado");

const carreraLista =
    document.getElementById("carrera-lista");

const botonIniciar =
    document.getElementById("iniciar-carrera");


// =========================================
// PANTALLAS
// =========================================

const parrilla =
    document.getElementById("parrilla");

const salida =
    document.getElementById("salida");

const vuelta1 =
    document.getElementById("vuelta1");

const pitstop1 =
    document.getElementById("pitstop1");

const vuelta2 =
    document.getElementById("vuelta2");

const vuelta3 =
    document.getElementById("vuelta3");

const pitstop2 =
    document.getElementById("pitstop2");

const ultimaVuelta =
    document.getElementById("ultima-vuelta");

const meta =
    document.getElementById("meta");

const final =
    document.getElementById("final");


// =========================================
// PARRILLA — MENSAJES
// =========================================

const mensajes = [
    {
        porcentaje: 0,
        texto: "Encendiendo motores..."
    },

    {
        porcentaje: 20,
        texto: "Recordando todas tus carreras..."
    },

    {
        porcentaje: 40,
        texto: "Preparando nuestros recuerdos..."
    },

    {
        porcentaje: 60,
        texto: "Ajustando la última curva..."
    },

    {
        porcentaje: 80,
        texto: "Guardando unas cuantas palabras para ti..."
    },

    {
        porcentaje: 95,
        texto: "Preparando la bandera a cuadros..."
    }
];


let progresoActual = 0;


// =========================================
// ANIMACIÓN DE LA PARRILLA
// =========================================

const intervalo = setInterval(() => {

    progresoActual++;

    // Barra de progreso
    barra.style.width =
        `${progresoActual}%`;


    // Porcentaje
    porcentaje.textContent =
        `${progresoActual}%`;


    // Posición del auto
    const pista =
        document.querySelector(".pista");

    const anchoPista =
        pista.offsetWidth;


    const posicion =
        (progresoActual / 100) *
        (anchoPista - 55);


    auto.style.transform =
        `translateX(${posicion}px) scaleX(-1)`;


    // Mensaje correspondiente
    const mensajeActual =
        mensajes
            .slice()
            .reverse()
            .find(mensaje =>
                progresoActual >= mensaje.porcentaje
            );


    if (mensajeActual) {

        estado.textContent =
            mensajeActual.texto;

    }


    // Carrera terminada
    if (progresoActual >= 100) {

        clearInterval(intervalo);

        estado.textContent =
            "Todo está preparado.";

        carreraLista.classList.add("visible");

    }

}, 100);


// =========================================
// PARRILLA → SALIDA
// =========================================

botonIniciar.addEventListener("click", () => {

    parrilla.classList.remove("activa");

    salida.classList.add("activa");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =========================================
// SALIDA → VUELTA 1
// =========================================

const continuarVuelta =
    document.getElementById("continuar-vuelta");


continuarVuelta.addEventListener("click", () => {

    salida.classList.remove("activa");

    vuelta1.classList.add("activa");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =========================================
// VUELTA 1 — ESCENAS
// =========================================

const escenas = [

    document.getElementById("escena1"),

    document.getElementById("escena2"),

    document.getElementById("escena3")

];


const siguienteEscena =
    document.getElementById("siguiente-escena");


const numeroEscena =
    document.getElementById("numero-escena");


let escenaActual = 0;


// =========================================
// VUELTA 1 — CAMBIO DE ESCENAS
// =========================================

siguienteEscena.addEventListener("click", () => {

    if (
        escenaActual <
        escenas.length - 1
    ) {

        // Ocultar escena actual
        escenas[escenaActual]
            .classList.remove("activa");


        // Pasar a la siguiente
        escenaActual++;


        // Mostrar nueva escena
        escenas[escenaActual]
            .classList.add("activa");


        // Actualizar contador
        numeroEscena.textContent =
            String(escenaActual + 1)
                .padStart(2, "0");

    }

    else {

        // VUELTA 1 TERMINADA
        vuelta1.classList.remove("activa");

        pitstop1.classList.add("activa");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

});


// =========================================
// PIT STOP 01 → VUELTA 2
// =========================================

const continuarPit =
    document.getElementById("continuar-pit");


continuarPit.addEventListener("click", () => {

    pitstop1.classList.remove("activa");

    vuelta2.classList.add("activa");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =========================================
// VUELTA 2 — ESCENAS
// =========================================

const escenas2 = [

    document.getElementById("escena4"),

    document.getElementById("escena5"),

    document.getElementById("escena6")

];


const siguienteEscena2 =
    document.getElementById("siguiente-escena2");


const numeroEscena2 =
    document.getElementById("numero-escena2");


let escenaActual2 = 0;


// =========================================
// VUELTA 2 — CAMBIO DE ESCENAS
// =========================================

siguienteEscena2.addEventListener("click", () => {

    if (
        escenaActual2 <
        escenas2.length - 1
    ) {

        // Ocultar escena actual
        escenas2[escenaActual2]
            .classList.remove("activa");


        // Pasar a siguiente
        escenaActual2++;


        // Mostrar nueva escena
        escenas2[escenaActual2]
            .classList.add("activa");


        // Actualizar contador
        numeroEscena2.textContent =
            String(escenaActual2 + 1)
                .padStart(2, "0");

    }

    else {

        // VUELTA 2 TERMINADA
        vuelta2.classList.remove("activa");

        vuelta3.classList.add("activa");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

});


// =========================================
// VUELTA 3 — ESCENAS
// =========================================

const escenas3 = [

    document.getElementById("escena7"),

    document.getElementById("escena8"),

    document.getElementById("escena9")

];


const siguienteEscena3 =
    document.getElementById("siguiente-escena3");


const numeroEscena3 =
    document.getElementById("numero-escena3");


let escenaActual3 = 0;


// =========================================
// VUELTA 3 — CAMBIO DE ESCENAS
// =========================================

siguienteEscena3.addEventListener("click", () => {

    if (
        escenaActual3 <
        escenas3.length - 1
    ) {

        // Ocultar escena actual
        escenas3[escenaActual3]
            .classList.remove("activa");


        // Pasar a siguiente
        escenaActual3++;


        // Mostrar nueva escena
        escenas3[escenaActual3]
            .classList.add("activa");


        // Actualizar contador
        numeroEscena3.textContent =
            String(escenaActual3 + 1)
                .padStart(2, "0");

    }

    else {

        // VUELTA 3 TERMINADA
        vuelta3.classList.remove("activa");

        pitstop2.classList.add("activa");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

});


// =========================================
// PIT STOP 02 → ÚLTIMA VUELTA
// =========================================

const continuarPit2 =
    document.getElementById("continuar-pit2");


continuarPit2.addEventListener("click", () => {

    pitstop2.classList.remove("activa");

    ultimaVuelta.classList.add("activa");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =========================================
// ÚLTIMA VUELTA → LA META
// =========================================

const irMeta =
    document.getElementById("ir-meta");


irMeta.addEventListener("click", () => {

    ultimaVuelta.classList.remove("activa");

    meta.classList.add("activa");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =========================================
// LA META → FINAL
// =========================================

const irFinal =
    document.getElementById("ir-final");


irFinal.addEventListener("click", () => {

    meta.classList.remove("activa");

    final.classList.add("activa");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});