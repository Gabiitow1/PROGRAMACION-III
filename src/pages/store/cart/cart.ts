import type { CartItem } from "../../../types/product";

const contenedorCarrito = document.getElementById("contenedor-carrito")!;
const btnVaciar = document.getElementById("vaciar-carrito")!;

function mostrarCarrito() {
  const carrito: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
  contenedorCarrito.innerHTML = "";

  if (carrito.length === 0) {
    contenedorCarrito.innerHTML = "<p>El carrito está vacío</p>";
    return;
  }

  let total = 0;
  carrito.forEach(item => {
    total += item.product.precio * item.cantidad;
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${item.product.nombre}</h3>
      <p>Precio: $${item.product.precio} x ${item.cantidad}</p>
    `;
    contenedorCarrito.appendChild(div);
  });

  const totalDiv = document.createElement("div");
  totalDiv.innerHTML = `<h2>Total: $${total}</h2>`;
  contenedorCarrito.appendChild(totalDiv);
}

btnVaciar.addEventListener("click", () => {
  localStorage.removeItem("cart"); // borra el carrito
  mostrarCarrito();                // refresca la vista
});

mostrarCarrito();
