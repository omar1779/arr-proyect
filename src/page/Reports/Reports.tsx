import React, { useState } from "react";
import "./Reports.css";
import {
  FaPen,
  FaAngleLeft,
  FaDoorOpen,
  FaPrint,
  FaAngleRight,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Reports() {
  const [itemnsIndex, setItemsIndex] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCounter = parseInt(queryParams.get("counter") || "0");
  const initialCounterx = parseInt(queryParams.get("x") || "0");
  const initialCountery = parseInt(queryParams.get("y") || "0");
  const [counter2, setCounter2] = useState(initialCounter);
  const [counterx, setCounterx] = useState(initialCounterx);
  const [countery, setCountery] = useState(initialCountery);
  const [items, setItems] = useState([
    {
      text: "Cash and cash equivalents",
    },
    {
      text: "Loans and receivables",
    },
    {
      text: "Investments and other financial assets",
    },
    {
      text: "Real estate properties",
    },
    {
      text: "Intangible assets",
    },
    {
      text: "Other assets",
    },
  ]);
  const [itemsL, setItemsL] = useState([
    {
      text: "Accounts payable",
    },
    {
      text: "Long-term debts",
    },
    {
      text: "Investments and other financial assets",
    },
  ]);

  const [itemsSE, setItemsSE] = useState([
    {
      text: "Total liabilities and shareholder’s equity",
    },
  ]);
  const [itemsRE, setItemsRE] = useState([
    {
      text: "Revenues",
    },
    {
      text: "Cost of Sales",
    },
  ]);
  const [itemsEX, setItemsEX] = useState([
    {
      text: "Operating expenses ",
    },
    {
      text: "Other expenses",
    },
    {
      text: "Income tax expenses",
    },
  ]);

  const handleInfo = (index: number): void => {
    if (index + 1 === itemnsIndex) {
      setItemsIndex(0);
    } else {
      setItemsIndex(index + 1);
    }
  };

  const handleClick = () => {
    setIsDisabled(!isDisabled);
  };


  // Estado para controlar la apertura de la ventana emergente
  const [isFormOpen, setIsFormOpen] = useState(false);
  // Estado para almacenar los datos del formulario
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [City, setCity] = useState("");

  // Función para abrir la ventana emergente
  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  // Función para cerrar la ventana emergente cuando el formulario es enviado
  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsFormOpen(false);
  };

  return (
    <div>
      {counter2 === 0 ? (
        <div className="Principal">
          <div className="Balance">
            <p className="Titulo">BALANCE SHEET</p>
            <p className="subtitulo">For [Company Name]</p>
            <p className="subtitulo">(Fiscal Year Ended [_____________] )</p>
            <div className="tituloin">
              <div className="capsulaA">
                <p className="Titulob">ASSETS</p>
                <table className="tablitaB">
                  <tbody>
                    {items.map((item, index) => (
                      <tr key={index}>
                        <td className="preg1">{item.text}</td>
                        <td className="preg2">
                          <input
                            className="cashb"
                            type="text"
                            placeholder="$$$$"
                            disabled
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="capsulac">
                <p className="TituloC">LIABILITIES</p>
                <table className="tablitaB">
                  <tbody>
                    {itemsL.map((itemsL, index) => (
                      <tr key={index}>
                        <td className="preg1">{itemsL.text}</td>
                        <td className="preg2">
                          <input
                            className="cashb"
                            type="text"
                            placeholder="$$$$"
                            disabled
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="TituloD">SHAREHOLDERS EQUITY</p>
                <table className="tablitaB">
                  <tbody>
                    {itemsSE.map((itemsSE, index) => (
                      <tr key={index}>
                        <td className="preg1">{itemsSE.text}</td>
                        <td className="preg2">
                          <input
                            className="cashb"
                            type="text"
                            placeholder="$$$$"
                            disabled
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="Income">
            <p className="Titulo">INCOME STATEMENT</p>
            <p className="subtitulo">For [Company Name]</p>
            <p className="subtitulo">(Fiscal Year Ended [_____________] )</p>
            <div className="tituloinB">
              <p className="Tituloe">REVENUES</p>
              <table className="tablitaC">
                <tbody>
                  {itemsRE.map((itemsRE, index) => (
                    <tr key={index}>
                      <td className="preg1">{itemsRE.text}</td>
                      <td className="preg2">
                        <input
                          className="cashb"
                          type="text"
                          placeholder="$$$$"
                          disabled
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <p className="Tituloe">EXPENSES</p>
              <table className="tablitaC">
                <tbody>
                  {itemsEX.map((itemsEX, index) => (
                    <tr key={index}>
                      <td className="preg1">{itemsEX.text}</td>
                      <td className="preg2">
                        <input
                          className="cashb"
                          type="text"
                          placeholder="$$$$"
                          disabled
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : null}
      <div className="todoB">
        <span className="spanF">
          I, Hereby, certify that either I have the authority, or have been
          authorized by this entity, (1) to complete the financial information
          in this annual return; (2) to submit this annual return to the
          registered agent; and (3) to give instruction to the registered agent
          regarding this annual return. I also certify all the information is to
          the best of my knowledge true and complete. I consent and agree with
          the registered agent to be the contact person regarding this entity
          for all further updates and communications regarding the annual
          returns of this entity, using the email provided below, until you are
          instructed otherwise in writing by this entity or by me. The entity
          and I consent and agree with the registered agent to be bound by the
          terms and conditions, from time to time in place, of the registered
          agent for providing services to this entity.
        </span>
      </div>

      <div className="texth">
        <label className="Insertar" htmlFor="miInput">
          Contact Person’s Name:{" "}
        </label>
        <input
          className="nombreE"
          type="text"
          id="miInput"
          placeholder="[bring name from system]"
          disabled
        />
      </div>

      <div className="texth">
        <label className="Insertar" htmlFor="miInput2">
          Contact Person’s Email:{" "}
        </label>
        <input
          className="nombreE"
          type="text"
          id="miInput2"
          placeholder="[bring Email from system]"
          disabled
        />
        <button className="BPen">
          <FaPen />
        </button>
      </div>

      <div className="textha">
        <label className="Insertar" htmlFor="miInput3">
          Addres of Accounting Records:{" "}
        </label>
        <input
          className="nombreE"
          type="text"
          id="miInput3"
          placeholder="[bring Addres from system]"
          disabled
        />
        <button className="BPen"  onClick={handleOpenForm}>
          <FaPen />
        </button>
      </div>

	  {isFormOpen && (
        <div className="popup-overlay">
          <div className="popup-container">
		  
            <form onSubmit={handleSubmitForm}>
			<div className="textform">
              <label className="Insertar" htmlFor="addressInput">Address Line 1:</label>
              <input
                type="text"
                id="addressInput"
				className="addressInput"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
			  </div>
			  <div className="textform">
			  <label className="Insertar" htmlFor="addressInput2">Address Line 2:</label>
              <input
                type="text"
                id="addressInput2"
				className="addressInput"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
                required
              />
			  </div>

			  <div className="textform">
			  <label className="Insertar" htmlFor="City">City:</label>
              <input
                type="text"
                id="City"
				className="City"
                value={City}
                onChange={(e) => setCity(e.target.value)}
                required
              />
			  </div>

              <button type="submit">Save</button>
            </form>
          </div>
        </div>
      )}

      <div className="botonesC">
        <Link
          className="LinkNext"
          to={
            counter2 === 0 && counterx === 0 && countery === 0
              ? "/Tabla2?counter=6"
              : counter2 === 0 && counterx === 0 && countery === 1
              ? "/Tabla2?counter=6&x=0&y=1"
			  : counter2 === 0 && counterx === 1 && countery === 0
              ? "/Tabla2?counter=6&x=1&y=0"
			  : counter2 === 0 && counterx === 1 && countery === 1
              ? "/Tabla2?counter=6&x=1&y=1"
              : counter2 === 1
              ? "/"
              : "#"
          }
        >
          <button className="back">
            <div className="pruebaback">
              <FaAngleLeft /*style={style}*/ />
              Back
            </div>
          </button>
        </Link>
        <button className="saveforlater">
          <div className="pruebaback">
            Save For Later
            <FaDoorOpen className="iconosv" /*style={style}*/ />
          </div>
        </button>
        <button className="print">
          <div className="pruebaback">
            Print
            <FaPrint className="iconosc" /*style={style}*/ />
          </div>
        </button>
		<Link className="submitL" to={"/GestorEntidades"}>
        <button className="submit">
          <div className="pruebaback">
            Submit
            <FaAngleRight className="iconosd" /*style={style}*/ />
          </div>
        </button>
		</Link>
      </div>
    </div>
  );
}

export default Reports;
