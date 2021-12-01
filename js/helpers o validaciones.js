// la palabra ''campo'' que va como parametro puede haber sido cualquiera, es una palabra
// inventada, es un contenedor.

// export es para poder usar desde otro archivo
export function campoRequerido(campo) {
  console.log("Desde la funcion campo requerido");
  console.log(campo);
  // value contiene lo que tiene escrito cada input
  // trim sirve para que quite los espacios vacios, caracteres especiales,
  // comillas de adelante de la cadena de texto
  // para ingresar caracteres no menor a 10 campo.value.trim().minlength > 10
  if (campo.value.trim().length > 0) {
    // console.log('Pasó la validación')
    // className = cambiar las etiquetas de la clase que tiene esa funcion
    campo.className = "form-control is-valid";
    // en caso de que cumpla con la condicion, retorna true que nos sirve para utilizar
    // un If luego para validar el formulario completo
    return true;
  } else {
    // console.log('No pasó la validación')
    campo.className = "form-control is-invalid";
    return false;
  }
}

// Las EXPRESIONES REGULARES sirven para crear un patron para validar datos
// el cual devuelve un dato booleano TRUE o FALSE

// 1er paso crear el patron: (Crear una expresion regular)

export function validarNumeros(input) {
  // va entre BARRAS INVERTIDAS la estructura que quiero armar
  // solo este patron va a aceptar numeros
  // para poner la CANTIDAD lo ponemos entre llavesitas
  // MINIMO el 1er numero y MAXIMO el 2do numero
  let patron = /^[0-9]{1,3}$/;
  // probar el funcionamiento del patron o expresion regular
  // TEST es un METDOO que tiene js para VALIDAR la expresion
  if (patron.test(input.value)) {
    // SI cumple la expresion regular:
    input.className = "form-control is-valid";
    return true;
  } else {
    // si NO cumple la expresion regular:
    input.className = "form-control is-invalid";
    return false;
  }
}

// Funcion para validar URL

export function validarURL(input) {
  // crear la expresion regular
  // se puede repetir el nombre de la funcion, creada dentro de otra
  // porque solo existe dentro de la misma
  let patron = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
  if (patron.test(input.value)) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

// validar el formulario completo contemplando el evento 'submit'
// podemos usar e o event como parametro
// el evento Event es aquel que va registrando cada cosa que sucede en la pag
export function validarGeneral(
  campoCodigo,
  campoProducto,
  campoDescripcion,
  campoCantidad,
  campoURL,
) {
  // preventDefault previene el movimiento por defecto(lo anula, no permite que se ejecute)
  // e.preventDefault()
  console.log("aqui tengo que validar todo de nuevo");
  // volver a validar todos los campos
  // if(preguntar si el codigo es correcto && pregunto si el producto es correcto)
  // si creamos una variable dentro de las llaves, fuera de las mismas no funcionan
  let alerta = document.getElementById("msjAlerta");
  if (
    campoRequerido(campoCodigo) &&
    campoRequerido(campoProducto) &&
    campoRequerido(campoDescripcion) &&
    validarNumeros(campoCantidad) &&
    validarURL(campoURL)
  ) {
    console.log("si paso la validacion");
    alerta.className = "alert alert-danger ms-5 my-3 d-none text-center lead";
    return true;
  } else {
    console.log("no paso la validacion");
    alerta.className = "alert alert-danger ms-5 my-3 text-center lead";
    return false;
  }
}
