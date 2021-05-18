class Propiedad {
    /**
     * 
     * @param {String} nombre 
     * @param {Number} precio 
     * @param {Number} renta 
     * @param {Number} rentaPorCasa 
     * @param {Number} rentaPorHotel 
     * @param {Number} costoCasa 
     * @param {Number} costoHotel 
     * @param {Number} valorHipoteca
     * @param {Object} link
     */
    constructor(nombre, precio, renta, rentaPorCasa, rentaPorHotel, costoCasa, costoHotel, valorHipoteca, link) {
        this.nombre = nombre;
        this.precio = precio;
        this.renta = renta;
        this.rentaPorCasa = rentaPorCasa;
        this.rentaPorHotel = rentaPorHotel;
        this.costoCasa = costoCasa;
        this.costoHotel = costoHotel;
        this.valorHipoteca = valorHipoteca;
        this.propietario = null;
        this.casas = 0;
        this.hotel = 0;
        this.link = link;
    }

    /**
     * 
     * @param {Player} propietario 
     * @returns 
     */
    comprarPropiedad(propietario) {
        if (this.propietario == null) {
            if (propietario.dinero >= this.precio) {
                this.propietario = propietario;
                return "Propiedad comprada exitosamente."
            } else {
                return "No tienes suficiente dinero para comparar esta propiedad.";
            }
        } else {
            return "Esta propiedad ya tiene dueño"
        }
    }

    /**
     * 
     * @returns 
     */
    comprarCasa() {
        if (this.propietario != null) {
            if (this.casas < 4) {
                if (this.propietario.dinero >= this.costoCasa) {
                    this.casas += 1;
                    this.renta = this.casa * this.rentaPorCasa;
                    this.rropietario.dinero -= this.costoCasa;
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
     * @returns 
     */
    comprarHotel() {
        if (this.propietario != null) {
            if (this.hotel < 1) {
                if (this.propietario.dinero >= this.costoHotel) {
                    this.hotel = 1;
                    this.propietario.dinero -= this.costoHotel;
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