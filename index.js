const losJugadores = [
    {
        nombre: "Juan",
        image: null
    },
    {
        nombre: "Pedro",
        image: null
    },
    {
        nombre: "Marcus",
        image: null
    },
    {
        nombre: "Johon",
        image: null
    }
]

const game = new Game();
const player = new Jugador("Juanito", null);

const c1 = new Casilla("c1");

console.log(c1.accion);
c1.accion = function accion() {
    console.log("Mayga")
}
console.log(c1.accion);
c1.accion();

const p1 = new Propiedad("p1", 100, 100, 100, 100, 100, 100, 100);
const p2 = new Propiedad("p2", 100, 100, 100, 100, 100, 100, 100);
const p3 = new Propiedad("p3", 100, 100, 100, 100, 100, 100, 100);
const p4 = new Propiedad("p4", 100, 100, 100, 100, 100, 100, 100);
const p5 = new Propiedad("p5", 100, 100, 100, 100, 100, 100, 100);

game.nuevaCasilla(c1);
game.nuevaCasilla(p1);
game.nuevaCasilla(p2);
game.nuevaCasilla(p3);
game.nuevaCasilla(p4);
game.nuevaCasilla(p5);

for (let jugador of losJugadores) {
    game.nuevoJugador(new Jugador(jugador.nombre, jugador.image));
}

player.comprarPropiedad(p1);
player.comprarPropiedad(p2);
player.comprarPropiedad(p3);
player.comprarPropiedad(p4);
player.comprarPropiedad(p5);

game.jugadores();
player.propiedades();
game.casillas();