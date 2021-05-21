class Game {

    constructor() {
        /** @type {Jugador} Link al jugador actual */
        this.PTR_Jugador = null;

        /** @type {casilla} Link a la casilla actual */
        this.PTR_Casilla = null;

        /** @type {Object.<nombre: string, Image>} Guarda las skins disponibles*/
        this.fichas = {};

        /** @type {Boolean} */
        this.play = false;

        /** @type {Number} Genera un número al azar */
        this.dado = () => Math.floor(Math.random() * 6) + 1;
    }

    turno() {
        let d1 = this.dado();
        let d2 = this.dado();
        document.getElementById("dado1").innerHTML = d1;
        document.getElementById("dado2").innerHTML = d2;
        document.getElementById("lanzarDado").disabled = true;

        setTimeout(this.moverJugador(d1 + d2));
    }

    moverJugador(numeroCasillas) {
        let casilla = this.PTR_Jugador.casilla;
        let jugador = this.PTR_Jugador;

        if (numeroCasillas > 0) {
            casilla = casilla.linkCasilla;
            jugador.casilla = casilla;
            jugador.render(casilla);
            window.location.href = "#" + casilla.id;

            if (casilla instanceof Go) {
                casilla.accion(jugador);
            }
            return setTimeout(() => this.moverJugador(numeroCasillas - 1), 500);
        } else {
            casilla.accion(jugador);
            document.getElementById("lanzarDado").disabled = false;
            return casilla;
        }
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

        jugador.casilla = this.PTR_Casilla;
        jugador.render(this.PTR_Casilla);
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