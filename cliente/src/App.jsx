import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState("");

  const sumar = async () => {
    const resp = await fetch("http://localhost:8086/api/sumar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        numero1, 
        numero2 
      })
    });

    const data = await resp.text(); // o .json si regresaras JSON
    setResultado(data);
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-dark px-4">
        <span className="navbar-brand">
          Jesús Gerardo Toledo Ramírez - 10°B
        </span>
      </nav>

      <div className="container mt-5">
        <h3>Calculadora de Suma</h3>

        <div className="mt-4">
          <label>Número 1</label>
          <input
            type="number"
            className="form-control"
            value={numero1}
            onChange={(e) => setNumero1(e.target.value)}
          />

          <label className="mt-3">Número 2</label>
          <input
            type="number"
            className="form-control"
            value={numero2}
            onChange={(e) => setNumero2(e.target.value)}
          />

          <button
            className="btn btn-primary mt-4"
            onClick={sumar}
          >
            Sumar
          </button>

          {resultado && (
            <div className="alert alert-info mt-4">{resultado}</div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
