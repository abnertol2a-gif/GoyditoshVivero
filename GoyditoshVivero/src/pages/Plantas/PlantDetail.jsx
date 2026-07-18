import './Plantas.css'

function PlantDetail() {
  return (
    <main className="plant-detail">
      <header>
        <h1>Detalle de planta</h1>
        <p>Información completa de la planta seleccionada.</p>
      </header>

      <section aria-label="Detalle">
        <p>Ficha técnica: nombre, categoría, stock, precio, descripción.</p>
      </section>
    </main>
  )
}

export default PlantDetail
