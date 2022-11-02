import React from 'react'
import CartWidget from './CartWidget'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav>
            <div className="logotitulo">
                <h1 className="lucero">Lucero Mates</h1>
            </div>
            <div>
                <a href="./index.html">Inicio</a>
                <a href="./paginas/productos.html">Productos</a>
                <a href="./paginas/contacto.html">Contacto</a>
                <a href="./paginas/carrito.html">Carrito <CartWidget /></a>
            </div>
        </nav>
    )
}
