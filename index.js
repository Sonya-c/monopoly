/** @type {Game} */
const game = new Game();
crearTablero();

function crearTablero() {
    game.nuevaCasilla(new Go("Casilla#01", "Images/GO_MONOPOLOLY.png"));
    game.nuevaCasilla(new Casilla("Casilla#01", "1", "Images/GO_MONOPOLOLY.png"));
    game.nuevaCasilla(new Casilla("Casilla#02", "2", "Images/GO_MONOPOLOLY.png"));
    game.nuevaCasilla(new Casilla("Casilla#03", "3", "Images/GO_MONOPOLOLY.png"));
    game.nuevaCasilla(new Casilla("Casilla#04", "4", "Images/GO_MONOPOLOLY.png"));
    game.nuevaCasilla(new Casilla("Casilla#05", "5", "Images/GO_MONOPOLOLY.png"));
    game.nuevaCasilla(new Casilla("Casilla#06", "6", "Images/GO_MONOPOLOLY.png"));
    game.nuevaCasilla(new Casilla("Casilla#07", "7", "Images/GO_MONOPOLOLY.png"));

    game.casillas();
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
    elemento.style.display = "block";
}

function lanzaDado() {
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
            game.nuevoJugador(new Jugador("jugador" + numJugadores, name.value, skin));
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