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

}