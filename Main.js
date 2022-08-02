const carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
const total = carrito.reduce((acumulador, producto) => acumulador + producto.price, 0);
document.getElementById("cart-total").innerHTML = `${carrito.length}  - $${total}`;

const productos = [
    {
        id:1,
        title:"Zapatilla nike",
        img: "https://www.marthadebayle.com/wp-content/uploads/2021/07/Dia-mundial-del-perro.jpg",
        price: 1700
    },
    {
        id:2,
        title:"Zapatilla Jagguar",
        img: "https://www.marthadebayle.com/wp-content/uploads/2021/07/Dia-mundial-del-perro.jpg",
        price: 2000
    },
    {
        id:3,
        title:"Zapatilla Adidas",
        img: "https://www.marthadebayle.com/wp-content/uploads/2021/07/Dia-mundial-del-perro.jpg",
        price: 2400
    },
];

productos.forEach((producto) => {
    const idButton = `add-cart${producto.id}` 
    document.getElementById("seccion-card").innerHTML += `<div class="card">
        <img src="${producto.img}">
        <div class="precio">
            <p>$${producto.price}</p>
        </div>
        <h4>${producto.title}</h4>
        <a class="boton" id="${idButton}" data-id="${producto.id}">Añadir Al Carrito</a>
    </div>`;
})

function generarCardsCarrito() {
    carrito.forEach((producto) => {
        document.getElementById("seccion-card").innerHTML += `<div>
            <p>${producto.id}
            - ${producto.title}
            - img src="${producto.img}"
            - ${producto.price}
            </div>`
    })
    
}

productos.forEach((producto) => {
    const idButton = `add-cart${producto.id}` 
    const eliminarButton = `remove-cart${producto.id}`
    document.getElementById(idButton).addEventListener('click', () => {
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        const total = carrito.reduce((acumulador, producto) => acumulador + producto.price, 0);
        document.getElementById("cart-total").innerHTML = `${carrito.length} - $${total}`;
        document.getElementById("cart-elements").innerHTML = ""
        carrito.forEach((producto) => {
            document.getElementById("cart-elements").innerHTML += `<tr>
                <th scope="row">${producto.id}</th>
                <td>${producto.title}</td>
                <td><img src="${producto.img}" style="width:25px"></td>
                <td>${producto.price}</td>
                <td><button id="eliminarButton">Eliminar</button></td>
            </tr>`
        })
    })
});
