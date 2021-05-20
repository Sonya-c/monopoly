class Impuesto extends Casilla {
    /**
     * IMPUESTO SOBRE LOS INGRESOS es el 10"% de todo el patrimonio del jugador,
     * el patrimonio es calculado sobre el DINERO EN EFECTIVO, el PRECIO impreso de las propiedades (ya estén o no hipotecadas) y el precio de costo de todos los edificios que posea. 
     * Sin embargo, el jugador tiene la opción de estimar el impuesto en la cantidad de $ 20,000 y pagarlo al banco inmediatamente.
     * Puede también pagar el impuesto resultante del cálculo antes dicho de su patrimonio pero tiene que elegir una u otra cosa antes de empezar a sumar el valor de sus bienes
     * 
     * @param {String} nombre 
     */
    constructor(id, nombre) {
        super(id, nombre);
    }

    accion() {
        console.log("a) Debe pagar el 10% de su patrimonio (dinero, precio de las propiedades esten o no hipotecadas, el precio de los edificios que se posea)",
            "b) Pagar 20 000");
    }
}