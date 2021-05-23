class ServicioPublico extends Propiedad {
    /**
     * 
     * @param {Number}  id
     * @param {String}  nombre
     * @param {Image}   img 
     * @param {Number}  precio 
     * @param {Number}  renta
     */
    constructor(id, nombre, img, precio, renta) {
        super(id, nombre, img, precio, renta);
    }

    /**
     * 
     * @param {Jugador} iquilino
     * @param {Numero}  d1
     * @param {Numero}  d2  
     */
     accionesInquilino(iquilino, d1, d2) {
        if (numeroServicio() == 1) {
            alert("El propietario de este servicio publico solo tiene un servicio, usted debe pagar 4 veces lo que sacó en los dados.");
            iquilino.dinero -= 4 * (d1 + d2);
        } else {
            alert("El propietario de este servicio publico solo tiene un servicio, usted debe pagar 10 veces lo que sacó en los dados.");
            iquilino.dinero -= 10 * (d1 + d2);
        }
    }

    numeroServicio() {
        /** @type {Casilla} */
        let casilla = this.linkCasilla;
        /** @type {ServicioPublico} */
        let servicioPublico = null;

        do {
            if (casilla instanceof ServicioPublico && casilla.propietario == this.propietario) {
                servicioPublico = casilla;
            }

            casilla = casilla.linkCasilla;

        } while (casilla.linkCasilla != this && servicioPublico == null);

        if (servicioPublico != this && servicioPublico != null) {
            return 2;
        }
        return 1;
    }
}