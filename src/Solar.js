class Solar extends Propiedad {

    /**
     * Representa cada una de las propiedades disponibles para comprar por los jugadores.
     * Ademas de los datos que la conforman, esta tiene un linkPropiedad al siguiente elemento de una lista simple
     * 
     * @param {String} nombre           Nombre de la propiedad
     * @param {Number} precio           Precio de la propiedad
     * @param {Number} renta            Renta basica de la propiedad
     * @param {Number} rentaPorCasa     Renta con una cada
     * @param {Number} rentaPorHotel    Renta con un hotel
     * @param {Number} costoCasa        Costo de una casa
     * @param {Number} costoHotel       Costo de un hotel
     * @param {Number} valorHipoteca    Valor de la hipoteca
     */

    constructor(nombre, precio, renta, rentaPorCasa, rentaPorHotel, costoCasa, costoHotel, valorHipoteca) {
        super(nombre);

        this.precio = precio;
        this.renta = renta;
        this.rentaPorCasa = rentaPorCasa;
        this.rentaPorHotel = rentaPorHotel;
        this.costoCasa = costoCasa;
        this.costoHotel = costoHotel;
        this.valorHipoteca = valorHipoteca;

        // Valores por defecto
        this.propietario = null;
        this.casas = 0;
        this.hotel = 0;

        this.linkCasilla = null; // Link circular a otra casilla de *Juego*
        this.linkPropiedad = null; // Link simple a otra propiedad del *Jugador*
    }

    accionesPropietario() {
        console.log("a) Comprar casa, b) Comprar hotel, c) Hipotecar, d) Vender");
    }
    /**
     * 
     * @returns {String} resultado de la compra 
     */
    comprarCasa() {
        if (this.propietario != null) {
            if (this.casas < 4) {
                if (this.propietario.dinero >= this.costoCasa) {
                    this.casas += 1;
                    this.renta = this.casa * this.rentaPorCasa;
                    this.rropietario.dinero -= this.costoCasa;
                    return "Casa comprada exitosamente."
                } else {
                    return "No tienes suficiente dinero para comprar una casa";
                }
            } else {
                return "Ya tienes 4 casas. No puedes comprar mas."
            }
        } else {
            return "Esta propiedad no tiene dueño";
        }
    }

    /**
     * 
     * @returns {String} resultado de la compra
     */
    comprarHotel() {
        if (this.propietario != null) {
            if (this.hotel < 1) {
                if (this.propietario.dinero >= this.costoHotel) {
                    this.hotel = 1;
                    this.propietario.dinero -= this.costoHotel;
                    return "Hotel comprado exitosamente."
                } else {
                    return "No tienes dinero suficiente para comprar este hotel"
                }
            } else {
                return "Esta propiedad ya tiene un hotel";
            }
        } else {
            return "Esta propiedad no tiene dueño";
        }
    }
}