import React, { useEffect } from "react";
import { useState } from "react";
import "./Tabla2.css";
import {
  FaAngleLeft,
  FaDoorOpen,
  FaAngleRight,
  FaMinusCircle,
  FaPlusCircle,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
//import { postData } from "../../connections/server";
function Tabla2() {
  const [count, setCount] = useState(3);
  const [count3, setCount3] = useState(3);
  const [subtotal, setSubtotal] = useState(0);
  const [subtotal2, setSubtotal2] = useState(0);
  const initialWords = [
    {
      text1: "Add, an ",
      bold1: "Estimate ",
      help1:
        "If you do not have the exact amount of an expensive, you can use your udgment and include a reasonable 'Estimate' of your expenses.",
      text2: "of the total cash ",
      bold2: "Expenses ",
      help2:
        "You need only report 'Expenses' that are 'Material' is. You should use your reasonable judgement.",
      text3: "associated with ",
      bold3: "The assets and liabilities:",
      help3:
        "You need not include personal expenses. You should only consider including operating or business expenses that are relate or are associated to the assets and liabilities.",
      label: "Expenses Stream",
      help4:
        "'Expenses' include: Operating or buiness expenses (such as rent; utilities; travles; maintenance and repairs; intrests on debts; etc). We have classified the expenses on (1)Operating and business expenses and (2) Other expenses. Feel free to apportion your expenses to either category as best suits your circunstances.",
      label2: "Value",
      help5:
        " You Need only include cash expenses. there is no need to include non-cash expenses, such as depreciation or amortization",
    },
    {
      text1: "Add ",
      bold1: "Value ",
      text2: "of ",
      bold2: "Other Liabilities",
      text3: "",
      bold3: "",
      label: "Other Expenses",
      label2: "Value",
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

  useEffect(() => {
    calculateSubtotal();
    calculateSubtotal2();
    progress(counter2);
  }, [count, count3]);

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
        {words[0].text1}
        <abbr className="abbrA" title={words[0].help1}>
          {words[0].bold1}
        </abbr>
        {words[0].text2}
        <abbr className="abbrA" title={words[0].help2}>
          {words[0].bold2}
        </abbr>
        {words[0].text3}
        <abbr className="abbrA" title={words[0].help3}>
          {words[0].bold3}
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
                    <abbr className="abbrA" title={words[0].help4}>
                      {words[0].label}
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
                      placeholder={words[0].label + " 1"}
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
                        placeholder={`${words[0].label} ${index + 2}`}
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
                    <abbr className="abbrA" title={words[0].help4}>
                      {words[1].label}
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
                      placeholder={words[1].label + " 1"}
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
                        placeholder={`${words[1].label} ${index + 2}`}
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

      {/* <button onClick={(e) => handleSubmit(e)}>next</button> */}
      <div className="botonesB">
        <Link
          className="LinkNext"
          to={
            counter2 === 6 && counterx === 0 && countery === 0
              ? "/Tabla?counter=5"
              : counter2 === 6 && counterx === 1 && countery === 1
              ? "/Tabla?counter=5&x=1&y=1"
              : counter2 === 6 && counterx === 0 && countery === 1
              ? "/Tabla?counter=5&x=0&y=1"
              : counter2 === 6 && counterx === 1 && countery === 0
              ? "/Tabla?counter=5&x=1&y=0"
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
            counterx === 0 && countery === 0
              ? "/Reports"
              : counterx === 0 && countery === 1
              ? "/Reports?x=0&y=1"
              : counterx === 1 && countery === 0
              ? "/Reports?x=1&y=0"
              : counterx === 1 && countery === 1
              ? "/Reports?x=1&y=1"
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

export default Tabla2;
