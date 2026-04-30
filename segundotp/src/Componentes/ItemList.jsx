import Item from "./Item";

function ItemList({ items, eliminarItem, toggleComprado, editarItem }) {

  // Si no hay productos mostramos mensaje
  if (items.length === 0) return <p>No hay productos aún</p>;

  return (
    <div className="itemList">
      {/* Recorremos todos los productos */}
      {items.map(item => (
        <Item
          key={item.id}
          item={item}
          eliminarItem={eliminarItem}
          toggleComprado={toggleComprado}
          editarItem={editarItem}
        />
      ))}
    </div>
  );
}

export default ItemList;