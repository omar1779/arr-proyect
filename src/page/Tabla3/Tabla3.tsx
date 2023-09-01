import React, { useEffect } from "react";
import { useState } from "react";
import "./Tabla3.css";
import {
  FaAngleLeft,
  FaDoorOpen,
  FaAngleRight,
  FaMinusCircle,
  FaPlusCircle,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
//import { postData } from "../../connections/server";
function Tabla3() {
  const [count, setCount] = useState(3);
  const [count3, setCount3] = useState(3);
  const [count4, setCount4] = useState(3);
  const [count5, setCount5] = useState(3);
  const [subtotal, setSubtotal] = useState(0);
  const [subtotal2, setSubtotal2] = useState(0);
  const [subtotal3, setSubtotal3] = useState(0);
  const [subtotal4, setSubtotal4] = useState(0);
  const initialWords = [
    {
      text1: "Add ",
      bold1: "Value ",
      help1:
        "You may use either the 'purcharse value' or the 'market value' shown in your investment account statement, However, you will have to use the same 'Value' for future years.",
      text2: "of ",
      bold2: "Other Assets ",
      help2:
        "Other Assets include: loans and receivables due to you; intangible assets (such as intellectual property rights, concession rights); movable assets (such as planes, yacths); other assets (such as any other material assets no included before)",
      text3: "",
      bold3: "",
      help3: "",
      label: "Movable Assets",
      help4:
        "'Expenses' include: Operating or buiness expenses (such as rent; utilities; travles; maintenance and repairs; intrests on debts; etc). We have classified the expenses on (1)Operating and business expenses and (2) Other expenses. Feel free to apportion your expenses to either category as best suits your circunstances.",
      label2: "Value",
      help5:
        " You Need only include cash expenses. there is no need to include non-cash expenses, such as depreciation or amortization",
      label3: "Intangible Assets",
      label4: "Value",
    },
    {
      text1: "Add ",
      bold1: "Outstanding balance ",
      help1: "",
      text2: "of ",
      bold2: "Other Liabilities",
      help2:
        "'Other Liabilities' Include: short-term account payables (such a s commercial invoices due to providers); and other liabilities not included in the 'Debt and Liabilities' section.",
      text3: " you ought",
      bold3: "",
      label: "Accounts Payables",
      label2: "Balance",
      label3: "Other Liabilities",
      label4: "Balance",
    },
  ];
  const [words, setWords] = useState(initialWords);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCounter = parseInt(queryParams.get("counter") || "0");
  const initialCounterx = parseInt(queryParams.get("x") || "0");
  const initialCountery = parseInt(queryParams.get("y") || "0");
  const [counter2, setCounter2] = useState(initialCounter);
  const [counterx, setCounterx] = useState(initialCounterx);
  const [countery, setCountery] = useState(initialCountery);
  const [NumAjust, setNumAjust] = useState(0);

  function agregarFila() {
    setCount((prevCount) => prevCount + 1);
  }

  function eliminarFila() {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  }

  function agregarFila2() {
    setCount3((prevCount) => prevCount + 1);
  }

  function eliminarFila2() {
    if (count3 > 1) {
      setCount3((prevCount) => prevCount - 1);
    }
  }

  function agregarFila3() {
    setCount4((prevCount) => prevCount + 1);
  }

  function eliminarFila3() {
    if (count4 > 1) {
      setCount4((prevCount) => prevCount - 1);
    }
  }

  function agregarFila4() {
    setCount5((prevCount) => prevCount + 1);
  }

  function eliminarFila4() {
    if (count5 > 1) {
      setCount5((prevCount) => prevCount - 1);
    }
  }

  function AjustarNum() {
    if (counter2 === 3) {
      setNumAjust(0);
    }
    if (counter2 === 4) {
      setNumAjust(1);
    }
  }

  const [data, setData] = useState("");
  const calculateSubtotal = () => {
    let total = 0;
    const dineroInputs = document.querySelectorAll(
      ".dinero2"
    ) as NodeListOf<HTMLInputElement>;

    dineroInputs.forEach((input) => {
      total += parseFloat(input.value || "0");
    });

    setSubtotal(total);
  };

  const calculateSubtotal2 = () => {
    let total2 = 0;
    const dineroInputs = document.querySelectorAll(
      ".dinero3"
    ) as NodeListOf<HTMLInputElement>;

    dineroInputs.forEach((input) => {
      total2 += parseFloat(input.value || "0");
    });

    setSubtotal2(total2);
  };

  const calculateSubtotal3 = () => {
    let total3 = 0;
    const dineroInputs = document.querySelectorAll(
      ".dinero4"
    ) as NodeListOf<HTMLInputElement>;

    dineroInputs.forEach((input) => {
      total3 += parseFloat(input.value || "0");
    });

    setSubtotal3(total3);
  };

  const calculateSubtotal4 = () => {
    let total4 = 0;
    const dineroInputs = document.querySelectorAll(
      ".dinero5"
    ) as NodeListOf<HTMLInputElement>;

    dineroInputs.forEach((input) => {
      total4 += parseFloat(input.value || "0");
    });

    setSubtotal4(total4);
  };

  useEffect(() => {
    calculateSubtotal();
    calculateSubtotal2();
    calculateSubtotal3();
    calculateSubtotal4();
    AjustarNum();
    progress(counter2);
  }, [count, count3, count4, count5]);

  function progress(stepNum: number) {
    let p = stepNum * 16.67;
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

  const subtotalDisplay =
    subtotal === 0 ? "Subtotal" : `$${subtotal.toFixed(2)}`;

  const subtotalDisplay2 =
    subtotal2 === 0 ? "Subtotal" : `$${subtotal2.toFixed(2)}`;

  const subtotalDisplay3 =
    subtotal3 === 0 ? "Subtotal" : `$${subtotal3.toFixed(2)}`;

  const subtotalDisplay4 =
    subtotal4 === 0 ? "Subtotal" : `$${subtotal4.toFixed(2)}`;

  return (
    <div className="casita">
      <div className="container">
        <div className="progress">
          <div className="percent"></div>
        </div>
        <div className="steps">
          <div className="step" id="0"></div>
          <div className="step" id="1"></div>
          <div className="step" id="2"></div>
          <div className="step" id="3"></div>
          <div className="step" id="4"></div>
          <div className="step" id="5"></div>
          <div className="step" id="6"></div>
        </div>
      </div>
      <p className="pA">
        {words[NumAjust].text1}
        <abbr className="abbrA" title={words[NumAjust].help1}>
          {words[NumAjust].bold1}
        </abbr>
        {words[NumAjust].text2}
        <abbr className="abbrA" title={words[NumAjust].help2}>
          {words[NumAjust].bold2}
        </abbr>
        {words[NumAjust].text3}
        <abbr className="abbrA" title={words[NumAjust].help3}>
          {words[NumAjust].bold3}
        </abbr>
      </p>
      <div className="posicionaA">
        <div>
          <form>
            <table className="tabla1" id="tabla1">
              <thead>
                <tr>
                  <th className="num">N°</th>
                  <th>
                    <abbr className="abbrA" title={words[NumAjust].help4}>
                      {words[NumAjust].label}
                    </abbr>
                  </th>
                  <th>
                    <abbr className="abbrA" title={words[NumAjust].help5}>
                      {words[NumAjust].label2}
                    </abbr>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="text"
                      className="numero2"
                      value={1}
                      disabled={true}
                      onChange={(e) => setData(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      className="texto2"
                      type="text"
                      placeholder={words[NumAjust].label + " 1"}
                    />
                  </td>
                  <td>
                    <input
                      className="dinero2"
                      type="number"
                      placeholder="$$$$"
                      min={0}
                      onChange={() => calculateSubtotal()}
                    />
                  </td>
                </tr>
                {[...Array(count - 1)].map((_, index) => (
                  <tr key={index + 2}>
                    <td>
                      <input
                        type="text"
                        className="numero2"
                        value={index + 2}
                        disabled={true}
                      />
                    </td>
                    <td>
                      <input
                        className="texto2"
                        type="text"
                        placeholder={`${words[NumAjust].label} ${index + 2}`}
                      />
                    </td>
                    <td>
                      <input
                        className="dinero2"
                        type="number"
                        placeholder="$$$$"
                        min={0}
                        onChange={() => calculateSubtotal()}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="subtotal2">{subtotalDisplay}</p>

            <button
              className="Mas2"
              type="button"
              onClick={() => agregarFila()}
            >
              <FaPlusCircle />
            </button>
            <button
              className="Menos2"
              type="button"
              onClick={() => eliminarFila()}
            >
              <FaMinusCircle />
            </button>
          </form>
        </div>

        <div>
          <form>
            <table className="tabla1" id="tabla1">
              <thead>
                <tr>
                  <th className="num">N°</th>
                  <th>
                    <abbr className="abbrA" title={words[NumAjust].help4}>
                      {words[NumAjust].label3}
                    </abbr>
                  </th>
                  <th>
                    <abbr className="abbrA" title={words[NumAjust].help5}>
                      {words[NumAjust].label4}
                    </abbr>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="text"
                      className="numero2"
                      value={1}
                      disabled={true}
                      onChange={(e) => setData(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      className="texto2"
                      type="text"
                      placeholder={words[NumAjust].label3 + " 1"}
                    />
                  </td>
                  <td>
                    <input
                      className="dinero3"
                      type="number"
                      placeholder="$$$$"
                      min={0}
                      onChange={() => calculateSubtotal2()}
                    />
                  </td>
                </tr>
                {[...Array(count3 - 1)].map((_, index) => (
                  <tr key={index + 2}>
                    <td>
                      <input
                        type="text"
                        className="numero2"
                        value={index + 2}
                        disabled={true}
                      />
                    </td>
                    <td>
                      <input
                        className="texto2"
                        type="text"
                        placeholder={`${words[NumAjust].label3} ${index + 2}`}
                      />
                    </td>
                    <td>
                      <input
                        className="dinero3"
                        type="number"
                        placeholder="$$$$"
                        min={0}
                        onChange={() => calculateSubtotal2()}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="subtotal2">{subtotalDisplay2}</p>

            <button
              className="Mas2"
              type="button"
              onClick={() => agregarFila2()}
            >
              <FaPlusCircle />
            </button>
            <button
              className="Menos2"
              type="button"
              onClick={() => eliminarFila2()}
            >
              <FaMinusCircle />
            </button>
          </form>
        </div>
      </div>

      {counter2 === 3 ? (
        <div className="posicionaA">
          <div>
            <form>
              <table className="tabla1" id="tabla1">
                <thead>
                  <tr>
                    <th className="num">N°</th>
                    <th>
                      <abbr
                        className="abbrA"
                        title={
                          "You may type here the name or alias of your LOANS AND RECEIVABLES DUE TO YOU, for your convenience. this name will appear in your printed version of financial statements, but will not appear in the copy filed with us."
                        }
                      >
                        {"Loans And Receivables Due to you"}
                      </abbr>
                    </th>
                    <th>
                      <abbr className="abbrA" title={words[0].help5}>
                        {words[0].label2}
                      </abbr>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input
                        type="text"
                        className="numero2"
                        value={1}
                        disabled={true}
                        onChange={(e) => setData(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        className="texto2"
                        type="text"
                        placeholder={"Loans And Receivables" + " 1"}
                      />
                    </td>
                    <td>
                      <input
                        className="dinero4"
                        type="number"
                        placeholder="$$$$"
                        min={0}
                        onChange={() => calculateSubtotal3()}
                      />
                    </td>
                  </tr>
                  {[...Array(count4 - 1)].map((_, index) => (
                    <tr key={index + 2}>
                      <td>
                        <input
                          type="text"
                          className="numero2"
                          value={index + 2}
                          disabled={true}
                        />
                      </td>
                      <td>
                        <input
                          className="texto2"
                          type="text"
                          placeholder={`${"Loans And Receivables"} ${
                            index + 2
                          }`}
                        />
                      </td>
                      <td>
                        <input
                          className="dinero4"
                          type="number"
                          placeholder="$$$$"
                          min={0}
                          onChange={() => calculateSubtotal3()}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="subtotal2">{subtotalDisplay3}</p>

              <button
                className="Mas2"
                type="button"
                onClick={() => agregarFila3()}
              >
                <FaPlusCircle />
              </button>
              <button
                className="Menos2"
                type="button"
                onClick={() => eliminarFila3()}
              >
                <FaMinusCircle />
              </button>
            </form>
          </div>

          <div>
            <form>
              <table className="tabla1" id="tabla1">
                <thead>
                  <tr>
                    <th className="num">N°</th>
                    <th>
                      <abbr
                        className="abbrA"
                        title={
                          "You may type here the name or alias of your OTHER ASSETS, for your convenience. this name will appear in your printed version of financial statements, but will not appear in the copy filed with us."
                        }
                      >
                        {"Other Assets"}
                      </abbr>
                    </th>
                    <th>
                      <abbr className="abbrA" title={words[0].help5}>
                        {words[0].label2}
                      </abbr>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input
                        type="text"
                        className="numero2"
                        value={1}
                        disabled={true}
                        onChange={(e) => setData(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        className="texto2"
                        type="text"
                        placeholder={"Other Assets" + " 1"}
                      />
                    </td>
                    <td>
                      <input
                        className="dinero5"
                        type="number"
                        placeholder="$$$$"
                        min={0}
                        onChange={() => calculateSubtotal4()}
                      />
                    </td>
                  </tr>
                  {[...Array(count5 - 1)].map((_, index) => (
                    <tr key={index + 2}>
                      <td>
                        <input
                          type="text"
                          className="numero2"
                          value={index + 2}
                          disabled={true}
                        />
                      </td>
                      <td>
                        <input
                          className="texto2"
                          type="text"
                          placeholder={`${"Other Assets"} ${index + 2}`}
                        />
                      </td>
                      <td>
                        <input
                          className="dinero5"
                          type="number"
                          placeholder="$$$$"
                          min={0}
                          onChange={() => calculateSubtotal4()}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="subtotal2">{subtotalDisplay4}</p>

              <button
                className="Mas2"
                type="button"
                onClick={() => agregarFila4()}
              >
                <FaPlusCircle />
              </button>
              <button
                className="Menos2"
                type="button"
                onClick={() => eliminarFila4()}
              >
                <FaMinusCircle />
              </button>
            </form>
          </div>
        </div>
      ) : null}

      {/* <button onClick={(e) => handleSubmit(e)}>next</button> */}
      <div className="botonesB">
        <Link
          className="LinkNext"
          to={
            counter2 === 3
              ? "/Question"
              : counter2 === 4 && counterx === 0
              ? "/Question?counter=1"
              : counter2 === 4 && counterx === 1
              ? "/Question?counter=1&x=1"
              : "#"
          }
        >
          <button className="back" onClick={() => {}}>
            <FaAngleLeft /*style={style}*/ />
            Back
          </button>
        </Link>
        <button className="saveforlater">
          Save For Later
          <FaDoorOpen /*style={style}*/ />
        </button>
        <Link
          className="LinkNext"
          to={
            counter2 === 3
              ? "/Tabla?counter=4&x=1"
              : counter2 === 4 && countery === 1 && counterx === 0
              ? "/Tabla?counter=5&x=0&y=1"
              : counter2 === 4 && countery === 0 && counterx === 1
              ? "/Tabla?counter=5&x=1&y=0"
              : counter2 === 4 && countery === 1 && counterx === 1
              ? "/Tabla?counter=5&x=1&y=1"
              : counter2 === 4 && countery === 0 && counterx === 0
              ? "/Tabla?counter=5"
              : "#"
          }
        >
          <button className="next" /*onClick={() => {}}*/>
            Next
            <FaAngleRight /*style={style}*/ />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Tabla3;
