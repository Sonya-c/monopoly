
class Casilla {
    constructor(nombre) {
        this.nombre = nombre;

        /** @type {Casilla} */
        this.linkCasilla = null;
    }

    render() {
        let casillaContenedor = document.createElement("div");

    }

    accion(jugador) { /* OVER WRITE THIS METHOD */ }
}

class Go extends Casilla {
    constructor() {
        super("Go");
    }

    accion(jugador) {
        this.jugador.dinero += 200;
    }
}

class Carcel extends Casilla {
    constructor() {
        super("Carcel");
    }
}

class GoCarcel extends Casilla {
    constructor() {
        super("Ir a carcel");
    }
}

class CajaComunidad extends Casilla {
    constructor() {
        super("Caja de comunidad");
    }
}

class Fortuna extends Casilla {
    constructor() {
        super("Chance");
    }
}