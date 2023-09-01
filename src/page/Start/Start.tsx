import React, { ChangeEvent, useEffect, useState } from "react";
import "./Start.css";
import { FaAngleLeft, FaAngleRight, FaDoorOpen } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { getArrById } from "../../connections/server";

function Start() {
  type ApiData = {
    ID: number;
    ContactPerson: string;
    Company: string;
    FiscalYear: string;
    address: string;
    // ... otros campos si los tienes
  };
  const [itemnsIndex, setItemsIndex] = useState(0);
  const [items, setItems] = useState([
    {
      text: "Legal entities listed on a recognized local or international stock exchange.",
    },
    {
      text: "Legal entities owned by an international or multilateral organization or by a State.",
    },
    {
      text: "Legal entities that are owners or charterers of vessels registered exclusively under the international service of the Merchant Marine of the Republic of Panama.",
    },
    {
      text: "Legal entities that carry out commercial operations within the Republic of Panama.",
    },
  ]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCounter = parseInt(queryParams.get("a") || "0");
  const handleInfo = (index: number): void => {
    if (index + 1 === itemnsIndex) {
      setItemsIndex(0);
    } else {
      setItemsIndex(index + 1);
    }
    //setIsDisabled(!isDisabled);
  };

  const [data, setData] = useState<ApiData | null>(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [changeOccurred, setChangeOccurred] = useState(false); // Estado adicional para el seguimiento del cambio

  useEffect(() => {
    getArrById(initialCounter)
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        // Manejar el error si es necesario
      });
  }, []);

  const handleClick = () => {
    if (!changeOccurred) {
      setIsDisabled(!isDisabled);
      setChangeOccurred(true); // Marcamos que el cambio ya ha ocurrido
    }
  };

  return (
    <div>
      <div className="todo">
        
        <p className="pAB">
          Please confirm that you are preparing the financial statements (annual
          return) for:
        </p>
        {data ? (
          <p id="pao"> {data.Company}</p>
        ) : (
          <p id="pao">Loading data...</p>
        )}
        <p className="pAB">
          for the{" "}
          <abbr
            className="abbrA"
            title={
              "Most people choose a fiscal year ending on the calendar year(this is 31 December). We recommend to use the calendar year as your fiscal year. If you wish your fiscal year to end on another date, you mamy do so; however, you will have to use the same fiscal year for future years."
            }
          >
            fiscal year{" "}
          </abbr>{" "}
          ended in:
        </p>
        <input
          type="date"
          id="date"
          className="date" /*value="2022-12-31"  pattern="dd/mm/yyyy"*/
        ></input>
      </div>
      <div className="todo">
        <p className="pAB">
          Choose the{" "}
          <abbr
            className="abbrA"
            title={
              "You may use any currency in the preparation of your financial statements. We recommend that you use US$. However, whatever currency you decide to use, you will have to use the same currency in future years. If you hold assets or liabilities valued in several currencies, you must convert the value of these assets and liabilities to the currency used to prepare your finantial statements, so that all assets and liabilities show in the financial statements are expressed in the same currency. You need not use an oficial rate of exchange, but we recommend using any rate of exchange published on internet source on or close to the end of your fiscal year."
            }
          >
            Currency{" "}
          </abbr>{" "}
          the information will be added:
        </p>
        <select className="Name_of_list_box">
          <option> $ </option>
          <option> € </option>
          <option> ¥ </option>
        </select>
      </div>
      <div className="todo">
        <h1 className="TituloV">{"EXEMPTED ENTITIES"}</h1>
        <table className="tablita">
          <thead>
            <tr>
              <th>
                {
                  "Please mark appropriately. If your entity falls in any of the following categories. If this is the case, your company is exempted of preparing and presented this financial information (annual return); and you must go 'Next' to the 'Submit' page."
                }
              </th>
              <th>{"Mark the option applied"}</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td className="preg">{item.text}</td>
                <td className="preg">
                  <input
                    type="checkbox"
                    //disabled={!isDisabled}
                    //onChange={() => handleInfo(index)}
                    onClick={handleClick}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/*}<label>
          <input id="entra" type="checkbox" onChange={handleClick} />
          my entity falls on one of those categories
			</label>{*/}
      </div>
      <div className="botonesA">
		<Link className="submitL" to={"/GestorEntidades"}>
        <button className="saveforlaterA">
		<FaAngleLeft /*style={style}*/ />
		          Back
        </button>
		</Link>
        <Link
          className="LinkNext"
          to={isDisabled ? "/Reports?counter=1" : "/Tabla?a="+initialCounter}
        >
          <button className="nextA">
            Next
            <FaAngleRight /*style={style}*/ />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Start;
