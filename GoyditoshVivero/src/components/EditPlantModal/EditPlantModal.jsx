import './EditPlantModal.css'

export default function EditPlantModal({ isOpen, plant, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Editar planta</h2>
        <input style={{ display: "flex" }} defaultValue={plant.nombre} />
        <input style={{ display: "flex" }} defaultValue={plant.categoria} />
        <input style={{ display: "flex" }} defaultValue={plant.stock} />
        <input style={{ display: "flex" }} defaultValue={plant.precio} />

        <button onClick={onClose}>Guardar</button>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}