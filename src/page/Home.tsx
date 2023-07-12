import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";

function Home() {
  function agregarFila() {
    var table = document.getElementById("tabla");
    var row = table.insertRow(table.rows.length);
    var col1 = row.insertCell(0);
    var col2 = row.insertCell(1);
    col1.innerHTML = '<input type="text" name="nombre[]">';
    col2.innerHTML = '<input type="text" name="apellido[]">';
  }

  function eliminarFila() {
    var table = document.getElementById("tabla");
    if (table.rows.length > 1) {
      table.deleteRow(table.rows.length - 1);
    }
  }
  const [data, setData] = useState('')
  const handleSubmit =(e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if(data === 'hola mundo'){
        setData('condicion IF')
    }
  }
  return (
    <div>
        <h1>{data}</h1>
      <form>
        <table id="tabla">
          <tr>
            <th>Label</th>
            <th>Balance</th>
          </tr>
          <tr>
            <td>
              <input type="text" onChange={(e)=>setData(e.target.value)} />
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
        </table>
        <button type="button" onClick={()=>agregarFila()}>
          Agregar fila
        </button>
        <button type="button" onClick={()=>eliminarFila()}>
          Eliminar fila
        </button>
        <button onClick={(e)=>handleSubmit(e)}></button>
      </form>
    </div>
  );
}

export default Home;
