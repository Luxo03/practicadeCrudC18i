// para crear un objeto iniciamos con la palabra clave ''class''
// luego va la palabra inventada que recibe el nombre del objeto con la primera
// letra como mayuscula
export class Producto{
    // de entrada como siempre el metodo constructor
    constructor(campoCodigo, campoProducto, campoDescripcion, campoCantidad, campoURL){
        // izquierda nombre de la propiedad - derecha nombre de la variable 
        this.codigo = campoCodigo;
        this.producto = campoProducto;
        this.descripcion = campoDescripcion;
        this.cantidad = campoCantidad;
        this.url = campoURL;
    }

    //Agregar los get y los set
    //los GET


    get mostrarCodigo(){
        return this.codigo;
    }
    get mostrarProducto(){
        return this.producto;
    }
    get mostrarDescripcion(){
        return this.descripcion;
    }
    get mostrarCantidad(){
        return this.cantidad;
    }
    get mostrarURL(){
        return this.url;
    }
    
    //Los SET
    set modificarCodigo (nuevoCodigo){
        this.codigo = nuevoCodigo;
    }
    set modificarProducto (nuevoProducto){
        this.producto = nuevoProducto;
    }
    set modificarDescripcion (nuevaDescripcion){
        this.descripcion = nuevaDescripcion;
    }
    set modificarCantidad (nuevaCantidad){
        this.cantidad = nuevaCantidad;
    }
    set modificarURL (nuevaURL){
        this.url = nuevaURL;
    }
    
}