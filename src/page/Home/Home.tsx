import React from "react";
import { useState } from "react";
import "./Home.css";
function Home() {
  function agregarFila() {
    var table = document.getElementById("tabla") as HTMLTableElement;
    if (table) {
      var row = table.insertRow(table.rows.length);
      var col1 = row.insertCell(0);
      var col2 = row.insertCell(1);
      var col3 = row.insertCell(2);
      col1.innerHTML = '<input type="text" name="numero[]">';
      col2.innerHTML = '<input type="text" name="nombre[]">';
      col3.innerHTML = '<input type="text" name="apellido[]">';
    }
  }
  function numRows() {
    for (let i = 0; i < 2; i++) {
      agregarFila();
    }
  };
  function eliminarFila() {
    var table = document.getElementById("tabla") as HTMLTableElement;
    if (table.rows.length > 2) {
      table.deleteRow(table.rows.length - 1 as number);
    }
  }
  const [data, setData] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (data === "hola mundo") {
      setData("condicion IF");
    }
  };
  return (
    <div className="casita">
	  <h1>Add value of  the securities in your Investment accounts:</h1>
      <form>
        <table id="tabla">
          <tr>
            <th>N°</th>
            <th>Label</th>
            <th>Balance</th>
          </tr>
          <tr>
            <td>
              <input type="text" onChange={(e) => setData(e.target.value)} />
            </td>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
        </table>
        
        <button type="button" onClick={() => agregarFila()}>
          Agregar fila
        </button>
        <button type="button" onClick={() => eliminarFila()}>
          Eliminar fila
        </button>
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
    </div>
  );
}

export default Home;
