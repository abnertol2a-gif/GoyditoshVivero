import './Home.css'

function Home() {
  return (
    <main className="home">
      <section className="home__hero" aria-labelledby="home-title">
        <p className="home__eyebrow">Sistema de gestion</p>
        <h1 id="home-title">Vivero Goyditosh</h1>
        <p className="home__description">
          Administra plantas, inventario, ventas y clientes desde un solo lugar.
        </p>
      </section>
    </main>
  )
}

export default Home
