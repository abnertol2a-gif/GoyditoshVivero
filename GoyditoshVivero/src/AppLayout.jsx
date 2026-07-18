import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import './AppLayout.css'

function AppLayout() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="app-layout__main">
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
