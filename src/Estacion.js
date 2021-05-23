class Estacion extends Propiedad {

    /**
     * 
     * @param {Number} id 
     * @param {String} nombre 
     * @param {Image} img 
     * @param {Number} precio 
     */
    constructor(id, nombre, img, precio, renta) {
        super(id, nombre, img, precio, "Depende");
    }

    accionesPropietario() { /* OVERWRITE THIS */ }

    /**
     * 
     * @param {Jugador} inquilino 
     */
    accionesInquilino(inquilino) {
        /** @type {Estacion[]} */
        let estaciones = this.getEstaciones();
        let pagar = 0;

        switch (estaciones.length()) {
            case 1:
                pagar = 25;
                break;
            case 2:
                pagar = 50;
                break;
            case 3:
                pagar = 100;
                break;
            case 4:
                pagar = 200;
                break;
            default:
                pagar = 0;
                break;
        }

        alert("Ha caido en la estación de alguien");
        inquilino.dinero -= pagar;
    }

    getEstaciones() {
        /** @type {Casilla} */
        let casilla = this.linkCasilla;
        /** @type {Estacion[]} */
        let estaciones = [];

        do {
            if (casilla instanceof estación && casilla.propietario == this.propietario) {
                estaciones.push(casilla)
            }

            casilla = casilla.linkCasilla;

        } while (casilla.linkCasilla != this && estación == null);

        return estaciones;
    }
}