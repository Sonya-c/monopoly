class Game {

    constructor() {
        /** @type {Jugador} Link al primer jugador */
        this.PTR_Jugador = null;
        /** @type {Jugador} Link al jugador actual */
        this.jugador = null;

        /** @type {casilla} Link a la casilla actual */
        this.PTR_Casilla = null;

        /** @type {Object.<nombre: string, Image>} Guarda las skins disponibles*/
        this.fichas = {};

        /** @type {Boolean} Estado del juego */
        this.play = false;

        /** @type {Number} Genera un número al azar */
        this.dado = () => Math.floor(Math.random() * 6) + 1;

        /** @type {Number} Numero de dobles seguidos que ha obtenido el jugador actual */
        this.dobleSeguidos = 0;
    }

    render() {
        let imgJugador = document.getElementById("jugador-actual");
        let datosJugador = document.getElementById("player-data");

        datosJugador.innerHTML = "Dinero: $ " + this.jugador.dinero;
        imgJugador.src = this.jugador.ficha.src;
        imgJugador.alt = this.jugador.nombre;


    }

    /**
     * Genera 2 numeros al azar, los muestra en el documento y ejecutar un metodo para mover al jugador.
     * 
     */
    turno() {
        /** @type {Number} */
        let d1 = this.dado();
        /** @type {Number} */
        let d2 = this.dado();
        
        let siguienteTurno = () => {
            document.getElementById("lanzarDado").disabled = false;

            if (d1 != d2) {
                // El turno del siguiente jugador
                this.jugador = this.jugador.linkJugador;
                window.location.href = "#" + this.jugador.casilla.id;
                this.dobleSeguidos += 0;
            } else {
                this.dobleSeguidos += 1;
            }

            this.render();
        }
        // Enviar los datos al documento
        document.getElementById("dado1").innerHTML = d1;
        document.getElementById("dado2").innerHTML = d2;
        document.getElementById("lanzarDado").disabled = true;

        if (d1 == d2 && this.dobleSeguidos >= 3) {
            // Con 3 dobles seguidos cae a la carcel
            this.jugador.irCarcel();

        } else if (this.jugador.enCarcel) {
            // Esta en prisón
            this.jugador.casilla.accion(this.jugador, d1, d2);
            siguienteTurno();
        } else {
            // Para que haya cierto delay, usaremos una promesa

            /** @type {Promise<Casilla>} */
            let casilla = new Promise((resolve) => setTimeout(() => resolve(this.moverJugador(d1 + d2)), 500));

            casilla.then((casilla) => {

                let turno = new Promise((resolve) => resolve(casilla.accion(this.jugador, d1 + d2)));

                turno.then(() => {
                    document.getElementById("lanzarDado").disabled = false;
                    siguienteTurno();
                    this.render();
                });
            });
        }
    }

    /**
     * Recorre la lista de jugadores para generar un vector ordenado por el precio del jugador
     */
    terminar() {
        /** @type {Jugador} */
        let jugador = this.PTR_Jugador;
        /** @type {Jugador} */
        let tempJugador = jugador.linkJugador;
        /** @type {Jugador[]} */
        let ordenGandores = [];
        /** @type {String} */
        let resultado = "RANKING"

        if (jugador == null) {
            console.log("No hay jugadores aún.")
        } else {

            // Creamos un vector
            do {
                ordenGandores.push(jugador);
                jugador = jugador.linkJugador; // Moverse al siguiente jugador
            } while (jugador != this.PTR_Jugador)

            // Ordenemos el vector
            for (let i = 0; i < ordenGandores.length; i++) {
                for (let j = i + 1; j < ordenGandores.length; j++) {

                    if (ordenGandores[i].dinero < ordenGandores[j].dinero) {
                        tempJugador = ordenGandores[i];
                        ordenGandores[i] = ordenGandores[j];
                        ordenGandores[j] = tempJugador;
                    }
                }
            }

            for (let i = 0; i < ordenGandores.length; i++) {
                resultado += "\n" + (i + 1) + ordenGandores[i].nombre + "\t $" + ordenGandores[i].dinero;
            }
            alert(resultado);
        }

    }

    reiniciar() {
        // Re-iniciar las casillas

        /** @type {Casilla} */
        let casilla = this.PTR_Casilla;

        do {
            casilla = casilla.linkCasilla;

            casilla.init();
            casilla.render();


        } while (casilla.linkCasilla != this.casilla);

    }
    /**
     * Dado un numero de casillas al que hay que moverse:
     * 
     * @param {Number} numeroCasillas   - Numero de casillas al que hay que moverse
     * @returns {Casilla}               - la casilla en el que cayó el jugador
     */
    moverJugador(numeroCasillas) {
        /** @type {Casilla} */
        let casilla = this.jugador.casilla;
        /** @type {Jugador} */
        let jugador = this.jugador;

        if (numeroCasillas > 0) {
            casilla = casilla.linkCasilla;

            jugador.casilla = casilla;
            jugador.render(casilla);
            window.location.href = "#" + casilla.id;

            if (casilla instanceof Go) casilla.accion(jugador);

            // Para que haya cierto delay, usaremos una promesa
            return new Promise((resolve) => setTimeout(() => resolve(this.moverJugador(numeroCasillas - 1)), 500));
        } else {
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
            this.jugador = jugador;
            this.PTR_Jugador = jugador;
            this.PTR_Jugador.linkJugador = jugador;
            this.render();
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