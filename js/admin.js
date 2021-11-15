// la palabra ''campo'' que va como parametro puede haber sido cualquiera, es una palabra 
// inventada, es un contenedor.

// Como estaba la funcion al principio

function campoRequerido(campo){
    console.log('Desde la funcion campo requerido')
    console.log(campo)
    // value contiene lo que tiene escrito cada input
    // trim sirve para que quite los espacios vacios, caracteres especiales, 
    // comillas de adelante de la cadena de texto
    // para ingresar caracteres no menor a 10 campo.value.trim().minlength > 10
    if(campo.value.trim().length > 0){
        // console.log('Pasó la validación')
        // className = cambiar las etiquetas de la clase que tiene esa funcion
        campo.className = 'form-control is-valid';
        // en caso de que cumpla con la condicion, retorna true que nos sirve para utilizar
        // un If luego para validar el formulario completo
        return true;
    } else {
        // console.log('No pasó la validación')
        campo.className = 'form-control is-invalid';
        return false;
    }
}


// Las EXPRESIONES REGULARES sirven para crear un patron para validar datos
// el cual devuelve un dato booleano TRUE o FALSE

// 1er paso crear el patron: (Crear una expresion regular)

function validarNumeros(input){
    // va entre BARRAS INVERTIDAS la estructura que quiero armar
    // solo este patron va a aceptar numeros
    // para poner la CANTIDAD lo ponemos entre llavesitas
    // MINIMO el 1er numero y MAXIMO el 2do numero
    let patron = /^[0-9]{1,3}$/;
    // probar el funcionamiento del patron o expresion regular
    // TEST es un METDOO que tiene js para VALIDAR la expresion
    if(patron.test(input.value)){
        // SI cumple la expresion regular:
        input.className = 'form-control is-valid';
        return true;
    } else { 
        // si NO cumple la expresion regular:
        input.className = 'form-control is-invalid';
        return false;
    }
}


// Funcion para validar URL

function validarURL(input){
    // crear la expresion regular
    // se puede repetir el nombre de la funcion, creada dentro de otra
    // porque solo existe dentro de la misma
    let patron = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
    if(patron.test(input.value)){
        input.className = 'form-control is-valid';
        return true;
    } else { 
        input.className = 'form-control is-invalid';
        return false;
    }
}

// validar el formulario completo contemplando el evento 'submit'
// podemos usar e o event como parametro
// el evento Event es aquel que va registrando cada cosa que sucede en la pag
function validarGeneral(e){
    // preventDefault previene el movimiento por defecto(lo anula)
    e.preventDefault()
    console.log('aqui tengo que validar todo de nuevo');
    // volver a validar todos los campos
    // if(preguntar si el codigo es correcto && pregunto si el producto es correcto)
    // si creamos una variable dentro de las llaves, fuera de las mismas no funcionan
    let alerta = document.querySelector('#msjAlerta');
    if(campoRequerido(campoCodigo) && campoRequerido(campoProducto) &&
    campoRequerido(campoDescripcion) && validarNumeros(campoCantidad)
    && validarURL(campoURL)){
        console.log('si paso la validacion');
        alerta.className = 'alert alert-warning ms-5 my-3 d-none text-center lead';
    } else {
        console.log('no paso la validacion');
        alerta.className = 'alert alert-warning ms-5 my-3 text-center lead';
    }
}


// agregar eventos a los elementos del formulario
// creamos una variable y buscamos en el DOM con el querySelector el selector de la clase
let campoCodigo = document.querySelector('#codigo');
let campoProducto = document.querySelector('#producto');
let campoDescripcion = document.querySelector('#descripcion');
let campoCantidad = document.querySelector('#cantidad');
let campoURL = document.querySelector('#url');
let formularioProducto = document.querySelector('#formProducto')

// para ver si esta vinculado en el inspector de elementos usamos el console log
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
formularioProducto.addEventListener('submit', validarGeneral);
// 1ER CAMPO: EVENTO A SUCEDER, 2DO CAMPO FUNCION A EJECUTAR.
 
// BLUR es cuando PIERDE EL FOCO un campo
