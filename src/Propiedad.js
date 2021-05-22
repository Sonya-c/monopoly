class Propiedad extends Casilla {
    /**
     * @param {String} id       -id
     * @param {String} nombre   - Nombre de la propiedad 
     * @param {Number} precio   - Precio de la propiedad 
     */
    constructor(id, nombre, img, precio) {
        super(id, nombre, img);
        this.precio = precio;

        /** @type {Jugador} */
        this.propietario = null;
    }

    /**
     * 
     * @param {Jugador} jugador 
     */
    accion(jugador) {
        if (this.propietario == null) {
            console.log("¿Desea comparar estas propiedad?");

        } else if (jugador == this.propietario) {
            console.log("¿Que deseas hacer con estas propiedad");
            this.accionesPropietario();

        } else {
            console.log("Has caido en la propiedad de alguien mas, debes pagar");
            this.accionesInquilino();

        }
    }

    /**
     * 
     * @param {Jugador} jugador 
     * @returns {String} resultado de la compra
     */
    comprar(jugador) {
        if (this.jugador == null) {
            if (jugador.dinero >= this.precio) {
                this.jugador = jugador;
                return "Propiedad comprada exitosamente"
            } else {
                return "No tienes suficiente dinero para comparar esta propiedad.";
            }
        } else {
            return "Esta propiedad ya tiene dueño"
        }
    }

    accionesPropietario() { /* OVERWRITE THIS */ }

    accionesInquilino() { /* OVERWRITE THIS */ }
}