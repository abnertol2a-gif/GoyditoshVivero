import './Dashboard.css'

function Dashboard() {
  return (
    <main className="dashboard">
      <header className="dashboard__header">
        <h1>Dashboard</h1>
        <p>Visión general: métricas clave del vivero.</p>
      </header>

      <section className="dashboard__content" aria-label="Métricas">
        <p>Área reservada para métricas y accesos rápidos.</p>
      </section>
    </main>
  )
}

export default Dashboard
