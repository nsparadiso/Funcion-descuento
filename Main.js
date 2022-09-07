let arrayProductos = [];
let productos;
const carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];

const API_URL = 'https://api.mercadolibre.com/';
const endpointProductos = 'sites/MLA/search';

const buscarProductosEnMELI = (productoAbuscar) => {
      fetch(API_URL+endpointProductos+'?q='+productoAbuscar)
      .then((response) => response.json())
      .then((data) => {
          const productos = data.results;
          console.log(productos);
          generarCardsEnElHTML(productos);})
    }
  
  buscarProductosEnMELI('zapatillas urbanas en oferta');

  const generarCardsEnElHTML = (arrayProductos) => {
      let cards = ``;
      arrayProductos.forEach((producto) => {
        const cardId = producto.title
          cards += 
          `<div class="m-0 row""m-2 col"> 
          <div class="card h-100">
              <img id="thumbnail" class="card-img-top" src="${producto.thumbnail}"/>
              <div class="card-body p-4">
                  <div class="text-center">
                      <h5 class="fw-bolder">
                      <h4 id="title">${producto.title}</h4>
                      </h5>
                      <h4 id="price">$${producto.price}</h4>
                  </div>
              </div>
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                      <a class="btn btn-outline-dark mt-auto" id="${cardId}" onclick="agregarAlCarrito()">
                          Agregame!!
                      </a>
                  </div>
              </div>
          </div>
      </div>`
      });     
document.getElementById("seccion-card").innerHTML = cards;
}

function agregarAlCarrito(){
    const nodo = (event.target);
    const idProducto = nodo.getAttribute("id");
    carrito.push(idProducto)
    localStorage.setItem("carrito", JSON.stringify(carrito));
    Swal.fire({
        title: 'Agregaste el producto al carrito',
        confirmButtonText: 'Seguir comprando',})
        carritoCards()
}

function carritoCards(){
    carrito.forEach((producto) => {
    document.getElementById("cart-elements").innerHTML += `
    <h2>${producto}</h2>
    <button onclick="removeArrayItem()" id="removeArrayItem">"Eliminar"</button></br>` })
}

function removeArrayItem (producto) {
    carrito.pop (producto)
    localStorage.setItem("carrito",JSON.stringify(carrito))
    document.getElementById("cart-elements").innerHTML = ""
    carrito.forEach((producto) => {
        document.getElementById("cart-elements").innerHTML += `
        <h2>${producto}</h2>
        <button onclick="removeArrayItem()" id="removeArrayItem"> "Eliminar" </button> </br>` })}

