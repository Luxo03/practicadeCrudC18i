function campoRequerido(input){
    console.log('Desde la funcion campo requerido')
    console.log(input)
    if(input.value.trim().length > 0){
        console.log('Pasó la validación')
    } else {
        console.log('No pasó la validación')
    }
}

// agregar eventos a los elementos del formulario
// creamos una variable y buscamos en el DOM con el querySelector el selector de la clase
let campoCodigo = document.querySelector('#codigo')
// para ver si esta vinculado en el inspector de elementos usamos el console log
console.log(campoCodigo)

// le estoy agregando un manejador de eventos a la variable campoCodigo.
// si lo hacemos desde jv ponemos el nombre del evento directamente.
// cuando ocurra el evento, queremos que se produzca la siguiente funcion.
// esta es la forma de agregar funciones a elementos cuando ocurra algun evento en el DOM.
// para invocar una funcion con parametro, tenemos que crear una funcion anonima
campoCodigo.addEventListener('blur', () => {campoRequerido(campoCodigo)});
