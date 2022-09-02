import React from 'react'

export default function Cabecera({comprados}) {
  
  return (
    <header>
        {/* maquetar Cabecera aquí */}
        <h1>Carrito de compras</h1>
        <p>Cantidad de productos<span>{comprados}</span></p>
    </header>
  )
}
