import { Routes, Route } from 'react-router-dom'
import AppLayout from './AppLayout'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import Plantas from './pages/Plantas/Plantas'
import PlantDetail from './pages/Plantas/PlantDetail'
import Inventario from './pages/Inventario/Inventario'
import Test1 from './pages/Test1/Test1'

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="plantas" element={<Plantas />} />
        <Route path="inventario" element={<Inventario />} />
        <Route path="plantas/:id" element={<PlantDetail />} />
        <Route path="test1" element={<Test1 />} />
      </Route>
    </Routes>
  )
}

export default App
