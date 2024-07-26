//? PRODUCTOS: Definicion del stock inicial de herrajes. Definicion del Array y de los Objetos.

class Herraje {
    constructor(nombre,stock){
        this.id=set_id++
        this.nombre = nombre
        this.stock=stock
    }
}

let set_id =1


//? Inventario inicial de herrajes

let herrajes =[
    new Herraje ('Argolla 2cm Dorado' , 8),
    new Herraje ('Argolla 2.5cm Dorado' , 42),
    new Herraje ('Argolla 3.2cm Dorado' , 44),
    new Herraje ('Cuadro 2cm Dorado' , 2),
    new Herraje ('Cuadro 2.5cm Dorado' , 37),
    new Herraje ('Media Argolla 1cm Dorado' , 20),
    new Herraje ('Media Argolla 1.5cm Dorado' , 27),
    new Herraje ('Media Argolla 2cm Dorado' , 69),
    new Herraje ('Media Argolla 2.5cm Dorado' , 80),
    new Herraje ('Mosqueton 2cm Dorado' , 7),
    new Herraje ('Mosqueton 2.5cm Dorado' , 13),
    new Herraje ('Pasador 1cm Dorado' , 13),
    new Herraje ('Pasador 1.5cm Dorado' , 42),
    new Herraje ('Pasador 2cm Dorado' , 52),
    new Herraje ('Pasador 2.5cm Dorado' , 67),
    new Herraje ('Argolla de llavero 2.5cm Dorado' , 8),
    new Herraje ('Mosqueton de llavero 2cm Dorado' , 11),
    new Herraje ('Argolla 2cm Plateado' , 14),
    new Herraje ('Argolla 2.5cm Plateado' , 36),
    new Herraje ('Argolla 3.2cm Plateado' , 29),
    new Herraje ('Argolla 3.8cm Plateado' , 21),
    // new Herraje ('Cuadro 2cm Plateado' , 0),
    // new Herraje ('Cuadro 2.5cm Plateado' , 9),
    // new Herraje ('Hebilla Cinturon 2.5cm Plateado' , 16),
    // new Herraje ('Media Argolla 1cm Plateado' , 31),
    // new Herraje ('Media Argolla 1.5cm Plateado' , 7),
    // new Herraje ('Media Argolla 2cm Plateado' , 38),
    // new Herraje ('Media Argolla 2.5cm Plateado' , 49),
    // new Herraje ('Media Argolla 3cm Plateado' , 32),
    // new Herraje ('Media Argolla 4cm Plateado' , 13),
    // new Herraje ('Mosqueton 2cm Plateado' , 10),
    // new Herraje ('Mosqueton 2.5cm Plateado' , 23),
    // new Herraje ('Pasador 1cm Plateado' , 9),
    // new Herraje ('Pasador 1.5cm Plateado' , 0),
    // new Herraje ('Pasador 2cm Plateado' , 32),
    // new Herraje ('Pasador 2.5cm Plateado' , 57),
    // new Herraje ('Pasador 3cm Plateado' , 14),
    // new Herraje ('Pasador 4cm Plateado' , 16),
    // new Herraje ('Argolla de llavero 2.5cm Plateado' , 17),
    // new Herraje ('Mosqueton de llavero 2cm Plateado' , 22),
    // new Herraje ('Hebilla Plastica 1cm Blanco' , 53),
    // new Herraje ('Hebilla Plastica 1.5cm Blanco' , 40),
    // new Herraje ('Hebilla Plastica 2cm Blanco' , 33),
    // new Herraje ('Hebilla Plastica 2.5cm Blanco' , 30),
    // new Herraje ('Hebilla Plastica 3cm Blanco' , 16),
    // new Herraje ('Hebilla Plastica 1cm Negro' , 16),
    // new Herraje ('Hebilla Plastica 1.5cm Negro' , 17),
    // new Herraje ('Hebilla Plastica 2cm Negro' , 12),
    // new Herraje ('Hebilla Plastica 2.5cm Negro' , 12),
    // new Herraje ('Hebilla Plastica 3cm Negro' , 11),
    
]

