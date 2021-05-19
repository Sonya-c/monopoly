class Jugador {
    /** 
     * Representa un jugador normal del juego. Cada jugador tiene un enlace al siguiente formando una lista circular.
     * De esta manera se manejan los turnos (que se repiten desde le comienzo: PTR_Jugador).
     * Cada jugador tiene un PTR a una lista simple de propiedades. 
     * 
     * @param {String} nombre 
     * @param {Image} ficha 
     */
    constructor(nombre, ficha) {
        /** @type {Number} */
        this.dinero = 1500; // Dinero por defecto
        this.nombre = nombre;
        this.ficha = ficha;

        /** @type {Jugador} */
        this.linkJugador = null;

        /** @type {Propiedad} */
        this.PTR_Propiedad = null;
    }

    /**
     * Comprar una propiedad y si bb9esta es exitosa, añadirla a la lista simple.
     * 
     * @param {Propiedad} propiedad 
     */
    comprarPropiedad(propiedad) {
        /** @type {String} */
        let resultadoCompra = propiedad.comprar(this);

        if (resultadoCompra == "Propiedad comprada exitosamente") {
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

        } else {
            console.log(resultadoCompra);
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