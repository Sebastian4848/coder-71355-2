//? SISTEMA: Definicion de las funciones principales del sistema.


//? Menu principal.

const menu_str = `
    Presiona 1 para mostrar el stock actual de herrajes.
    Presiona 2 para agregar un nuevo herraje al inventario.
    Presiona 3 para buscar herrajes.
    Presiona 4 para agregar una incidencia al stock.
    Presiona 0 para VOLVER o SALIR.
`

//? Definicipon del sistema

class Sistema {
    constructor(herrajes) {
        this.herrajes = herrajes;
    }

//? Opcion 2: Agregar nuevo herraje al inventario.

    nuevoHerraje() {
        const nombre = solicitarDato('cadena', 'Ingrese el nombre del herraje');
        const stock = solicitarDato('numeroEntero', 'Ingrese el stock actual del herraje');
        this.herrajes.push(new Herraje(nombre, stock))
        mostrarTabla(herrajes);
    }
}

//? Opcion 1: Mostrar tabla.
function mostrarTabla(datos) {
    console.clear();
    console.table(datos);
}

//? Opcion 3: Buscar herrajes.
function filtrarHerrajes(herraje) {
    let busqueda = solicitarDato('cadena', 'Ingrese el nombre o alguna caracteristica del herraje');
    const result = herrajes.filter((herraje) => herraje.nombre.toLowerCase().indexOf(busqueda) != -1);
    mostrarTabla(result);
    if (result.length == 0) {
        alert(`La busqueda de ${busqueda} arrojo 0 resultados`);
    }
    console.log(`Se encontraron ${result.length} herrajes`);
}

//? Opcion 4: Agregar incidencia, modificar inventario.
function agregarIncidencia(herrajes) {
    let id_herraje = solicitarDato('numero', 'Ingrese el ID del herraje');
    let cantidad = solicitarDato2('numeroEntero', 'Ingrese la cantidad de de herrajes a sumar o restar');
    herrajes[id_herraje-1].stock = herrajes[id_herraje-1].stock + cantidad;
    mostrarTabla(herrajes);
}


