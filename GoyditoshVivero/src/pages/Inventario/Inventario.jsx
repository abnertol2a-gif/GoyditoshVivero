import { useEffect, useState } from 'react'
import '../Plantas/Plantas.css'

function Inventario() {
  const [plants, setPlants] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    fetch('/src/mocks/plants.json')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok')
        return res.json()
      })
      .then((data) => {
        // simulate small latency so loading state is visible
        setTimeout(() => {
          if (!cancelled) {
            setPlants(data)
            setLoading(false)
          }
        }, 1700)
      })
      .catch((err) => {
        setTimeout(() => {
          if (!cancelled) {
            setError(err.message)
            setLoading(false)
          }
        }, 1700)
      })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <main className="plantas">
      <header>
        <h1>Inventario</h1>
        <p>Plantas disponibles en el vivero.</p>
      </header>

      <section aria-label="Listado de plantas">
        {loading && <p>Cargando inventario...</p>}
        {error && <p style={{ color: 'var(--accent)' }}>Error: {error}</p>}
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
