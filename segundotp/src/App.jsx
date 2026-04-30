import { useState, useEffect } from "react";
import Tabs from "./Componentes/Tabs";
import AddItem from "./Componentes/AddItem";
import ItemList from "./Componentes/ItemList";
import "./App.css";

function App() {

  // ESTADO PRINCIPAL: todas las listas
  // Intentamos cargar desde localStorage, si no existe creamos listas iniciales
  const [listas, setListas] = useState(() => {
    const guardado = localStorage.getItem("listas");
    return guardado
      ? JSON.parse(guardado)
      : [
          { id: 1, nombre: "Supermercado", items: [] },
          { id: 2, nombre: "Farmacia", items: [] }
        ];
  });

  // Guarda cuál pestaña está seleccionada
  const [listaActivaId, setListaActivaId] = useState(listas[0].id);

  // Cada vez que cambian las listas → guardamos en el navegador
  useEffect(() => {
    localStorage.setItem("listas", JSON.stringify(listas));
  }, [listas]);

  // Buscamos la lista que está activa actualmente
  const listaActiva = listas.find(l => l.id === listaActivaId);

  // ================= FUNCIONES CRUD =================

  // AGREGAR PRODUCTO
  const agregarItem = (nombre, cantidad) => {
    if (cantidad <= 0) return; // validación requerida

    setListas(prev =>
      prev.map(lista =>
        lista.id === listaActivaId
          ? {
              ...lista,
              items: [
                ...lista.items,
                {
                  id: Date.now(), // id único rápido
                  nombre,
                  cantidad,
                  comprado: false
                }
              ]
            }
          : lista
      )
    );
  };

  // ELIMINAR PRODUCTO
  const eliminarItem = (idItem) => {
    setListas(prev =>
      prev.map(lista =>
        lista.id === listaActivaId
          ? {
              ...lista,
              items: lista.items.filter(i => i.id !== idItem)
            }
          : lista
      )
    );
  };

  // MARCAR COMO COMPRADO / NO COMPRADO
  const toggleComprado = (idItem) => {
    setListas(prev =>
      prev.map(lista =>
        lista.id === listaActivaId
          ? {
              ...lista,
              items: lista.items.map(i =>
                i.id === idItem ? { ...i, comprado: !i.comprado } : i
              )
            }
          : lista
      )
    );
  };

  // EDITAR PRODUCTO
  const editarItem = (idItem, nuevoNombre, nuevaCantidad) => {
    setListas(prev =>
      prev.map(lista =>
        lista.id === listaActivaId
          ? {
              ...lista,
              items: lista.items.map(i =>
                i.id === idItem
                  ? { ...i, nombre: nuevoNombre, cantidad: nuevaCantidad }
                  : i
              )
            }
          : lista
      )
    );
  };

  // Render principal
  return (
    <div className="app">
      <h1>🛒 Lista de Compras</h1>

      {/* Pestañas de listas */}
      <Tabs
        listas={listas}
        listaActivaId={listaActivaId}
        setListaActivaId={setListaActivaId}
      />

      {/* Formulario agregar producto */}
      <AddItem agregarItem={agregarItem} />

      {/* Lista de productos */}
      <ItemList
        items={listaActiva.items}
        eliminarItem={eliminarItem}
        toggleComprado={toggleComprado}
        editarItem={editarItem}
      />
    </div>
  );
}

export default App;