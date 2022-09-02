import React from "react";
import data from "./data.json";
import Item from "./Item";


export default function Listado({comprarProducto}) {
  return (
    <div className="container">
      {/* renderizamos los Item aquí */}
      {data.map((item) => (
        <Item
          key={item.id}
          item={item.producto}
          stock={item.stock}
          comprarProducto={comprarProducto}
        />
      ))}
    </div>
  );
}
