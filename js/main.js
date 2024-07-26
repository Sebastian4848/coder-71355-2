//? MAIN: Interaccion del usuario con el codigo.

let sistema_stock = new Sistema(herrajes)


//? Funciones para hacer validacion de datos de entrada.

function solicitarDato(tipo, mensaje, sugerencia = '') {
    let dato;
    if (tipo == 'numero') {
        do {
            dato = parseFloat(prompt(mensaje, sugerencia));
        } while (isNaN(dato) || dato < 0);
    }
    else if (tipo == 'numeroEntero') {
        do {
            dato = parseInt(prompt(mensaje, sugerencia));
        } while (isNaN(dato) || dato < 0);
    }
    else if (tipo == 'cadena') {
        do {
            dato = prompt(mensaje, sugerencia).toLocaleLowerCase();
        } while (dato == '');
    }
    return dato;
}

function solicitarDato2(tipo, mensaje, sugerencia = '') {
    let dato;
    if (tipo == 'numero') {
        do {
            dato = parseFloat(prompt(mensaje, sugerencia));
        } while (isNaN(dato));
    }
    else if (tipo == 'numeroEntero') {
        do {
            dato = parseInt(prompt(mensaje, sugerencia));
        } while (isNaN(dato));
    }
    else if (tipo == 'cadena') {
        do {
            dato = prompt(mensaje, sugerencia).toLocaleLowerCase();
        } while (dato == '');
    }
    return dato;
}

//? Bucle principal del programa

let salir = false
while (!salir) {

    let opcion = parseInt(prompt(menu_str));
    switch (opcion) {
        case 0:
            alert("FIN. Para volver al meni presiona F5")
            salir = true
            break
        case 1:
            mostrarTabla(herrajes);
            break
        case 2:
            sistema_stock.nuevoHerraje();
            break
        case 3:
            filtrarHerrajes(herrajes);
            break
        case 4:
            agregarIncidencia(herrajes);
            break
        default:
            alert("Opcion inexistente. Intente de nuevo");
    }
}