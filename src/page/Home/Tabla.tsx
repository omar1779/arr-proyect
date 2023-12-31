import React, { ChangeEvent, useEffect } from "react";
import { useState } from "react";
import "./Tabla.css";
import {
  FaAngleLeft,
  FaDoorOpen,
  FaAngleRight,
  FaMinusCircle,
  FaPlusCircle,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
//import { postData } from "../../connections/server";
function Tabla() {
  const [count, setCount] = useState(3);
  const [subtotal, setSubtotal] = useState(0);
  const initialWords = [
    {
      text1: "Add cash balance of each of your",
      bold1: " Bank Accounts:",
      help1: "",
      text2: "",
      bold2: "",
      help2: "",
      text3: "",
      bold3: "",
      help3: "",
      label: "Bank",
      helpL:
        "You may type here the same name or alias of your BANKS, for your convenience. This name will appear in your printed version of your financial statements, but will not appear in the copy filed with us.",
      label2: "Balance",
      helpL2: "",
    },
    {
      text1: "Add ",
      bold1: "Value ",
      help1:
        "You may use either the 'purcharse value' or the 'market value' shown in your investment account statement, However, you will have to use the same 'Value' for future years.",
      text2: "of the ",
      bold2: "Securities ",
      help2:
        "Securities includes: stocks, bonds, mutual fund, money markets, and even cash shown in your investment account.",
      text3: "in your ",
      bold3: "Investment Accounts:",
      help3: "",
      label: "Broker",
      helpL:
        "You may type here the same name or alias of your BROKER, for your convenience. This name will appear in your printed version of your financial statements, but will not appear in the copy filed with us.",
      label2: "Value",
      helpL2: "",
    },
    {
      text1: "Add ",
      bold1: "Value ",
      help1:
        "You may use either the 'purchase or book value' or you may 'estimate' the value of these investments. You need not make an independent assessment. Your reasonable estimate of the investments is sufficient.",
      text2: "of ",
      bold2: "Others Investments,",
      help2:
        "'Other Investments' include: share of stocks, bonds, funds, private equity participations, and participations in operating companies and other businesses, wich are own directly and are NOT included in you investment account statements.",
      text3: " not included in your investment accounts:",
      bold3: "",
      help3: "",
      label: "OTHERS INVESTMENTS",
      helpL:
        "You may type here the same name or alias of your OTHERS INVESTMENTS, for your convenience. This name will appear in your printed version of your financial statements, but will not appear in the copy filed with us.",
      label2: "Value",
      helpL2: "",
    },
    {
      text1: "Add ",
      bold1: "Value ",
      help1:
        "You may use either the 'purchase or book value' or you may 'estimate' the 'value' of these real estate properties. You need not make an independent assessment. Your reasonable estimate of these properties is sufficient.",
      text2: "of ",
      bold2: " Real Estate Properties:",
      help2:
        "'Real Estate Properties' includes: lands,  houses, apartments, buldings, improvements",
      text3: "",
      bold3: "",
      help3: "",
      label: "REAL ESTATE PROPERTIES",
      helpL:
        "You may type here the same name or alias of your PROPERTY, for your convenience. This name will appear in your printed version of your financial statements, but will not appear in the copy filed with us.",
      label2: "Value",
      helpL2: "",
    },
    {
      text1: "Add value of ",
      bold1: "Outstandings Debts And Liabilities ",
      help1:
        "'Debts and liabilities' include: the outstanding balance, as of the end of your fiscal year, of all loans, debts, overdrafts, and other indebtedness that you ought",
      text2: "you ought:",
      bold2: "",
      help2: "",
      text3: "",
      bold3: "",
      help3: "",
      label: "Debt/loan",
      helpL:
        "You may type here the same name or alias of your DEBT/LOAN, for your convenience. This name will appear in your printed version of your financial statements, but will not appear in the copy filed with us.",
      label2: "Value",
      helpL2: "",
    },
    {
      text1: "Add an ",
      bold1: "Estimate ",
      help1:
        "If you do not have he exac amount of a revenue, you can use your judgement and include a reasonable 'estimate' of your revenues'",
      text2: "of the total ",
      bold2: "Revenues Produced By The Assets:",
      help2:
        "You need not include personsal revenues (such as salary, pensions). You should only consider including revenue earned by the entity that relates or is generated by the assets",
      text3: "",
      bold3: "",
      help3: "",
      label: "REVENUE STREAM",
      helpL:
        "You may type here the same name or alias of your REVENUE STREAM, for your convenience. This name will appear in your printed version of your financial statements, but will not appear in the copy filed with us.",
      label2: "Estimate",
      helpL2:
        "You need only include cash revenues. There is no need to include revenues that has accrued but for which no cash has been received.",
    },
  ];
  const [words, setWords] = useState(initialWords);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCounter = parseInt(queryParams.get("counter") || "0");
  const initialCounterx = parseInt(queryParams.get("x") || "0");
  const initialCountery = parseInt(queryParams.get("y") || "0");
  const initialCountera = parseInt(queryParams.get("a") || "0");
  const [counter2, setCounter2] = useState(initialCounter);
  const [counterx, setCounterx] = useState(initialCounterx);
  const [countery, setCountery] = useState(initialCountery);

  interface PostState {
    IdAnnualAccoutingRecords: number;
    Label: string;
    Balance: number | null;
    IDTypeOfLabel: number;
    OrderBy: number;
  }
  const [post, setPost] = useState<PostState[]>([]); // Indica que post es un arreglo de PostState

  const handleInput = (event: ChangeEvent<HTMLInputElement>, index: number) => {
	console.log(event.target.value)
    const { name, value } = event.target;
    setPost((prevPost) =>
      prevPost.map((row, i) => (i === index ? { ...row, [name]: value } : row))
    );
  };

  function handleSubmit() {
    console.log(
      post);
   
  }

  function agregarFila() {
    setCount((prevCount) => prevCount + 1);
  }

  function eliminarFila() {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  }

  const clearInputs = () => {
    console.log("Clearing inputs...");
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

  const resetCount = () => {
    setCount(3);
  };

  const calculateSubtotal = () => {
    let total = 0;
    const dineroInputs = document.querySelectorAll(
      ".dinero"
    ) as NodeListOf<HTMLInputElement>;

    dineroInputs.forEach((input) => {
      const parsedValue = parseFloat(input.value);
      if (!isNaN(parsedValue)) {
        total += parsedValue;
      }
    });

    setSubtotal(total);
  };

  useEffect(() => {
    calculateSubtotal();
    progress(counter2);
  }, [count, counter2]);

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
        {counter2}
        {count}
        {}
      </div>

      <p className="pA">
        {words[counter2].text1}
        <abbr className="abbrA" title={words[counter2].help1}>
          {words[counter2].bold1}
        </abbr>
        {words[counter2].text2}
        <abbr className="abbrA" title={words[counter2].help2}>
          {words[counter2].bold2}
        </abbr>
        {words[counter2].text3}
        <abbr className="abbrA" title={words[counter2].help3}>
          {words[counter2].bold3}
        </abbr>
      </p>
      <form onSubmit={handleSubmit}>
        <table className="tabla1" id="tabla1">
          <thead>
            <tr>
              <th className="num">N°</th>
              <th>
                <abbr className="abbrA" title={words[counter2].helpL}>
                  {words[counter2].label}
                </abbr>
              </th>
              <th>
                <abbr className="abbrA" title={words[counter2].helpL2}>
                  {words[counter2].label2}
                </abbr>
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: count }).map((_, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    className="numero"
                    value={index + 1}
                    disabled={true}
                  />
                </td>
                <input
                  className="texto"
                  type="text"
                  name="Label"
                  onChange={(event) => handleInput(event, index)}
                  placeholder={`${words[counter2].label} ${index + 1}`}
                />
                <td>
                  <input
                    className="dinero"
                    type="number"
                    placeholder="$$$$"
                    min={0}
                    name="Balance"
                    onChange={(event) => {
                      handleInput(event, index);
                      calculateSubtotal();
                    }}
                  />
                </td>
              </tr>
            ))}
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

      {/* <button onClick={(e) => handleSubmit(e)}>next</button> */}
      <div className="botonesB">
        <Link
          className="LinkNext"
          to={
            counter2 === 0
              ? "/?a=" + initialCountera
              : counter2 === 4 && counterx === 0
              ? "/Question"
              : counter2 === 4 && counterx === 1
              ? "/Tabla3?counter=3"
              : counter2 === 5 && countery === 0 && counterx === 0
              ? "/Question?counter=1"
              : counter2 === 5 && countery === 1 && counterx === 1
              ? "/Tabla3?counter=4&x=1&y=1"
              : counter2 === 5 && countery === 0 && counterx === 1
              ? "/Question?counter=1&x=1&y=0"
              : counter2 === 5 && countery === 1 && counterx === 0
              ? "/Tabla3?counter=4&x=0&y=1"
              : "#"
          }
        >
          <button
            className="back"
            onClick={() => {
              handleDecrement();
              resetCount();
            }}
          >
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
              ? "/Question"
              : counter2 === 4 && counterx === 0
              ? "/Question?counter=1"
              : counter2 === 4 && counterx === 1
              ? "/Question?counter=1&x=1"
              : counter2 === 5 && counterx === 0 && countery === 0
              ? "/Tabla2?counter=6"
              : counter2 === 5 && counterx === 1 && countery === 1
              ? "/Tabla2?counter=6&x=1&y=1"
              : counter2 === 5 && counterx === 0 && countery === 1
              ? "/Tabla2?counter=6&x=0&y=1"
              : counter2 === 5 && counterx === 1 && countery === 0
              ? "/Tabla2?counter=6&x=1&y=0"
              : "#"
          }
        >
          <button
            className="next"
            onClick={() => {
              console.log(post);
              handleSubmit();
              handleIncrement();
              resetCount();
            }}
          >
            Next
            <FaAngleRight /*style={style}*/ />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Tabla;
