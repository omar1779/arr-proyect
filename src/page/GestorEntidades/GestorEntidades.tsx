import axios from "axios";
import React, { useEffect, useState } from "react";
import { getAll } from "../../connections/server";
import "./GestorEntidades.css";
import { LiaFileUploadSolid } from "react-icons/Lia";
import {
  BsWindowSplit,
  BsCheckSquare,
  BsFillShareFill,
  BsFillClockFill,
  BsFillCheckCircleFill,
  BsFillExclamationCircleFill,
} from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

function GestorEntidades() {
  type DataItem = {
    ID: number;
    ContactPerson: string;
    Status: number;
    // ... otros campos si los tienes
  };

  const [data, setData] = useState<DataItem[]>([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [selectedIds2, setSelectedIds2] = useState<number[]>([]);
  const [applyStyles, setApplyStyles] = useState(Boolean);
  const [showRegistration, setShowRegistration] = useState(0);
  const [Email, setEmail] = useState("");
  const [ids, setids] = useState(0);

  useEffect(() => {
    getAll()
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        // Manejar el error si es necesario
      });
  }, []);

  const handleCheckboxChange = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
      setApplyStyles(true);
      if (selectedIds.length === 0) {
        setApplyStyles(false);
      }
    }
  };

  // Estado para controlar la apertura de la ventana emergente
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Función para abrir la ventana emergente
  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  // Función para cerrar la ventana emergente cuando el formulario es enviado
  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsFormOpen(false);
    //pruebaemail();
    setEmail("");
  };

  function pruebaemail() {
    axios
      .post("http://localhost:3000/prueba/" + Email + "/code")
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <div className="BoxCentrar">
        <h1 className="palabras" id="palabras">
          {"Accounting Records"}
        </h1>
        <p className="historia">
          {
            "Listed below are the entities managed by ARIFA in which you appear as accounting records contact. If you are not the contact person for these entities, you have the option to delegate to the responsible individual by clicking "
          }
          <BsCheckSquare />
          {" and the share "}
          <BsFillShareFill />
          {
            " button. If you are the contact person for these entities, you may either submit "
          }
          <LiaFileUploadSolid />
          {" or prepare "}
          <BsWindowSplit />
          {" the financial statements for each entity."}
        </p>
        <table id="customers">
          <thead>
            <tr>
              <th></th>
              <th>Entity</th>

              <th
                className={
                  selectedIds.length === 0 ? "seleccionado" : "precionable"
                }
                onClick={
                  selectedIds.length > 0
                    ? () => {
                        handleOpenForm();
                      }
                    : () => {}
                }
              >
                <BsFillShareFill /> {"Share"}
              </th>
              <th>Options</th>
              <th>Status</th>
              {/* Agrega más encabezados según tus datos */}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr className="tabtest" key={item.ID}>
                <td>{item.ID}</td>
                <td className="tabtest1">{item.ContactPerson}</td>
                <td>
                  <div className="centrador">
                    <input
                      className="cuadrito"
                      type="checkbox"
                      checked={selectedIds.includes(item.ID)}
                      onChange={() => handleCheckboxChange(item.ID)}
                    />
                  </div>
                </td>
                <td>
                  <div className="espacio">
				  
                    <button className="opciones">
                      <abbr className="cursorabbr" title={"Upload File"}>
                        <LiaFileUploadSolid />
                      </abbr>
                    </button>
					
                    <Link className="nada" to={"/?a="+(item.ID)}>
                      <button className="opciones">
                        <abbr
                          className="cursorabbr"
                          title={"Prepare financial statement"}
                        >
                          <BsWindowSplit />
                        </abbr>
                      </button>
                    </Link>
                  </div>
                </td>
                <td>
                  {item.Status === 1 ? (
                    <>
                      <p className="medio" id="rojo">
                        <BsFillExclamationCircleFill />
                        <p className="colores">{"Pending"}</p>
                      </p>
                    </>
                  ) : item.Status === 2 ? (
                    <>
                      <p className="medio" id="verde">
                        <BsFillCheckCircleFill />
                        <p className="colores">{"Completed"}</p>
                      </p>
                    </>
                  ) : item.Status === 3 ? (
                    <>
                      <p className="medio">
                        <BsFillClockFill />
                        <p className="colores">{"In Process"}</p>
                      </p>
                    </>
                  ) : item.Status === 4 ? (
                    <>
                      <p className="medio" id="negro">
                        <BsFillShareFill />
                        <p className="colores"> {"Shared"}</p>
                      </p>
                    </>
                  ) : (
                    ""
                  )}
                </td>
                {/* Agrega más celdas según tus datos */}
              </tr>
            ))}
          </tbody>
        </table>
        {isFormOpen && (
          <div className="popup-overlay">
            <div className="popup-container">
              <form onSubmit={handleSubmitForm}>
                <h1 className="palabras">{"Sharing entity"}</h1>
                <p className="Credentials3" id="reenviar">
                  {
                    "You can delegate access to the person in charge of managing the entity by providing email addres below; this will allow them to oversee and complete the information of the entity."
                  }
                  <br />
                  <br />
                  {
                    "By clicking share and send you are authorizing the designated person to access and manage the entity information."
                  }
                </p>
                <input type="text" placeholder="Enter the email" className="Email"></input>
				<div className="Ok">
                <button className="Ok" type="submit">
                  Close
                </button>
				<button className="Ok" type="submit">
                  Send
                </button>
				</div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GestorEntidades;
