import { useState } from "react";

function AddItem({ agregarItem }) {
  // Estados locales de los inputs
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");

  // Función cuando se toca "Agregar"
  const manejarAgregar = () => {
    // Validación pedida por la consigna
    if (!nombre || cantidad <= 0) return;

    // Llamamos a la función del componente padre (App)
    agregarItem(nombre, Number(cantidad));

    // Limpiamos los inputs (requisito obligatorio)
    setNombre("");
    setCantidad("");
  };

  return (
    <div className="addItem">
      <input
        placeholder="Producto..."
        value={nombre}
        onChange={e => setNombre(e.target.value)}
      />

      <input
        type="number"
        placeholder="Cantidad..."
        value={cantidad}
        onChange={e => setCantidad(e.target.value)}
      />

      <button onClick={manejarAgregar}>Agregar</button>
    </div>
  );
}

export default AddItem;