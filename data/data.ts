import type { Product } from "../types/product";

export const categorias: string[] = [
  "Todas los productos",
  "Pizzas",
  "Hamburguesas",
  "Bebidas",
  "Postres",
  "Empanadas",
  "Ensaladas"
];

export const productos: Product[] = [
  { id: 1, nombre: "Pizza Muzzarella", descripcion: "Pizza clásico con salsa de tomate y muzzarella derretida", precio: 4500, imagen: "https://via.placeholder.com/200", categoria: "Pizzas" },
  { id: 2, nombre: "Pizza Napolitana", descripcion: "Pizza con rodajas de tomate fresco, ajo y albahaca", precio: 5200, imagen: "https://via.placeholder.com/200", categoria: "Pizzas" },
  { id: 3, nombre: "Hamburguesa Clásica", descripcion: "Medallón de carne, lechuga, tomate, cebolla y mayo", precio: 3800, imagen: "https://via.placeholder.com/200", categoria: "Hamburguesas" },
  { id: 4, nombre: "Hamburguesa BBQ Bacon", descripcion: "Doble medallón, bacon crocante y salsa barbacoa ahumada", precio: 5100, imagen: "https://via.placeholder.com/200", categoria: "Hamburguesas" },
  { id: 5, nombre: "Coca-Cola 500ml", descripcion: "Gaseosa Coca-Cola fría, botella personal", precio: 1200, imagen: "https://via.placeholder.com/200", categoria: "Bebidas" },
  { id: 6, nombre: "Torta Rogel", descripcion: "Torta rogel tradicional con dulce de leche y merengue", precio: 6000, imagen: "https://via.placeholder.com/200", categoria: "Postres" },
  { id: 7, nombre: "Empanadas de Carne x6", descripcion: "Empanadas criollas de carne cortada a cuchillo, horneadas", precio: 4800, imagen: "https://via.placeholder.com/200", categoria: "Empanadas" },
  { id: 8, nombre: "Ensalada César", descripcion: "Lechuga romana, crutones, parmesano y aderezo césar", precio: 3500, imagen: "https://via.placeholder.com/200", categoria: "Ensaladas" }
];
