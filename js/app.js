// traer los datos del localstorage
// En caso de que no haya contenido en el localStorage dejamos al final un arreglo vacio
// para evitar tener un error Null en la pag
let listaProductos = JSON.parse(localStorage.getItem('listaProductosKey')) || [];

listaProductos.forEach(producto => {crearCard(producto)});

function crearCard(producto){
    let grilla = document.getElementById('grillaPrincipal');
    // toma el elemento padre y dibuja la siguiente card
    // si queda con el signo = se dibuja solo 1 (sobreescribe)
    // si queda con el signo += se va concatenando cada columna (acumular)
    grilla.innerHTML += `<div class="col-sm-12 col-md-4 col-lg-3 mb-3">
    <div class="card">
        <img src="${producto.url}" class="card-img-top" alt="${producto.producto}">
        <div class="card-body">
            <h5 class="card-title">${producto.producto}</h5>
            <p class="card-text">
                ${producto.descripcion}
            </p>
        </div>
    </div>
</div>`
}