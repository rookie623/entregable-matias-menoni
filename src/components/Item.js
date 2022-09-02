import { useState } from "react"

export default function Item({item, stock, comprarProducto}) {

  const [disponibilidad, setDisponibilidad] = useState(stock)

  const modificar = () =>{
    comprarProducto()
    setDisponibilidad(disponibilidad - 1)    
  }

  return (
    <div className='producto'>
      {/* maquetar Item aquí */}
      <h3>{item.nombre}</h3>
      <p>{item.descripcion}</p>
      <h5>En stock: {disponibilidad > 0 ? disponibilidad : <span>agotado</span>}</h5>
      {disponibilidad > 0 ? <button onClick={()=> modificar()}>COMPRAR</button> : <button disabled>SIN STOCK</button>}
    </div>
  )
}
