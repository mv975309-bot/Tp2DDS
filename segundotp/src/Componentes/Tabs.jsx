function Tabs({ listas, listaActivaId, setListaActivaId }) {
  return (
    <div className="tabs">
      {/* Recorremos todas las listas y creamos una pestaña por cada una */}
      {listas.map(lista => (
        <button
          key={lista.id} // clave única para React
          onClick={() => setListaActivaId(lista.id)} // cambia la lista activa
          style={{
            // Si es la lista activa → verde, si no → gris
            background: lista.id === listaActivaId ? "#4caf50" : "#ddd"
          }}
        >
          {lista.nombre}
        </button>
      ))}
    </div>
  );
}

export default Tabs;