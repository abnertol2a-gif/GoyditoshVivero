const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000'

// Simple service that talks to json-server REST endpoints.
// Each method returns a promise and intentionally simulates small latency
// to mimic real network behavior.
const delay = (ms) => new Promise((res) => setTimeout(res, ms))

export async function getAllPlants() {
  const res = await fetch(`${API_BASE}/plants`)
  if (!res.ok) throw new Error('Failed to fetch plants')
  const data = await res.json()
  await delay(300)
  return data
}

export async function getPlant(id) {
  const res = await fetch(`${API_BASE}/plants/${id}`)
  if (!res.ok) throw new Error('Plant not found')
  const data = await res.json()
  await delay(200)
  return data
}

export async function createPlant(payload) {
  const res = await fetch(`${API_BASE}/plants`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) throw new Error('Failed to create plant')
  const data = await res.json()
  await delay(200)
  return data
}

export async function updatePlant(id, payload) {
  const res = await fetch(`${API_BASE}/plants/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) throw new Error('Failed to update plant')
  const data = await res.json()
  await delay(200)
  return data
}

export async function deletePlant(id) {
  const res = await fetch(`${API_BASE}/plants/${id}`, {
    method: 'DELETE',
  })
  if (!res.ok) throw new Error('Failed to delete plant')
  await delay(150)
  return true
}

export default {
  getAllPlants,
  getPlant,
  createPlant,
  updatePlant,
  deletePlant,
}
