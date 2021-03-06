const tablero = [
    {
        type: "go",
        img: "Images/GO_MONOPOLOLY.png"
    },
    {
        type: "solar",
        img: "Images/avenidaMediterraneo.jpg",
        color: '#8a480f',
        nombre: "Avenida mediterranea",
        precio: 60,
        renta: 2,
        rentaCasa: 10,
        rentaHotel: 250,
        costoCasa: 50,
    },

    {
        type: "solar",
        img: "Images/AvenidaBaltic.jpg",
        color: '#8a480f',
        nombre: "Avenida Baltic",
        precio: 60,
        renta: 4,
        rentaCasa: 20,
        rentaHotel: 450,
        costoCasa: 50,
    },
    {
        type: "impuesto",
        img: "Images/incomentax.png",
        pagar: 200
    },
    {
        type: "estacion",
        img: "Images/estacion.png",
        nombre: "Playa de palma",
        precio: 200
    },
    {
        type: "solar",
        img: "Images/avenidaOriental.jpg",
        color: '#51d6c2',
        nombre: "Avenida Oriental",
        precio: 100,
        renta: 6,
        rentaCasa: 30,
        rentaHotel: 550,
        costoCasa: 50,
    },

    {
        type: "solar",
        img: "Images/ver.jpg",
        color: '#51d6c2',
        nombre: "Avenida Vermont",
        precio: 100,
        renta: 6,
        rentaCasa: 30,
        rentaHotel: 550,
        costoCasa: 50,
    },
    {
        type: "solar",
        img: "Images/avenidaConnecticut.jpg",
        color: '#51d6c2',
        nombre: "Avenida Connecticut",
        precio: 100,
        renta: 6,
        rentaCasa: 30,
        rentaHotel: 550,
        costoCasa: 50,
    },
    {
        type: "carcel",
        nombre: "cárcel",
        img: "Images/jail.jpg",
    },
    {
        type: "solar",
        img: "Images/Lugarcharles.jpg",
        color: "#d65194",
        nombre: "Lugar san Charles",
        precio: 140,
        renta: 10,
        rentaCasa: 40,
        rentaHotel: 750,
        costoCasa: 50,
    },
    {
        type: "servicio",
        img: "Images/bombillo.png",
        nombre: "Compañía Eléctica",
        precio: 150,
    },
    {
        type: "solar",
        img: "Images/avenidaStates.jpg",
        color: "#d65194",
        nombre: "Avenida States",
        precio: 140,
        renta: 10,
        rentaCasa: 40,
        rentaHotel: 750,
        costoCasa: 50,
    },
    {
        type: "solar",
        img: "Images/avenidaVirginia.jpg",
        color: "#d65194",
        nombre: "Avenida Virginia",
        precio: 160,
        renta: 12,
        rentaCasa: 60,
        rentaHotel: 900,
        costoCasa: 60,
    },
    {
        type: "estacion",
        nombre: "Portixol",
        img: "Images/estacion.png",
        precio: 200,
    },
    {
        type: "solar",
        img: "Images/Lugarsanjames.jpeg",
        color: "#fcb423",
        nombre: "Lugar San James",
        precio: 180,
        renta: 14,
        rentaCasa: 70,
        rentaHotel: 950,
        costoCasa: 70,
    },

    {
        type: "solar",
        img: "Images/avenidaTenesi.jpg",
        color: "#fcb423",
        nombre: "Avenida tenesis",
        precio: 180,
        renta: 14,
        rentaCasa: 70,
        rentaHotel: 950,
        costoCasa: 70,
    },
    {
        type: "solar",
        img: "Images/avenidany.jpg",
        color: "#fcb423",
        nombre: "Avenida nueva york",
        precio: 200,
        renta: 16,
        rentaCasa: 80,
        rentaHotel: 1000,
        costoCasa: 100,
    },
    {
        type: "free-parking",
        nombre: "Estacionamiento gratis",
        img: "Images/freeparking.jpg"
    },
    {
        type: "solar",
        img: "Images/avenidaKentuchy.jpg",
        color: "#fc2323",
        nombre: "Avenida Kentucky",
        precio: 220,
        renta: 18,
        rentaCasa: 90,
        rentaHotel: 1050,
        costoCasa: 150,
    },

    {
        type: "solar",
        img: "Images/avenidaIndiana.jpg",
        color: "#fc2323",
        nombre: "Avenida indiana",
        precio: 220,
        renta: 18,
        rentaCasa: 90,
        rentaHotel: 1050,
        costoCasa: 150,
    },
    {
        type: "solar",
        img: "Images/avenidaillions.jpg",
        color: "#fc2323",
        nombre: "Avenida illionis",
        precio: 220,
        renta: 18,
        rentaCasa: 90,
        rentaHotel: 1050,
        costoCasa: 150,
    },
    {
        type: "estacion",
        img: "Images/estacion.png",
        nombre: "ses iLLetes",
        precio: 200,
    },
    {
        type: "solar",
        img: "Images/avenidaAtlantic.jpg",
        color: "#eefa46",
        nombre: "Avenida Atlantic",
        precio: 260,
        renta: 22,
        rentaCasa: 110,
        rentaHotel: 1150,
        costoCasa: 150,

    },
    {
        type: "solar",
        img: "Images/avenidaVentnor.jpg",
        color: "#eefa46",
        nombre: "Avenida Ventnor",
        precio: 260,
        renta: 22,
        rentaCasa: 90,
        rentaHotel: 1050,
        costoCasa: 150,
    },
    {
        type: "servicio",
        img: "Images/water.jpg",
        nombre: "Empresa de agua",
        precio: 150,
        
    
    },
    {
        type: "solar",
        img: "Images/MarvenGardens.jpg",
        color: "#eefa46",
        nombre: "Marven Gardens",
        precio: 280,
        renta: 24,
        rentaCasa: 120,
        rentaHotel: 1200,
        costoCasa: 150
    },
    {
        type: "goCarcel",
        nombre: "Ir a la carcel",
        img: "Images/goJail.png",
    },
    {
        type: "solar",
        img: "Images/avenidaPacific.jpg",
        color: "#0fd43d",
        nombre: "Avenida Pacific",
        precio: 300,
        renta: 26,
        rentaCasa: 130,
        rentaHotel: 1275,
        costoCasa: 200,
    },
    {
        type: "solar",
        img: "Images/avenidaCalifornia.jpg",
        color: "#0fd43d",
        nombre: "Avenida norte California",
        precio: 300,
        renta: 26,
        rentaCasa: 130,
        rentaHotel: 1275,
        costoCasa: 300,
    },

    {
        type: "solar",
        img: "Images/avenidaPenn.jpg",
        color: "#0fd43d",
        nombre: "Avenida Pennsylvania",
        precio: 320,
        renta: 28,
        rentaCasa: 130,
        rentaHotel: 1275,
        costoCasa: 200,
    },
    {
        type: "estacion",
        nombre: "Short Line",
        precio: 200,
        img: "Images/estacion.png",
    },

    {
        type: "solar",
        img: "Images/parkplace.jpg",
        color: "#0f54d4",
        nombre: "Park Place",
        precio: 350,
        renta: 34,
        rentaCasa: 157,
        rentaHotel: 1500,
        costoCasa: 200,
    },
    {
        type: "impuesto",
        img: "Images/luxurytax.jpg",
        pagar: 1000,
    },
    {
        type: "solar",
        img: "Images/bwalk.jpg",
        color: "#0f54d4",
        nombre: "Boardwalk",
        precio: 400,
        renta: 50,
        rentaCasa: 200,
        rentaHotel: 2000,
        costoCasa: 200,
    }
]