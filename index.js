/** @type {Game} */
const game = new Game();
var audio = document.getElementById("popsound");
crearTablero();

function prueba() {
    game.jugador.propiedades();
}
function crearTablero() {
    for (let i = 0; i < tablero.length; i++) {
        /** @type {JSON} */
        let casilla = tablero[i];

        switch (casilla.type) {
            case "go":
                game.nuevaCasilla(new Go("Casilla#" + i, casilla.img));
                break;
            case "solar":
                game.nuevaCasilla(new Solar("Casilla#" + i, casilla.nombre, casilla.img, casilla.precio, casilla.renta, casilla.rentaCasa, casilla.rentaHotel, casilla.costoCasa, "Imagen/casa.png", "Imagen/hotel.jpg"));
                break;
            case "impuesto":
                game.nuevaCasilla(new Impuesto("Casilla#" + i, casilla.img, casilla.pagar));
                break;
            case "estacion":
                game.nuevaCasilla(new Estacion("Casilla#" + i, casilla.nombre, casilla.img, casilla.precio));
                break;
            case "chance":
                game.nuevaCasilla(new Fortuna("Casilla#" + i, casilla.img));
                break;
            case "servicio":
                game.nuevaCasilla(new ServicioPublico("Casilla#" + i, casilla.nombre, casilla.img, casilla.precio));
                break;
            case "comunity-chest":
                game.nuevaCasilla(new CajaComunidad("Casilla#" + i, casilla.img));
                break;
            case "goCarcel":
                game.nuevaCasilla(new GoCarcel("Casilla#" + i, casilla.img));
                break;
            case "carcel":
                game.nuevaCasilla(new Carcel("Casilla#" + i, casilla.img));
                break;
            case "free-parking":
                game.nuevaCasilla(new Casilla("Casilla#" + i, casilla.nombre, casilla.img));
                break;
            case "go-to-jail":
                game.nuevaCasilla(new GoCarcel("Casilla#" + i, casilla.img));
                break;
            default:
                console.warn("Casilla con clasificación erronea", casilla.type);
        }
    }
}

/**
 * 
 * @param {HTMLElement} elemento 
 */
function cerrarElemento(elemento) {
    elemento.style.display = "none";
}

/**
 * 
 * @param {HTMLElement} elemento 
 */
function abrirElemento(elemento) {
    audio.play();
    elemento.style.display = "block";
}

function lanzaDado() {
    audio.play();
    game.turno();
}
/**
 * Recibe los datos de la form HTML. 
 * Si ya hay un juego en marcha, le pregunta a usuario si desea re-iniciar la partida o re-escribe los datos
 * Sino, crea una nueva partida
 * 
 * @param {HTMLElement} form 
 */
function formData(form) {
    audio.play();
    if (game.play == true && confirm("Ya hay una partida, ¿Desea re-iniciarla?")) {
        iniciarJuego(form);
    } else {
        iniciarJuego(form);
    }
}

/**
 * Crea una nueva partida con los datos del form
 * 
 * @param {HTMLElement} form
 */
function iniciarJuego(form) {
    /** @type {Number} */
    let numJugadores = 0;

    for (/** @type {HTMLElement} */ const field of form.querySelectorAll("fieldset")) {
        let checkBox = field.querySelector("input[type=checkbox]");
        let name = field.querySelector("input[type=text]");
        let skin = field.querySelector("img");

        if (checkBox.checked) {
            numJugadores++;
            game.nuevoJugador(new Jugador("jugador" + numJugadores, name.value, skin.cloneNode()));
        }
    }

    if (numJugadores >= 2) {
        cerrarElemento(form);
        game.play = true;
        game.jugadores();
    } else {
        alert("Seleccione al menos 2 jugadores")

    }
}

function terminarJuego() {
    audio.play();
    game.terminar();
}