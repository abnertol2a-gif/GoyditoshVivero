import { useState } from 'react'
import './PlantForm.css'

// Simple form component for creating a plant.
// Props:
// - onCreate: function(payload) => Promise that resolves to created plant
function PlantForm({ onCreate }) {
  const [nombre, setNombre] = useState('')
  const [categoria, setCategoria] = useState('Interior')
  const [stock, setStock] = useState(0)
  const [precio, setPrecio] = useState(0)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    setSubmitting(true)
    try {
      const payload = { nombre, categoria, stock: Number(stock), precio: Number(precio) }
      await onCreate(payload)
      // reset form
      setNombre('')
      setCategoria('Interior')
      setStock(0)
      setPrecio(0)
    } catch (err) {
      setError(err.message || 'Error al crear')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className="plant-form" onSubmit={handleSubmit}>
      <div className="plant-form__row">
        <label>
          Nombre
          <input value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </label>
        <label>
          Categoría
          <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            <option>Interior</option>
            <option>Exterior</option>
            <option>Suculenta</option>
          </select>
        </label>
        <label>
          Stock
          <input type="number" min="0" value={stock} onChange={(e) => setStock(e.target.value)} />
        </label>
        <label>
          Precio
          <input type="number" min="0" step="0.01" value={precio} onChange={(e) => setPrecio(e.target.value)} />
        </label>
        <button type="submit" disabled={submitting} className="plant-form__submit">
          {submitting ? 'Creando...' : 'Crear planta'}
        </button>
      </div>
      {error && <div className="plant-form__error">{error}</div>}
    </form>
  )
}

export default PlantForm
