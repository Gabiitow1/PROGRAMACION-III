import { productos, categorias } from "../../../data/data";
import type { Product, CartItem } from "../../../types/product";

const contenedorProductos = document.getElementById("contenedor-productos")!;
const listaCategorias = document.getElementById("lista-categorias")!;
const formBusqueda = document.querySelector("form")!;
const inputBusqueda = formBusqueda.querySelector("input")! as HTMLInputElement;

function mostrarProductos(lista: Product[]) {
  contenedorProductos.innerHTML = "";
  lista.forEach(p => {
    const card = document.createElement("div");
    card.innerHTML = `
      <h3>${p.nombre}</h3>
      <p>${p.descripcion}</p>
      <p>Precio: $${p.precio}</p>
      <button data-id="${p.id}">Agregar</button>
    `;
    contenedorProductos.appendChild(card);
  });

  document.querySelectorAll<HTMLButtonElement>("button[data-id]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id!);
      const producto = productos.find(p => p.id === id)!;
      agregarAlCarrito(producto);
    });
  });
}

function mostrarCategorias() {
  listaCategorias.innerHTML = "";
  categorias.forEach(cat => {
    const li = document.createElement("li");
    li.textContent = cat;
    li.addEventListener("click", () => {
      if (cat === "Todas los productos") {
        mostrarProductos(productos);
      } else {
        mostrarProductos(productos.filter(p => p.categoria === cat));
      }
    });
    listaCategorias.appendChild(li);
  });
}

function agregarAlCarrito(producto: Product) {
  const carrito: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
  const item = carrito.find(i => i.product.id === producto.id);
  if (item) {
    item.cantidad++;
  } else {
    carrito.push({ product: producto, cantidad: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(carrito));
}

formBusqueda.addEventListener("submit", e => {
  e.preventDefault();
  const texto = inputBusqueda.value.toLowerCase();
  mostrarProductos(productos.filter(p => p.nombre.toLowerCase().includes(texto)));
});

mostrarCategorias();
mostrarProductos(productos);
