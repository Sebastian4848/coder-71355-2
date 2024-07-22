//? Splice elimina uno o mas elementos del array
//? El primer parametro es el indice y el segundo es la cantidad de elementos a eliminar
//? Si no se especifica la cantidad de elementos a eliminar, todos los elementos posteriores al indice se eliminen
// const productos = [
//     {id:'00000',name:'Celular',price:20000},//0
//     {id:'01111',name:'Tablet',price:10000},//1
//     {id:'02222',name:'Computadora',price:30000},//2
// ]
// productos.splice(2,1)
// console.log(productos)

//? Tambien podemos agregar elementos en cualquier posicion del array
// productos.splice(2,1, 'Nuevo Elemento')
// console.log(productos)


//? Metodo Join, generar un string con todos los elementos del array
// const miArray = ['Fer','Juan Perez','23','0']
// console.log(miArray.join("*"))

//? Metodo Concat, combina 2 arrays en 1
// const frutas = ['manzana','pera','Banana']
// const verduras = ['Tomate','Cebolla','Palta']

// const ensaladaFit = frutas.concat(verduras)
// console.log(ensaladaFit)

//? Metodo Slice, copia una parte del array
// Primer parametro desde donde a a comenzar la copia del array
// Segundo parametro hasta donde a cortar el array sin incluir ese valor
const productos = [
    {id:'00000',name:'celular',price:20000},//0
    {id:'01111',name:'tablet',price:10000},//1
    {id:'02222',name:'computadora',price:30000},//2
    {id:'03333',name:'computadora',price:30000},//3
    {id:'04444',name:'computadora',price:30000},//4
]

// const muebles = productos.slice(1,3)
// const newMueble = productos.slice(1,3).concat(productos.slice(3,4))
// console.log(newMueble)

//? Metodo indexOf, (Si se necesita acceder a un elemento de la lista sin que sea un objeto) Nos devuelve el indice del elemento del array que coincide con el parametro
// const frutas = ['manzana','pera','Banana','uva','manzana']
// console.log(frutas.indexOf('manzana'))

//? Metodo Includes, devuelve true o false dependiendo si el elemento se encuentra dentro del array
// const frutas = ['manzana','pera','Banana','uva','manzana']
// console.log(frutas.includes('pera'))

//? Metodo findIndex, nos devuelve el indice del elemento del array que coincide con el parametro
let busqueda = prompt('ingresa lo que quieres buscar en la lista').toLocaleLowerCase()

const index = productos.findIndex(productos =>productos.name === busqueda)

console.log(index)