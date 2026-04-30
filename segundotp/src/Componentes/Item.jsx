import { useState } from "react";

function Item({ item, eliminarItem, toggleComprado, editarItem }) {

  // Controla si el item está en modo edición
  const [editando, setEditando] = useState(false);

  // Estados para los inputs de edición
  const [nombre, setNombre] = useState(item.nombre);
  const [cantidad, setCantidad] = useState(item.cantidad);

  // Guarda los cambios cuando editamos
  const guardarCambios = () => {
    editarItem(item.id, nombre, cantidad);
    setEditando(false);
  };

  return (
    <div className="item">

      {editando ? (
        // ===== MODO EDICIÓN =====
        <>
          <input value={nombre} onChange={e => setNombre(e.target.value)} />
          <input value={cantidad} onChange={e => setCantidad(e.target.value)} />
          <button onClick={guardarCambios}>Guardar</button>
        </>
      ) : (
        // ===== MODO NORMAL =====
        <>
          {/* Click para marcar como comprado */}
          <span
            onClick={() => toggleComprado(item.id)}
            style={{
              textDecoration: item.comprado ? "line-through" : "none"
            }}
          >
            {item.nombre} - {item.cantidad}
          </span>

          <button onClick={() => setEditando(true)}>Editar</button>
          <button onClick={() => eliminarItem(item.id)}>❌</button>
        </>
      )}

    </div>
  );
}

export default Item;