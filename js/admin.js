// Lo primero que va para poder importar alguna funcion de otro archivo
// es ''import'' luego va de donde proviende lo que estamos trayendo desde otro lugar
// separadas por una coma '' , '' traemos el resto de las funciones
import {campoRequerido, validarNumeros, validarURL, validarGeneral} from './helpers o validaciones.js'
import {Producto} from './productoClass.js'

// agregar eventos a los elementos del formulario
// creamos una variable y buscamos en el DOM con el querySelector el selector de la clase
let campoCodigo = document.querySelector('#codigo');
let campoProducto = document.querySelector('#producto');
let campoDescripcion = document.querySelector('#descripcion');
let campoCantidad = document.querySelector('#cantidad');
let campoURL = document.querySelector('#url');
let formularioProducto = document.querySelector('#formProducto')
// lista de productos
let listaProductos = [];

// para ver si esta vinculado en el inspector de elementos usamos console log
console.log(campoCodigo)

// le estoy agregando un manejador de eventos a la variable campoCodigo.
// si lo hacemos desde jv ponemos el nombre del evento directamente.
// cuando ocurra el evento, queremos que se produzca la siguiente funcion.
// esta es la forma de agregar funciones a elementos cuando ocurra algun evento en el DOM.
// para INVOCAR una FUNCION con PARAMETRO, tenemos que crear una FUNCION ANONIMA

campoCodigo.addEventListener('blur', () => {campoRequerido(campoCodigo)});
campoProducto.addEventListener('blur', () => {campoRequerido(campoProducto)});
campoDescripcion.addEventListener('blur', () => {campoRequerido(campoDescripcion)});
campoCantidad.addEventListener('blur', () => {validarNumeros(campoCantidad)});
campoURL.addEventListener('blur', () => {validarURL(campoURL)});
formularioProducto.addEventListener('submit', guardarProducto);

// 1ER CAMPO: EVENTO A SUCEDER, 2DO CAMPO FUNCION A EJECUTAR.
 
// BLUR es cuando PIERDE EL FOCO un campo

function guardarProducto(e){
    e.preventDefault()
    // validar los campos del formulario
    if(validarGeneral(campoCodigo, campoProducto, campoDescripcion, campoCantidad, campoURL)){
        // agregar/crear un producto
        crearProducto();
    }
}

function crearProducto(){
    console.log('Aqui creo el producto')
    // crear el objeto producto
    // value es el valor o lo que contiene el campo de un input
    let productoNuevo = new Producto(campoCodigo.value, campoProducto.value, 
        campoDescripcion.value, campoCantidad.value, campoURL.value);
    console.log(productoNuevo);
    // guardar el producto creado en el arreglo
    listaProductos.push(productoNuevo);
    console.log(listaProductos);
    // limpiar el formulario
    limpiarFormulario();
    // web storage almacenamiento que tienen por defecto los navegadores donde podemos
    // guardar info, local-storage queda lo guardado siempre hasta borrar.
    // session storage, lo guardado dura 1 sesion hasta que cerramos la pag.
}

// si es una tarea especifica, la guardamos dentro de una funcion y luego la invocamos
// las veces que necesitemos
function limpiarFormulario(){
    // limpiar los value de todo el formulario
     formularioProducto.reset();
    // limpiar las clases
    campoCodigo.className = 'form-control';
    campoProducto.className = 'form-control';
    campoDescripcion.className = 'form-control';
    campoCantidad.className = 'form-control';
    campoURL.className = 'form-control';
}
