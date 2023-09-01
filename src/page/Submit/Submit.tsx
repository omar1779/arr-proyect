import React, { useState, ChangeEvent, useEffect } from "react";
import "./Submit.css";
import { FaMinusCircle, FaPen, FaPlusCircle } from "react-icons/fa";
import axios from "axios";
import { count } from "console";

function Submit() {
  const initialWords = [
    {
      text1: "Add cash balance of each your",
      bold1: " bank accounts:",
      text2: "",
      bold2: "",
      text3: "",
      bold3: "",
    },
    {
      text1: "Add ",
      bold1: "value ",
      text2: "of the ",
      bold2: "Securitie ",
      text3: "in your ",
      bold3: " Investment accounts:",
    },
    {
      text1: "Add ",
      bold1: "value ",
      text2: "of ",
      bold2: "OTHERS INVESTMENTS,",
      text3: " not included in your investment accounts:",
      bold3: "",
    },
    {
      text1: "Add ",
      bold1: "value ",
      text2: "of ",
      bold2: " REAL STATE PROPERTIES:",
      text3: "",
      bold3: "",
    },
  ];
  const [words, setWords] = useState(initialWords);
  const [counter2, setCounter2] = useState(0);

  function progress(stepNum: number) {
    let p = stepNum * 14.27;
    const progressElement = document.getElementsByClassName(
      "percent"
    )[0] as HTMLElement;
    progressElement.style.width = `${p}%`;
    let els = document.getElementsByClassName("step");
    Array.prototype.forEach.call(els, (e) => {
      if (e.id === stepNum.toString()) {
        e.classList.add("selected");
        e.classList.remove("completed");
      } else if (e.id < stepNum) {
        e.classList.add("completed");
        e.classList.remove("selected");
      } else {
        e.classList.remove("selected", "completed");
      }
    });
  }

  // Estado para controlar la apertura de la ventana emergente
  const [isFormOpen, setIsFormOpen] = useState(false);
  // Estado para almacenar los datos del formulario
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [City, setCity] = useState("");
  const [subtotal, setSubtotal] = useState(0);
  const [count, setCount] = useState(3);

  // Función para abrir la ventana emergente
  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  // Función para cerrar la ventana emergente cuando el formulario es enviado
  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsFormOpen(false);
  };

  const [post, setPost] = useState({
    ContactPerson: "",
    Company: "",
    FiscalYear: "2022-12-30",
    address: "San Francisco",
    Status: 1,
  });

  const [textInputs, setTextInputs] = useState([
    {
      text: "",
      balance: 0,
      FiscalYear: "2022-12-30",
      address: "Santo Domingo",
      Status: 1,
    },
    // Puedes agregar más objetos para representar filas adicionales
  ]);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    axios
      .post("http://localhost:3000/Annual_Accouting_Records", post)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }

  function pruebaemail() {
    axios
      .post("http://localhost:3000/prueba/aeom911@live.com/code")
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }

  const handleTextInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedTextInputs = [...textInputs];
    updatedTextInputs[index].text = e.target.value;
    setTextInputs(updatedTextInputs);
  };

  const handleDineroInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedTextInputs = [...textInputs];
    updatedTextInputs[index].balance = parseFloat(e.target.value) || 0;
    setTextInputs(updatedTextInputs);
  };

  function agregarFila() {
    setCount((prevCount) => prevCount + 1);
  }

  function eliminarFila() {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  }

  const clearInputs = () => {
    const inputElements = document.querySelectorAll(
      "input.texto, input.dinero"
    ) as NodeListOf<HTMLInputElement>;

    inputElements.forEach((input) => {
      input.value = ""; // Set the input value to empty string to clear it
    });

    setSubtotal(0); // Reset the subtotal to zero
  };

  const handleIncrement = () => {
    setCounter2((prevCounter) => (prevCounter + 1) % words.length);
    clearInputs();
    progress((counter2 + 1) % words.length);
  };

  const handleDecrement = () => {
    setCounter2(
      (prevCounter) => (prevCounter - 1 + words.length) % words.length
    );
    clearInputs();
    progress((counter2 - 1 + words.length) % words.length);
  };

  const calculateSubtotal = () => {
    let total = 0;
    textInputs.forEach((row) => {
      total += row.balance;
    });
    setSubtotal(total);
  };

  const subtotalDisplay =
    subtotal === 0 ? "Subtotal" : `$${subtotal.toFixed(2)}`;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Contact Person:{" "}
        <input
          type="text"
          value={post.ContactPerson}
          onChange={handleInput}
          name="ContactPerson"
        />
        Company:{" "}
        <input
          type="text"
          value={post.Company}
          onChange={handleInput}
          name="Company"
        />
        <button type="submit">Submit</button>
      </form>

      <form>
        <table className="tabla1" id="tabla1">
          <thead>
            <tr>
              <th className="num">N°</th>
              <th>{"texto"}</th>
              <th>{"Dinero"}</th>
            </tr>
          </thead>
          <tbody>
            {textInputs.map((row, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    className="numero"
                    value={1}
                    disabled={true}
                  />
                </td>
                <td>
                  <input
                    className="texto"
                    type="text"
                    value={row.text}
                    onChange={(e) => handleTextInputChange(e, index)}
                  />
                </td>
                <td>
                  <input
                    className="dinero"
                    type="number"
                    value={row.balance}
                    placeholder="$$$$"
                    onChange={(e) => {
                      calculateSubtotal();
                      handleDineroInputChange(e, index);
                    }}
                  />
                </td>
              </tr>
            ))}
            {[...Array(count - 1)].map((_, index) => (
              <tr key={index + 2}>
                <td>
                  <input
                    type="text"
                    className="numero"
                    value={index + 2}
                    disabled={true}
                  />
                </td>
                <td>
                  <input className="texto" type="text" />
                </td>
                <td>
                  <input
                    className="dinero"
                    type="number"
                    placeholder="$$$$"
                    onChange={() => calculateSubtotal()}
                  />
                </td>
              </tr>
            ))}{" "}
          </tbody>
        </table>
        <p className="subtotal">{subtotalDisplay}</p>
        <div className="MasYMenos">
          <button className="Mas" type="button" onClick={() => agregarFila()}>
            <FaPlusCircle />
          </button>
          <button
            className="Menos"
            type="button"
            onClick={() => eliminarFila()}
          >
            <FaMinusCircle />
          </button>
        </div>
      </form>
	  <button onClick={pruebaemail}>pruebaemailA</button>
    </div>
  );
}

export default Submit;
