import { useEffect, useState } from 'react'
import '../Plantas/Plantas.css'
import inventoryService from '../../services/inventoryService'
import PlantForm from '../../components/PlantForm/PlantForm'
import EditPlantModal from '../../components/EditPlantModal/EditPlantModal'

// Inventario page: lists plants using the inventoryService (json-server)
function Inventario() {
  const [plants, setPlants] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedPlant, setSelectedPlant] = useState(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    // Use the inventoryService to fetch plants from the mock API
    inventoryService
      .getAllPlants()
      .then((data) => {
        if (!cancelled) setPlants(data)
      })
      .catch((err) => {
        if (!cancelled) setError(err.message)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [])

    useEffect(()=>{
      console.log("Hola")
    }, [])

  // Handler passed to PlantForm to create a new plant.
  // After creation we append the returned plant to the local state so the
  // table updates without needing to re-fetch all plants.
  async function handleCreate(payload) {
    // createPlant throws on error — catch in PlantForm
    const created = await inventoryService.createPlant(payload)
    setPlants((prev) => [...prev, created])
  }

  // Handler to delete a plant. Asks for confirmation then calls the API
  // and updates local state on success.
  async function handleDelete(id) {
    const ok = window.confirm('¿Eliminar esta planta del inventario?')
    if (!ok) return
    try {
      await inventoryService.deletePlant(id)
      setPlants((prev) => prev.filter((p) => p.id !== id))
    } catch (err) {
      alert('Error al eliminar: ' + err.message)
    }
  }

  function handleEdit(id) {
    const plant = plants.find(p => p.id === id)

    if (plant) {
      setSelectedPlant(plant)
    }
  }

  return (
    <main className="plantas">
      <header>
        <h1>Inventario</h1>
        <p>Plantas disponibles en el vivero.</p>
      </header>

      <section aria-label="Listado de plantas">
        {loading && <p>Cargando inventario...</p>}
        {error && <p style={{ color: 'var(--accent)' }}>Error: {error}</p>}
        {/* Show the create form above the table */}
        {!loading && !error && (
          <PlantForm onCreate={handleCreate} />
        )}

        <EditPlantModal
          isOpen={!!selectedPlant}
          plant={selectedPlant}
          onClose={() => setSelectedPlant(null)}
        />

        {!loading && !error && (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: 8 }}>Nombre</th>
                <th style={{ textAlign: 'left', padding: 8 }}>Categoría</th>
                <th style={{ textAlign: 'right', padding: 8 }}>Stock</th>
                <th style={{ textAlign: 'right', padding: 8 }}>Precio</th>
              </tr>
            </thead>
            <tbody>
              {plants.map((p) => (
                <tr key={p.id} style={{ borderTop: '1px solid var(--border)' }}>
                  <td style={{ padding: 8 }}>{p.nombre}</td>
                  <td style={{ padding: 8 }}>{p.categoria}</td>
                  <td style={{ padding: 8, textAlign: 'right' }}>{p.stock}</td>
                  <td style={{ padding: 8, textAlign: 'right' }}>
                    {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(p.precio)}
                  </td>
                  <td style={{ padding: 8, textAlign: 'right' }}>
                    <button onClick={() => handleDelete(p.id)} style={{ color: '#b91c1c' }}>
                      Borrar
                    </button>

                    <button onClick={() => handleEdit(p.id)} style={{ color: '#b91c1c' }}>
                      Editar
                    </button>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </main>
  )
}

export default Inventario
