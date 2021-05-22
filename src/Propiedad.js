class Propiedad extends Casilla {
    /**
     * @param {String} id       -id
     * @param {String} nombre   - Nombre de la propiedad 
     * @param {Number} precio   - Precio de la propiedad 
     */
    constructor(id, nombre, img, precio, renta) {
        super(id, nombre, img);
        this.precio = precio;
        this.renta = renta;
        /** @type {Jugador} */
        this.propietario = null;
    }

    /**
     * 
     * @param {Jugador} jugador 
     */
    accion(jugador) {
        if (this.propietario == null) {
            if (confirm("¿Desea comparar esta propiedad?")) this.comprar(jugador);
        } else if (jugador == this.propietario) {
            this.accionesPropietario();
        } else {
            alert("Has caido en la propiedad de alguien mas, debe pagar renta", this.renta);
            this.jugador.dinero -= this.renta;
        }
    }

    /**
     * 
     * @param {Jugador} jugador 
     * @returns {String}
     */
    comprar(jugador) {
        if (this.jugador == null) {
            if (jugador.dinero >= this.precio) {
                this.jugador = jugador;
                this.jugador.comprarPropiedad(this)
                alert("Propiedad comprada exitosamente")
            } else {
                alert("No tienes suficiente dinero para comparar esta propiedad.");
            }
        } else {
            alert("Esta propiedad ya tiene dueño")
        }
    }

    accionesPropietario() { /* OVERWRITE THIS */ }

    accionesInquilino() { /* OVERWRITE THIS */ }
}