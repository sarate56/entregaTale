const key = "carrito";
export const guardarCarrito = (carrito) => {
    localStorage.setItem(key, JSON.stringify(carrito));

};
export const obtenerCarrito = () => {
    return JSON.parse (localStorage.getItem(key)) || [];
};
export const vaciarCarritoStorage = () => {
    localStorage.removeItem(key);
};
