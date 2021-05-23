class Propiedad extends Casilla {
    /**
     * @param {String} id       id
     * @param {String} nombre   Nombre de la propiedad 
     * @param {Number} precio   Precio de la propiedad 
     */
    constructor(id, nombre, img, precio, renta) {
        super(id, nombre, img);
        this.precio = precio;
        this.renta = renta;

        /** @type {Jugador} */
        this.propietario = null;

        this.render();
    }

    render() {
        this.data = document.createElement("ul");

        this.li_propietario = document.createElement("li");
        this.li_propietario.innerHTML = "Propietario: ";
        this.data.appendChild(this.li_propietario);

        let li_precio = document.createElement("li");
        li_precio.innerHTML = "Precio: " + this.precio;
        this.data.appendChild(li_precio);

        let li_renta = document.createElement("li");
        li_renta.innerHTML = "Renta: " + this.renta;
        this.data.appendChild(li_renta);

        this.casillaBody.appendChild(this.data);
    }
    /**
     * 
     * @param {Jugador} jugador 
     */
    accion(jugador, d1, d2) {

        if (this.propietario == null) {
            if (confirm("¿Desea comparar esta propiedad?")) this.comprar(jugador);

        } else if (jugador == this.propietario) {
            this.accionesPropietario();

        } else {
            alert("Has caído en la propiedad de alguien más, debes pagar la renta ");
            this.accionesInquilino(jugador, d1, d2);
        }
    }

    /**
     * 
     * @param {Jugador} jugador 
     * @returns {String}
     */
    comprar(jugador) {
        if (this.propietario == null) {

            if (jugador.dinero >= this.precio) {
                this.propietario = jugador;
                this.propietario.dinero -= this.precio;
                this.propietario.comprarPropiedad(this);

                // Show dat
                this.li_propietario.innerHTML = "Propietario: " + this.propietario.nombre;
                alert("Propiedad comprada exitosamente");

            } else {
                alert("No tienes suficiente dinero para comparar esta propiedad.");
            }

        } else {
            alert("Esta propiedad ya tiene dueño");
        }
    }

    accionesPropietario() { /* OVERWRITE THIS */ }

    accionesInquilino() { /* OVERWRITE THIS */ }
}