import { useEffect, useState } from 'react'

function Test1() {
  const [data, setData] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const jsonData = await response.json()

      setData(jsonData)
    }catch (err) {
      console.error(err)
    }
  }
  useEffect(() => {
    fetchData()
  },[])


  // Nueva función para manejar la acción del botón
  const handleAction = async (userId) => {
    try {
      const response = await fetch(`https://api.example.com/users/${userId}/accion`, {
        method: "POST", // o "PUT", "DELETE", según lo que necesites
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ userId })
      })

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }

      const result = await response.json()
      console.log("Acción realizada:", result)

    } catch (err) {
      console.error("Error al ejecutar la acción:", err)
    }
  }

 return (

    <div>
      <h2>Lista de usuarios</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Username</th>
            <th>Email</th>
            <th>Ciudad</th>
            <th>Empresa</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((userxd) => (
            <tr key={userxd.id}>
              <td>{userxd.id}</td>
              <td>{userxd.name}</td>
              <td>{userxd.username}</td>
              <td>{userxd.email}</td>
              <td>{userxd.address.city}</td>
              <td>{userxd.company.name}</td>

              <td>
                <button onClick={() => handleAction(userxd.id)}>
                  Ejecutar acción
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  
  )

}

export default Test1
