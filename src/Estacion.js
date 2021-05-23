class Estacion extends Propiedad {

    /**
     * 
     * @param {Number} id 
     * @param {String} nombre 
     * @param {Image} img 
     * @param {Number} precio 
     */
    constructor(id, nombre, img, precio, renta) {
        super(id, nombre, img, precio, renta);
    }

    numeroEstaciones() {
        /** @type {Casilla} */
        let casilla = this.linkCasilla;
        /** @type {ServicioPublico} */
        let estaciones = [null];

        do {
            if (casilla instanceof estación && casilla.propietario == this.propietario) {
                estación = casilla;
            }

            casilla = casilla.linkCasilla;

        } while (casilla.linkCasilla != this && estación == null);

        if (estación != this && estación != null) {
            return 2;
        }
        return 1;
    }
}