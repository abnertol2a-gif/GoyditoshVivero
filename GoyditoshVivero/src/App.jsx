import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import Plantas from './pages/Plantas/Plantas'
import PlantDetail from './pages/Plantas/PlantDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/plantas" element={<Plantas />} />
      <Route path="/plantas/:id" element={<PlantDetail />} />
    </Routes>
  )
}

export default App
