class Casilla {

    /**
     * 
     * @param {Number} id 
     * @param {String} nombre 
     * @param {Image} img 
     */
    constructor(id, nombre, img) {
        this.id = id;
        this.nombre = nombre;
        this.img = img;

        /** @type {Casilla} */
        this.linkCasilla = null;

        /** @type {String[]} */
        this.classNames = ["casilla"];

        this.init();
    }

    init() {
        /** @type {HTMLElement} */
        let tablero = document.querySelector('#casillas');

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

    render() { console.warn("OVERWRITE THIS METHOD"); }
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