class Jugador {
    /** 
     * Representa un jugador normal del juego. Cada jugador tiene un enlace al siguiente, formando una lista circular.
     * De esta manera se manejan los turnos (que se repiten desde el comienzo: PTR_Jugador).
     * Cada jugador tiene un PTR a una lista simple de propiedades. 
     * 
     * @param {String} id 
     * @param {String} nombre 
     * @param {HTMLImageElement} ficha 
     */
    constructor(id, nombre, ficha) {
        /** @type {Number} */
        this.dinero = 1500; // Dinero por defecto
        this.id = id;
        this.nombre = nombre;

        this.ficha = ficha;
        this.ficha.alt = this.nombre;

        /** @type {Jugador} */
        this.linkJugador = null;

        /** @type {Propiedad} */
        this.PTR_Propiedad = null;

        /** @type {Casilla} */
        this.casilla = null;

        /** @type {Boolean} */
        this.enCarcel = false;
        /** @type {Number} */
        this.turnosCarcel = 0;
    }

    /**
     * Actualiza la posición del jugador
     * @param {Casilla} casilla 
     */
    render(casilla) {
        let contenedor = document.getElementById(casilla.id);
        let zonaJugadores = contenedor.querySelector(".player-zone").appendChild(this.ficha);
    }

    /**
     * Comprada una propiedad, la añade a la lista simple.
     * 
     * @param {Propiedad} propiedad 
     */
    comprarPropiedad(propiedad) {
        /** @type {Propiedad} */
        let p = this.PTR_Propiedad;

        if (p == null) {
            // Este jugador aun no tiene propiedades
            this.PTR_Propiedad = propiedad;

        } else if (p.linkPropiedad == null) {
            // Solo hay un elemento (PTR)
            p.linkPropiedad = propiedad;

        } else {
            // Hay mas de un elemento
            while (p.linkPropiedad != null) {
                p = p.linkPropiedad;
            }
            p.linkPropiedad = propiedad;
        }

        propiedad.linkPropiedad = null;
    }

    /**
     * Busca la carcel y lleva al jugador alli
     */
    irCarcel() {
        /** @type {Casilla} */
        let casilla = this.casilla;
        /** @type {Carcel} */
        let carcel = null;

        console.log(casilla.linkCasilla);
        do {
            casilla = casilla.linkCasilla;

            if (casilla instanceof Carcel) {
                carcel = casilla;
            }
        } while (casilla.linkCasilla != this.casilla && carcel == null);

        if (carcel != null) {
            this.enCarcel = true;
            this.casilla = carcel;
            this.render(carcel);
            window.location.href = "#" + carcel.id;
        }
    }

    // ----------- HERRAMIENTAS DE DESARROLLO -------------- //

    /**
     * Muestra las propiedades de este jugador
     */
    propiedades() {
        /** @type {Propiedad} */
        let p = this.PTR_Propiedad;

        if (p == null) {
            console.log("Este jugador no tiene propiedades.");

        } else {
            console.log("La propiedades: ");

            while (p != null) {
                console.log(p.nombre, p.renta);
                p = p.linkPropiedad;
            }
        }
    }
}