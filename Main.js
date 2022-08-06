const productos = [
    {
        id:1,
        title:"Televisor",
        img: "//http2.mlstatic.com/D_NQ_NP_710945-MLA48007822991_102021-V.jpg",
        price: 50000,
        type: "Electro"
    },{
        id:2,
        title:"Lavarropas",
        img: "https://electroluxar.vtexassets.com/arquivos/ids/156325/elaf8.jpg?v=636754715606270000",
        price: 30000,
        type: "Electro"
    },{
        id:3,
        title:"Calefactor",
        img: "https://d2ye0ltusw47tz.cloudfront.net/1111788-thickbox_default/calefactor-electrico-tivoli-tpc-2007bn.jpg",
        price: 6500,
        type: "Hogar"
    },{
        id:4,
        title:"Plancha",
        img: "https://atma.com.ar/media/catalog/product/cache/aa999612044d357928d16abd893bc3dd/p/a/pas1217n-1_ejrkedog061lv4oq.jpg",
        price: 12000,
        type: "Electro"
    },{
        id:5,
        title:"Secarropas",
        img: "https://hendel-r7d8odghj1.stackpathdns.com/media/catalog/product/cache/0c3e9ac8430b5a3e77d1544ae1698a10/1/0/105291.jpg",
        price: 37000,
        type: "Electro"
    },{
        id:6,
        title:"Horno Electrico",
        img: "https://www.megatone.net/Images/Articulos/zoom2x/243/HOR0045CNQ.jpg",
        price: 23000,
        type: "Hogar"
    },{
        id:7,
        title:"PlayStation 4",
        img: "https://as01.epimg.net/meristation/imagenes/2020/02/10/noticias/1581347400_144086_1581347453_noticia_normal.jpg",
        price: 160000,
        type: "Entretenimiento"
    },{
        id:8,
        title:"Reproductor audio Muteki",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdz_0-IKtVwqsEwB5zLhiDkc9ouNbMb9fCY1-cNqw9oKHDKQZNEmKQQqI95zFzQ_4f09o&usqp=CAU",
        price: 280000,
        type: "Entretenimiento"
    }
];

const carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
const total = carrito.reduce((acumulador, producto) => acumulador + producto.price, 0);
document.getElementById("cart-total").innerHTML = `${carrito.length}  - $${total}`;

productos.forEach((producto) => {
    const idButton = `add-cart${producto.id}` 
    document.getElementById("seccion-card").innerHTML += `
        <div class="card">
        <div class="m-0 row justify-content-center"> 
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
                <td><button onclick ="removeArrayItem(carrito)" id="eliminarButton${producto.id}">Eliminar</button></td>
            </tr>`
        })
    })
});

function removeArrayItem (carrito) {
    const removeId = carrito.indexOf(productos.id)
    carrito.splice (removeId)
    localStorage.setItem("carrito",JSON.stringify(carrito))
    const total = carrito.reduce((acumulador, producto) => acumulador + producto.price, 0);
    document.getElementById("cart-total").innerHTML = `${carrito.length} - $${total}`;
    document.getElementById("cart-elements").innerHTML = ""
    carrito.forEach((producto) => {
        document.getElementById("cart-elements").innerHTML += `<tr>
            <th scope="row">${producto.id}</th>
            <td>${producto.title}</td>
            <td><img src="${producto.img}" style="width:25px"></td>
            <td>${producto.price}</td>
            <td><button onclick ="removeArrayItem(carrito)" id="eliminarButton${producto.id}">Eliminar</button></td>
        </tr>`
    })
}
