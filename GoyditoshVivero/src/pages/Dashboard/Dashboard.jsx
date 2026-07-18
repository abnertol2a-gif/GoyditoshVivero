import './Dashboard.css'
import { useState } from 'react';

function Dashboard() {

    const [count, setCount] = useState(0); // 0 es el valor inicial

  return (
    
    <main className="dashboard">
      <header className="dashboard__header">
        <h1>Dashboard</h1>
        <p>Visión general: métricas clave del vivero.</p>
      </header>

      <section className="dashboard__content" aria-label="Métricas">
        <p>Área reservada para métricas y accesos rápidos.</p>
      </section>


      <div>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>


    </main>
  )
}

export default Dashboard
