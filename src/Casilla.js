class Casilla {

    /**
     * 
     * @param {Number}  id      Id de la casilla (y de su elemento HTML)
     * @param {String}  nombre  Nombre de la casilla (se vera en el render)
     * @param {Image}   img     Imagen de la casilla (se vera en el render)
     */
    constructor(id, nombre, img) {
        this.id = id;
        this.nombre = nombre;
        this.img = img;

        /** @type {Casilla} Link circular a otra casilla de **Juego** */
        this.linkCasilla = null;

        /** @type {String[]} lista de clases (Estilos) */
        this.classNames = ["casilla"];

        this.init(); // Crear el elemento HTML asociado a esta casilla
    }

    /**
     * Crear el elemento HTML asociado
     */
    init() {
        /** @type {HTMLElement} Contenedor de casillas*/
        let tablero = document.querySelector('#casillas');

        /** @type {HTMLElement} Elemento HTML asociado a esta casilla */
        let casillaContenedor = document.createElement("div", { id: this.id });
        casillaContenedor.classList.add(...this.classNames);
        casillaContenedor.id = this.id;


        let casillaEncabezado = document.createElement("div");
        casillaEncabezado.classList.add('casilla-header');
        let h2 = document.createElement("h2");
        h2.innerHTML = this.nombre;
        casillaEncabezado.appendChild(h2);
        casillaContenedor.appendChild(casillaEncabezado);

        this.casillaJugadores = document.createElement("div");
        this.casillaJugadores.classList.add("player-zone");

        this.casillaBody = document.createElement("div");
        this.casillaBody.classList.add("casilla-body");

        let image = document.createElement("img");
        image.src = this.img;
        image.alt = this.nombre;
        this.casillaBody.appendChild(image);

        casillaContenedor.appendChild(this.casillaJugadores);
        casillaContenedor.appendChild(this.casillaBody);
        tablero.appendChild(casillaContenedor);
    }

    /**
     * @abstract Actualiza y/o modifica el estado inicial del elemento HTML
     */
    render() { console.warn("OVERWRITE THIS METHOD"); }

    /**
     * @abstract Realiza una acción sobre el usuario que cayó en esta casilla
     * @param {Jugador} jugador 
     */
    accion(jugador) { console.warn("OVERWRITE THIS METHOD"); }
}

class Go extends Casilla {
    /**
     * 
     * @param {Number} id 
     * @param {Image} img 
     */
    constructor(id, img) {
        super(id, "Go", img);
    }

    accion(jugador) {
        alert("!Has pasado por go! + 200");
        jugador.dinero += 200;
    }
}

class Carcel extends Casilla {
    /**
     * 
     * @param {Number} id 
     * @param {Image} img 
     */
    constructor(id, img) {
        super(id, "Carcel", img);
    }

    /**
     * 
     * @param {Jugador} jugador 
     * @param {Number} d1 
     * @param {Number} d2 
     */
    accion(jugador, d1, d2) {

        if (!jugador.enCarcel) {
            alert("Hola estas visitando");

        } else if (d1 == d2) {
            alert("Sales de la carcel");

            jugador.enCarcel = false;
            jugador.turnosCarcel = 0;

        } else if (jugador.turnosCarcel > 3) {
            alert("Llevas 3 turno en la carcel, debes pagar una multa de 50");

            jugador.dinero -= 50;
            jugador.enCarcel = false;
            jugador.turnosCarcel = 0;

        } else {
            alert("Sigues en la carcel, intena sacar ddoble en el siguiente turno");
        }
    }
}
class GoCarcel extends Casilla {
    /**
     * 
     * @param {Number} id 
     * @param {Image} img 
     */
    constructor(id, img) {
        super(id, "Ir a carcel", img);

        /** @type {String[]} */
        this.classNames = ["casilla", "esquina"];
    }

    /**
     * 
     * @param {Jugador} jugador 
     */
    accion(jugador) {
        alert("¡Vas a la cárcel!");
        jugador.irCarcel();
    }

}

class CajaComunidad extends Casilla {
    /**
     * 
     * @param {Number} id 
     * @param {Image} img 
     */
    constructor(id, img) {
        super(id, "Caja de comunidad", img);
    }
}

class Fortuna extends Casilla {
    /**
     * 
     * @param {Number} id 
     * @param {Image} img 
     */
    constructor(id, img) {
        super(id, "Chance", img);
    }
}