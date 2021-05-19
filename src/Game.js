class Game {

    constructor() {
        /** @type {Jugador} Link al jugador actual */
        this.PTR_Jugador = null;

        /** @type {casilla} Link a la casilla actual */
        this.PTR_Casilla = null;

        /** @type {Object.<nombre: string, Image>} Guarda las skins disponibles*/
        this.fichas = {};

        /** @type {Number} Genera un número al azar */
        this.dado = () => Math.floor(Math.random() * 6) + 1;
    }

    /**
     * 
     * @param {Casilla} casilla 
     */
    nuevaCasilla(casilla) {
        /** @type {Casilla} */
        let c = this.PTR_Casilla;

        if (c == null) {
            // Aun no hay casillas
            this.PTR_Casilla = casilla;
            this.PTR_Casilla.linkCasilla = casilla;

        } else {
            // Hay un elemento o mas
            while (c.linkCasilla != this.PTR_Casilla) {
                c = c.linkCasilla;
            }

            c.linkCasilla = casilla;
            casilla.linkCasilla = this.PTR_Casilla;
        }
    }

    /**
     * 
     * @param {Jugador} jugador 
     */
    nuevoJugador(jugador) {
        /** @type {Jugador} */
        let j = this.PTR_Jugador;

        if (j == null) {
            // Aun no hay jugadores
            this.PTR_Jugador = jugador;
            this.PTR_Jugador.linkJugador = jugador;

        } else {
            // Hay un elemento o mas
            while (j.linkJugador != this.PTR_Jugador) {
                j = j.linkJugador;
            }

            j.linkJugador = jugador;
            jugador.linkJugador = this.PTR_Jugador;
        }
    }

    // ----------- HERRAMIENTAS DE DESARROLLO -------------- //
    /**
     * Muestras los jugadores
     */
    jugadores() {
        /** @type {Jugador} */
        let j = this.PTR_Jugador;

        if (j == null) {
            console.log("No hay jugadores aún.")
        } else {

            do {
                console.log(j.nombre);
                j = j.linkJugador;

            } while (j != this.PTR_Jugador)
        }
    }

    casillas() {
        /** @type {Casilla} */
        let c = this.PTR_Casilla;

        if (c == null) {
            console.log("No hay casillas");
        } else {

            do {
                console.log(c.nombre);
                c = c.linkCasilla;

            } while (c != this.PTR_Casilla);
        }
    }
}