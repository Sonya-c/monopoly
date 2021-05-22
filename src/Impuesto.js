class Impuesto extends Casilla {
    /**
     * 
     * @param {Number} id 
     * @param {Imagen} img 
     * @param {Number} pagar 
     */
    constructor(id, img, pagar) {
        super(id, "Impuesto", img);

        this.pagar = pagar;
    }

    accion() {
        console.log("a) Debe pagar el 10% de su patrimonio (dinero, precio de las propiedades esten o no hipotecadas, el precio de los edificios que se posea)",
            "b) Pagar 20 000");
    }
}