class Solar extends Propiedad {

    /**
     * Representa cada una de las propiedades disponibles para comprar por los jugadores.
     * Ademas de los datos que la conforman, esta tiene un linkPropiedad al siguiente elemento de una lista simple
     * 
     * @param {String} id
     * @param {String} nombre           Nombre de la propiedad
     * @param {Image}  img
     * @param {Number} precio           Precio de la propiedad
     * @param {Number} renta            Renta basica de la propiedad
     * @param {Number} rentaPorCasa     Renta con una cada    de las casas
     * @param {Number} rentaPorHotel    Renta con un hotel
     * @param {Number} costoCasa        Costo de una casa
     */

    constructor(id, nombre, img, precio, renta, rentaPorCasa, rentaPorHotel, costoCasa) {
        super(id, nombre, img, precio, renta);

        this.rentaPorCasa = rentaPorCasa;
        this.rentaPorHotel = rentaPorHotel;
        this.costoCasa = costoCasa;

        // Valores por defecto
        this.propietario = null;
        this.casas = 0;
        this.hotel = 0;

        this.linkPropiedad = null; // Link simple a otra propiedad del *Jugador*

        let li_costoCasa = document.createElement("li");
        li_costoCasa.innerHTML = "Precio Edificio: " + this.costoCasa;
        this.data.appendChild(li_costoCasa);

        let li_rentaCasa = document.createElement("li");
        li_rentaCasa.innerHTML = "Renta por casa: " + this.rentaPorCasa;
        this.data.appendChild(li_rentaCasa);

        let li_rentaHotel = document.createElement("li");
        li_rentaHotel.innerHTML = "Precio por Hotel: " + this.rentaPorHotel;
        this.data.appendChild(li_rentaHotel);
    }

    /**
     * Las acciones que el propietario puede hacer sobre su propiedad:
     * Comprar una nueva casa.
     * Comprar un hotel.
     */
    accionesPropietario() {
        if (this.casas <= 4 && confirm("¿Quiere compra una casa?" + this.costoCasa))
            this.comprarCasa();
        else if (this.hotel != 0 && confirm("¿Quiere comprar un hotel?" + this.costoCasa))
            this.comprarHotel;
    }

    /**
     * Comprar una nueva casa
     */
    comprarCasa() {
        if (this.propietario.dinero >= this.costoCasa) {
            this.casas += 1;
            this.renta = this.casa * this.rentaPorCasa;
            this.rropietario.dinero -= this.costoCasa;

            alert("Casa comprada exitosamente.")
        } else {
            alert("No tienes suficiente dinero para comprar una casa")
        }
    }

    /**
     * Comprar un hotel
     */
    comprarHotel() {
        if (this.propietario.dinero >= this.costoCasa) {
            this.hotel = 1;
            this.propietario.dinero -= this.costoCasa;

            alert("Hotel comprado exitosamente.");
        } else {
            alert("No tienes dinero suficiente para comprar este hotel");
        }
    }
}