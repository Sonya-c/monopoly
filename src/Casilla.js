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
    accion(jugador) { return console.warn("OVERWRITE THIS METHOD"); }
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
            console.log(d1, d2, d1 == d2);
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

    accion(jugador) {
        alert("¡Vas a la cárcel!");
        let carcel = this.encontrarCarcel();

        jugador.casilla = carcel;
        jugador.render(carcel);
        window.location.href = "#" + carcel.id;
    }

    /**
     * 
     * @returns {Casilla} casilla
     */
    encontrarCarcel() {
        /** @type {Casilla} */
        let casilla = this;
        /** @type {boolean} */
        let encontrada = false;

        do {
            if (casilla instanceof Carcel) casilla = casilla.linkCasilla
            else encontrada = true;

        } while (casilla.linkCasilla != this && !encontrada);

        if (encontrada) return casilla
        else null;
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