
class Casilla {

    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;

        /** @type {Casilla} */
        this.linkCasilla = null;

        this.init();
    }

    init() {
        /** @type {HTMLElement} */
        let tablero = document.querySelector('#casillas');

        /** @type {HTMLElement} */
        this.casillaContenedor = document.createElement("div", { id: this.id });
        this.casillaContenedor.classList.add('casilla');

        /** @type {HTMLElement} */
        this.casillaJugadores = document.createElement("div");
        tablero.appendChild(this.casillaContenedor);
    }

    accion(jugador) { /* OVER WRITE THIS METHOD */ }
}

class Go extends Casilla {
    constructor(id) {
        super(id, "Go");
    }

    accion(jugador) {
        this.jugador.dinero += 200;
    }
}

class Carcel extends Casilla {
    constructor(id) {
        super(id, "Carcel");
    }
}

class GoCarcel extends Casilla {
    constructor(id) {
        super(id, "Ir a carcel");
    }
}

class CajaComunidad extends Casilla {
    constructor(id) {
        super(id, "Caja de comunidad");
    }
}

class Fortuna extends Casilla {
    constructor(id) {
        super(id, "Chance");
    }
}