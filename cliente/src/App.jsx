import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [mensaje, setMensaje] = useState("");

  const saludar = async () => {
    const resp = await fetch("http://localhost:8086/api/saludo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombres, apellidos })
    });

    const data = await resp.text();
    setMensaje(data);
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-dark px-4">
        <span className="navbar-brand">
          Jesús Gerardo Toledo Ramírez - 10°B
        </span>
      </nav>

      <div className="container mt-5">
        <h3>Ingresa tus datos</h3>

        <div className="mt-4">
          <label>Nombres</label>
          <input
            className="form-control"
            value={nombres}
            onChange={(e) => setNombres(e.target.value)}
          />

          <label className="mt-3">Apellidos</label>
          <input
            className="form-control"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
          />

          <button
            className="btn btn-primary mt-4"
            onClick={saludar}
          >
            Saludar
          </button>

          {mensaje && (
            <div className="alert alert-success mt-4">{mensaje}</div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
